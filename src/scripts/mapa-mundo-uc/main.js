import * as THREE from 'three';
import { gsap } from 'gsap';
import { geoContains } from 'd3-geo';
import { universities } from './universities.js';
import { COUNTRIES, COUNTRY_MAP, OUR_ISO } from './countryData.js';

// ── Shaders ───────────────────────────────────────────────────────────────────

const atmosphereVS = `
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    vViewDir = normalize(-mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`;
const atmosphereFS = `
  uniform vec3  glowColor;
  uniform float glowPower;
  uniform float opacity;
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    float rim = 1.0 - max(dot(vNormal, vViewDir), 0.0);
    rim = pow(rim, glowPower);
    gl_FragColor = vec4(glowColor * rim, rim * opacity);
  }
`;

const globeVS = `
  varying vec3 vNormal;
  varying vec2 vUv;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vUv     = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const globeFS = `
  uniform vec3      deepColor;
  uniform vec3      midColor;
  uniform vec3      edgeColor;
  uniform vec3      landColor;
  uniform vec3      landBright;
  uniform vec3      landDark;
  uniform sampler2D landMask;
  uniform sampler2D highlightMask;
  varying vec3 vNormal;
  varying vec2 vUv;

  void main() {
    vec3  lightDir = normalize(vec3(0.45, 0.85, 0.75));
    float NdotL    = dot(vNormal, lightDir);
    float daySide  = smoothstep(-0.06, 0.22, NdotL);
    float fullDay  = smoothstep(0.22,  0.70, NdotL);
    float NdotV    = max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0);
    float rim      = 1.0 - NdotV;
    float rimPow3  = pow(rim, 3.5);
    float rimPow2  = pow(rim, 2.2);

    vec3 ocean = deepColor;
    ocean = mix(ocean, midColor, fullDay * 0.18);
    ocean += edgeColor * rimPow3 * 0.60;

    vec3 land = mix(landDark, landColor, daySide);
    land      = mix(land, landBright, fullDay * 0.72);
    land     *= (1.0 - rimPow2 * 0.70);
    vec3  halfDir = normalize(lightDir + vec3(0.0, 0.0, 1.0));
    float spec    = pow(max(dot(vNormal, halfDir), 0.0), 38.0) * daySide;
    land += vec3(0.38, 0.28, 0.52) * spec;

    float isLand      = texture2D(landMask,      vUv).r;
    float isHighlight = texture2D(highlightMask, vUv).r;

    vec3 color = mix(ocean, land, isLand);
    float hl = isHighlight * isLand;
    vec3  hlColor = vec3(0.82, 0.38, 1.0);
    color = mix(color, hlColor, hl * 0.92);
    color += hlColor * hl * 0.30;
    gl_FragColor = vec4(color, 1.0);
  }
`;

const ringVS = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const ringFS = `
  uniform vec3  ringColor;
  uniform float time;
  varying vec2 vUv;
  void main() {
    float dist = abs(vUv.y - 0.5) * 2.0;
    float glow = pow(1.0 - dist, 4.5);
    float sweep = sin(vUv.x * 6.2831 * 4.0 + time * 2.5) * 0.5 + 0.5;
    glow *= (0.75 + sweep * 0.25);
    gl_FragColor = vec4(ringColor, glow * 0.92);
  }
