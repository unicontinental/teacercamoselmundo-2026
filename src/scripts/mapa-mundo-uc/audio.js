let _ctx = null;

function getCtx() {
  if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (_ctx.state === 'suspended') _ctx.resume();
  return _ctx;
}

// ── Flag hover: tick grave y discreto ─────────────────────────────────────────

let _lastHover = 0;

export function playHoverSound() {
  const now = Date.now();
  if (now - _lastHover < 90) return;
  _lastHover = now;

  const ctx = getCtx();
  const t = ctx.currentTime;

  const master = ctx.createGain();
  master.gain.setValueAtTime(0, t);
  master.gain.linearRampToValueAtTime(0.14, t + 0.004);
  master.gain.exponentialRampToValueAtTime(0.001, t + 0.11);
  master.connect(ctx.destination);

  // "Tock" grave y apagado, sin brillo: fundamental + un armónico suave
  [
    [1.0, 0.85],
    [2.0, 0.15],
  ].forEach(([ratio, vol]) => {
    const osc = ctx.createOscillator();
    const g   = ctx.createGain();
    osc.type           = 'sine';
    osc.frequency.value = 150 * ratio;
    g.gain.value        = vol;
    osc.connect(g);
    g.connect(master);
    osc.start(t);
    osc.stop(t + 0.13);
  });
}

// ── Rotación del globo: viento espacial / energía en movimiento ───────────────

let _rotNoise = null;
let _rotGain  = null;

export function startRotationSound() {
  const ctx = getCtx();
  if (_rotGain) return;

  const t      = ctx.currentTime;
  const SR     = ctx.sampleRate;
  const bufLen = Math.floor(SR * 3);
  const buffer = ctx.createBuffer(1, bufLen, SR);
  const d      = buffer.getChannelData(0);

  // Ruido rosa (algoritmo Paul Kellet)
  let b0 = 0, b1 = 0, b2 = 0;
  for (let i = 0; i < bufLen; i++) {
    const w = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + w * 0.0555179;
    b1 = 0.99332 * b1 + w * 0.0750759;
    b2 = 0.96900 * b2 + w * 0.1538520;
    d[i] = (b0 + b1 + b2 + w * 0.0168980) * 0.11;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  noise.loop   = true;

  // Filtros para textura de viento espacial
  const bp = ctx.createBiquadFilter();
  bp.type          = 'bandpass';
  bp.frequency.value = 260;
  bp.Q.value         = 0.75;

  const hp = ctx.createBiquadFilter();
  hp.type          = 'highpass';
  hp.frequency.value = 150;

  _rotGain = ctx.createGain();
  _rotGain.gain.setValueAtTime(0, t);
  _rotGain.gain.linearRampToValueAtTime(0.13, t + 0.38);

  noise.connect(bp);
  bp.connect(hp);
  hp.connect(_rotGain);
  _rotGain.connect(ctx.destination);

  noise.start();
  _rotNoise = noise;
}

export function stopRotationSound() {
  if (!_rotGain) return;
  const ctx = getCtx();
  const t   = ctx.currentTime;
  _rotGain.gain.cancelScheduledValues(t);
  _rotGain.gain.setValueAtTime(_rotGain.gain.value, t);
  _rotGain.gain.linearRampToValueAtTime(0, t + 0.55);
  const n = _rotNoise;
  _rotNoise = null;
  _rotGain  = null;
  setTimeout(() => { try { n.stop(); } catch (_) {} }, 700);
}

// ── Selección de país: click sobrio y grave ───────────────────────────────────

export function playSelectSound() {
  const ctx = getCtx();
  const t   = ctx.currentTime;

  const master = ctx.createGain();
  master.gain.setValueAtTime(0, t);
  master.gain.linearRampToValueAtTime(0.22, t + 0.004);
  master.gain.exponentialRampToValueAtTime(0.001, t + 0.17);
  master.connect(ctx.destination);

  // "Tock" grave y apagado: tono bajo fijo con decaimiento inmediato
  const osc = ctx.createOscillator();
  const g   = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.value = 130;
  g.gain.value = 1.0;
  osc.connect(g);
  g.connect(master);
  osc.start(t);
  osc.stop(t + 0.19);

  // Transiente de contacto: soplo de ruido filtrado, casi imperceptible
  const SR     = ctx.sampleRate;
  const bufLen = Math.floor(SR * 0.03);
  const buffer = ctx.createBuffer(1, bufLen, SR);
  const d      = buffer.getChannelData(0);
  for (let i = 0; i < bufLen; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / bufLen);

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  const lp = ctx.createBiquadFilter();
  lp.type            = 'lowpass';
  lp.frequency.value = 600;
  const nG = ctx.createGain();
  nG.gain.value = 0.25;
  noise.connect(lp);
  lp.connect(nG);
  nG.connect(master);
  noise.start(t);
}