`;

// ── Renderer / Scene / Camera ─────────────────────────────────────────────────

const canvas   = document.getElementById('globe-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
renderer.toneMapping         = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.3;

const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);

function getResponsiveCamera() {
  const aspect = window.innerWidth / window.innerHeight;
  if (aspect < 0.60) return { z: 11.5, y: 0 };
  if (aspect < 0.85) return { z: 8.5,  y: 0 };
  if (aspect < 1.20) return { z: 7.5,  y: 0 };
  return                    { z: 6.5,  y: 0 };
}

function computeGlobeCenterX() {
  const VW = window.innerWidth;
  const { z: cz } = getResponsiveCamera();
  const worldHalfW   = cz * Math.tan(22.5 * Math.PI / 180);
  const screenOffset = window.innerWidth >= 900 ? 200 : 0;
  return -(screenOffset * (2 * worldHalfW) / VW);
}

function applyResponsiveCamera() {
  const { z, y } = getResponsiveCamera();
  const x = computeGlobeCenterX();
  const desktopOffset = window.innerWidth >= 900 ? 0.7 : 0;
  camera.position.set(x + desktopOffset, y, z);
  camera.lookAt(0, 0, 0);
}
applyResponsiveCamera();

// ── Stars ─────────────────────────────────────────────────────────────────────

function createStars() {
  const count = 3500;
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const t = Math.random() * Math.PI * 2;
    const p = Math.acos(2 * Math.random() - 1);
    const r = 28 + Math.random() * 32;
    pos[i*3]   = r * Math.sin(p) * Math.cos(t);
    pos[i*3+1] = r * Math.sin(p) * Math.sin(t);
    pos[i*3+2] = r * Math.cos(p);
    if (Math.random() < 0.65) {
      col[i*3] = 0.9 + Math.random()*0.1; col[i*3+1] = 0.9 + Math.random()*0.1; col[i*3+2] = 1.0;
    } else {
      col[i*3] = 0.6 + Math.random()*0.4; col[i*3+1] = 0.3 + Math.random()*0.4; col[i*3+2] = 1.0;
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));
  return new THREE.Points(geo, new THREE.PointsMaterial({
    size: 0.10, vertexColors: true, transparent: true, opacity: 0.90,
  }));
}
const stars = createStars();
scene.add(stars);

// ── Nebula background ─────────────────────────────────────────────────────────

function makeNebulaTexture() {
  const W = 1024, H = 512;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#000000'; ctx.fillRect(0, 0, W, H);
  const rn = ctx.createRadialGradient(W*0.82, H*0.55, 0, W*0.82, H*0.55, W*0.28);
  rn.addColorStop(0, 'rgba(16,12,22,0.3)'); rn.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = rn; ctx.fillRect(0, 0, W, H);
  const ln = ctx.createRadialGradient(W*0.18, H*0.55, 0, W*0.18, H*0.55, W*0.28);
  ln.addColorStop(0, 'rgba(23,14,36,0.3)'); ln.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = ln; ctx.fillRect(0, 0, W, H);
  for (let i = 0; i < 6; i++) {
    const x = Math.random()*W, y = Math.random()*H, r = 30 + Math.random()*90;
    const sg = ctx.createRadialGradient(x,y,0,x,y,r);
    sg.addColorStop(0, `rgba(${60+Math.random()*60},${Math.random()*10},${130+Math.random()*80},0.18)`);
    sg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = sg; ctx.fillRect(0,0,W,H);
  }
  const ang = -25 * Math.PI / 180, cx = W/2, cy = H/2, lineHalf = W*0.26;
  // for (let i = 0; i < 10; i++) {
  //   const t = (i/9 - 0.5)*2*lineHalf;
  //   const edgeFade = 1 - Math.pow(Math.abs(t)/lineHalf, 1.8);
  //   const bx = cx + t*Math.cos(ang), by = cy + t*Math.sin(ang), br = H*0.065;
  //   const bg = ctx.createRadialGradient(bx,by,0,bx,by,br);
  //   bg.addColorStop(0, `rgba(120,18,210,${(0.28*edgeFade).toFixed(2)})`);
  //   bg.addColorStop(1, 'rgba(0,0,0,0)');
  //   ctx.fillStyle = bg; ctx.fillRect(0,0,W,H);
  // }
  const sparkHalf = W*0.18;
  // for (let i = 0; i < 9; i++) {
  //   const t = (i/8 - 0.5)*2*sparkHalf;
  //   const edgeFade = 1 - Math.pow(Math.abs(t)/sparkHalf, 2);
  //   const sx = cx + t*Math.cos(ang) + (Math.random()-0.5)*6;
  //   const sy = cy + t*Math.sin(ang) + (Math.random()-0.5)*6;
  //   const sr = 2 + Math.random()*8;
  //   const sp = ctx.createRadialGradient(sx,sy,0,sx,sy,sr);
  //   sp.addColorStop(0, `rgba(200,55,255,${(0.60*edgeFade).toFixed(2)})`);
  //   sp.addColorStop(1, 'rgba(0,0,0,0)');
  //   ctx.fillStyle = sp; ctx.fillRect(0,0,W,H);
  // }
  return new THREE.CanvasTexture(c);
}

const bgPlane = new THREE.Mesh(
  new THREE.PlaneGeometry(72, 42),
  new THREE.MeshBasicMaterial({ map: makeNebulaTexture(), transparent: true, depthWrite: false })
);
bgPlane.position.z = -18;
scene.add(bgPlane);

// ── Globe ─────────────────────────────────────────────────────────────────────

const GLOBE_R    = 2.0;
const globeGroup = new THREE.Group();
scene.add(globeGroup);

const emptyTex = new THREE.DataTexture(new Uint8Array([0,0,0,255]), 1, 1);
emptyTex.needsUpdate = true;

const hlCanvas = document.createElement('canvas');
hlCanvas.width = 2048; hlCanvas.height = 1024;
const hlCtx = hlCanvas.getContext('2d');
const hlTex = new THREE.CanvasTexture(hlCanvas);

const globeMaterial = new THREE.ShaderMaterial({
  vertexShader: globeVS, fragmentShader: globeFS,
  uniforms: {
    deepColor:     { value: new THREE.Color(0x1a3a70) },
    midColor:      { value: new THREE.Color(0x2858a0) },
    edgeColor:     { value: new THREE.Color(0x2858a0) },
    landColor:     { value: new THREE.Color(0xa76cb0) },
    landBright:    { value: new THREE.Color(0xe2d4f8) },
    landDark:      { value: new THREE.Color(0x281e52) },
    landMask:      { value: emptyTex },
    highlightMask: { value: hlTex   },
  },
});

const globeMesh = new THREE.Mesh(new THREE.SphereGeometry(GLOBE_R, 64, 64), globeMaterial);
globeGroup.add(globeMesh);

// Atmosphere
globeGroup.add(new THREE.Mesh(
  new THREE.SphereGeometry(GLOBE_R + 0.012, 64, 64),
  new THREE.ShaderMaterial({
    vertexShader: atmosphereVS, fragmentShader: atmosphereFS,
    uniforms: {
      glowColor: { value: new THREE.Color(0xcc33ff) },
      glowPower: { value: 2.8 },
      opacity:   { value: 0.95 },
    },
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.FrontSide,
  })
));

// ── Orbital rings ─────────────────────────────────────────────────────────────

const timeUniform = { value: 0 };

function makeRing(inner, outer, rotX, rotZ, hexColor) {
  const mat = new THREE.ShaderMaterial({
    vertexShader: ringVS, fragmentShader: ringFS,
    uniforms: { ringColor: { value: new THREE.Color(hexColor) }, time: timeUniform },
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
  });
  const m = new THREE.Mesh(new THREE.RingGeometry(inner, outer, 256), mat);
  m.rotation.x = rotX; m.rotation.z = rotZ;
  return m;
}
scene.add(makeRing(GLOBE_R*1.07, GLOBE_R*1.13, Math.PI/2,   0,    0xee55ff));
scene.add(makeRing(GLOBE_R*1.13, GLOBE_R*1.17, Math.PI/2.3, 0.25, 0xcc33ee));
scene.add(makeRing(GLOBE_R*1.04, GLOBE_R*1.08, Math.PI/2,   0.55, 0xaa22dd));
scene.add(makeRing(GLOBE_R*1.20, GLOBE_R*1.38, Math.PI/2,   0.08, 0x8811bb));

// ── GeoJSON ───────────────────────────────────────────────────────────────────

let geoPromise = null;
let geoData    = null;

function getGeoData() {
  if (!geoPromise) {
    geoPromise = fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
      .then(r => r.json())
      .then(data => { geoData = data; return data; });
  }
  return geoPromise;
}

function latLonToVec3(lat, lon, r) {
  const phi   = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta)
  );
}

async function loadGeoJSON(group, radius, opacity) {
  try {
    const data = await getGeoData();
    const r = radius + 0.007, pts = [];
    data.features.forEach(f => {
      const g = f.geometry; if (!g) return;
      const polys = g.type==='Polygon'?[g.coordinates]:g.type==='MultiPolygon'?g.coordinates:[];
      polys.forEach(poly => poly.forEach(ring => {
        const v = ring.map(([lo,la]) => latLonToVec3(la, lo, r));
        for (let i=0;i<v.length-1;i++) pts.push(v[i].x,v[i].y,v[i].z,v[i+1].x,v[i+1].y,v[i+1].z);
      }));
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const mA = new THREE.LineBasicMaterial({ color:0xe0a0ff, transparent:true, opacity:0, blending:THREE.AdditiveBlending, depthWrite:false });
    const mB = new THREE.LineBasicMaterial({ color:0xffd0ff, transparent:true, opacity:0, blending:THREE.AdditiveBlending, depthWrite:false });
    group.add(new THREE.LineSegments(geo, mA));
    group.add(new THREE.LineSegments(geo.clone(), mB));
    gsap.to(mA, { opacity: opacity*0.50, duration:2.0, delay:0.8 });
    gsap.to(mB, { opacity: opacity*0.15, duration:2.0, delay:1.0 });
  } catch(e) { console.warn('GeoJSON error', e); }
}
loadGeoJSON(globeGroup, GLOBE_R, 1.0);

async function createCountryTexture() {
  const W = 4096, H = 2048;
  const cv = document.createElement('canvas'); cv.width=W; cv.height=H;
  const ctx = cv.getContext('2d');
  ctx.fillStyle='#000'; ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#fff';
  const data = await getGeoData();
  data.features.forEach(f => {
    const g = f.geometry; if (!g) return;
    const polys = g.type==='Polygon'?[g.coordinates]:g.type==='MultiPolygon'?g.coordinates:[];
    polys.forEach(poly => {
      ctx.beginPath();
      poly.forEach(ring => {
        ring.forEach(([lo,la],i) => {
          const x=(lo+180)/360*W, y=(90-la)/180*H;
          i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
        });
        ctx.closePath();
      });
      ctx.fill('evenodd');
    });
  });
  const tex = new THREE.CanvasTexture(cv);
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return tex;
}
createCountryTexture().then(tex => {
  globeMaterial.uniforms.landMask.value = tex;
  tex.needsUpdate = true;
}).catch(e => console.warn('Texture error', e));

// ── Country highlight ─────────────────────────────────────────────────────────

function vec3ToLatLon(v) {
  const n     = v.clone().normalize();
  const phi   = Math.acos(Math.max(-1, Math.min(1, n.y)));
  const theta = Math.atan2(n.z, -n.x);
  let lon = theta * (180 / Math.PI) - 180;
  if (lon < -180) lon += 360; // normaliza a [-180, 180] para hemisferio este
  return { lat: 90 - phi * (180 / Math.PI), lon };
}

// geoContains(feature, [lon, lat]) — detección esférica precisa de d3-geo
function findGeoFeature(lat, lon) {
  if (!geoData) return null;
  return geoData.features.find(f => f.geometry && geoContains(f, [lon, lat])) ?? null;
}

function findGeoFeatureByIso(iso) {
  if (!geoData) return null;
  return geoData.features.find(f => f.properties?.ISO_A2 === iso) ?? null;
}

function drawHighlight(feature) {
  const W = hlCanvas.width, H = hlCanvas.height;
  hlCtx.clearRect(0, 0, W, H);
  if (feature) {
    const g = feature.geometry;
    const polys = g.type==='Polygon'?[g.coordinates]:g.type==='MultiPolygon'?g.coordinates:[];
    hlCtx.fillStyle = '#fff';
    polys.forEach(poly => {
      hlCtx.beginPath();
      poly.forEach(ring => {
        ring.forEach(([lo,la],i) => {
          const x=(lo+180)/360*W, y=(90-la)/180*H;
          i===0?hlCtx.moveTo(x,y):hlCtx.lineTo(x,y);
        });
        hlCtx.closePath();
      });
      hlCtx.fill('evenodd');
    });
  }
  hlTex.needsUpdate = true;
}

// ── 3D → screen projection ────────────────────────────────────────────────────

function project3dToScreen(localPos, group) {
  const world = localPos.clone();
  group.localToWorld(world);
  const camNorm   = camera.position.clone().normalize();
  const pointNorm = world.clone().normalize();
  const dot       = pointNorm.dot(camNorm);
  const visible   = dot > 0.05;
  const p = world.clone().project(camera);
  return {
    x: ( p.x*0.5+0.5)*window.innerWidth,
    y: (-p.y*0.5+0.5)*window.innerHeight,
    visible, dot,
  };
}

function getFlagScreenPos(uni) {
  return project3dToScreen(latLonToVec3(uni.lat, uni.lon, GLOBE_R + 0.05), globeGroup);
}

// ── Agrupar universidades por país (una bandera por país) ─────────────────────

const countryGroups = Object.values(
  universities.reduce((acc, uni) => {
    if (!acc[uni.flagCode]) {
      acc[uni.flagCode] = { flagCode: uni.flagCode, country: uni.country,
        lat: 0, lon: 0, n: 0, unis: [], delay: uni.labelDelay };
    }
    acc[uni.flagCode].lat += uni.lat;
    acc[uni.flagCode].lon += uni.lon;
    acc[uni.flagCode].n++;
    acc[uni.flagCode].unis.push(uni);
    if (uni.labelDelay < acc[uni.flagCode].delay) acc[uni.flagCode].delay = uni.labelDelay;
    return acc;
  }, {})
).map(g => ({ ...g, lat: g.lat / g.n, lon: g.lon / g.n }));

// ── Flag nodes: una por país en el centroide ──────────────────────────────────

const surfaceContainer = document.getElementById('flag-nodes');

countryGroups.forEach(group => {
  ['', 'delay'].forEach(mod => {
    const p = document.createElement('div');
    p.className = mod ? `flag-pulse ${mod}` : 'flag-pulse';
    p.dataset.fc = group.flagCode;
    surfaceContainer.appendChild(p);
  });

  const el = document.createElement('div');
  el.className = 'flag-node';
  el.dataset.fc = group.flagCode;

  const img = document.createElement('img');
  img.src = `https://flagcdn.com/40x30/${group.flagCode}.png`;
  img.alt = group.country;
  img.onerror = () => {
    el.style.background = 'linear-gradient(135deg,#4a0095,#9930ee)';
    el.textContent = group.flagCode.toUpperCase();
    el.style.fontSize = '8px'; el.style.fontWeight = '700';
    el.style.display = 'flex'; el.style.alignItems = 'center'; el.style.justifyContent = 'center';
  };
  el.appendChild(img);
  surfaceContainer.appendChild(el);

  el.addEventListener('mouseenter', () => setHighlight(group.flagCode, true));
  el.addEventListener('mouseleave', () => setHighlight(group.flagCode, false));
  el.addEventListener('click', () => openPanel(group.flagCode));
});

// ── University labels ─────────────────────────────────────────────────────────

const labelsContainer = document.getElementById('labels');
const labelCardEls    = [];

universities.forEach(uni => {
  const el = document.createElement('div');
  el.className = 'uni-label';
  el.dataset.id = uni.id;
  el.style.opacity = '0';
  el.style.left = '-9999px';
  el.style.top  = '-9999px';

  const logoDiv = document.createElement('div');
  logoDiv.className = 'label-logo';
  const logoImg = document.createElement('img');
  const domain  = (uni.logo || '').replace('https://logo.clearbit.com/', '');
  logoImg.alt   = uni.id.toUpperCase().slice(0, 3);
  logoImg.src   = uni.logo || '';
  //console.log(domain);
  logoImg.onerror = function () {
    if (!this.dataset.tried) {
      this.dataset.tried = '1';
      this.src = `https://www.google.com/s2/favicons?sz=64&domain_url=https://${domain}`;
    } else {
      this.style.display = 'none';
      logoDiv.classList.add('logo-fallback');
      logoDiv.textContent = uni.id.toUpperCase().slice(0, 3);
    }
  };
  logoDiv.appendChild(logoImg);

  const textDiv = document.createElement('div');
  textDiv.className = 'label-text';
  textDiv.innerHTML = `
    <div class="label-name">${uni.name.replace('\n','<br>')}</div>
    <div class="label-country">${uni.country}</div>
  `;

  const inner = document.createElement('div');
  inner.className = 'label-inner';
  inner.appendChild(logoDiv);
  inner.appendChild(textDiv);
  el.appendChild(inner);

  labelsContainer.appendChild(el);
  labelCardEls.push({ el, uni });

  setTimeout(() => {
    gsap.to(el, { opacity:1, duration:0.7, ease:'power2.out' });
  }, (1.5 + uni.labelDelay) * 1000);

  el.addEventListener('mouseenter', () => setHighlight(uni.id, true));
  el.addEventListener('mouseleave', () => setHighlight(uni.id, false));
  el.addEventListener('click', () => openPanel(uni.flagCode));

  const countryEl = textDiv.querySelector('.label-country');
  if (countryEl) countryEl.addEventListener('click', e => { e.stopPropagation(); openPanel(uni.flagCode); });
});

// ── SVG lines ─────────────────────────────────────────────────────────────────

const svg = document.getElementById('lines-svg');

universities.forEach(uni => {
  const g = document.createElementNS('http://www.w3.org/2000/svg','line');
  g.id = `line-glow-${uni.id}`; g.setAttribute('class','connection-line-glow'); g.style.opacity = '0';
  svg.appendChild(g);

  const l = document.createElementNS('http://www.w3.org/2000/svg','line');
  l.id = `line-${uni.id}`; l.setAttribute('class','connection-line'); l.style.opacity = '0';
  svg.appendChild(l);

  setTimeout(() => {
    gsap.to(l, { opacity:1,    duration:0.5 });
    gsap.to(g, { opacity:0.55, duration:0.5 });
  }, (1.8 + uni.labelDelay) * 1000);
});

// ── Highlight (por flagCode — afecta todos los labels del país) ───────────────

function setHighlight(flagCode, on) {
  universities.filter(u => u.flagCode === flagCode).forEach(u => {
    const card  = document.querySelector(`.uni-label[data-id="${u.id}"]`);
    const line  = document.getElementById(`line-${u.id}`);
    const lineG = document.getElementById(`line-glow-${u.id}`);
    if (card)  card.style.borderColor = on ? 'rgba(220,120,255,0.9)' : '';
    if (line)  line.style.opacity     = on ? '1' : '';
    if (lineG) lineG.style.opacity    = on ? '0.5' : '';
  });
  const flagEl = document.querySelector(`.flag-node[data-fc="${flagCode}"]`);
  if (flagEl) flagEl.style.transform = on ? 'translate(-50%,-50%) scale(1.25)' : 'translate(-50%,-50%)';
}

// ── Country panel (modal) ─────────────────────────────────────────────────────

let currentPanelIndex = -1;

const isoToFlagCode = {
  US:'us', MX:'mx', CO:'co', PE:'pe', CL:'cl',
  ES:'es', DE:'de', BR:'br', AR:'ar', UY:'uy', ZA:'za', CN:'cn',
};
const flagCodeToIso = Object.fromEntries(Object.entries(isoToFlagCode).map(([k,v]) => [v,k]));

function openPanel(flagCode) {
  const idx = COUNTRY_MAP[flagCode];
  if (idx === undefined) return;
  currentPanelIndex = idx;
  renderPanel(idx);
  document.getElementById('country-panel').classList.add('visible');
  document.getElementById('country-panel').setAttribute('aria-hidden', 'false');
  document.getElementById('panel-backdrop').classList.add('visible');
}

function closePanel() {
  document.getElementById('country-panel').classList.remove('visible');
  document.getElementById('country-panel').setAttribute('aria-hidden', 'true');
  document.getElementById('panel-backdrop').classList.remove('visible');
  currentPanelIndex = -1;
  hoveredIso = null;
  drawHighlight(null);
  canvas.classList.remove('country-hover');
}

function navigatePanel(delta) {
  if (currentPanelIndex === -1) return;
  currentPanelIndex = (currentPanelIndex + delta + COUNTRIES.length) % COUNTRIES.length;
  renderPanel(currentPanelIndex);
  const fc  = COUNTRIES[currentPanelIndex].flagCode;
  const iso = flagCodeToIso[fc];
  if (iso) { hoveredIso = iso; drawHighlight(findGeoFeatureByIso(iso)); }
}

function renderAccordion(unis) {
  const container = document.getElementById('cp-accordion');
  container.innerHTML = '';
  unis.forEach(uni => {
    const hasBoth  = uni.modality.includes('Virtual') && uni.modality.includes('Presencial');
    const modClass = hasBoth ? 'mixta' : uni.modality.includes('Virtual') ? 'virtual' : 'presencial';
    const modLabel = hasBoth ? 'Presencial / Virtual' : uni.modality.includes('Virtual') ? 'Virtual' : 'Presencial';
    const item = document.createElement('div');
    item.className = 'acc-item';
    item.innerHTML = `
      <div class="acc-header">
        <div class="acc-abbr">${uni.abbr}</div>
        <div class="acc-info">
          <div class="acc-name">${uni.name}</div>
          <div class="acc-city">${uni.city}</div>
        </div>
        <div class="acc-chevron">&#8250;</div>
      </div>
      <div class="acc-body">
        <div class="acc-content">
          <div class="acc-badges">
            <span class="acc-row-label">Modalidad</span>
            <span class="acc-badge ${modClass}">${modLabel}</span>
          </div>
          <div class="acc-row">
            <span class="acc-row-label">Requisitos</span>
            <span class="acc-row-value">${uni.requirements}</span>
          </div>
          <div class="acc-row">
            <span class="acc-row-label">Fecha límite</span>
            <span class="acc-row-value">${uni.deadline}</span>
          </div>
          <div class="acc-row">
            <span class="acc-row-label">Vacantes</span>
            <span class="acc-row-value">${uni.vacancies} plazas disponibles</span>
          </div>
          <button class="acc-btn">Más Información</button>
        </div>
      </div>
    `;
    item.querySelector('.acc-header').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      container.querySelectorAll('.acc-item.open').forEach(it => it.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
    container.appendChild(item);
  });
}

function renderPanel(idx) {
  const country = COUNTRIES[idx];
  const cpBody  = document.querySelector('.cp-body');
  if (cpBody) cpBody.scrollTop = 0;

  document.getElementById('cp-photo').src         = country.photo;
  document.getElementById('cp-photo').alt         = country.name;
  document.getElementById('cp-flag').src          = `https://flagcdn.com/80x60/${country.flagCode}.png`;
  document.getElementById('cp-flag').alt          = country.name;
  document.getElementById('cp-country-name').textContent = country.name;
  document.getElementById('cp-programs').textContent     = country.programs;
  document.getElementById('cp-institutions').textContent = country.institutions;
  document.getElementById('cp-cities').textContent       = country.cities;

  renderAccordion(country.universities);

  document.getElementById('cp-pager-count').textContent = `${idx + 1} / ${COUNTRIES.length}`;

  const dotsEl = document.getElementById('cp-dots');
  dotsEl.innerHTML = '';
  COUNTRIES.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'cp-dot' + (i === idx ? ' active' : '');
    dot.addEventListener('click', () => { currentPanelIndex = i; renderPanel(i); });
    dotsEl.appendChild(dot);
  });
}

document.getElementById('cp-close').addEventListener('click', closePanel);
document.getElementById('cp-prev').addEventListener('click', () => navigatePanel(-1));
document.getElementById('cp-next').addEventListener('click', () => navigatePanel(1));
document.getElementById('panel-backdrop').addEventListener('click', closePanel);

function footerNavigate(delta) {
  if (currentPanelIndex === -1) {
    openPanel(COUNTRIES[delta < 0 ? COUNTRIES.length - 1 : 0].flagCode);
  } else {
    navigatePanel(delta);
  }
}
document.getElementById('fn-prev').addEventListener('click', () => footerNavigate(-1));
document.getElementById('fn-next').addEventListener('click', () => footerNavigate(1));

// ── Label position system ─────────────────────────────────────────────────────

let _gcx = 0, _gcy = 0;
let _safeBounds = { xMin: 0, xMax: 9999, yMin: 0, yMax: 9999 };

function computeSafeBounds() {
  const VW = window.innerWidth, VH = window.innerHeight, PAD = 16;
  const leftHero  = document.getElementById('left-hero');
  const hintPanel = document.getElementById('hint-panel');
  const inscCard  = document.getElementById('inscripciones-card');
  const xMin = leftHero ? leftHero.getBoundingClientRect().right + PAD : PAD;
  const hintLeft = hintPanel && hintPanel.offsetParent ? hintPanel.getBoundingClientRect().left - PAD : VW;
  const inscLeft = inscCard && inscCard.offsetParent ? inscCard.getBoundingClientRect().left - PAD : VW;
  _safeBounds = { xMin, xMax: Math.min(hintLeft, inscLeft), yMin: PAD, yMax: VH - PAD };
}

function getResponsivePush() {
  const w = window.innerWidth;
  if (w < 480) return 65; if (w < 768) return 88; return 70;
}

function getRadialDir(flagPos) {
  const dx = flagPos.x - _gcx, dy = flagPos.y - _gcy;
  const len = Math.sqrt(dx*dx + dy*dy) || 1;
  return { nx: dx/len, ny: dy/len };
}

function getLabelCenter(flagPos) {
  const { nx, ny } = getRadialDir(flagPos);
  const maxPush = getResponsivePush();
  const dot = flagPos.dot ?? 1;
  const t = Math.max(0, Math.min(1, (dot - 0.05) / 0.50));
  const edgeFactor = t*t*(3-2*t);
  const push = 18 + (maxPush - 18) * edgeFactor;
  const tx = -ny, ty = nx;
  const blend = (1 - edgeFactor) * 0.98;
  const dx = nx*(1-blend) + tx*blend, dy = ny*(1-blend) + ty*blend;
  const dlen = Math.sqrt(dx*dx + dy*dy) || 1;
  return { x: flagPos.x + (dx/dlen)*push, y: flagPos.y + (dy/dlen)*push };
}

function getLabelEdgePoint(rect, nx, ny) {
  const cx = rect.left + rect.width/2, cy = rect.top + rect.height/2;
  const tx = (rect.width/2) / (Math.abs(nx) || 0.0001);
  const ty = (rect.height/2) / (Math.abs(ny) || 0.0001);
  if (tx < ty) return { x: nx < 0 ? rect.left : rect.right, y: cy - ny*tx };
  return { x: cx - nx*ty, y: ny < 0 ? rect.top : rect.bottom };
}

function updatePositions() {
  const gc = new THREE.Vector3(0,0,0).project(camera);
  _gcx = ( gc.x*0.5+0.5)*window.innerWidth;
  _gcy = (-gc.y*0.5+0.5)*window.innerHeight;

  const HALF_W = 110, HALF_H = 26, GAP = 5;
  const LABEL_STEP = 56; // espaciado vertical entre labels del mismo país
  const SEP_HW = HALF_W + GAP;
  // Altura total del stack para separación entre grupos
  const SEP_HH = HALF_H + GAP;

  // ── Fase 1: posición de la bandera de cada país y anchor del stack ──────────
  const groups = countryGroups.map(group => {
    const flagPos = project3dToScreen(
      latLonToVec3(group.lat, group.lon, GLOBE_R + 0.05), globeGroup
    );
    const show = flagPos.visible;
    const raw  = getLabelCenter(flagPos);
    // Anchor del stack = posición radial clampeada
    const ax = Math.max(_safeBounds.xMin + HALF_W, Math.min(_safeBounds.xMax - HALF_W, raw.x));
    const ay = Math.max(_safeBounds.yMin + HALF_H, Math.min(_safeBounds.yMax - HALF_H, raw.y));
    return { group, flagPos, show, ax, ay };
  });

  // ── Fase 2: separar anchors entre países ────────────────────────────────────
  const vis = groups.filter(g => g.show);
  for (let iter = 0; iter < 12; iter++) {
    let moved = false;
    for (let i = 0; i < vis.length; i++) {
      for (let j = i + 1; j < vis.length; j++) {
        const a = vis[i], b = vis[j];
        // Zona de separación considera el stack completo de cada país
        const aH = (a.group.n - 1) * LABEL_STEP / 2 + HALF_H;
        const bH = (b.group.n - 1) * LABEL_STEP / 2 + HALF_H;
        const needH = aH + bH + GAP;
        const dx = Math.abs(a.ax - b.ax), dy = Math.abs(a.ay - b.ay);
        if (dx >= SEP_HW * 2 || dy >= needH * 2) continue;
        const midY = (a.ay + b.ay) / 2;
        if (a.ay <= b.ay) { a.ay = midY - needH; b.ay = midY + needH; }
        else               { a.ay = midY + needH; b.ay = midY - needH; }
        a.ay = Math.max(_safeBounds.yMin + aH, Math.min(_safeBounds.yMax - aH, a.ay));
        b.ay = Math.max(_safeBounds.yMin + bH, Math.min(_safeBounds.yMax - bH, b.ay));
        moved = true;
      }
    }
    if (!moved) break;
  }

  // ── Fase 3: aplicar posiciones ──────────────────────────────────────────────
  groups.forEach(({ group, flagPos, show, ax, ay }) => {
    // Bandera del país
    const flagEl = document.querySelector(`.flag-node[data-fc="${group.flagCode}"]`);
    if (flagEl) {
      flagEl.style.left          = flagPos.x + 'px';
      flagEl.style.top           = flagPos.y + 'px';
      flagEl.style.opacity       = show ? '1' : '0';
      flagEl.style.visibility    = show ? 'visible' : 'hidden';
      flagEl.style.pointerEvents = show ? 'auto' : 'none';
    }
    document.querySelectorAll(`.flag-pulse[data-fc="${group.flagCode}"]`).forEach(p => {
      p.style.left       = flagPos.x + 'px';
      p.style.top        = flagPos.y + 'px';
      p.style.opacity    = show ? '1' : '0';
      p.style.visibility = show ? 'visible' : 'hidden';
    });

    // Labels apilados centrados en (ax, ay)
    const n = group.unis.length;
    group.unis.forEach((uni, i) => {
      const offset = (i - (n - 1) / 2) * LABEL_STEP;
      const lx = ax;
      const ly = Math.max(_safeBounds.yMin + HALF_H,
                   Math.min(_safeBounds.yMax - HALF_H, ay + offset));

      const labelEl = document.querySelector(`.uni-label[data-id="${uni.id}"]`);
      if (labelEl) {
        labelEl.style.left          = lx + 'px';
        labelEl.style.top           = ly + 'px';
        labelEl.style.visibility    = show ? 'visible' : 'hidden';
        labelEl.style.pointerEvents = show ? 'auto' : 'none';
      }

      // Línea desde el borde del label hasta la bandera del país
      const line  = document.getElementById(`line-${uni.id}`);
      const lineG = document.getElementById(`line-glow-${uni.id}`);
      if ((line || lineG) && labelEl) {
        const rect = labelEl.getBoundingClientRect();
        const ddx  = flagPos.x - (rect.left + rect.width  / 2);
        const ddy  = flagPos.y - (rect.top  + rect.height / 2);
        const dlen = Math.sqrt(ddx*ddx + ddy*ddy) || 1;
        const ep   = getLabelEdgePoint(rect, ddx/dlen, ddy/dlen);
        if (line)  { line.setAttribute('x1',ep.x);  line.setAttribute('y1',ep.y);  line.setAttribute('x2',flagPos.x);  line.setAttribute('y2',flagPos.y);  line.style.display  = show ? '' : 'none'; }
        if (lineG) { lineG.setAttribute('x1',ep.x); lineG.setAttribute('y1',ep.y); lineG.setAttribute('x2',flagPos.x); lineG.setAttribute('y2',flagPos.y); lineG.style.display = show ? '' : 'none'; }
      }
    });
  });
}

// ── Intro animation ───────────────────────────────────────────────────────────

globeGroup.scale.set(0.001, 0.001, 0.001);
gsap.to(globeGroup.scale, { x:1, y:1, z:1, duration:1.6, ease:'elastic.out(1,0.55)', delay:0.2 });

const { z: _tz } = getResponsiveCamera();
const _tx = computeGlobeCenterX();
camera.position.set(_tx, 0, _tz + 3.5);

requestAnimationFrame(() => {
  computeSafeBounds();
  gsap.to(camera.position, { z: _tz, duration:2.2, ease:'power3.out', delay:0.1 });
});

// ── Raycaster ─────────────────────────────────────────────────────────────────

const raycaster = new THREE.Raycaster();
const mouse2    = new THREE.Vector2();
let hoveredIso  = null;

function getGlobeHit(clientX, clientY) {
  mouse2.x = (clientX / window.innerWidth)  *  2 - 1;
  mouse2.y = (clientY / window.innerHeight) * -2 + 1;
  raycaster.setFromCamera(mouse2, camera);
  const hits = raycaster.intersectObject(globeMesh);
  return hits.length > 0 ? hits[0] : null;
}

function detectCountryAt(clientX, clientY) {
  const hit = getGlobeHit(clientX, clientY);
  if (!hit) return null;
  const local = globeGroup.worldToLocal(hit.point.clone());
  const { lat, lon } = vec3ToLatLon(local);
  return findGeoFeature(lat, lon);
}

// ── Drag to rotate ────────────────────────────────────────────────────────────

let isDragging = false;
let prevMouse  = { x: 0, y: 0 };
// Guarda la posición del pointerdown para distinguir click de drag
let _downPos   = null;

canvas.addEventListener('pointerdown', e => {
  if (!e.isPrimary) return;
  isDragging = true;
  prevMouse  = { x: e.clientX, y: e.clientY };
  _downPos   = { x: e.clientX, y: e.clientY };
});

window.addEventListener('pointerup', e => {
  if (!e.isPrimary) return;
  isDragging = false;
});

window.addEventListener('pointermove', e => {
  if (!e.isPrimary || !isDragging) return;
  const dx = e.clientX - prevMouse.x, dy = e.clientY - prevMouse.y;
  globeGroup.rotation.y += dx * 0.005;
  globeGroup.rotation.x += dy * 0.005;
  globeGroup.rotation.x  = Math.max(-0.6, Math.min(0.6, globeGroup.rotation.x));
  prevMouse = { x: e.clientX, y: e.clientY };
});

// ── Hover: resalta el país ────────────────────────────────────────────────────

canvas.addEventListener('pointermove', e => {
  if (!e.isPrimary || isDragging) return;
  const feature = detectCountryAt(e.clientX, e.clientY);
  const iso     = feature?.properties?.ISO_A2 ?? null;
  if (iso === hoveredIso) return;
  hoveredIso = iso;
  if (iso && OUR_ISO.has(iso)) {
    drawHighlight(feature);
    canvas.classList.add('country-hover');
  } else {
    drawHighlight(null);
    canvas.classList.remove('country-hover');
  }
});

// ── Click: abre el modal ──────────────────────────────────────────────────────
// Usa pointerup en lugar de 'click' para controlar precisamente la distancia
// arrastrada — así funciona en el primer intento, incluso después de un drag.

canvas.addEventListener('pointerup', e => {
  if (!e.isPrimary || !_downPos) return;
  const dx   = e.clientX - _downPos.x;
  const dy   = e.clientY - _downPos.y;
  _downPos   = null;
  if (Math.sqrt(dx * dx + dy * dy) > 8) return; // fue un drag, no un click

  // 1. Usar hoveredIso si ya está detectado
  if (hoveredIso && OUR_ISO.has(hoveredIso)) {
    const flagCode = isoToFlagCode[hoveredIso];
    if (flagCode) { openPanel(flagCode); return; }
  }

  // 2. Fallback: raycast fresco en la posición exacta del pointerup
  const feature = detectCountryAt(e.clientX, e.clientY);
  const iso     = feature?.properties?.ISO_A2 ?? null;
  if (iso && OUR_ISO.has(iso)) {
    hoveredIso = iso;
    drawHighlight(feature);
    canvas.classList.add('country-hover');
    const flagCode = isoToFlagCode[iso];
    if (flagCode) openPanel(flagCode);
  }
});

// Touch (móvil)
canvas.addEventListener('touchend', e => {
  if (e.changedTouches.length === 0) return;
  const t       = e.changedTouches[0];
  const feature = detectCountryAt(t.clientX, t.clientY);
  const iso     = feature?.properties?.ISO_A2 ?? null;
  if (iso && OUR_ISO.has(iso)) {
    hoveredIso = iso;
    drawHighlight(feature);
    canvas.classList.add('country-hover');
    const flagCode = isoToFlagCode[iso];
    if (flagCode) openPanel(flagCode);
  }
}, { passive: true });

// ── Render loop ───────────────────────────────────────────────────────────────

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const dt = clock.getDelta();
  const t  = clock.elapsedTime;

  timeUniform.value = t;
  if (!isDragging) globeGroup.rotation.y -= dt * 0.08;
  stars.rotation.y += dt * 0.004;

  updatePositions();
  renderer.render(scene, camera);
}
animate();

// ── Resize ────────────────────────────────────────────────────────────────────

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  svg.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
  requestAnimationFrame(() => { applyResponsiveCamera(); computeSafeBounds(); });
});
svg.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
