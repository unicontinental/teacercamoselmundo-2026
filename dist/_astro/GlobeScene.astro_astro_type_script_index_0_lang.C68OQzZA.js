/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fn="srgb",Ha="srgb-linear",za="linear",Ze="srgb";const El="300 es";function Jd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ka(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qd(){const i=ka("canvas");return i.style.display="block",i}const _l={};function Il(...i){const e="THREE."+i.shift();console.log(e,...i)}function Qc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Me(...i){i=Qc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=Qc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function io(...i){const e=i.join(" ");e in _l||(_l[e]=!0,Me(...i))}function ef(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const tf={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ms=Math.PI/180,ro=180/Math.PI;function Jr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function nf(i,e){return(i%e+e)%e}function As(i,e,t){return(1-t)*i+t*e}function Mr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ke{static{Ke.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Sr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3],d=a[s+0],h=a[s+1],E=a[s+2],A=a[s+3];if(f!==A||l!==d||c!==h||u!==E){let p=l*d+c*h+u*E+f*A;p<0&&(d=-d,h=-h,E=-E,A=-A,p=-p);let m=1-o;if(p<.9995){const g=Math.acos(p),T=Math.sin(g);m=Math.sin(m*g)/T,o=Math.sin(o*g)/T,l=l*m+d*o,c=c*m+h*o,u=u*m+E*o,f=f*m+A*o}else{l=l*m+d*o,c=c*m+h*o,u=u*m+E*o,f=f*m+A*o;const g=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=g,c*=g,u*=g,f*=g}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=a[s],d=a[s+1],h=a[s+2],E=a[s+3];return e[t]=o*E+u*f+l*h-c*d,e[t+1]=l*E+u*d+c*f-o*h,e[t+2]=c*E+u*h+o*d-l*f,e[t+3]=u*E-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(a/2),d=l(n/2),h=l(r/2),E=l(a/2);switch(s){case"XYZ":this._x=d*u*f+c*h*E,this._y=c*h*f-d*u*E,this._z=c*u*E+d*h*f,this._w=c*u*f-d*h*E;break;case"YXZ":this._x=d*u*f+c*h*E,this._y=c*h*f-d*u*E,this._z=c*u*E-d*h*f,this._w=c*u*f+d*h*E;break;case"ZXY":this._x=d*u*f-c*h*E,this._y=c*h*f+d*u*E,this._z=c*u*E+d*h*f,this._w=c*u*f-d*h*E;break;case"ZYX":this._x=d*u*f-c*h*E,this._y=c*h*f+d*u*E,this._z=c*u*E-d*h*f,this._w=c*u*f+d*h*E;break;case"YZX":this._x=d*u*f+c*h*E,this._y=c*h*f+d*u*E,this._z=c*u*E-d*h*f,this._w=c*u*f-d*h*E;break;case"XZY":this._x=d*u*f-c*h*E,this._y=c*h*f-d*u*E,this._z=c*u*E+d*h*f,this._w=c*u*f+d*h*E;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(a-c)*h,this._z=(s-r)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(a+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(a-c)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(s-r)/h,this._x=(a+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+r*c-a*l,this._y=r*u+s*l+a*o-n*c,this._z=a*u+s*c+n*l-r*o,this._w=s*u-n*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,a=-a,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{static{G.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*n),u=2*(o*t-a*r),f=2*(a*n-s*t);return this.x=t+l*c+s*f-o*u,this.y=n+l*u+o*c-a*f,this.z=r+l*f+a*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Es.copy(this).projectOnVector(e),this.sub(Es)}reflect(e){return this.sub(Es.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Es=new G,gl=new Sr;class De{static{De.prototype.isMatrix3=!0}constructor(e,t,n,r,a,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c)}set(e,t,n,r,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],E=n[8],A=r[0],p=r[3],m=r[6],g=r[1],T=r[4],N=r[7],v=r[2],C=r[5],x=r[8];return a[0]=s*A+o*g+l*v,a[3]=s*p+o*T+l*C,a[6]=s*m+o*N+l*x,a[1]=c*A+u*g+f*v,a[4]=c*p+u*T+f*C,a[7]=c*m+u*N+f*x,a[2]=d*A+h*g+E*v,a[5]=d*p+h*T+E*C,a[8]=d*m+h*N+E*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*a*u+n*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*s-o*c,d=o*l-u*a,h=c*a-s*l,E=t*f+n*d+r*h;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=f*A,e[1]=(r*c-u*n)*A,e[2]=(o*n-r*s)*A,e[3]=d*A,e[4]=(u*t-r*l)*A,e[5]=(r*a-o*t)*A,e[6]=h*A,e[7]=(n*l-c*t)*A,e[8]=(s*t-n*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_s.makeScale(e,t)),this}rotate(e){return this.premultiply(_s.makeRotation(-e)),this}translate(e,t){return this.premultiply(_s.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _s=new De,Sl=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rf(){const i={enabled:!0,workingColorSpace:Ha,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Ze&&(r.r=Zn(r.r),r.g=Zn(r.g),r.b=Zn(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Ze&&(r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?za:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ha]:{primaries:e,whitePoint:n,transfer:za,toXYZ:Sl,fromXYZ:Tl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:Sl,fromXYZ:Tl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}const ze=rf();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ki;class af{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ki===void 0&&(ki=ka("canvas")),ki.width=e.width,ki.height=e.height;const r=ki.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ka("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Zn(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sf=0;class Uo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Jr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Is(r[s].image)):a.push(Is(r[s]))}else a=Is(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Is(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?af.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}let of=0;const gs=new G;class Pt extends Bi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=1001,r=1001,a=1006,s=1008,o=1023,l=1009,c=Pt.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Jr(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gs).x}get height(){return this.source.getSize(gs).y}get depth(){return this.source.getSize(gs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Me(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Me(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=300;Pt.DEFAULT_ANISOTROPY=1;class gt{static{gt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],E=l[9],A=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-A)<.01&&Math.abs(E-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+A)<.1&&Math.abs(E+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,N=(h+1)/2,v=(m+1)/2,C=(u+d)/4,x=(f+A)/4,_=(E+p)/4;return T>N&&T>v?T<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(T),r=C/n,a=x/n):N>v?N<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(N),n=C/r,a=_/r):v<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(v),n=x/a,r=_/a),this.set(n,r,a,t),this}let g=Math.sqrt((p-E)*(p-E)+(f-A)*(f-A)+(d-u)*(d-u));return Math.abs(g)<.001&&(g=1),this.x=(p-E)/g,this.y=(f-A)/g,this.z=(d-u)/g,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lf extends Bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},a=new Pt(r),s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Uo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends lf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class eu extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cf extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ft{static{ft.prototype.isMatrix4=!0}constructor(e,t,n,r,a,s,o,l,c,u,f,d,h,E,A,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c,u,f,d,h,E,A,p)}set(e,t,n,r,a,s,o,l,c,u,f,d,h,E,A,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=a,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=E,m[11]=A,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Wi.setFromMatrixColumn(e,0).length(),a=1/Wi.setFromMatrixColumn(e,1).length(),s=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const d=s*u,h=s*f,E=o*u,A=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+E*c,t[5]=d-A*c,t[9]=-o*l,t[2]=A-d*c,t[6]=E+h*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,E=c*u,A=c*f;t[0]=d+A*o,t[4]=E*o-h,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=h*o-E,t[6]=A+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,E=c*u,A=c*f;t[0]=d-A*o,t[4]=-s*f,t[8]=E+h*o,t[1]=h+E*o,t[5]=s*u,t[9]=A-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,h=s*f,E=o*u,A=o*f;t[0]=l*u,t[4]=E*c-h,t[8]=d*c+A,t[1]=l*f,t[5]=A*c+d,t[9]=h*c-E,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,h=s*c,E=o*l,A=o*c;t[0]=l*u,t[4]=A-d*f,t[8]=E*f+h,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+E,t[10]=d-A*f}else if(e.order==="XZY"){const d=s*l,h=s*c,E=o*l,A=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+A,t[5]=s*u,t[9]=h*f-E,t[2]=E*f-h,t[6]=o*u,t[10]=A*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uf,e,df)}lookAt(e,t,n){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ti.crossVectors(n,jt),ti.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ti.crossVectors(n,jt)),ti.normalize(),oa.crossVectors(jt,ti),r[0]=ti.x,r[4]=oa.x,r[8]=jt.x,r[1]=ti.y,r[5]=oa.y,r[9]=jt.y,r[2]=ti.z,r[6]=oa.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],E=n[2],A=n[6],p=n[10],m=n[14],g=n[3],T=n[7],N=n[11],v=n[15],C=r[0],x=r[4],_=r[8],M=r[12],D=r[1],y=r[5],P=r[9],z=r[13],W=r[2],w=r[6],B=r[10],U=r[14],$=r[3],Q=r[7],oe=r[11],me=r[15];return a[0]=s*C+o*D+l*W+c*$,a[4]=s*x+o*y+l*w+c*Q,a[8]=s*_+o*P+l*B+c*oe,a[12]=s*M+o*z+l*U+c*me,a[1]=u*C+f*D+d*W+h*$,a[5]=u*x+f*y+d*w+h*Q,a[9]=u*_+f*P+d*B+h*oe,a[13]=u*M+f*z+d*U+h*me,a[2]=E*C+A*D+p*W+m*$,a[6]=E*x+A*y+p*w+m*Q,a[10]=E*_+A*P+p*B+m*oe,a[14]=E*M+A*z+p*U+m*me,a[3]=g*C+T*D+N*W+v*$,a[7]=g*x+T*y+N*w+v*Q,a[11]=g*_+T*P+N*B+v*oe,a[15]=g*M+T*z+N*U+v*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],E=e[3],A=e[7],p=e[11],m=e[15],g=l*h-c*d,T=o*h-c*f,N=o*d-l*f,v=s*h-c*u,C=s*d-l*u,x=s*f-o*u;return t*(A*g-p*T+m*N)-n*(E*g-p*v+m*C)+r*(E*T-A*v+m*x)-a*(E*N-A*C+p*x)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],E=e[12],A=e[13],p=e[14],m=e[15],g=t*o-n*s,T=t*l-r*s,N=t*c-a*s,v=n*l-r*o,C=n*c-a*o,x=r*c-a*l,_=u*A-f*E,M=u*p-d*E,D=u*m-h*E,y=f*p-d*A,P=f*m-h*A,z=d*m-h*p,W=g*z-T*P+N*y+v*D-C*M+x*_;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/W;return e[0]=(o*z-l*P+c*y)*w,e[1]=(r*P-n*z-a*y)*w,e[2]=(A*x-p*C+m*v)*w,e[3]=(d*C-f*x-h*v)*w,e[4]=(l*D-s*z-c*M)*w,e[5]=(t*z-r*D+a*M)*w,e[6]=(p*N-E*x-m*T)*w,e[7]=(u*x-d*N+h*T)*w,e[8]=(s*P-o*D+c*_)*w,e[9]=(n*D-t*P-a*_)*w,e[10]=(E*C-A*N+m*g)*w,e[11]=(f*N-u*C-h*g)*w,e[12]=(o*M-s*y-l*_)*w,e[13]=(t*y-n*M+r*_)*w,e[14]=(A*T-E*v-p*g)*w,e[15]=(u*v-f*T+d*g)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*s,0,c*l-r*o,u*l+r*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,f=o+o,d=a*c,h=a*u,E=a*f,A=s*u,p=s*f,m=o*f,g=l*c,T=l*u,N=l*f,v=n.x,C=n.y,x=n.z;return r[0]=(1-(A+m))*v,r[1]=(h+N)*v,r[2]=(E-T)*v,r[3]=0,r[4]=(h-N)*C,r[5]=(1-(d+m))*C,r[6]=(p+g)*C,r[7]=0,r[8]=(E+T)*x,r[9]=(p-g)*x,r[10]=(1-(d+A))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinant();if(a===0)return n.set(1,1,1),t.identity(),this;let s=Wi.set(r[0],r[1],r[2]).length();const o=Wi.set(r[4],r[5],r[6]).length(),l=Wi.set(r[8],r[9],r[10]).length();a<0&&(s=-s),gn.copy(this);const c=1/s,u=1/o,f=1/l;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,t.setFromRotationMatrix(gn),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,r,a,s,o=2e3,l=!1){const c=this.elements,u=2*a/(t-e),f=2*a/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r);let E,A;if(l)E=a/(s-a),A=s*a/(s-a);else if(o===2e3)E=-(s+a)/(s-a),A=-2*s*a/(s-a);else if(o===2001)E=-s/(s-a),A=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=E,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=2e3,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-r),d=-(t+e)/(t-e),h=-(n+r)/(n-r);let E,A;if(l)E=1/(s-a),A=s/(s-a);else if(o===2e3)E=-2/(s-a),A=-(s+a)/(s-a);else if(o===2001)E=-1/(s-a),A=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=E,c[14]=A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wi=new G,gn=new ft,uf=new G(0,0,0),df=new G(1,1,1),ti=new G,oa=new G,jt=new G,Nl=new ft,Ml=new Sr;class Fi{constructor(e=0,t=0,n=0,r=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ke(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class Fo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ff=0;const Cl=new G,Yi=new Sr,Bn=new ft,la=new G,Cr=new G,hf=new G,pf=new Sr,Rl=new G(1,0,0),vl=new G(0,1,0),xl=new G(0,0,1),yl={type:"added"},mf={type:"removed"},Xi={type:"childadded",child:null},Ss={type:"childremoved",child:null};class Gt extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new G,t=new Fi,n=new Sr,r=new G(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new De}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(vl,e)}rotateZ(e){return this.rotateOnAxis(xl,e)}translateOnAxis(e,t){return Cl.copy(e).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(vl,e)}translateZ(e){return this.translateOnAxis(xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?la.copy(e):la.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Cr,la,this.up):Bn.lookAt(la,Cr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mf),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,hf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,pf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),d=s(e.skeletons),h=s(e.animations),E=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),E.length>0&&(n.nodes=E)}return n.object=r,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new G(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Or extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Af={type:"move"};class Ts{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const A of e.hand.values()){const p=t.getJointPose(A,n),m=this._getHandJoint(c,A);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,E=.005;c.inputState.pinching&&d>h+E?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-E&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Af)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Or;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},ca={h:0,s:0,l:0};function Ns(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ze.workingColorSpace){if(e=nf(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=Ns(s,a,e+1/3),this.g=Ns(s,a,e),this.b=Ns(s,a,e-1/3)}return ze.colorSpaceToWorking(this,r),this}setStyle(e,t=fn){function n(a){a!==void 0&&parseFloat(a)<1&&Me("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Me("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const n=tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return ze.workingToColorSpace(Lt.copy(this),e),Math.round(ke(Lt.r*255,0,255))*65536+Math.round(ke(Lt.g*255,0,255))*256+Math.round(ke(Lt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(Lt.copy(this),t);const n=Lt.r,r=Lt.g,a=Lt.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=u<=.5?f/(s+o):f/(2-s-o),s){case n:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-n)/f+2;break;case a:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=fn){ze.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,r=Lt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(ca);const n=As(ni.h,ca.h,t),r=As(ni.s,ca.s,t),a=As(ni.l,ca.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ge;Ge.NAMES=tu;class Ef extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Sn=new G,Vn=new G,Ms=new G,Hn=new G,qi=new G,Zi=new G,Dl=new G,Cs=new G,Rs=new G,vs=new G,xs=new gt,ys=new gt,Ds=new gt;class Nn{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Sn.subVectors(e,t),r.cross(Sn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Sn.subVectors(r,t),Vn.subVectors(n,t),Ms.subVectors(e,t);const s=Sn.dot(Sn),o=Sn.dot(Vn),l=Sn.dot(Ms),c=Vn.dot(Vn),u=Vn.dot(Ms),f=s*c-o*o;if(f===0)return a.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,E=(s*u-o*l)*d;return a.set(1-h-E,E,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,r,a,s,o,l){return this.getBarycoord(e,t,n,r,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Hn.x),l.addScaledVector(s,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(e,t,n,r,a,s){return xs.setScalar(0),ys.setScalar(0),Ds.setScalar(0),xs.fromBufferAttribute(e,t),ys.fromBufferAttribute(e,n),Ds.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(xs,a.x),s.addScaledVector(ys,a.y),s.addScaledVector(Ds,a.z),s}static isFrontFacing(e,t,n,r){return Sn.subVectors(n,t),Vn.subVectors(e,t),Sn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Sn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Nn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;qi.subVectors(r,n),Zi.subVectors(a,n),Cs.subVectors(e,n);const l=qi.dot(Cs),c=Zi.dot(Cs);if(l<=0&&c<=0)return t.copy(n);Rs.subVectors(e,r);const u=qi.dot(Rs),f=Zi.dot(Rs);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(qi,s);vs.subVectors(e,a);const h=qi.dot(vs),E=Zi.dot(vs);if(E>=0&&h<=E)return t.copy(a);const A=h*c-l*E;if(A<=0&&c>=0&&E<=0)return o=c/(c-E),t.copy(n).addScaledVector(Zi,o);const p=u*E-h*f;if(p<=0&&f-u>=0&&h-E>=0)return Dl.subVectors(a,r),o=(f-u)/(f-u+(h-E)),t.copy(r).addScaledVector(Dl,o);const m=1/(p+A+d);return s=A*m,o=d*m,t.copy(n).addScaledVector(qi,s).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qr{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Tn):Tn.fromBufferAttribute(a,s),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),da.subVectors(this.max,Rr),Ki.subVectors(e.a,Rr),$i.subVectors(e.b,Rr),ji.subVectors(e.c,Rr),ii.subVectors($i,Ki),ri.subVectors(ji,$i),Si.subVectors(Ki,ji);let t=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-Si.z,Si.y,ii.z,0,-ii.x,ri.z,0,-ri.x,Si.z,0,-Si.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-Si.y,Si.x,0];return!bs(t,Ki,$i,ji,da)||(t=[1,0,0,0,1,0,0,0,1],!bs(t,Ki,$i,ji,da))?!1:(fa.crossVectors(ii,ri),t=[fa.x,fa.y,fa.z],bs(t,Ki,$i,ji,da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new G,new G,new G,new G,new G,new G,new G,new G],Tn=new G,ua=new Qr,Ki=new G,$i=new G,ji=new G,ii=new G,ri=new G,Si=new G,Rr=new G,da=new G,fa=new G,Ti=new G;function bs(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Ti.fromArray(i,a);const o=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const St=new G,ha=new Ke;let _f=0;class En extends Bi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_f++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array),a=Vt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class nu extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class iu extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}const If=new Qr,vr=new G,ws=new G;class ea{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):If.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);const t=vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(ws)),this.expandByPoint(vr.copy(e.center).sub(ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gf=0;const un=new ft,Ls=new Gt,Ji=new G,Jt=new Qr,xr=new Qr,vt=new G;class Zt extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jd(e)?iu:nu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new De().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return Ls.lookAt(e),Ls.updateMatrix(),this.applyMatrix4(Ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Bt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Jt.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Jt.min,xr.min),Jt.expandByPoint(vt),vt.addVectors(Jt.max,xr.max),Jt.expandByPoint(vt)):(Jt.expandByPoint(xr.min),Jt.expandByPoint(xr.max))}Jt.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)vt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(vt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)vt.fromBufferAttribute(o,c),l&&(Ji.fromBufferAttribute(e,c),vt.add(Ji)),r=Math.max(r,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new G,l[_]=new G;const c=new G,u=new G,f=new G,d=new Ke,h=new Ke,E=new Ke,A=new G,p=new G;function m(_,M,D){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,D),d.fromBufferAttribute(a,_),h.fromBufferAttribute(a,M),E.fromBufferAttribute(a,D),u.sub(c),f.sub(c),h.sub(d),E.sub(d);const y=1/(h.x*E.y-E.x*h.y);isFinite(y)&&(A.copy(u).multiplyScalar(E.y).addScaledVector(f,-h.y).multiplyScalar(y),p.copy(f).multiplyScalar(h.x).addScaledVector(u,-E.x).multiplyScalar(y),o[_].add(A),o[M].add(A),o[D].add(A),l[_].add(p),l[M].add(p),l[D].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let _=0,M=g.length;_<M;++_){const D=g[_],y=D.start,P=D.count;for(let z=y,W=y+P;z<W;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new G,N=new G,v=new G,C=new G;function x(_){v.fromBufferAttribute(r,_),C.copy(v);const M=o[_];T.copy(M),T.sub(v.multiplyScalar(v.dot(M))).normalize(),N.crossVectors(C,M);const y=N.dot(l[_])<0?-1:1;s.setXYZW(_,T.x,T.y,T.z,y)}for(let _=0,M=g.length;_<M;++_){const D=g[_],y=D.start,P=D.count;for(let z=y,W=y+P;z<W;z+=3)x(e.getX(z+0)),x(e.getX(z+1)),x(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const r=new G,a=new G,s=new G,o=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let d=0,h=e.count;d<h;d+=3){const E=e.getX(d+0),A=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,A),s.fromBufferAttribute(t,p),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),o.fromBufferAttribute(n,E),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(E,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,E=0;for(let A=0,p=l.length;A<p;A++){o.isInterleavedBufferAttribute?h=l[A]*o.data.stride+o.offset:h=l[A]*u;for(let m=0;m<u;m++)d[E++]=c[h++]}return new En(d,u,f)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Sf=0;class Tr extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Jr(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Me(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Me(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const kn=new G,Os=new G,pa=new G,ai=new G,Ps=new G,ma=new G,Us=new G;class is{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Os.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Os);const a=e.distanceTo(t)*.5,s=-this.direction.dot(pa),o=ai.dot(this.direction),l=-ai.dot(pa),c=ai.lengthSq(),u=Math.abs(1-s*s);let f,d,h,E;if(u>0)if(f=s*l-o,d=s*o-l,E=a*u,f>=0)if(d>=-E)if(d<=E){const A=1/u;f*=A,d*=A,h=f*(f+s*d+2*o)+d*(s*f+d+2*l)+c}else d=a,f=Math.max(0,-(s*d+o)),h=-f*f+d*(d+2*l)+c;else d=-a,f=Math.max(0,-(s*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-E?(f=Math.max(0,-(-s*a+o)),d=f>0?-a:Math.min(Math.max(-a,-l),a),h=-f*f+d*(d+2*l)+c):d<=E?(f=0,d=Math.min(Math.max(-a,-l),a),h=d*(d+2*l)+c):(f=Math.max(0,-(s*a+o)),d=f>0?a:Math.min(Math.max(-a,-l),a),h=-f*f+d*(d+2*l)+c);else d=s>0?-a:a,f=Math.max(0,-(s*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Os).addScaledVector(pa,d),h}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),r=kn.dot(kn)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,r,a){Ps.subVectors(t,e),ma.subVectors(n,e),Us.crossVectors(Ps,ma);let s=this.direction.dot(Us),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ai.subVectors(this.origin,e);const l=o*this.direction.dot(ma.crossVectors(ai,ma));if(l<0)return null;const c=o*this.direction.dot(Ps.cross(ai));if(c<0||l+c>s)return null;const u=-o*ai.dot(Us);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Go extends Tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bl=new ft,Ni=new is,Aa=new ea,wl=new G,Ea=new G,_a=new G,Ia=new G,Fs=new G,ga=new G,Ll=new G,Sa=new G;class _n extends Gt{constructor(e=new Zt,t=new Go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){ga.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],f=a[l];u!==0&&(Fs.fromBufferAttribute(f,e),s?ga.addScaledVector(Fs,u):ga.addScaledVector(Fs.sub(t),u))}t.add(ga)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(a),Ni.copy(e.ray).recast(e.near),!(Aa.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Aa,wl)===null||Ni.origin.distanceToSquared(wl)>(e.far-e.near)**2))&&(bl.copy(a).invert(),Ni.copy(e.ray).applyMatrix4(bl),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,d=a.groups,h=a.drawRange;if(o!==null)if(Array.isArray(s))for(let E=0,A=d.length;E<A;E++){const p=d[E],m=s[p.materialIndex],g=Math.max(p.start,h.start),T=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let N=g,v=T;N<v;N+=3){const C=o.getX(N),x=o.getX(N+1),_=o.getX(N+2);r=Ta(this,m,e,n,c,u,f,C,x,_),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const E=Math.max(0,h.start),A=Math.min(o.count,h.start+h.count);for(let p=E,m=A;p<m;p+=3){const g=o.getX(p),T=o.getX(p+1),N=o.getX(p+2);r=Ta(this,s,e,n,c,u,f,g,T,N),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let E=0,A=d.length;E<A;E++){const p=d[E],m=s[p.materialIndex],g=Math.max(p.start,h.start),T=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let N=g,v=T;N<v;N+=3){const C=N,x=N+1,_=N+2;r=Ta(this,m,e,n,c,u,f,C,x,_),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const E=Math.max(0,h.start),A=Math.min(l.count,h.start+h.count);for(let p=E,m=A;p<m;p+=3){const g=p,T=p+1,N=p+2;r=Ta(this,s,e,n,c,u,f,g,T,N),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Tf(i,e,t,n,r,a,s,o){let l;if(e.side===1?l=n.intersectTriangle(s,a,r,!0,o):l=n.intersectTriangle(r,a,s,e.side===0,o),l===null)return null;Sa.copy(o),Sa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Sa);return c<t.near||c>t.far?null:{distance:c,point:Sa.clone(),object:i}}function Ta(i,e,t,n,r,a,s,o,l,c){i.getVertexPosition(o,Ea),i.getVertexPosition(l,_a),i.getVertexPosition(c,Ia);const u=Tf(i,e,t,n,Ea,_a,Ia,Ll);if(u){const f=new G;Nn.getBarycoord(Ll,Ea,_a,Ia,f),r&&(u.uv=Nn.getInterpolatedAttribute(r,o,l,c,f,new Ke)),a&&(u.uv1=Nn.getInterpolatedAttribute(a,o,l,c,f,new Ke)),s&&(u.normal=Nn.getInterpolatedAttribute(s,o,l,c,f,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new G,materialIndex:0};Nn.getNormal(Ea,_a,Ia,d.normal),u.face=d,u.barycoord=f}return u}class ru extends Pt{constructor(e=null,t=1,n=1,r,a,s,o,l,c=1003,u=1003,f,d){super(null,s,o,l,c,u,r,a,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gs=new G,Nf=new G,Mf=new De;class xi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Gs.subVectors(n,t).cross(Nf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Gs),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mf.getNormalMatrix(e),r=this.coplanarPoint(Gs).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new ea,Cf=new Ke(.5,.5),Na=new G;class au{constructor(e=new xi,t=new xi,n=new xi,r=new xi,a=new xi,s=new xi){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],u=a[4],f=a[5],d=a[6],h=a[7],E=a[8],A=a[9],p=a[10],m=a[11],g=a[12],T=a[13],N=a[14],v=a[15];if(r[0].setComponents(c-s,h-u,m-E,v-g).normalize(),r[1].setComponents(c+s,h+u,m+E,v+g).normalize(),r[2].setComponents(c+o,h+f,m+A,v+T).normalize(),r[3].setComponents(c-o,h-f,m-A,v-T).normalize(),n)r[4].setComponents(l,d,p,N).normalize(),r[5].setComponents(c-l,h-d,m-p,v-N).normalize();else if(r[4].setComponents(c-l,h-d,m-p,v-N).normalize(),t===2e3)r[5].setComponents(c+l,h+d,m+p,v+N).normalize();else if(t===2001)r[5].setComponents(l,d,p,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);const t=Cf.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Na.x=r.normal.x>0?e.max.x:e.min.x,Na.y=r.normal.y>0?e.max.y:e.min.y,Na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ao extends Tr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wa=new G,Ya=new G,Ol=new ft,yr=new is,Ma=new ea,Bs=new G,Pl=new G;class Rf extends Gt{constructor(e=new Zt,t=new ao){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Wa.fromBufferAttribute(t,r-1),Ya.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Wa.distanceTo(Ya);e.setAttribute("lineDistance",new Bt(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),Ma.radius+=a,e.ray.intersectsSphere(Ma)===!1)return;Ol.copy(r).invert(),yr.copy(e.ray).applyMatrix4(Ol);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const h=Math.max(0,s.start),E=Math.min(u.count,s.start+s.count);for(let A=h,p=E-1;A<p;A+=c){const m=u.getX(A),g=u.getX(A+1),T=Ca(this,e,yr,l,m,g,A);T&&t.push(T)}if(this.isLineLoop){const A=u.getX(E-1),p=u.getX(h),m=Ca(this,e,yr,l,A,p,E-1);m&&t.push(m)}}else{const h=Math.max(0,s.start),E=Math.min(d.count,s.start+s.count);for(let A=h,p=E-1;A<p;A+=c){const m=Ca(this,e,yr,l,A,A+1,A);m&&t.push(m)}if(this.isLineLoop){const A=Ca(this,e,yr,l,E-1,h,E-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ca(i,e,t,n,r,a,s){const o=i.geometry.attributes.position;if(Wa.fromBufferAttribute(o,r),Ya.fromBufferAttribute(o,a),t.distanceSqToSegment(Wa,Ya,Bs,Pl)>n)return;Bs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Bs);if(!(c<e.near||c>e.far))return{distance:c,point:Pl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Ul=new G,Fl=new G;class Gl extends Rf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Ul.fromBufferAttribute(t,r),Fl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ul.distanceTo(Fl);e.setAttribute("lineDistance",new Bt(n,1))}else Me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class su extends Tr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bl=new ft,so=new is,Ra=new ea,va=new G;class vf extends Gt{constructor(e=new Zt,t=new su){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(r),Ra.radius+=a,e.ray.intersectsSphere(Ra)===!1)return;Bl.copy(r).invert(),so.copy(e.ray).applyMatrix4(Bl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,s.start),h=Math.min(c.count,s.start+s.count);for(let E=d,A=h;E<A;E++){const p=c.getX(E);va.fromBufferAttribute(f,p),Vl(va,p,l,r,e,t,this)}}else{const d=Math.max(0,s.start),h=Math.min(f.count,s.start+s.count);for(let E=d,A=h;E<A;E++)va.fromBufferAttribute(f,E),Vl(va,E,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Vl(i,e,t,n,r,a,s){const o=so.distanceSqToPoint(i);if(o<t){const l=new G;so.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class ou extends Pt{constructor(e=[],t=301,n,r,a,s,o,l,c,u){super(e,t,n,r,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bo extends Pt{constructor(e,t,n,r,a,s,o,l,c){super(e,t,n,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ur extends Pt{constructor(e,t,n=1014,r,a,s,o=1003,l=1003,c,u=1026,f=1){if(u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,a,s,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xf extends ur{constructor(e,t=1014,n=301,r,a,s=1003,o=1003,l,c=1026){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,r,a,s,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lu extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ta extends Zt{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],f=[];let d=0,h=0;E("z","y","x",-1,-1,n,t,e,s,a,0),E("z","y","x",1,-1,n,t,-e,s,a,1),E("x","z","y",1,1,e,n,t,r,s,2),E("x","z","y",1,-1,e,n,-t,r,s,3),E("x","y","z",1,-1,e,t,n,r,a,4),E("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(f,2));function E(A,p,m,g,T,N,v,C,x,_,M){const D=N/x,y=v/_,P=N/2,z=v/2,W=C/2,w=x+1,B=_+1;let U=0,$=0;const Q=new G;for(let oe=0;oe<B;oe++){const me=oe*y-z;for(let Ie=0;Ie<w;Ie++){const Be=Ie*D-P;Q[A]=Be*g,Q[p]=me*T,Q[m]=W,c.push(Q.x,Q.y,Q.z),Q[A]=0,Q[p]=0,Q[m]=C>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(Ie/x),f.push(1-oe/_),U+=1}}for(let oe=0;oe<_;oe++)for(let me=0;me<x;me++){const Ie=d+me+w*oe,Be=d+me+w*(oe+1),Ue=d+(me+1)+w*(oe+1),Ce=d+(me+1)+w*oe;l.push(Ie,Be,Ce),l.push(Be,Ue,Ce),$+=6}o.addGroup(h,$,M),h+=$,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class na extends Zt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,h=[],E=[],A=[],p=[];for(let m=0;m<u;m++){const g=m*d-s;for(let T=0;T<c;T++){const N=T*f-a;E.push(N,-g,0),A.push(0,0,1),p.push(T/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let g=0;g<o;g++){const T=g+c*m,N=g+c*(m+1),v=g+1+c*(m+1),C=g+1+c*m;h.push(T,N,C),h.push(N,v,C)}this.setIndex(h),this.setAttribute("position",new Bt(E,3)),this.setAttribute("normal",new Bt(A,3)),this.setAttribute("uv",new Bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.widthSegments,e.heightSegments)}}class rs extends Zt{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let c=0;const u=[],f=new G,d=new G,h=[],E=[],A=[],p=[];for(let m=0;m<=n;m++){const g=[],T=m/n;let N=0;m===0&&s===0?N=.5/t:m===n&&l===Math.PI&&(N=-.5/t);for(let v=0;v<=t;v++){const C=v/t;f.x=-e*Math.cos(r+C*a)*Math.sin(s+T*o),f.y=e*Math.cos(s+T*o),f.z=e*Math.sin(r+C*a)*Math.sin(s+T*o),E.push(f.x,f.y,f.z),d.copy(f).normalize(),A.push(d.x,d.y,d.z),p.push(C+N,1-T),g.push(c++)}u.push(g)}for(let m=0;m<n;m++)for(let g=0;g<t;g++){const T=u[m][g+1],N=u[m][g],v=u[m+1][g],C=u[m+1][g+1];(m!==0||s>0)&&h.push(T,N,C),(m!==n-1||l<Math.PI)&&h.push(N,v,C)}this.setIndex(h),this.setAttribute("position",new Bt(E,3)),this.setAttribute("normal",new Bt(A,3)),this.setAttribute("uv",new Bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function dr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Hl(r))r.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Hl(r[0])){const a=[];for(let s=0,o=r.length;s<o;s++)a[s]=r[s].clone();e[t][n]=a}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=dr(i[t]);for(const r in n)e[r]=n[r]}return e}function Hl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function yf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const Df={clone:dr,merge:Ft};var bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bf,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=yf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Lf extends In{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Of extends Tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pf extends Tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xa=new G,ya=new Sr,xn=new G;class uu extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xa,ya,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ya,xn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(xa,ya,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ya,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new G,zl=new Ke,kl=new Ke;class hn extends uu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,zl,kl),t.subVectors(kl,zl)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ms*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class du extends uu{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qi=-90,er=1;class Uf extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(Qi,er,e,t);r.layers=this.layers,this.add(r);const a=new hn(Qi,er,e,t);a.layers=this.layers,this.add(a);const s=new hn(Qi,er,e,t);s.layers=this.layers,this.add(s);const o=new hn(Qi,er,e,t);o.layers=this.layers,this.add(o);const l=new hn(Qi,er,e,t);l.layers=this.layers,this.add(l);const c=new hn(Qi,er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class Ff extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Wl=new ft;class Gf{constructor(e,t,n=0,r=1/0){this.ray=new is(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wl),this}intersectObject(e,t=!0,n=[]){return oo(e,this,n,t),n.sort(Yl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)oo(e[r],this,n,t);return n.sort(Yl),n}}function Yl(i,e){return i.distance-e.distance}function oo(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let s=0,o=a.length;s<o;s++)oo(a[s],e,t,!0)}}class Bf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Me("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class fu{static{fu.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=r,this}}function Xl(i,e,t,n){const r=Vf(n);switch(t){case 1021:return i*e;case 1028:return i*e/r.components*r.byteLength;case 1029:return i*e/r.components*r.byteLength;case 1030:return i*e*2/r.components*r.byteLength;case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case 1023:return i*e*4/r.components*r.byteLength;case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vf(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hu(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Hf(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((h,E)=>h.start-E.start);let d=0;for(let h=1;h<f.length;h++){const E=f[d],A=f[h];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++d,f[d]=A)}f.length=d+1;for(let h=0,E=f.length;h<E;h++){const A=f[h];i.bufferSubData(c,A.start*u.BYTES_PER_ELEMENT,u,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$f=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,th=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ch=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ph=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_h="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ih=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Th=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ch=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Oh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ph=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wh=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Yh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$h=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,np=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,op=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ep=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Up=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$p=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,am=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,om=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,um=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:zf,alphahash_pars_fragment:kf,alphamap_fragment:Wf,alphamap_pars_fragment:Yf,alphatest_fragment:Xf,alphatest_pars_fragment:qf,aomap_fragment:Zf,aomap_pars_fragment:Kf,batching_pars_vertex:$f,batching_vertex:jf,begin_vertex:Jf,beginnormal_vertex:Qf,bsdfs:eh,iridescence_fragment:th,bumpmap_pars_fragment:nh,clipping_planes_fragment:ih,clipping_planes_pars_fragment:rh,clipping_planes_pars_vertex:ah,clipping_planes_vertex:sh,color_fragment:oh,color_pars_fragment:lh,color_pars_vertex:ch,color_vertex:uh,common:dh,cube_uv_reflection_fragment:fh,defaultnormal_vertex:hh,displacementmap_pars_vertex:ph,displacementmap_vertex:mh,emissivemap_fragment:Ah,emissivemap_pars_fragment:Eh,colorspace_fragment:_h,colorspace_pars_fragment:Ih,envmap_fragment:gh,envmap_common_pars_fragment:Sh,envmap_pars_fragment:Th,envmap_pars_vertex:Nh,envmap_physical_pars_fragment:Oh,envmap_vertex:Mh,fog_vertex:Ch,fog_pars_vertex:Rh,fog_fragment:vh,fog_pars_fragment:xh,gradientmap_pars_fragment:yh,lightmap_pars_fragment:Dh,lights_lambert_fragment:bh,lights_lambert_pars_fragment:wh,lights_pars_begin:Lh,lights_toon_fragment:Ph,lights_toon_pars_fragment:Uh,lights_phong_fragment:Fh,lights_phong_pars_fragment:Gh,lights_physical_fragment:Bh,lights_physical_pars_fragment:Vh,lights_fragment_begin:Hh,lights_fragment_maps:zh,lights_fragment_end:kh,lightprobes_pars_fragment:Wh,logdepthbuf_fragment:Yh,logdepthbuf_pars_fragment:Xh,logdepthbuf_pars_vertex:qh,logdepthbuf_vertex:Zh,map_fragment:Kh,map_pars_fragment:$h,map_particle_fragment:jh,map_particle_pars_fragment:Jh,metalnessmap_fragment:Qh,metalnessmap_pars_fragment:ep,morphinstance_vertex:tp,morphcolor_vertex:np,morphnormal_vertex:ip,morphtarget_pars_vertex:rp,morphtarget_vertex:ap,normal_fragment_begin:sp,normal_fragment_maps:op,normal_pars_fragment:lp,normal_pars_vertex:cp,normal_vertex:up,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:pp,iridescence_pars_fragment:mp,opaque_fragment:Ap,packing:Ep,premultiplied_alpha_fragment:_p,project_vertex:Ip,dithering_fragment:gp,dithering_pars_fragment:Sp,roughnessmap_fragment:Tp,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Mp,shadowmap_pars_vertex:Cp,shadowmap_vertex:Rp,shadowmask_pars_fragment:vp,skinbase_vertex:xp,skinning_pars_vertex:yp,skinning_vertex:Dp,skinnormal_vertex:bp,specularmap_fragment:wp,specularmap_pars_fragment:Lp,tonemapping_fragment:Op,tonemapping_pars_fragment:Pp,transmission_fragment:Up,transmission_pars_fragment:Fp,uv_pars_fragment:Gp,uv_pars_vertex:Bp,uv_vertex:Vp,worldpos_vertex:Hp,background_vert:zp,background_frag:kp,backgroundCube_vert:Wp,backgroundCube_frag:Yp,cube_vert:Xp,cube_frag:qp,depth_vert:Zp,depth_frag:Kp,distance_vert:$p,distance_frag:jp,equirect_vert:Jp,equirect_frag:Qp,linedashed_vert:em,linedashed_frag:tm,meshbasic_vert:nm,meshbasic_frag:im,meshlambert_vert:rm,meshlambert_frag:am,meshmatcap_vert:sm,meshmatcap_frag:om,meshnormal_vert:lm,meshnormal_frag:cm,meshphong_vert:um,meshphong_frag:dm,meshphysical_vert:fm,meshphysical_frag:hm,meshtoon_vert:pm,meshtoon_frag:mm,points_vert:Am,points_frag:Em,shadow_vert:_m,shadow_frag:Im,sprite_vert:gm,sprite_frag:Sm},ce={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},bn={basic:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ft([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ft([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ft([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ft([ce.points,ce.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ft([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ft([ce.common,ce.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ft([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ft([ce.sprite,ce.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Ft([ce.common,ce.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Ft([ce.lights,ce.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};bn.physical={uniforms:Ft([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Da={r:0,b:0,g:0},Tm=new ft,pu=new De;pu.set(-1,0,0,0,1,0,0,0,1);function Nm(i,e,t,n,r,a){const s=new Ge(0);let o=r===!0?0:1,l,c,u=null,f=0,d=null;function h(g){let T=g.isScene===!0?g.background:null;if(T&&T.isTexture){const N=g.backgroundBlurriness>0;T=e.get(T,N)}return T}function E(g){let T=!1;const N=h(g);N===null?p(s,o):N&&N.isColor&&(p(N,1),T=!0);const v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(g,T){const N=h(T);N&&(N.isCubeTexture||N.mapping===306)?(c===void 0&&(c=new _n(new ta(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:dr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=N,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(T.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pu),c.material.toneMapped=ze.getTransfer(N.colorSpace)!==Ze,(u!==N||f!==N.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=N,f=N.version,d=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):N&&N.isTexture&&(l===void 0&&(l=new _n(new na(2,2),new In({name:"BackgroundMaterial",uniforms:dr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=N,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ze.getTransfer(N.colorSpace)!==Ze,N.matrixAutoUpdate===!0&&N.updateMatrix(),l.material.uniforms.uvTransform.value.copy(N.matrix),(u!==N||f!==N.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=N,f=N.version,d=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function p(g,T){g.getRGB(Da,cu(i)),t.buffers.color.setClear(Da.r,Da.g,Da.b,T,a)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(g,T=1){s.set(g),o=T,p(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,p(s,o)},render:E,addToRenderList:A,dispose:m}}function Mm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let a=r,s=!1;function o(y,P,z,W,w){let B=!1;const U=f(y,W,z,P);a!==U&&(a=U,c(a.object)),B=h(y,W,z,w),B&&E(y,W,z,w),w!==null&&e.update(w,i.ELEMENT_ARRAY_BUFFER),(B||s)&&(s=!1,N(y,P,z,W),w!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function f(y,P,z,W){const w=W.wireframe===!0;let B=n[P.id];B===void 0&&(B={},n[P.id]=B);const U=y.isInstancedMesh===!0?y.id:0;let $=B[U];$===void 0&&($={},B[U]=$);let Q=$[z.id];Q===void 0&&(Q={},$[z.id]=Q);let oe=Q[w];return oe===void 0&&(oe=d(l()),Q[w]=oe),oe}function d(y){const P=[],z=[],W=[];for(let w=0;w<t;w++)P[w]=0,z[w]=0,W[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:W,object:y,attributes:{},index:null}}function h(y,P,z,W){const w=a.attributes,B=P.attributes;let U=0;const $=z.getAttributes();for(const Q in $)if($[Q].location>=0){const me=w[Q];let Ie=B[Q];if(Ie===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(Ie=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(Ie=y.instanceColor)),me===void 0||me.attribute!==Ie||Ie&&me.data!==Ie.data)return!0;U++}return a.attributesNum!==U||a.index!==W}function E(y,P,z,W){const w={},B=P.attributes;let U=0;const $=z.getAttributes();for(const Q in $)if($[Q].location>=0){let me=B[Q];me===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(me=y.instanceColor));const Ie={};Ie.attribute=me,me&&me.data&&(Ie.data=me.data),w[Q]=Ie,U++}a.attributes=w,a.attributesNum=U,a.index=W}function A(){const y=a.newAttributes;for(let P=0,z=y.length;P<z;P++)y[P]=0}function p(y){m(y,0)}function m(y,P){const z=a.newAttributes,W=a.enabledAttributes,w=a.attributeDivisors;z[y]=1,W[y]===0&&(i.enableVertexAttribArray(y),W[y]=1),w[y]!==P&&(i.vertexAttribDivisor(y,P),w[y]=P)}function g(){const y=a.newAttributes,P=a.enabledAttributes;for(let z=0,W=P.length;z<W;z++)P[z]!==y[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function T(y,P,z,W,w,B,U){U===!0?i.vertexAttribIPointer(y,P,z,w,B):i.vertexAttribPointer(y,P,z,W,w,B)}function N(y,P,z,W){A();const w=W.attributes,B=z.getAttributes(),U=P.defaultAttributeValues;for(const $ in B){const Q=B[$];if(Q.location>=0){let oe=w[$];if(oe===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),oe!==void 0){const me=oe.normalized,Ie=oe.itemSize,Be=e.get(oe);if(Be===void 0)continue;const Ue=Be.buffer,Ce=Be.type,K=Be.bytesPerElement,fe=Ce===i.INT||Ce===i.UNSIGNED_INT||oe.gpuType===1013;if(oe.isInterleavedBufferAttribute){const ie=oe.data,Re=ie.stride,ye=oe.offset;if(ie.isInstancedInterleavedBuffer){for(let ve=0;ve<Q.locationSize;ve++)m(Q.location+ve,ie.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ve=0;ve<Q.locationSize;ve++)p(Q.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let ve=0;ve<Q.locationSize;ve++)T(Q.location+ve,Ie/Q.locationSize,Ce,me,Re*K,(ye+Ie/Q.locationSize*ve)*K,fe)}else{if(oe.isInstancedBufferAttribute){for(let ie=0;ie<Q.locationSize;ie++)m(Q.location+ie,oe.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ie=0;ie<Q.locationSize;ie++)p(Q.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let ie=0;ie<Q.locationSize;ie++)T(Q.location+ie,Ie/Q.locationSize,Ce,me,Ie*K,Ie/Q.locationSize*ie*K,fe)}}else if(U!==void 0){const me=U[$];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(Q.location,me);break;case 3:i.vertexAttrib3fv(Q.location,me);break;case 4:i.vertexAttrib4fv(Q.location,me);break;default:i.vertexAttrib1fv(Q.location,me)}}}}g()}function v(){M();for(const y in n){const P=n[y];for(const z in P){const W=P[z];for(const w in W){const B=W[w];for(const U in B)u(B[U].object),delete B[U];delete W[w]}}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const z in P){const W=P[z];for(const w in W){const B=W[w];for(const U in B)u(B[U].object),delete B[U];delete W[w]}}delete n[y.id]}function x(y){for(const P in n){const z=n[P];for(const W in z){const w=z[W];if(w[y.id]===void 0)continue;const B=w[y.id];for(const U in B)u(B[U].object),delete B[U];delete w[y.id]}}}function _(y){for(const P in n){const z=n[P],W=y.isInstancedMesh===!0?y.id:0,w=z[W];if(w!==void 0){for(const B in w){const U=w[B];for(const $ in U)u(U[$].object),delete U[$];delete w[B]}delete z[W],Object.keys(z).length===0&&delete n[P]}}}function M(){D(),s=!0,a!==r&&(a=r,c(a.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:D,dispose:v,releaseStatesOfGeometry:C,releaseStatesOfObject:_,releaseStatesOfProgram:x,initAttributes:A,enableAttribute:p,disableUnusedAttributes:g}}function Cm(i,e,t){let n;function r(l){n=l}function a(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function s(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];t.update(d,n,1)}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function Rm(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(x){return!(x!==1023&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const _=x===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==1009&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&x!==1015&&!_)}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Me("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),N=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:g,maxVaryings:T,maxFragmentUniforms:N,maxSamples:v,samples:C}}function vm(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new xi,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||r;return r=d,n=f.length,h},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const E=f.clippingPlanes,A=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!r||E===null||E.length===0||a&&!p)a?u(null):c();else{const g=a?0:n,T=g*4;let N=m.clippingState||null;l.value=N,N=u(E,d,T,h);for(let v=0;v!==T;++v)N[v]=t[v];m.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,E){const A=f!==null?f.length:0;let p=null;if(A!==0){if(p=l.value,E!==!0||p===null){const m=h+A*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,N=h;T!==A;++T,N+=4)s.copy(f[T]).applyMatrix4(g,o),s.normal.toArray(p,N),p[N+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,p}}const li=4,ql=[.125,.215,.35,.446,.526,.582],Di=20,xm=256,Dr=new du,Zl=new Ge;let Vs=null,Hs=0,zs=0,ks=!1;const ym=new G;class Kl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:s=256,position:o=ym}=a;Vs=this._renderer.getRenderTarget(),Hs=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel(),ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vs,Hs,zs),this._renderer.xr.enabled=ks,e.scissorTest=!1,tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vs=this._renderer.getRenderTarget(),Hs=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel(),ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Ha,depthBuffer:!1},r=$l(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$l(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Dm(a)),this._blurMaterial=wm(a,e,t),this._ggxMaterial=bm(a,e,t)}return r}_compileMaterial(e){const t=new _n(new Zt,e);this._renderer.compile(t,Dr)}_sceneToCubeUV(e,t,n,r,a){const l=new hn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Zl),f.toneMapping=0,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new ta,new Go({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,p=A.material;let m=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,m=!0):(p.color.copy(Zl),m=!0);for(let T=0;T<6;T++){const N=T%3;N===0?(l.up.set(0,c[T],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[T],a.y,a.z)):N===1?(l.up.set(0,0,c[T]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[T],a.z)):(l.up.set(0,c[T],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[T]));const v=this._cubeSize;tr(r,N*v,T>2?v:0,v,v),f.setRenderTarget(r),m&&f.render(A,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;tr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Dr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const l=s.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:E}=this,A=this._sizeLods[n],p=3*A*(n>E-li?n-E+li:0),m=4*(this._cubeSize-A);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=E-t,tr(a,p,m,3*A,2*A),r.setRenderTarget(a),r.render(o,Dr),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=E-n,tr(e,p,m,3*A,2*A),r.setRenderTarget(e),r.render(o,Dr)}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*h):2*Math.PI/(2*Di-1),A=a/E,p=isFinite(a)?1+Math.floor(u*A):Di;p>Di&&Me(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Di}`);const m=[];let g=0;for(let x=0;x<Di;++x){const _=x/A,M=Math.exp(-_*_/2);m.push(M),x===0?g+=M:x<p&&(g+=2*M)}for(let x=0;x<m.length;x++)m[x]=m[x]/g;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=E,d.mipInt.value=T-n;const N=this._sizeLods[r],v=3*N*(r>T-li?r-T+li:0),C=4*(this._cubeSize-N);tr(t,v,C,3*N,2*N),l.setRenderTarget(t),l.render(f,Dr)}}function Dm(i){const e=[],t=[],n=[];let r=i;const a=i-li+1+ql.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let l=1/o;s>i-li?l=ql[s-i+li-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,E=6,A=3,p=2,m=1,g=new Float32Array(A*E*h),T=new Float32Array(p*E*h),N=new Float32Array(m*E*h);for(let C=0;C<h;C++){const x=C%3*2/3-1,_=C>2?0:-1,M=[x,_,0,x+2/3,_,0,x+2/3,_+1,0,x,_,0,x+2/3,_+1,0,x,_+1,0];g.set(M,A*E*C),T.set(d,p*E*C);const D=[C,C,C,C,C,C];N.set(D,m*E*C)}const v=new Zt;v.setAttribute("position",new En(g,A)),v.setAttribute("uv",new En(T,p)),v.setAttribute("faceIndex",new En(N,m)),n.push(new _n(v,null)),r>li&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function $l(i,e,t){const n=new Un(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function bm(i,e,t){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:as(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wm(i,e,t){const n=new Float32Array(Di),r=new G(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function jl(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Jl(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function as(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class mu extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ou(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ta(5,5,5),a=new In({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;const s=new _n(r,a),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Uf(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}function Lm(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,h=!1){return d==null?null:h?s(d):a(d)}function a(d){if(d&&d.isTexture){const h=d.mapping;if(h===303||h===304)if(e.has(d)){const E=e.get(d).texture;return o(E,d.mapping)}else{const E=d.image;if(E&&E.height>0){const A=new mu(E.height);return A.fromEquirectangularTexture(i,d),e.set(d,A),d.addEventListener("dispose",c),o(A.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){const h=d.mapping,E=h===303||h===304,A=h===301||h===302;if(E||A){let p=t.get(d);const m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Kl(i)),p=E?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const g=d.image;return E&&g&&g.height>0||A&&g&&l(g)?(n===null&&(n=new Kl(i)),p=E?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,h){return h===303?d.mapping=301:h===304&&(d.mapping=302),d}function l(d){let h=0;const E=6;for(let A=0;A<E;A++)d[A]!==void 0&&h++;return h===E}function c(d){const h=d.target;h.removeEventListener("dispose",c);const E=e.get(h);E!==void 0&&(e.delete(h),E.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const E=t.get(h);E!==void 0&&(t.delete(h),E.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Om(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&io("WebGLRenderer: "+n+" extension not supported."),r}}}function Pm(i,e,t,n){const r={},a=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const E in d.attributes)e.remove(d.attributes[E]);d.removeEventListener("dispose",s),delete r[d.id];const h=a.get(d);h&&(e.remove(h),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],i.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,E=f.attributes.position;let A=0;if(E===void 0)return;if(h!==null){const g=h.array;A=h.version;for(let T=0,N=g.length;T<N;T+=3){const v=g[T+0],C=g[T+1],x=g[T+2];d.push(v,C,C,x,x,v)}}else{const g=E.array;A=E.version;for(let T=0,N=g.length/3-1;T<N;T+=3){const v=T+0,C=T+1,x=T+2;d.push(v,C,C,x,x,v)}}const p=new(E.count>=65535?iu:nu)(d,1);p.version=A;const m=a.get(f);m&&e.remove(m),a.set(f,p)}function u(f){const d=a.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Um(i,e,t){let n;function r(f){n=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function l(f,d){i.drawElements(n,d,a,f*s),t.update(d,n,1)}function c(f,d,h){h!==0&&(i.drawElementsInstanced(n,d,a,f*s,h),t.update(d,n,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,a,f,0,h);let A=0;for(let p=0;p<h;p++)A+=d[p];t.update(A,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Fm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:Ye("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Gm(i,e,t){const n=new WeakMap,r=new gt;function a(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let D=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",D)};var h=D;d!==void 0&&d.texture.dispose();const E=o.morphAttributes.position!==void 0,A=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let N=0;E===!0&&(N=1),A===!0&&(N=2),p===!0&&(N=3);let v=o.attributes.position.count*N,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const x=new Float32Array(v*C*4*f),_=new eu(x,v,C,f);_.type=1015,_.needsUpdate=!0;const M=N*4;for(let y=0;y<f;y++){const P=m[y],z=g[y],W=T[y],w=v*C*4*y;for(let B=0;B<P.count;B++){const U=B*M;E===!0&&(r.fromBufferAttribute(P,B),x[w+U+0]=r.x,x[w+U+1]=r.y,x[w+U+2]=r.z,x[w+U+3]=0),A===!0&&(r.fromBufferAttribute(z,B),x[w+U+4]=r.x,x[w+U+5]=r.y,x[w+U+6]=r.z,x[w+U+7]=0),p===!0&&(r.fromBufferAttribute(W,B),x[w+U+8]=r.x,x[w+U+9]=r.y,x[w+U+10]=r.z,x[w+U+11]=W.itemSize===4?r.w:1)}}d={count:f,texture:_,size:new Ke(v,C)},n.set(o,d),o.addEventListener("dispose",D)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let E=0;for(let p=0;p<c.length;p++)E+=c[p];const A=o.morphTargetsRelative?1:1-E;l.getUniforms().setValue(i,"morphTargetBaseInfluence",A),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function Bm(i,e,t,n,r){let a=new WeakMap;function s(c){const u=r.render.frame,f=c.geometry,d=e.get(c,f);if(a.get(d)!==u&&(e.update(d),a.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;a.get(h)!==u&&(h.update(),a.set(h,u))}return d}function o(){a=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Vm={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Hm(i,e,t,n,r){const a=new Un(e,t,{type:i,depthBuffer:n,stencilBuffer:r,depthTexture:n?new ur(e,t):void 0}),s=new Un(e,t,{type:1016,depthBuffer:!1,stencilBuffer:!1}),o=new Zt;o.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Bt([0,2,0,0,2,0],2));const l=new Lf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new _n(o,l),u=new du(-1,1,1,-1,0,1);let f=null,d=null,h=!1,E,A=null,p=[],m=!1;this.setSize=function(g,T){a.setSize(g,T),s.setSize(g,T);for(let N=0;N<p.length;N++){const v=p[N];v.setSize&&v.setSize(g,T)}},this.setEffects=function(g){p=g,m=p.length>0&&p[0].isRenderPass===!0;const T=a.width,N=a.height;for(let v=0;v<p.length;v++){const C=p[v];C.setSize&&C.setSize(T,N)}},this.begin=function(g,T){if(h||g.toneMapping===0&&p.length===0)return!1;if(A=T,T!==null){const N=T.width,v=T.height;(a.width!==N||a.height!==v)&&this.setSize(N,v)}return m===!1&&g.setRenderTarget(a),E=g.toneMapping,g.toneMapping=0,!0},this.hasRenderPass=function(){return m},this.end=function(g,T){g.toneMapping=E,h=!0;let N=a,v=s;for(let C=0;C<p.length;C++){const x=p[C];if(x.enabled!==!1&&(x.render(g,v,N,T),x.needsSwap!==!1)){const _=N;N=v,v=_}}if(f!==g.outputColorSpace||d!==g.toneMapping){f=g.outputColorSpace,d=g.toneMapping,l.defines={},ze.getTransfer(f)===Ze&&(l.defines.SRGB_TRANSFER="");const C=Vm[d];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=N.texture,g.setRenderTarget(A),g.render(c,u),A=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),s.dispose(),o.dispose(),l.dispose()}}const Au=new Pt,lo=new ur(1,1),Eu=new eu,_u=new cf,Iu=new ou,Ql=[],ec=[],tc=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function Nr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Ql[r];if(a===void 0&&(a=new Float32Array(r),Ql[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ss(i,e){let t=ec[e];t===void 0&&(t=new Int32Array(e),ec[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function Ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function Xm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;ic.set(n),i.uniformMatrix2fv(this.addr,!1,ic),Rt(t,n)}}function qm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;nc.set(n),i.uniformMatrix3fv(this.addr,!1,nc),Rt(t,n)}}function Zm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;tc.set(n),i.uniformMatrix4fv(this.addr,!1,tc),Rt(t,n)}}function Km(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function Jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function Qm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function eA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function tA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function nA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function iA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(lo.compareFunction=t.isReversedDepthBuffer()?518:515,a=lo):a=Au,t.setTexture2D(e||a,r)}function rA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||_u,r)}function aA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Iu,r)}function sA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Eu,r)}function oA(i){switch(i){case 5126:return zm;case 35664:return km;case 35665:return Wm;case 35666:return Ym;case 35674:return Xm;case 35675:return qm;case 35676:return Zm;case 5124:case 35670:return Km;case 35667:case 35671:return $m;case 35668:case 35672:return jm;case 35669:case 35673:return Jm;case 5125:return Qm;case 36294:return eA;case 36295:return tA;case 36296:return nA;case 35678:case 36198:case 36298:case 36306:case 35682:return iA;case 35679:case 36299:case 36307:return rA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return sA}}function lA(i,e){i.uniform1fv(this.addr,e)}function cA(i,e){const t=Nr(e,this.size,2);i.uniform2fv(this.addr,t)}function uA(i,e){const t=Nr(e,this.size,3);i.uniform3fv(this.addr,t)}function dA(i,e){const t=Nr(e,this.size,4);i.uniform4fv(this.addr,t)}function fA(i,e){const t=Nr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hA(i,e){const t=Nr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pA(i,e){const t=Nr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mA(i,e){i.uniform1iv(this.addr,e)}function AA(i,e){i.uniform2iv(this.addr,e)}function EA(i,e){i.uniform3iv(this.addr,e)}function _A(i,e){i.uniform4iv(this.addr,e)}function IA(i,e){i.uniform1uiv(this.addr,e)}function gA(i,e){i.uniform2uiv(this.addr,e)}function SA(i,e){i.uniform3uiv(this.addr,e)}function TA(i,e){i.uniform4uiv(this.addr,e)}function NA(i,e,t){const n=this.cache,r=e.length,a=ss(t,r);Ct(n,a)||(i.uniform1iv(this.addr,a),Rt(n,a));let s;this.type===i.SAMPLER_2D_SHADOW?s=lo:s=Au;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||s,a[o])}function MA(i,e,t){const n=this.cache,r=e.length,a=ss(t,r);Ct(n,a)||(i.uniform1iv(this.addr,a),Rt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||_u,a[s])}function CA(i,e,t){const n=this.cache,r=e.length,a=ss(t,r);Ct(n,a)||(i.uniform1iv(this.addr,a),Rt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Iu,a[s])}function RA(i,e,t){const n=this.cache,r=e.length,a=ss(t,r);Ct(n,a)||(i.uniform1iv(this.addr,a),Rt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Eu,a[s])}function vA(i){switch(i){case 5126:return lA;case 35664:return cA;case 35665:return uA;case 35666:return dA;case 35674:return fA;case 35675:return hA;case 35676:return pA;case 5124:case 35670:return mA;case 35667:case 35671:return AA;case 35668:case 35672:return EA;case 35669:case 35673:return _A;case 5125:return IA;case 36294:return gA;case 36295:return SA;case 36296:return TA;case 35678:case 36198:case 36298:case 36306:case 35682:return NA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return CA;case 36289:case 36303:case 36311:case 36292:return RA}}class xA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oA(t.type)}}class yA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vA(t.type)}}class DA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const Ws=/(\w+)(\])?(\[|\.)?/g;function rc(i,e){i.seq.push(e),i.map[e.id]=e}function bA(i,e,t){const n=i.name,r=n.length;for(Ws.lastIndex=0;;){const a=Ws.exec(n),s=Ws.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){rc(t,c===void 0?new xA(o,i,e):new yA(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new DA(o),rc(t,f)),t=f}}}class Oa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);bA(o,l,this)}const r=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function ac(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const wA=37297;let LA=0;function OA(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const sc=new De;function PA(i){ze._getMatrix(sc,ze.workingColorSpace,i);const e=`mat3( ${sc.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(i)){case za:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function oc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+OA(i.getShaderSource(e),o)}else return a}function UA(i,e){const t=PA(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const FA={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function GA(i,e){const t=FA[e];return t===void 0?(Me("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ba=new G;function BA(){ze.getLuminanceCoefficients(ba);const i=ba.x.toFixed(4),e=ba.y.toFixed(4),t=ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function HA(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zA(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Pr(i){return i!==""}function lc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kA=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(i){return i.replace(kA,YA)}const WA=new Map;function YA(i,e){let t=Oe[e];if(t===void 0){const n=WA.get(e);if(n!==void 0)t=Oe[n],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return co(t)}const XA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(i){return i.replace(XA,qA)}function qA(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function dc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ZA={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function KA(i){return ZA[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $A={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function jA(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":$A[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const JA={302:"ENVMAP_MODE_REFRACTION"};function QA(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":JA[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eE={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function tE(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":eE[i.combine]||"ENVMAP_BLENDING_NONE"}function nE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iE(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=KA(t),c=jA(t),u=QA(t),f=tE(t),d=nE(t),h=VA(t),E=HA(a),A=r.createProgram();let p,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Pr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Pr).join(`
`),m.length>0&&(m+=`
`)):(p=[dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),m=[dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Oe.tonemapping_pars_fragment:"",t.toneMapping!==0?GA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,UA("linearToOutputTexel",t.outputColorSpace),BA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),s=co(s),s=lc(s,t),s=cc(s,t),o=co(o),o=lc(o,t),o=cc(o,t),s=uc(s),o=uc(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=g+p+s,N=g+m+o,v=ac(r,r.VERTEX_SHADER,T),C=ac(r,r.FRAGMENT_SHADER,N);r.attachShader(A,v),r.attachShader(A,C),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function x(y){if(i.debug.checkShaderErrors){const P=r.getProgramInfoLog(A)||"",z=r.getShaderInfoLog(v)||"",W=r.getShaderInfoLog(C)||"",w=P.trim(),B=z.trim(),U=W.trim();let $=!0,Q=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,v,C);else{const oe=oc(r,v,"vertex"),me=oc(r,C,"fragment");Ye("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+w+`
`+oe+`
`+me)}else w!==""?Me("WebGLProgram: Program Info Log:",w):(B===""||U==="")&&(Q=!1);Q&&(y.diagnostics={runnable:$,programLog:w,vertexShader:{log:B,prefix:p},fragmentShader:{log:U,prefix:m}})}r.deleteShader(v),r.deleteShader(C),_=new Oa(r,A),M=zA(r,A)}let _;this.getUniforms=function(){return _===void 0&&x(this),_};let M;this.getAttributes=function(){return M===void 0&&x(this),M};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(A,wA)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=v,this.fragmentShader=C,this}let rE=0;class aE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sE(e),t.set(e,n)),n}}class sE{constructor(e){this.id=rE++,this.code=e,this.usedTimes=0}}function oE(i){return i===1030||i===37490||i===36285}function lE(i,e,t,n,r,a){const s=new Fo,o=new aE,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let d=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(_){return l.add(_),_===0?"uv":`uv${_}`}function A(_,M,D,y,P,z){const W=y.fog,w=P.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?y.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,$=e.get(_.envMap||B,U),Q=$&&$.mapping===306?$.image.height:null,oe=h[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Me("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const me=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,Ie=me!==void 0?me.length:0;let Be=0;w.morphAttributes.position!==void 0&&(Be=1),w.morphAttributes.normal!==void 0&&(Be=2),w.morphAttributes.color!==void 0&&(Be=3);let Ue,Ce,K,fe;if(oe){const be=bn[oe];Ue=be.vertexShader,Ce=be.fragmentShader}else Ue=_.vertexShader,Ce=_.fragmentShader,o.update(_),K=o.getVertexShaderID(_),fe=o.getFragmentShaderID(_);const ie=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),ye=P.isInstancedMesh===!0,ve=P.isBatchedMesh===!0,ot=!!_.map,Ve=!!_.matcap,$e=!!$,at=!!_.aoMap,Fe=!!_.lightMap,Nt=!!_.bumpMap,lt=!!_.normalMap,Kt=!!_.displacementMap,L=!!_.emissiveMap,Mt=!!_.metalnessMap,He=!!_.roughnessMap,it=_.anisotropy>0,le=_.clearcoat>0,ht=_.dispersion>0,R=_.iridescence>0,I=_.sheen>0,F=_.transmission>0,q=it&&!!_.anisotropyMap,J=le&&!!_.clearcoatMap,ee=le&&!!_.clearcoatNormalMap,se=le&&!!_.clearcoatRoughnessMap,Y=R&&!!_.iridescenceMap,Z=R&&!!_.iridescenceThicknessMap,he=I&&!!_.sheenColorMap,Ee=I&&!!_.sheenRoughnessMap,re=!!_.specularMap,te=!!_.specularColorMap,xe=!!_.specularIntensityMap,Le=F&&!!_.transmissionMap,qe=F&&!!_.thicknessMap,b=!!_.gradientMap,ne=!!_.alphaMap,X=_.alphaTest>0,pe=!!_.alphaHash,ae=!!_.extensions;let j=0;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(j=i.toneMapping);const Se={shaderID:oe,shaderType:_.type,shaderName:_.name,vertexShader:Ue,fragmentShader:Ce,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:fe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:ve,batchingColor:ve&&P._colorsTexture!==null,instancing:ye,instancingColor:ye&&P.instanceColor!==null,instancingMorph:ye&&P.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ot,matcap:Ve,envMap:$e,envMapMode:$e&&$.mapping,envMapCubeUVHeight:Q,aoMap:at,lightMap:Fe,bumpMap:Nt,normalMap:lt,displacementMap:Kt,emissiveMap:L,normalMapObjectSpace:lt&&_.normalMapType===1,normalMapTangentSpace:lt&&_.normalMapType===0,packedNormalMap:lt&&_.normalMapType===0&&oE(_.normalMap.format),metalnessMap:Mt,roughnessMap:He,anisotropy:it,anisotropyMap:q,clearcoat:le,clearcoatMap:J,clearcoatNormalMap:ee,clearcoatRoughnessMap:se,dispersion:ht,iridescence:R,iridescenceMap:Y,iridescenceThicknessMap:Z,sheen:I,sheenColorMap:he,sheenRoughnessMap:Ee,specularMap:re,specularColorMap:te,specularIntensityMap:xe,transmission:F,transmissionMap:Le,thicknessMap:qe,gradientMap:b,opaque:_.transparent===!1&&_.blending===1&&_.alphaToCoverage===!1,alphaMap:ne,alphaTest:X,alphaHash:pe,combine:_.combine,mapUv:ot&&E(_.map.channel),aoMapUv:at&&E(_.aoMap.channel),lightMapUv:Fe&&E(_.lightMap.channel),bumpMapUv:Nt&&E(_.bumpMap.channel),normalMapUv:lt&&E(_.normalMap.channel),displacementMapUv:Kt&&E(_.displacementMap.channel),emissiveMapUv:L&&E(_.emissiveMap.channel),metalnessMapUv:Mt&&E(_.metalnessMap.channel),roughnessMapUv:He&&E(_.roughnessMap.channel),anisotropyMapUv:q&&E(_.anisotropyMap.channel),clearcoatMapUv:J&&E(_.clearcoatMap.channel),clearcoatNormalMapUv:ee&&E(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&E(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&E(_.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&E(_.iridescenceThicknessMap.channel),sheenColorMapUv:he&&E(_.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&E(_.sheenRoughnessMap.channel),specularMapUv:re&&E(_.specularMap.channel),specularColorMapUv:te&&E(_.specularColorMap.channel),specularIntensityMapUv:xe&&E(_.specularIntensityMap.channel),transmissionMapUv:Le&&E(_.transmissionMap.channel),thicknessMapUv:qe&&E(_.thicknessMap.channel),alphaMapUv:ne&&E(_.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(lt||it),vertexNormals:!!w.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!w.attributes.uv&&(ot||ne),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||w.attributes.normal===void 0&&lt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Re,skinning:P.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:j,decodeVideoTexture:ot&&_.map.isVideoTexture===!0&&ze.getTransfer(_.map.colorSpace)===Ze,decodeVideoTextureEmissive:L&&_.emissiveMap.isVideoTexture===!0&&ze.getTransfer(_.emissiveMap.colorSpace)===Ze,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===2,flipSided:_.side===1,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function p(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)M.push(D),M.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(m(M,_),g(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function m(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function g(_,M){s.disableAll(),M.instancing&&s.enable(0),M.instancingColor&&s.enable(1),M.instancingMorph&&s.enable(2),M.matcap&&s.enable(3),M.envMap&&s.enable(4),M.normalMapObjectSpace&&s.enable(5),M.normalMapTangentSpace&&s.enable(6),M.clearcoat&&s.enable(7),M.iridescence&&s.enable(8),M.alphaTest&&s.enable(9),M.vertexColors&&s.enable(10),M.vertexAlphas&&s.enable(11),M.vertexUv1s&&s.enable(12),M.vertexUv2s&&s.enable(13),M.vertexUv3s&&s.enable(14),M.vertexTangents&&s.enable(15),M.anisotropy&&s.enable(16),M.alphaHash&&s.enable(17),M.batching&&s.enable(18),M.dispersion&&s.enable(19),M.batchingColor&&s.enable(20),M.gradientMap&&s.enable(21),M.packedNormalMap&&s.enable(22),M.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.reversedDepthBuffer&&s.enable(4),M.skinning&&s.enable(5),M.morphTargets&&s.enable(6),M.morphNormals&&s.enable(7),M.morphColors&&s.enable(8),M.premultipliedAlpha&&s.enable(9),M.shadowMapEnabled&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.transmission&&s.enable(15),M.sheen&&s.enable(16),M.opaque&&s.enable(17),M.pointsUvs&&s.enable(18),M.decodeVideoTexture&&s.enable(19),M.decodeVideoTextureEmissive&&s.enable(20),M.alphaToCoverage&&s.enable(21),M.numLightProbeGrids>0&&s.enable(22),_.push(s.mask)}function T(_){const M=h[_.type];let D;if(M){const y=bn[M];D=Df.clone(y.uniforms)}else D=_.uniforms;return D}function N(_,M){let D=u.get(M);return D!==void 0?++D.usedTimes:(D=new iE(i,M,_,r),c.push(D),u.set(M,D)),D}function v(_){if(--_.usedTimes===0){const M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function C(_){o.remove(_)}function x(){o.dispose()}return{getParameters:A,getProgramCacheKey:p,getUniforms:T,acquireProgram:N,releaseProgram:v,releaseShaderCache:C,programs:c,dispose:x}}function cE(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,l){i.get(s)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function uE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function fc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hc(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,E,A,p,m){let g=i[e];return g===void 0?(g={id:d.id,object:d,geometry:h,material:E,materialVariant:s(d),groupOrder:A,renderOrder:d.renderOrder,z:p,group:m},i[e]=g):(g.id=d.id,g.object=d,g.geometry=h,g.material=E,g.materialVariant=s(d),g.groupOrder=A,g.renderOrder=d.renderOrder,g.z=p,g.group=m),e++,g}function l(d,h,E,A,p,m){const g=o(d,h,E,A,p,m);E.transmission>0?n.push(g):E.transparent===!0?r.push(g):t.push(g)}function c(d,h,E,A,p,m){const g=o(d,h,E,A,p,m);E.transmission>0?n.unshift(g):E.transparent===!0?r.unshift(g):t.unshift(g)}function u(d,h){t.length>1&&t.sort(d||uE),n.length>1&&n.sort(h||fc),r.length>1&&r.sort(h||fc)}function f(){for(let d=e,h=i.length;d<h;d++){const E=i[d];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:l,unshift:c,finish:f,sort:u}}function dE(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new hc,i.set(n,[s])):r>=a.length?(s=new hc,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function fE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Ge};break;case"SpotLight":t={position:new G,direction:new G,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function hE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pE=0;function mE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function AE(i){const e=new fE,t=hE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const r=new G,a=new ft,s=new ft;function o(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let h=0,E=0,A=0,p=0,m=0,g=0,T=0,N=0,v=0,C=0,x=0;c.sort(mE);for(let M=0,D=c.length;M<D;M++){const y=c[M],P=y.color,z=y.intensity,W=y.distance;let w=null;if(y.shadow&&y.shadow.map&&(y.shadow.map.texture.format===1030?w=y.shadow.map.texture:w=y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)u+=P.r*z,f+=P.g*z,d+=P.b*z;else if(y.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(y.sh.coefficients[B],z);x++}else if(y.isDirectionalLight){const B=e.get(y);if(B.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const U=y.shadow,$=t.get(y);$.shadowIntensity=U.intensity,$.shadowBias=U.bias,$.shadowNormalBias=U.normalBias,$.shadowRadius=U.radius,$.shadowMapSize=U.mapSize,n.directionalShadow[h]=$,n.directionalShadowMap[h]=w,n.directionalShadowMatrix[h]=y.shadow.matrix,g++}n.directional[h]=B,h++}else if(y.isSpotLight){const B=e.get(y);B.position.setFromMatrixPosition(y.matrixWorld),B.color.copy(P).multiplyScalar(z),B.distance=W,B.coneCos=Math.cos(y.angle),B.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),B.decay=y.decay,n.spot[A]=B;const U=y.shadow;if(y.map&&(n.spotLightMap[v]=y.map,v++,U.updateMatrices(y),y.castShadow&&C++),n.spotLightMatrix[A]=U.matrix,y.castShadow){const $=t.get(y);$.shadowIntensity=U.intensity,$.shadowBias=U.bias,$.shadowNormalBias=U.normalBias,$.shadowRadius=U.radius,$.shadowMapSize=U.mapSize,n.spotShadow[A]=$,n.spotShadowMap[A]=w,N++}A++}else if(y.isRectAreaLight){const B=e.get(y);B.color.copy(P).multiplyScalar(z),B.halfWidth.set(y.width*.5,0,0),B.halfHeight.set(0,y.height*.5,0),n.rectArea[p]=B,p++}else if(y.isPointLight){const B=e.get(y);if(B.color.copy(y.color).multiplyScalar(y.intensity),B.distance=y.distance,B.decay=y.decay,y.castShadow){const U=y.shadow,$=t.get(y);$.shadowIntensity=U.intensity,$.shadowBias=U.bias,$.shadowNormalBias=U.normalBias,$.shadowRadius=U.radius,$.shadowMapSize=U.mapSize,$.shadowCameraNear=U.camera.near,$.shadowCameraFar=U.camera.far,n.pointShadow[E]=$,n.pointShadowMap[E]=w,n.pointShadowMatrix[E]=y.shadow.matrix,T++}n.point[E]=B,E++}else if(y.isHemisphereLight){const B=e.get(y);B.skyColor.copy(y.color).multiplyScalar(z),B.groundColor.copy(y.groundColor).multiplyScalar(z),n.hemi[m]=B,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const _=n.hash;(_.directionalLength!==h||_.pointLength!==E||_.spotLength!==A||_.rectAreaLength!==p||_.hemiLength!==m||_.numDirectionalShadows!==g||_.numPointShadows!==T||_.numSpotShadows!==N||_.numSpotMaps!==v||_.numLightProbes!==x)&&(n.directional.length=h,n.spot.length=A,n.rectArea.length=p,n.point.length=E,n.hemi.length=m,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=N+v-C,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=x,_.directionalLength=h,_.pointLength=E,_.spotLength=A,_.rectAreaLength=p,_.hemiLength=m,_.numDirectionalShadows=g,_.numPointShadows=T,_.numSpotShadows=N,_.numSpotMaps=v,_.numLightProbes=x,n.version=pE++)}function l(c,u){let f=0,d=0,h=0,E=0,A=0;const p=u.matrixWorldInverse;for(let m=0,g=c.length;m<g;m++){const T=c[m];if(T.isDirectionalLight){const N=n.directional[f];N.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(p),f++}else if(T.isSpotLight){const N=n.spot[h];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(p),N.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(p),h++}else if(T.isRectAreaLight){const N=n.rectArea[E];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(p),s.identity(),a.copy(T.matrixWorld),a.premultiply(p),s.extractRotation(a),N.halfWidth.set(T.width*.5,0,0),N.halfHeight.set(0,T.height*.5,0),N.halfWidth.applyMatrix4(s),N.halfHeight.applyMatrix4(s),E++}else if(T.isPointLight){const N=n.point[d];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){const N=n.hemi[A];N.direction.setFromMatrixPosition(T.matrixWorld),N.direction.transformDirection(p),A++}}}return{setup:o,setupView:l,state:n}}function pc(i){const e=new AE(i),t=[],n=[],r=[];function a(d){f.camera=d,t.length=0,n.length=0,r.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function EE(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new pc(i),e.set(r,[o])):a>=s.length?(o=new pc(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const _E=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gE=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],SE=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],mc=new ft,br=new G,Ys=new G;function TE(i,e,t){let n=new au;const r=new Ke,a=new Ke,s=new gt,o=new Of,l=new Pf,c={},u=t.maxTextureSize,f={0:1,1:0,2:2},d=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:_E,fragmentShader:IE}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const E=new Zt;E.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new _n(E,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let m=this.type;this.render=function(C,x,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;this.type===2&&(Me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const M=i.getRenderTarget(),D=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),P=i.state;P.setBlending(0),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const z=m!==this.type;z&&x.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(w=>w.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,w=C.length;W<w;W++){const B=C[W],U=B.shadow;if(U===void 0){Me("WebGLShadowMap:",B,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const $=U.getFrameExtents();r.multiply($),a.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/$.x),r.x=a.x*$.x,U.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/$.y),r.y=a.y*$.y,U.mapSize.y=a.y));const Q=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=Q,U.map===null||z===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===3){if(B.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Un(r.x,r.y,{format:1030,type:1016,minFilter:1006,magFilter:1006,generateMipmaps:!1}),U.map.texture.name=B.name+".shadowMap",U.map.depthTexture=new ur(r.x,r.y,1015),U.map.depthTexture.name=B.name+".shadowMapDepth",U.map.depthTexture.format=1026,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=1003,U.map.depthTexture.magFilter=1003}else B.isPointLight?(U.map=new mu(r.x),U.map.depthTexture=new xf(r.x,1014)):(U.map=new Un(r.x,r.y),U.map.depthTexture=new ur(r.x,r.y,1014)),U.map.depthTexture.name=B.name+".shadowMap",U.map.depthTexture.format=1026,this.type===1?(U.map.depthTexture.compareFunction=Q?518:515,U.map.depthTexture.minFilter=1006,U.map.depthTexture.magFilter=1006):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=1003,U.map.depthTexture.magFilter=1003);U.camera.updateProjectionMatrix()}const oe=U.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<oe;me++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,me),i.clear();else{me===0&&(i.setRenderTarget(U.map),i.clear());const Ie=U.getViewport(me);s.set(a.x*Ie.x,a.y*Ie.y,a.x*Ie.z,a.y*Ie.w),P.viewport(s)}if(B.isPointLight){const Ie=U.camera,Be=U.matrix,Ue=B.distance||Ie.far;Ue!==Ie.far&&(Ie.far=Ue,Ie.updateProjectionMatrix()),br.setFromMatrixPosition(B.matrixWorld),Ie.position.copy(br),Ys.copy(Ie.position),Ys.add(gE[me]),Ie.up.copy(SE[me]),Ie.lookAt(Ys),Ie.updateMatrixWorld(),Be.makeTranslation(-br.x,-br.y,-br.z),mc.multiplyMatrices(Ie.projectionMatrix,Ie.matrixWorldInverse),U._frustum.setFromProjectionMatrix(mc,Ie.coordinateSystem,Ie.reversedDepth)}else U.updateMatrices(B);n=U.getFrustum(),N(x,_,U.camera,B,this.type)}U.isPointLightShadow!==!0&&this.type===3&&g(U,_),U.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(M,D,y)};function g(C,x){const _=e.update(A);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Un(r.x,r.y,{format:1030,type:1016})),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(x,null,_,d,A,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(x,null,_,h,A,null)}function T(C,x,_,M){let D=null;const y=_.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(y!==void 0)D=y;else if(D=_.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const P=D.uuid,z=x.uuid;let W=c[P];W===void 0&&(W={},c[P]=W);let w=W[z];w===void 0&&(w=D.clone(),W[z]=w,x.addEventListener("dispose",v)),D=w}if(D.visible=x.visible,D.wireframe=x.wireframe,M===3?D.side=x.shadowSide!==null?x.shadowSide:x.side:D.side=x.shadowSide!==null?x.shadowSide:f[x.side],D.alphaMap=x.alphaMap,D.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,D.map=x.map,D.clipShadows=x.clipShadows,D.clippingPlanes=x.clippingPlanes,D.clipIntersection=x.clipIntersection,D.displacementMap=x.displacementMap,D.displacementScale=x.displacementScale,D.displacementBias=x.displacementBias,D.wireframeLinewidth=x.wireframeLinewidth,D.linewidth=x.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const P=i.properties.get(D);P.light=_}return D}function N(C,x,_,M,D){if(C.visible===!1)return;if(C.layers.test(x.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&D===3)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,C.matrixWorld);const z=e.update(C),W=C.material;if(Array.isArray(W)){const w=z.groups;for(let B=0,U=w.length;B<U;B++){const $=w[B],Q=W[$.materialIndex];if(Q&&Q.visible){const oe=T(C,Q,M,D);C.onBeforeShadow(i,C,x,_,z,oe,$),i.renderBufferDirect(_,null,z,oe,C,$),C.onAfterShadow(i,C,x,_,z,oe,$)}}}else if(W.visible){const w=T(C,W,M,D);C.onBeforeShadow(i,C,x,_,z,w,null),i.renderBufferDirect(_,null,z,w,C,null),C.onAfterShadow(i,C,x,_,z,w,null)}}const P=C.children;for(let z=0,W=P.length;z<W;z++)N(P[z],x,_,M,D)}function v(C){C.target.removeEventListener("dispose",v);for(const _ in c){const M=c[_],D=C.target.uuid;D in M&&(M[D].dispose(),delete M[D])}}}function NE(i,e){function t(){let b=!1;const ne=new gt;let X=null;const pe=new gt(0,0,0,0);return{setMask:function(ae){X!==ae&&!b&&(i.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){b=ae},setClear:function(ae,j,Se,be,At){At===!0&&(ae*=be,j*=be,Se*=be),ne.set(ae,j,Se,be),pe.equals(ne)===!1&&(i.clearColor(ae,j,Se,be),pe.copy(ne))},reset:function(){b=!1,X=null,pe.set(-1,0,0,0)}}}function n(){let b=!1,ne=!1,X=null,pe=null,ae=null;return{setReversed:function(j){if(ne!==j){const Se=e.get("EXT_clip_control");j?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ne=j;const be=ae;ae=null,this.setClear(be)}},getReversed:function(){return ne},setTest:function(j){j?ie(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(j){X!==j&&!b&&(i.depthMask(j),X=j)},setFunc:function(j){if(ne&&(j=tf[j]),pe!==j){switch(j){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=j}},setLocked:function(j){b=j},setClear:function(j){ae!==j&&(ae=j,ne&&(j=1-j),i.clearDepth(j))},reset:function(){b=!1,X=null,pe=null,ae=null,ne=!1}}}function r(){let b=!1,ne=null,X=null,pe=null,ae=null,j=null,Se=null,be=null,At=null;return{setTest:function(je){b||(je?ie(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(je){ne!==je&&!b&&(i.stencilMask(je),ne=je)},setFunc:function(je,Gn,Rn){(X!==je||pe!==Gn||ae!==Rn)&&(i.stencilFunc(je,Gn,Rn),X=je,pe=Gn,ae=Rn)},setOp:function(je,Gn,Rn){(j!==je||Se!==Gn||be!==Rn)&&(i.stencilOp(je,Gn,Rn),j=je,Se=Gn,be=Rn)},setLocked:function(je){b=je},setClear:function(je){At!==je&&(i.clearStencil(je),At=je)},reset:function(){b=!1,ne=null,X=null,pe=null,ae=null,j=null,Se=null,be=null,At=null}}}const a=new t,s=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d={},h=new WeakMap,E=[],A=null,p=!1,m=null,g=null,T=null,N=null,v=null,C=null,x=null,_=new Ge(0,0,0),M=0,D=!1,y=null,P=null,z=null,W=null,w=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,$=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),U=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),U=$>=2);let oe=null,me={};const Ie=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),Ue=new gt().fromArray(Ie),Ce=new gt().fromArray(Be);function K(b,ne,X,pe){const ae=new Uint8Array(4),j=i.createTexture();i.bindTexture(b,j),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Se=0;Se<X;Se++)b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(ne+Se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return j}const fe={};fe[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),s.setFunc(3),Nt(!1),lt(1),ie(i.CULL_FACE),at(0);function ie(b){u[b]!==!0&&(i.enable(b),u[b]=!0)}function Re(b){u[b]!==!1&&(i.disable(b),u[b]=!1)}function ye(b,ne){return d[b]!==ne?(i.bindFramebuffer(b,ne),d[b]=ne,b===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),b===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function ve(b,ne){let X=E,pe=!1;if(b){X=h.get(ne),X===void 0&&(X=[],h.set(ne,X));const ae=b.textures;if(X.length!==ae.length||X[0]!==i.COLOR_ATTACHMENT0){for(let j=0,Se=ae.length;j<Se;j++)X[j]=i.COLOR_ATTACHMENT0+j;X.length=ae.length,pe=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,pe=!0);pe&&i.drawBuffers(X)}function ot(b){return A!==b?(i.useProgram(b),A=b,!0):!1}const Ve={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};Ve[103]=i.MIN,Ve[104]=i.MAX;const $e={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function at(b,ne,X,pe,ae,j,Se,be,At,je){if(b===0){p===!0&&(Re(i.BLEND),p=!1);return}if(p===!1&&(ie(i.BLEND),p=!0),b!==5){if(b!==m||je!==D){if((g!==100||v!==100)&&(i.blendEquation(i.FUNC_ADD),g=100,v=100),je)switch(b){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",b);break}else switch(b){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case 3:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",b);break}T=null,N=null,C=null,x=null,_.set(0,0,0),M=0,m=b,D=je}return}ae=ae||ne,j=j||X,Se=Se||pe,(ne!==g||ae!==v)&&(i.blendEquationSeparate(Ve[ne],Ve[ae]),g=ne,v=ae),(X!==T||pe!==N||j!==C||Se!==x)&&(i.blendFuncSeparate($e[X],$e[pe],$e[j],$e[Se]),T=X,N=pe,C=j,x=Se),(be.equals(_)===!1||At!==M)&&(i.blendColor(be.r,be.g,be.b,At),_.copy(be),M=At),m=b,D=!1}function Fe(b,ne){b.side===2?Re(i.CULL_FACE):ie(i.CULL_FACE);let X=b.side===1;ne&&(X=!X),Nt(X),b.blending===1&&b.transparent===!1?at(0):at(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),s.setFunc(b.depthFunc),s.setTest(b.depthTest),s.setMask(b.depthWrite),a.setMask(b.colorWrite);const pe=b.stencilWrite;o.setTest(pe),pe&&(o.setMask(b.stencilWriteMask),o.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),o.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),L(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(b){y!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),y=b)}function lt(b){b!==0?(ie(i.CULL_FACE),b!==P&&(b===1?i.cullFace(i.BACK):b===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),P=b}function Kt(b){b!==z&&(U&&i.lineWidth(b),z=b)}function L(b,ne,X){b?(ie(i.POLYGON_OFFSET_FILL),(W!==ne||w!==X)&&(W=ne,w=X,s.getReversed()&&(ne=-ne),i.polygonOffset(ne,X))):Re(i.POLYGON_OFFSET_FILL)}function Mt(b){b?ie(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function He(b){b===void 0&&(b=i.TEXTURE0+B-1),oe!==b&&(i.activeTexture(b),oe=b)}function it(b,ne,X){X===void 0&&(oe===null?X=i.TEXTURE0+B-1:X=oe);let pe=me[X];pe===void 0&&(pe={type:void 0,texture:void 0},me[X]=pe),(pe.type!==b||pe.texture!==ne)&&(oe!==X&&(i.activeTexture(X),oe=X),i.bindTexture(b,ne||fe[b]),pe.type=b,pe.texture=ne)}function le(){const b=me[oe];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function ht(){try{i.compressedTexImage2D(...arguments)}catch(b){Ye("WebGLState:",b)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(b){Ye("WebGLState:",b)}}function I(){try{i.texSubImage2D(...arguments)}catch(b){Ye("WebGLState:",b)}}function F(){try{i.texSubImage3D(...arguments)}catch(b){Ye("WebGLState:",b)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(b){Ye("WebGLState:",b)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(b){Ye("WebGLState:",b)}}function ee(){try{i.texStorage2D(...arguments)}catch(b){Ye("WebGLState:",b)}}function se(){try{i.texStorage3D(...arguments)}catch(b){Ye("WebGLState:",b)}}function Y(){try{i.texImage2D(...arguments)}catch(b){Ye("WebGLState:",b)}}function Z(){try{i.texImage3D(...arguments)}catch(b){Ye("WebGLState:",b)}}function he(b){return f[b]!==void 0?f[b]:i.getParameter(b)}function Ee(b,ne){f[b]!==ne&&(i.pixelStorei(b,ne),f[b]=ne)}function re(b){Ue.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),Ue.copy(b))}function te(b){Ce.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),Ce.copy(b))}function xe(b,ne){let X=c.get(ne);X===void 0&&(X=new WeakMap,c.set(ne,X));let pe=X.get(b);pe===void 0&&(pe=i.getUniformBlockIndex(ne,b.name),X.set(b,pe))}function Le(b,ne){const pe=c.get(ne).get(b);l.get(ne)!==pe&&(i.uniformBlockBinding(ne,pe,b.__bindingPointIndex),l.set(ne,pe))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},oe=null,me={},d={},h=new WeakMap,E=[],A=null,p=!1,m=null,g=null,T=null,N=null,v=null,C=null,x=null,_=new Ge(0,0,0),M=0,D=!1,y=null,P=null,z=null,W=null,w=null,Ue.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ie,disable:Re,bindFramebuffer:ye,drawBuffers:ve,useProgram:ot,setBlending:at,setMaterial:Fe,setFlipSided:Nt,setCullFace:lt,setLineWidth:Kt,setPolygonOffset:L,setScissorTest:Mt,activeTexture:He,bindTexture:it,unbindTexture:le,compressedTexImage2D:ht,compressedTexImage3D:R,texImage2D:Y,texImage3D:Z,pixelStorei:Ee,getParameter:he,updateUBOMapping:xe,uniformBlockBinding:Le,texStorage2D:ee,texStorage3D:se,texSubImage2D:I,texSubImage3D:F,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:re,viewport:te,reset:qe}}function ME(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap,f=new Set;let d;const h=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(R,I){return E?new OffscreenCanvas(R,I):ka("canvas")}function p(R,I,F){let q=1;const J=ht(R);if((J.width>F||J.height>F)&&(q=F/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ee=Math.floor(q*J.width),se=Math.floor(q*J.height);d===void 0&&(d=A(ee,se));const Y=I?A(ee,se):d;return Y.width=ee,Y.height=se,Y.getContext("2d").drawImage(R,0,0,ee,se),Me("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ee+"x"+se+")."),Y}else return"data"in R&&Me("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function g(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(R,I,F,q,J,ee=!1){if(R!==null){if(i[R]!==void 0)return i[R];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let se;q&&(se=e.get("EXT_texture_norm16"),se||Me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=I;if(I===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8),F===i.UNSIGNED_SHORT&&se&&(Y=se.R16_EXT),F===i.SHORT&&se&&(Y=se.R16_SNORM_EXT)),I===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),I===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8),F===i.UNSIGNED_SHORT&&se&&(Y=se.RG16_EXT),F===i.SHORT&&se&&(Y=se.RG16_SNORM_EXT)),I===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),I===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),I===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),I===i.RGB&&(F===i.UNSIGNED_SHORT&&se&&(Y=se.RGB16_EXT),F===i.SHORT&&se&&(Y=se.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),I===i.RGBA){const Z=ee?za:ze.getTransfer(J);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=Z===Ze?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&se&&(Y=se.RGBA16_EXT),F===i.SHORT&&se&&(Y=se.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(R,I){let F;return R?I===null||I===1014||I===1020?F=i.DEPTH24_STENCIL8:I===1015?F=i.DEPTH32F_STENCIL8:I===1012&&(F=i.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===1014||I===1020?F=i.DEPTH_COMPONENT24:I===1015?F=i.DEPTH_COMPONENT32F:I===1012&&(F=i.DEPTH_COMPONENT16),F}function C(R,I){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==1003&&R.minFilter!==1006?Math.log2(Math.max(I.width,I.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?I.mipmaps.length:1}function x(R){const I=R.target;I.removeEventListener("dispose",x),M(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&f.delete(I)}function _(R){const I=R.target;I.removeEventListener("dispose",_),y(I)}function M(R){const I=n.get(R);if(I.__webglInit===void 0)return;const F=R.source,q=h.get(F);if(q){const J=q[I.__cacheKey];J.usedTimes--,J.usedTimes===0&&D(R),Object.keys(q).length===0&&h.delete(F)}n.remove(R)}function D(R){const I=n.get(R);i.deleteTexture(I.__webglTexture);const F=R.source,q=h.get(F);delete q[I.__cacheKey],s.memory.textures--}function y(R){const I=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(I.__webglFramebuffer[q]))for(let J=0;J<I.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(I.__webglFramebuffer[q][J]);else i.deleteFramebuffer(I.__webglFramebuffer[q]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[q])}else{if(Array.isArray(I.__webglFramebuffer))for(let q=0;q<I.__webglFramebuffer.length;q++)i.deleteFramebuffer(I.__webglFramebuffer[q]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let q=0;q<I.__webglColorRenderbuffer.length;q++)I.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[q]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const F=R.textures;for(let q=0,J=F.length;q<J;q++){const ee=n.get(F[q]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),s.memory.textures--),n.remove(F[q])}n.remove(R)}let P=0;function z(){P=0}function W(){return P}function w(R){P=R}function B(){const R=P;return R>=r.maxTextures&&Me("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function U(R){const I=[];return I.push(R.wrapS),I.push(R.wrapT),I.push(R.wrapR||0),I.push(R.magFilter),I.push(R.minFilter),I.push(R.anisotropy),I.push(R.internalFormat),I.push(R.format),I.push(R.type),I.push(R.generateMipmaps),I.push(R.premultiplyAlpha),I.push(R.flipY),I.push(R.unpackAlignment),I.push(R.colorSpace),I.join()}function $(R,I){const F=n.get(R);if(R.isVideoTexture&&it(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const q=R.image;if(q===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(F,R,I);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+I)}function Q(R,I){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){Re(F,R,I);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+I)}function oe(R,I){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){Re(F,R,I);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+I)}function me(R,I){const F=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){ye(F,R,I);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+I)}const Ie={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Be={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},Ue={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Ce(R,I){if(I.type===1015&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===1006||I.magFilter===1007||I.magFilter===1005||I.magFilter===1008||I.minFilter===1006||I.minFilter===1007||I.minFilter===1005||I.minFilter===1008)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Ie[I.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Ie[I.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Ie[I.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Be[I.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Be[I.minFilter]),I.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ue[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===1003||I.minFilter!==1005&&I.minFilter!==1008||I.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function K(R,I){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,I.addEventListener("dispose",x));const q=I.source;let J=h.get(q);J===void 0&&(J={},h.set(q,J));const ee=U(I);if(ee!==R.__cacheKey){J[ee]===void 0&&(J[ee]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,F=!0),J[ee].usedTimes++;const se=J[R.__cacheKey];se!==void 0&&(J[R.__cacheKey].usedTimes--,se.usedTimes===0&&D(I)),R.__cacheKey=ee,R.__webglTexture=J[ee].texture}return F}function fe(R,I,F){return Math.floor(Math.floor(R/F)/I)}function ie(R,I,F,q){const ee=R.updateRanges;if(ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,I.width,I.height,F,q,I.data);else{ee.sort((Ee,re)=>Ee.start-re.start);let se=0;for(let Ee=1;Ee<ee.length;Ee++){const re=ee[se],te=ee[Ee],xe=re.start+re.count,Le=fe(te.start,I.width,4),qe=fe(re.start,I.width,4);te.start<=xe+1&&Le===qe&&fe(te.start+te.count-1,I.width,4)===Le?re.count=Math.max(re.count,te.start+te.count-re.start):(++se,ee[se]=te)}ee.length=se+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,I.width);for(let Ee=0,re=ee.length;Ee<re;Ee++){const te=ee[Ee],xe=Math.floor(te.start/4),Le=Math.ceil(te.count/4),qe=xe%I.width,b=Math.floor(xe/I.width),ne=Le,X=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,b),t.texSubImage2D(i.TEXTURE_2D,0,qe,b,ne,X,F,q,I.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function Re(R,I,F){let q=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(q=i.TEXTURE_3D);const J=K(R,I),ee=I.source;t.bindTexture(q,R.__webglTexture,i.TEXTURE0+F);const se=n.get(ee);if(ee.version!==se.__version||J===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){const X=ze.getPrimaries(ze.workingColorSpace),pe=I.colorSpace===""?null:ze.getPrimaries(I.colorSpace),ae=I.colorSpace===""||X===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment);let Z=p(I.image,!1,r.maxTextureSize);Z=le(I,Z);const he=a.convert(I.format,I.colorSpace),Ee=a.convert(I.type);let re=N(I.internalFormat,he,Ee,I.normalized,I.colorSpace,I.isVideoTexture);Ce(q,I);let te;const xe=I.mipmaps,Le=I.isVideoTexture!==!0,qe=se.__version===void 0||J===!0,b=ee.dataReady,ne=C(I,Z);if(I.isDepthTexture)re=v(I.format===1027,I.type),qe&&(Le?t.texStorage2D(i.TEXTURE_2D,1,re,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,re,Z.width,Z.height,0,he,Ee,null));else if(I.isDataTexture)if(xe.length>0){Le&&qe&&t.texStorage2D(i.TEXTURE_2D,ne,re,xe[0].width,xe[0].height);for(let X=0,pe=xe.length;X<pe;X++)te=xe[X],Le?b&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,te.width,te.height,he,Ee,te.data):t.texImage2D(i.TEXTURE_2D,X,re,te.width,te.height,0,he,Ee,te.data);I.generateMipmaps=!1}else Le?(qe&&t.texStorage2D(i.TEXTURE_2D,ne,re,Z.width,Z.height),b&&ie(I,Z,he,Ee)):t.texImage2D(i.TEXTURE_2D,0,re,Z.width,Z.height,0,he,Ee,Z.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Le&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,re,xe[0].width,xe[0].height,Z.depth);for(let X=0,pe=xe.length;X<pe;X++)if(te=xe[X],I.format!==1023)if(he!==null)if(Le){if(b)if(I.layerUpdates.size>0){const ae=Xl(te.width,te.height,I.format,I.type);for(const j of I.layerUpdates){const Se=te.data.subarray(j*ae/te.data.BYTES_PER_ELEMENT,(j+1)*ae/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,j,te.width,te.height,1,he,Se)}I.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,te.width,te.height,Z.depth,he,te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,re,te.width,te.height,Z.depth,0,te.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?b&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,te.width,te.height,Z.depth,he,Ee,te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,re,te.width,te.height,Z.depth,0,he,Ee,te.data)}else{Le&&qe&&t.texStorage2D(i.TEXTURE_2D,ne,re,xe[0].width,xe[0].height);for(let X=0,pe=xe.length;X<pe;X++)te=xe[X],I.format!==1023?he!==null?Le?b&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,te.width,te.height,he,te.data):t.compressedTexImage2D(i.TEXTURE_2D,X,re,te.width,te.height,0,te.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?b&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,te.width,te.height,he,Ee,te.data):t.texImage2D(i.TEXTURE_2D,X,re,te.width,te.height,0,he,Ee,te.data)}else if(I.isDataArrayTexture)if(Le){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,re,Z.width,Z.height,Z.depth),b)if(I.layerUpdates.size>0){const X=Xl(Z.width,Z.height,I.format,I.type);for(const pe of I.layerUpdates){const ae=Z.data.subarray(pe*X/Z.data.BYTES_PER_ELEMENT,(pe+1)*X/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,Z.width,Z.height,1,he,Ee,ae)}I.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,he,Ee,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,re,Z.width,Z.height,Z.depth,0,he,Ee,Z.data);else if(I.isData3DTexture)Le?(qe&&t.texStorage3D(i.TEXTURE_3D,ne,re,Z.width,Z.height,Z.depth),b&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,he,Ee,Z.data)):t.texImage3D(i.TEXTURE_3D,0,re,Z.width,Z.height,Z.depth,0,he,Ee,Z.data);else if(I.isFramebufferTexture){if(qe)if(Le)t.texStorage2D(i.TEXTURE_2D,ne,re,Z.width,Z.height);else{let X=Z.width,pe=Z.height;for(let ae=0;ae<ne;ae++)t.texImage2D(i.TEXTURE_2D,ae,re,X,pe,0,he,Ee,null),X>>=1,pe>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in i){const X=i.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),Z.parentNode!==X){X.appendChild(Z),f.add(I),X.onpaint=be=>{const At=be.changedElements;for(const je of f)At.includes(je.image)&&(je.needsUpdate=!0)},X.requestPaint();return}const pe=0,ae=i.RGBA,j=i.RGBA,Se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,pe,ae,j,Se,Z),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(xe.length>0){if(Le&&qe){const X=ht(xe[0]);t.texStorage2D(i.TEXTURE_2D,ne,re,X.width,X.height)}for(let X=0,pe=xe.length;X<pe;X++)te=xe[X],Le?b&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,he,Ee,te):t.texImage2D(i.TEXTURE_2D,X,re,he,Ee,te);I.generateMipmaps=!1}else if(Le){if(qe){const X=ht(Z);t.texStorage2D(i.TEXTURE_2D,ne,re,X.width,X.height)}b&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Ee,Z)}else t.texImage2D(i.TEXTURE_2D,0,re,he,Ee,Z);m(I)&&g(q),se.__version=ee.version,I.onUpdate&&I.onUpdate(I)}R.__version=I.version}function ye(R,I,F){if(I.image.length!==6)return;const q=K(R,I),J=I.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+F);const ee=n.get(J);if(J.version!==ee.__version||q===!0){t.activeTexture(i.TEXTURE0+F);const se=ze.getPrimaries(ze.workingColorSpace),Y=I.colorSpace===""?null:ze.getPrimaries(I.colorSpace),Z=I.colorSpace===""||se===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const he=I.isCompressedTexture||I.image[0].isCompressedTexture,Ee=I.image[0]&&I.image[0].isDataTexture,re=[];for(let j=0;j<6;j++)!he&&!Ee?re[j]=p(I.image[j],!0,r.maxCubemapSize):re[j]=Ee?I.image[j].image:I.image[j],re[j]=le(I,re[j]);const te=re[0],xe=a.convert(I.format,I.colorSpace),Le=a.convert(I.type),qe=N(I.internalFormat,xe,Le,I.normalized,I.colorSpace),b=I.isVideoTexture!==!0,ne=ee.__version===void 0||q===!0,X=J.dataReady;let pe=C(I,te);Ce(i.TEXTURE_CUBE_MAP,I);let ae;if(he){b&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,qe,te.width,te.height);for(let j=0;j<6;j++){ae=re[j].mipmaps;for(let Se=0;Se<ae.length;Se++){const be=ae[Se];I.format!==1023?xe!==null?b?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,be.width,be.height,xe,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,qe,be.width,be.height,0,be.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):b?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,be.width,be.height,xe,Le,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,qe,be.width,be.height,0,xe,Le,be.data)}}}else{if(ae=I.mipmaps,b&&ne){ae.length>0&&pe++;const j=ht(re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,qe,j.width,j.height)}for(let j=0;j<6;j++)if(Ee){b?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,re[j].width,re[j].height,xe,Le,re[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qe,re[j].width,re[j].height,0,xe,Le,re[j].data);for(let Se=0;Se<ae.length;Se++){const At=ae[Se].image[j].image;b?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,At.width,At.height,xe,Le,At.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,qe,At.width,At.height,0,xe,Le,At.data)}}else{b?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xe,Le,re[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qe,xe,Le,re[j]);for(let Se=0;Se<ae.length;Se++){const be=ae[Se];b?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,xe,Le,be.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,qe,xe,Le,be.image[j])}}}m(I)&&g(i.TEXTURE_CUBE_MAP),ee.__version=J.version,I.onUpdate&&I.onUpdate(I)}R.__version=I.version}function ve(R,I,F,q,J,ee){const se=a.convert(F.format,F.colorSpace),Y=a.convert(F.type),Z=N(F.internalFormat,se,Y,F.normalized,F.colorSpace),he=n.get(I),Ee=n.get(F);if(Ee.__renderTarget=I,!he.__hasExternalTextures){const re=Math.max(1,I.width>>ee),te=Math.max(1,I.height>>ee);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,ee,Z,re,te,I.depth,0,se,Y,null):t.texImage2D(J,ee,Z,re,te,0,se,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),He(I)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,Ee.__webglTexture,0,Mt(I)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,Ee.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(R,I,F){if(i.bindRenderbuffer(i.RENDERBUFFER,R),I.depthBuffer){const q=I.depthTexture,J=q&&q.isDepthTexture?q.type:null,ee=v(I.stencilBuffer,J),se=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;He(I)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(I),ee,I.width,I.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(I),ee,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,ee,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,R)}else{const q=I.textures;for(let J=0;J<q.length;J++){const ee=q[J],se=a.convert(ee.format,ee.colorSpace),Y=a.convert(ee.type),Z=N(ee.internalFormat,se,Y,ee.normalized,ee.colorSpace);He(I)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(I),Z,I.width,I.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(I),Z,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,Z,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(R,I,F){const q=I.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(I.depthTexture);if(J.__renderTarget=I,(!J.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,I.depthTexture.addEventListener("dispose",x)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,I.depthTexture);const he=a.convert(I.depthTexture.format),Ee=a.convert(I.depthTexture.type);let re;I.depthTexture.format===1026?re=i.DEPTH_COMPONENT24:I.depthTexture.format===1027&&(re=i.DEPTH24_STENCIL8);for(let te=0;te<6;te++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,re,I.width,I.height,0,he,Ee,null)}}else $(I.depthTexture,0);const ee=J.__webglTexture,se=Mt(I),Y=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,Z=I.depthTexture.format===1027?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(I.depthTexture.format===1026)He(I)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Y,ee,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Z,Y,ee,0);else if(I.depthTexture.format===1027)He(I)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Y,ee,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Z,Y,ee,0);else throw new Error("Unknown depthTexture format")}function $e(R){const I=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),q){const J=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),I.__depthDisposeCallback=J}I.__boundDepthTexture=q}if(R.depthTexture&&!I.__autoAllocateDepthBuffer)if(F)for(let q=0;q<6;q++)Ve(I.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?Ve(I.__webglFramebuffer[0],R,0):Ve(I.__webglFramebuffer,R,0)}else if(F){I.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[q]),I.__webglDepthbuffer[q]===void 0)I.__webglDepthbuffer[q]=i.createRenderbuffer(),ot(I.__webglDepthbuffer[q],R,!1);else{const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=I.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ee)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),ot(I.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ee)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(R,I,F){const q=n.get(R);I!==void 0&&ve(q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&$e(R)}function Fe(R){const I=R.texture,F=n.get(R),q=n.get(I);R.addEventListener("dispose",_);const J=R.textures,ee=R.isWebGLCubeRenderTarget===!0,se=J.length>1;if(se||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=I.version,s.memory.textures++),ee){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(I.mipmaps&&I.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let Z=0;Z<I.mipmaps.length;Z++)F.__webglFramebuffer[Y][Z]=i.createFramebuffer()}else F.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<I.mipmaps.length;Y++)F.__webglFramebuffer[Y]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(se)for(let Y=0,Z=J.length;Y<Z;Y++){const he=n.get(J[Y]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),s.memory.textures++)}if(R.samples>0&&He(R)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<J.length;Y++){const Z=J[Y];F.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);const he=a.convert(Z.format,Z.colorSpace),Ee=a.convert(Z.type),re=N(Z.internalFormat,he,Ee,Z.normalized,Z.colorSpace,R.isXRRenderTarget===!0),te=Mt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,re,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,I);for(let Y=0;Y<6;Y++)if(I.mipmaps&&I.mipmaps.length>0)for(let Z=0;Z<I.mipmaps.length;Z++)ve(F.__webglFramebuffer[Y][Z],R,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else ve(F.__webglFramebuffer[Y],R,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);m(I)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let Y=0,Z=J.length;Y<Z;Y++){const he=J[Y],Ee=n.get(he);let re=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,Ee.__webglTexture),Ce(re,he),ve(F.__webglFramebuffer,R,he,i.COLOR_ATTACHMENT0+Y,re,0),m(he)&&g(re)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,q.__webglTexture),Ce(Y,I),I.mipmaps&&I.mipmaps.length>0)for(let Z=0;Z<I.mipmaps.length;Z++)ve(F.__webglFramebuffer[Z],R,I,i.COLOR_ATTACHMENT0,Y,Z);else ve(F.__webglFramebuffer,R,I,i.COLOR_ATTACHMENT0,Y,0);m(I)&&g(Y),t.unbindTexture()}R.depthBuffer&&$e(R)}function Nt(R){const I=R.textures;for(let F=0,q=I.length;F<q;F++){const J=I[F];if(m(J)){const ee=T(R),se=n.get(J).__webglTexture;t.bindTexture(ee,se),g(ee),t.unbindTexture()}}}const lt=[],Kt=[];function L(R){if(R.samples>0){if(He(R)===!1){const I=R.textures,F=R.width,q=R.height;let J=i.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(R),Y=I.length>1;if(Y)for(let he=0;he<I.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const Z=R.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let he=0;he<I.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[he]);const Ee=n.get(I[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,F,q,0,0,F,q,J,i.NEAREST),l===!0&&(lt.length=0,Kt.length=0,lt.push(i.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(lt.push(ee),Kt.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let he=0;he<I.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,se.__webglColorRenderbuffer[he]);const Ee=n.get(I[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const I=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function Mt(R){return Math.min(r.maxSamples,R.samples)}function He(R){const I=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function it(R){const I=s.render.frame;u.get(R)!==I&&(u.set(R,I),R.update())}function le(R,I){const F=R.colorSpace,q=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Ha&&F!==""&&(ze.getTransfer(F)===Ze?(q!==1023||J!==1009)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",F)),I}function ht(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.getTextureUnits=W,this.setTextureUnits=w,this.setTexture2D=$,this.setTexture2DArray=Q,this.setTexture3D=oe,this.setTextureCube=me,this.rebindTextures=at,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function CE(i,e){function t(n,r=""){let a;const s=ze.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(s===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===36196||n===37492)return s===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return a.COMPRESSED_R11_EAC;if(n===37489)return a.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return a.COMPRESSED_RG11_EAC;if(n===37491)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===37808)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===36492)return s===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===36283)return a.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const RE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new lu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new In({vertexShader:RE,fragmentShader:vE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new na(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yE extends Bi{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,E=null;const A=typeof XRWebGLBinding<"u",p=new xE,m={},g=t.getContextAttributes();let T=null,N=null;const v=[],C=[],x=new Ke;let _=null;const M=new hn;M.viewport=new gt;const D=new hn;D.viewport=new gt;const y=[M,D],P=new Ff;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let fe=v[K];return fe===void 0&&(fe=new Ts,v[K]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(K){let fe=v[K];return fe===void 0&&(fe=new Ts,v[K]=fe),fe.getGripSpace()},this.getHand=function(K){let fe=v[K];return fe===void 0&&(fe=new Ts,v[K]=fe),fe.getHandSpace()};function w(K){const fe=C.indexOf(K.inputSource);if(fe===-1)return;const ie=v[fe];ie!==void 0&&(ie.update(K.inputSource,K.frame,c||s),ie.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",U);for(let K=0;K<v.length;K++){const fe=C[K];fe!==null&&(C[K]=null,v[K].disconnect(fe))}z=null,W=null,p.reset();for(const K in m)delete m[K];e.setRenderTarget(T),h=null,d=null,f=null,r=null,N=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&A&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",B),r.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(x),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Re=null,ye=null;g.depth&&(ye=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=g.stencil?1027:1026,Re=g.stencil?1020:1014);const ve={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:a};f=this.getBinding(),d=f.createProjectionLayer(ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),N=new Un(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new ur(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),N=new Un(h.framebufferWidth,h.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function U(K){for(let fe=0;fe<K.removed.length;fe++){const ie=K.removed[fe],Re=C.indexOf(ie);Re>=0&&(C[Re]=null,v[Re].disconnect(ie))}for(let fe=0;fe<K.added.length;fe++){const ie=K.added[fe];let Re=C.indexOf(ie);if(Re===-1){for(let ve=0;ve<v.length;ve++)if(ve>=C.length){C.push(ie),Re=ve;break}else if(C[ve]===null){C[ve]=ie,Re=ve;break}if(Re===-1)break}const ye=v[Re];ye&&ye.connect(ie)}}const $=new G,Q=new G;function oe(K,fe,ie){$.setFromMatrixPosition(fe.matrixWorld),Q.setFromMatrixPosition(ie.matrixWorld);const Re=$.distanceTo(Q),ye=fe.projectionMatrix.elements,ve=ie.projectionMatrix.elements,ot=ye[14]/(ye[10]-1),Ve=ye[14]/(ye[10]+1),$e=(ye[9]+1)/ye[5],at=(ye[9]-1)/ye[5],Fe=(ye[8]-1)/ye[0],Nt=(ve[8]+1)/ve[0],lt=ot*Fe,Kt=ot*Nt,L=Re/(-Fe+Nt),Mt=L*-Fe;if(fe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Mt),K.translateZ(L),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ye[10]===-1)K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const He=ot+L,it=Ve+L,le=lt-Mt,ht=Kt+(Re-Mt),R=$e*Ve/it*He,I=at*Ve/it*He;K.projectionMatrix.makePerspective(le,ht,R,I,He,it),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function me(K,fe){fe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(fe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let fe=K.near,ie=K.far;p.texture!==null&&(p.depthNear>0&&(fe=p.depthNear),p.depthFar>0&&(ie=p.depthFar)),P.near=D.near=M.near=fe,P.far=D.far=M.far=ie,(z!==P.near||W!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),z=P.near,W=P.far),P.layers.mask=K.layers.mask|6,M.layers.mask=P.layers.mask&-5,D.layers.mask=P.layers.mask&-3;const Re=K.parent,ye=P.cameras;me(P,Re);for(let ve=0;ve<ye.length;ve++)me(ye[ve],Re);ye.length===2?oe(P,M,D):P.projectionMatrix.copy(M.projectionMatrix),Ie(K,P,Re)};function Ie(K,fe,ie){ie===null?K.matrix.copy(fe.matrixWorld):(K.matrix.copy(ie.matrixWorld),K.matrix.invert(),K.matrix.multiply(fe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ro*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(K){return m[K]};let Be=null;function Ue(K,fe){if(u=fe.getViewerPose(c||s),E=fe,u!==null){const ie=u.views;h!==null&&(e.setRenderTargetFramebuffer(N,h.framebuffer),e.setRenderTarget(N));let Re=!1;ie.length!==P.cameras.length&&(P.cameras.length=0,Re=!0);for(let Ve=0;Ve<ie.length;Ve++){const $e=ie[Ve];let at=null;if(h!==null)at=h.getViewport($e);else{const Nt=f.getViewSubImage(d,$e);at=Nt.viewport,Ve===0&&(e.setRenderTargetTextures(N,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(N))}let Fe=y[Ve];Fe===void 0&&(Fe=new hn,Fe.layers.enable(Ve),Fe.viewport=new gt,y[Ve]=Fe),Fe.matrix.fromArray($e.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray($e.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(at.x,at.y,at.width,at.height),Ve===0&&(P.matrix.copy(Fe.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Re===!0&&P.cameras.push(Fe)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){f=n.getBinding();const Ve=f.getDepthInformation(ie[0]);Ve&&Ve.isValid&&Ve.texture&&p.init(Ve,r.renderState)}if(ye&&ye.includes("camera-access")&&A){e.state.unbindTexture(),f=n.getBinding();for(let Ve=0;Ve<ie.length;Ve++){const $e=ie[Ve].camera;if($e){let at=m[$e];at||(at=new lu,m[$e]=at);const Fe=f.getCameraImage($e);at.sourceTexture=Fe}}}}for(let ie=0;ie<v.length;ie++){const Re=C[ie],ye=v[ie];Re!==null&&ye!==void 0&&ye.update(Re,fe,c||s)}Be&&Be(K,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Ce=new hu;Ce.setAnimationLoop(Ue),this.setAnimationLoop=function(K){Be=K},this.dispose=function(){}}}const DE=new ft,gu=new De;gu.set(-1,0,0,0,1,0,0,0,1);function bE(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,cu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,g,T,N){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(p,m):m.isMeshLambertMaterial?(a(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(p,m),f(p,m)):m.isMeshPhongMaterial?(a(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(p,m),d(p,m),m.isMeshPhysicalMaterial&&h(p,m,N)):m.isMeshMatcapMaterial?(a(p,m),E(p,m)):m.isMeshDepthMaterial?a(p,m):m.isMeshDistanceMaterial?(a(p,m),A(p,m)):m.isMeshNormalMaterial?a(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,g,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===1&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===1&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const g=e.get(m),T=g.envMap,N=g.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(DE.makeRotationFromEuler(N)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(gu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,g,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*g,p.scale.value=T*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,g){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===1&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function E(p,m){m.matcap&&(p.matcap.value=m.matcap)}function A(p,m){const g=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function wE(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,T){const N=T.program;n.uniformBlockBinding(g,N)}function c(g,T){let N=r[g.id];N===void 0&&(E(g),N=u(g),r[g.id]=N,g.addEventListener("dispose",p));const v=T.program;n.updateUBOMapping(g,v);const C=e.render.frame;a[g.id]!==C&&(d(g),a[g.id]=C)}function u(g){const T=f();g.__bindingPointIndex=T;const N=i.createBuffer(),v=g.__size,C=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,v,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,N),N}function f(){for(let g=0;g<o;g++)if(s.indexOf(g)===-1)return s.push(g),g;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const T=r[g.id],N=g.uniforms,v=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,x=N.length;C<x;C++){const _=Array.isArray(N[C])?N[C]:[N[C]];for(let M=0,D=_.length;M<D;M++){const y=_[M];if(h(y,C,M,v)===!0){const P=y.__offset,z=Array.isArray(y.value)?y.value:[y.value];let W=0;for(let w=0;w<z.length;w++){const B=z[w],U=A(B);typeof B=="number"||typeof B=="boolean"?(y.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,P+W,y.__data)):B.isMatrix3?(y.__data[0]=B.elements[0],y.__data[1]=B.elements[1],y.__data[2]=B.elements[2],y.__data[3]=0,y.__data[4]=B.elements[3],y.__data[5]=B.elements[4],y.__data[6]=B.elements[5],y.__data[7]=0,y.__data[8]=B.elements[6],y.__data[9]=B.elements[7],y.__data[10]=B.elements[8],y.__data[11]=0):ArrayBuffer.isView(B)?y.__data.set(new B.constructor(B.buffer,B.byteOffset,y.__data.length)):(B.toArray(y.__data,W),W+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(g,T,N,v){const C=g.value,x=T+"_"+N;if(v[x]===void 0)return typeof C=="number"||typeof C=="boolean"?v[x]=C:ArrayBuffer.isView(C)?v[x]=C.slice():v[x]=C.clone(),!0;{const _=v[x];if(typeof C=="number"||typeof C=="boolean"){if(_!==C)return v[x]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(_.equals(C)===!1)return _.copy(C),!0}}return!1}function E(g){const T=g.uniforms;let N=0;const v=16;for(let x=0,_=T.length;x<_;x++){const M=Array.isArray(T[x])?T[x]:[T[x]];for(let D=0,y=M.length;D<y;D++){const P=M[D],z=Array.isArray(P.value)?P.value:[P.value];for(let W=0,w=z.length;W<w;W++){const B=z[W],U=A(B),$=N%v,Q=$%U.boundary,oe=$+Q;N+=Q,oe!==0&&v-oe<U.storage&&(N+=v-oe),P.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=N,N+=U.storage}}}const C=N%v;return C>0&&(N+=v-C),g.__size=N,g.__cache={},this}function A(g){const T={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(T.boundary=4,T.storage=4):g.isVector2?(T.boundary=8,T.storage=8):g.isVector3||g.isColor?(T.boundary=16,T.storage=12):g.isVector4?(T.boundary=16,T.storage=16):g.isMatrix3?(T.boundary=48,T.storage=48):g.isMatrix4?(T.boundary=64,T.storage=64):g.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(T.boundary=16,T.storage=g.byteLength):Me("WebGLRenderer: Unsupported uniform value type.",g),T}function p(g){const T=g.target;T.removeEventListener("dispose",p);const N=s.indexOf(T.__bindingPointIndex);s.splice(N,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete a[T.id]}function m(){for(const g in r)i.deleteBuffer(r[g]);s=[],r={},a={}}return{bind:l,update:c,dispose:m}}const LE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yn=null;function OE(){return yn===null&&(yn=new ru(LE,16,16,1030,1016),yn.name="DFG_LUT",yn.minFilter=1006,yn.magFilter=1006,yn.wrapS=1001,yn.wrapT=1001,yn.generateMipmaps=!1,yn.needsUpdate=!0),yn}class PE{constructor(e={}){const{canvas:t=Qd(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=1009}=e;this.isWebGLRenderer=!0;let E;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=n.getContextAttributes().alpha}else E=s;const A=h,p=new Set([1033,1031,1029]),m=new Set([1009,1014,1012,1020,1017,1018]),g=new Uint32Array(4),T=new Int32Array(4),N=new G;let v=null,C=null;const x=[],_=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let y=!1,P=null;this._outputColorSpace=fn;let z=0,W=0,w=null,B=-1,U=null;const $=new gt,Q=new gt;let oe=null;const me=new Ge(0);let Ie=0,Be=t.width,Ue=t.height,Ce=1,K=null,fe=null;const ie=new gt(0,0,Be,Ue),Re=new gt(0,0,Be,Ue);let ye=!1;const ve=new au;let ot=!1,Ve=!1;const $e=new ft,at=new G,Fe=new gt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Kt(){return w===null?Ce:1}let L=n;function Mt(S,O){return t.getContext(S,O)}try{const S={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r184"),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",be,!1),L===null){const O="webgl2";if(L=Mt(O,S),L===null)throw Mt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw Ye("WebGLRenderer: "+S.message),S}let He,it,le,ht,R,I,F,q,J,ee,se,Y,Z,he,Ee,re,te,xe,Le,qe,b,ne,X;function pe(){He=new Om(L),He.init(),b=new CE(L,He),it=new Rm(L,He,e,b),le=new NE(L,He),it.reversedDepthBuffer&&d&&le.buffers.depth.setReversed(!0),ht=new Fm(L),R=new cE,I=new ME(L,He,le,R,it,b,ht),F=new Lm(D),q=new Hf(L),ne=new Mm(L,q),J=new Pm(L,q,ht,ne),ee=new Bm(L,J,q,ne,ht),xe=new Gm(L,it,I),Ee=new vm(R),se=new lE(D,F,He,it,ne,Ee),Y=new bE(D,R),Z=new dE,he=new EE(He),te=new Nm(D,F,le,ee,E,l),re=new TE(D,ee,it),X=new wE(L,ht,it,le),Le=new Cm(L,He,ht),qe=new Um(L,He,ht),ht.programs=se.programs,D.capabilities=it,D.extensions=He,D.properties=R,D.renderLists=Z,D.shadowMap=re,D.state=le,D.info=ht}pe(),A!==1009&&(M=new Hm(A,t.width,t.height,r,a));const ae=new yE(D,L);this.xr=ae,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=He.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=He.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(S){S!==void 0&&(Ce=S,this.setSize(Be,Ue,!1))},this.getSize=function(S){return S.set(Be,Ue)},this.setSize=function(S,O,k=!0){if(ae.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=S,Ue=O,t.width=Math.floor(S*Ce),t.height=Math.floor(O*Ce),k===!0&&(t.style.width=S+"px",t.style.height=O+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(Be*Ce,Ue*Ce).floor()},this.setDrawingBufferSize=function(S,O,k){Be=S,Ue=O,Ce=k,t.width=Math.floor(S*k),t.height=Math.floor(O*k),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(A===1009){Ye("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){Me("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy($)},this.getViewport=function(S){return S.copy(ie)},this.setViewport=function(S,O,k,V){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,O,k,V),le.viewport($.copy(ie).multiplyScalar(Ce).round())},this.getScissor=function(S){return S.copy(Re)},this.setScissor=function(S,O,k,V){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,O,k,V),le.scissor(Q.copy(Re).multiplyScalar(Ce).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(S){le.setScissorTest(ye=S)},this.setOpaqueSort=function(S){K=S},this.setTransparentSort=function(S){fe=S},this.getClearColor=function(S){return S.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,k=!0){let V=0;if(S){let H=!1;if(w!==null){const de=w.texture.format;H=p.has(de)}if(H){const de=w.texture.type,_e=m.has(de),ue=te.getClearColor(),ge=te.getClearAlpha(),Te=ue.r,we=ue.g,Pe=ue.b;_e?(g[0]=Te,g[1]=we,g[2]=Pe,g[3]=ge,L.clearBufferuiv(L.COLOR,0,g)):(T[0]=Te,T[1]=we,T[2]=Pe,T[3]=ge,L.clearBufferiv(L.COLOR,0,T))}else V|=L.COLOR_BUFFER_BIT}O&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),P=S},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",be,!1),te.dispose(),Z.dispose(),he.dispose(),R.dispose(),F.dispose(),ee.dispose(),ne.dispose(),X.dispose(),se.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",cl),ae.removeEventListener("sessionend",ul),gi.stop()};function j(S){S.preventDefault(),Il("WebGLRenderer: Context Lost."),y=!0}function Se(){Il("WebGLRenderer: Context Restored."),y=!1;const S=ht.autoReset,O=re.enabled,k=re.autoUpdate,V=re.needsUpdate,H=re.type;pe(),ht.autoReset=S,re.enabled=O,re.autoUpdate=k,re.needsUpdate=V,re.type=H}function be(S){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function At(S){const O=S.target;O.removeEventListener("dispose",At),je(O)}function je(S){Gn(S),R.remove(S)}function Gn(S){const O=R.get(S).programs;O!==void 0&&(O.forEach(function(k){se.releaseProgram(k)}),S.isShaderMaterial&&se.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,k,V,H,de){O===null&&(O=Nt);const _e=H.isMesh&&H.matrixWorld.determinant()<0,ue=Xd(S,O,k,V,H);le.setMaterial(V,_e);let ge=k.index,Te=1;if(V.wireframe===!0){if(ge=J.getWireframeAttribute(k),ge===void 0)return;Te=2}const we=k.drawRange,Pe=k.attributes.position;let Ne=we.start*Te,Je=(we.start+we.count)*Te;de!==null&&(Ne=Math.max(Ne,de.start*Te),Je=Math.min(Je,(de.start+de.count)*Te)),ge!==null?(Ne=Math.max(Ne,0),Je=Math.min(Je,ge.count)):Pe!=null&&(Ne=Math.max(Ne,0),Je=Math.min(Je,Pe.count));const Et=Je-Ne;if(Et<0||Et===1/0)return;ne.setup(H,V,ue,k,ge);let pt,Qe=Le;if(ge!==null&&(pt=q.get(ge),Qe=qe,Qe.setIndex(pt)),H.isMesh)V.wireframe===!0?(le.setLineWidth(V.wireframeLinewidth*Kt()),Qe.setMode(L.LINES)):Qe.setMode(L.TRIANGLES);else if(H.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),le.setLineWidth(bt*Kt()),H.isLineSegments?Qe.setMode(L.LINES):H.isLineLoop?Qe.setMode(L.LINE_LOOP):Qe.setMode(L.LINE_STRIP)}else H.isPoints?Qe.setMode(L.POINTS):H.isSprite&&Qe.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(He.get("WEBGL_multi_draw"))Qe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const bt=H._multiDrawStarts,Ae=H._multiDrawCounts,$t=H._multiDrawCount,Xe=ge?q.get(ge).bytesPerElement:1,cn=R.get(V).currentProgram.getUniforms();for(let vn=0;vn<$t;vn++)cn.setValue(L,"_gl_DrawID",vn),Qe.render(bt[vn]/Xe,Ae[vn])}else if(H.isInstancedMesh)Qe.renderInstances(Ne,Et,H.count);else if(k.isInstancedBufferGeometry){const bt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ae=Math.min(k.instanceCount,bt);Qe.renderInstances(Ne,Et,Ae)}else Qe.render(Ne,Et)};function Rn(S,O,k){S.transparent===!0&&S.side===2&&S.forceSinglePass===!1?(S.side=1,S.needsUpdate=!0,sa(S,O,k),S.side=0,S.needsUpdate=!0,sa(S,O,k),S.side=2):sa(S,O,k)}this.compile=function(S,O,k=null){k===null&&(k=S),C=he.get(k),C.init(O),_.push(C),k.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(C.pushLight(H),H.castShadow&&C.pushShadow(H))}),S!==k&&S.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(C.pushLight(H),H.castShadow&&C.pushShadow(H))}),C.setupLights();const V=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const de=H.material;if(de)if(Array.isArray(de))for(let _e=0;_e<de.length;_e++){const ue=de[_e];Rn(ue,k,H),V.add(ue)}else Rn(de,k,H),V.add(de)}),C=_.pop(),V},this.compileAsync=function(S,O,k=null){const V=this.compile(S,O,k);return new Promise(H=>{function de(){if(V.forEach(function(_e){R.get(_e).currentProgram.isReady()&&V.delete(_e)}),V.size===0){H(S);return}setTimeout(de,10)}He.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let hs=null;function Wd(S){hs&&hs(S)}function cl(){gi.stop()}function ul(){gi.start()}const gi=new hu;gi.setAnimationLoop(Wd),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(S){hs=S,ae.setAnimationLoop(S),S===null?gi.stop():gi.start()},ae.addEventListener("sessionstart",cl),ae.addEventListener("sessionend",ul),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;P!==null&&P.renderStart(S,O);const k=ae.enabled===!0&&ae.isPresenting===!0,V=M!==null&&(w===null||k)&&M.begin(D,w);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(O),O=ae.getCamera()),S.isScene===!0&&S.onBeforeRender(D,S,O,w),C=he.get(S,_.length),C.init(O),C.state.textureUnits=I.getTextureUnits(),_.push(C),$e.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ve.setFromProjectionMatrix($e,2e3,O.reversedDepth),Ve=this.localClippingEnabled,ot=Ee.init(this.clippingPlanes,Ve),v=Z.get(S,x.length),v.init(),x.push(v),ae.enabled===!0&&ae.isPresenting===!0){const _e=D.xr.getDepthSensingMesh();_e!==null&&ps(_e,O,-1/0,D.sortObjects)}ps(S,O,0,D.sortObjects),v.finish(),D.sortObjects===!0&&v.sort(K,fe),lt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,lt&&te.addToRenderList(v,S),this.info.render.frame++,ot===!0&&Ee.beginShadows();const H=C.state.shadowsArray;if(re.render(H,S,O),ot===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&M.hasRenderPass())===!1){const _e=v.opaque,ue=v.transmissive;if(C.setupLights(),O.isArrayCamera){const ge=O.cameras;if(ue.length>0)for(let Te=0,we=ge.length;Te<we;Te++){const Pe=ge[Te];fl(_e,ue,S,Pe)}lt&&te.render(S);for(let Te=0,we=ge.length;Te<we;Te++){const Pe=ge[Te];dl(v,S,Pe,Pe.viewport)}}else ue.length>0&&fl(_e,ue,S,O),lt&&te.render(S),dl(v,S,O)}w!==null&&W===0&&(I.updateMultisampleRenderTarget(w),I.updateRenderTargetMipmap(w)),V&&M.end(D),S.isScene===!0&&S.onAfterRender(D,S,O),ne.resetDefaultState(),B=-1,U=null,_.pop(),_.length>0?(C=_[_.length-1],I.setTextureUnits(C.state.textureUnits),ot===!0&&Ee.setGlobalState(D.clippingPlanes,C.state.camera)):C=null,x.pop(),x.length>0?v=x[x.length-1]:v=null,P!==null&&P.renderEnd()};function ps(S,O,k,V){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLightProbeGrid)C.pushLightProbeGrid(S);else if(S.isLight)C.pushLight(S),S.castShadow&&C.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ve.intersectsSprite(S)){V&&Fe.setFromMatrixPosition(S.matrixWorld).applyMatrix4($e);const _e=ee.update(S),ue=S.material;ue.visible&&v.push(S,_e,ue,k,Fe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ve.intersectsObject(S))){const _e=ee.update(S),ue=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Fe.copy(S.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Fe.copy(_e.boundingSphere.center)),Fe.applyMatrix4(S.matrixWorld).applyMatrix4($e)),Array.isArray(ue)){const ge=_e.groups;for(let Te=0,we=ge.length;Te<we;Te++){const Pe=ge[Te],Ne=ue[Pe.materialIndex];Ne&&Ne.visible&&v.push(S,_e,Ne,k,Fe.z,Pe)}}else ue.visible&&v.push(S,_e,ue,k,Fe.z,null)}}const de=S.children;for(let _e=0,ue=de.length;_e<ue;_e++)ps(de[_e],O,k,V)}function dl(S,O,k,V){const{opaque:H,transmissive:de,transparent:_e}=S;C.setupLightsView(k),ot===!0&&Ee.setGlobalState(D.clippingPlanes,k),V&&le.viewport($.copy(V)),H.length>0&&aa(H,O,k),de.length>0&&aa(de,O,k),_e.length>0&&aa(_e,O,k),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function fl(S,O,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[V.id]===void 0){const Ne=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[V.id]=new Un(1,1,{generateMipmaps:!0,type:Ne?1016:1009,minFilter:1008,samples:Math.max(4,it.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace})}const de=C.state.transmissionRenderTarget[V.id],_e=V.viewport||$;de.setSize(_e.z*D.transmissionResolutionScale,_e.w*D.transmissionResolutionScale);const ue=D.getRenderTarget(),ge=D.getActiveCubeFace(),Te=D.getActiveMipmapLevel();D.setRenderTarget(de),D.getClearColor(me),Ie=D.getClearAlpha(),Ie<1&&D.setClearColor(16777215,.5),D.clear(),lt&&te.render(k);const we=D.toneMapping;D.toneMapping=0;const Pe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),C.setupLightsView(V),ot===!0&&Ee.setGlobalState(D.clippingPlanes,V),aa(S,k,V),I.updateMultisampleRenderTarget(de),I.updateRenderTargetMipmap(de),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Je=0,Et=O.length;Je<Et;Je++){const pt=O[Je],{object:Qe,geometry:bt,material:Ae,group:$t}=pt;if(Ae.side===2&&Qe.layers.test(V.layers)){const Xe=Ae.side;Ae.side=1,Ae.needsUpdate=!0,hl(Qe,k,V,bt,Ae,$t),Ae.side=Xe,Ae.needsUpdate=!0,Ne=!0}}Ne===!0&&(I.updateMultisampleRenderTarget(de),I.updateRenderTargetMipmap(de))}D.setRenderTarget(ue,ge,Te),D.setClearColor(me,Ie),Pe!==void 0&&(V.viewport=Pe),D.toneMapping=we}function aa(S,O,k){const V=O.isScene===!0?O.overrideMaterial:null;for(let H=0,de=S.length;H<de;H++){const _e=S[H],{object:ue,geometry:ge,group:Te}=_e;let we=_e.material;we.allowOverride===!0&&V!==null&&(we=V),ue.layers.test(k.layers)&&hl(ue,O,k,ge,we,Te)}}function hl(S,O,k,V,H,de){S.onBeforeRender(D,O,k,V,H,de),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(D,O,k,V,S,de),H.transparent===!0&&H.side===2&&H.forceSinglePass===!1?(H.side=1,H.needsUpdate=!0,D.renderBufferDirect(k,O,V,H,S,de),H.side=0,H.needsUpdate=!0,D.renderBufferDirect(k,O,V,H,S,de),H.side=2):D.renderBufferDirect(k,O,V,H,S,de),S.onAfterRender(D,O,k,V,H,de)}function sa(S,O,k){O.isScene!==!0&&(O=Nt);const V=R.get(S),H=C.state.lights,de=C.state.shadowsArray,_e=H.state.version,ue=se.getParameters(S,H.state,de,O,k,C.state.lightProbeGridArray),ge=se.getProgramCacheKey(ue);let Te=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;const we=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=F.get(S.envMap||V.environment,we),V.envMapRotation=V.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Te===void 0&&(S.addEventListener("dispose",At),Te=new Map,V.programs=Te);let Pe=Te.get(ge);if(Pe!==void 0){if(V.currentProgram===Pe&&V.lightsStateVersion===_e)return ml(S,ue),Pe}else ue.uniforms=se.getUniforms(S),P!==null&&S.isNodeMaterial&&P.build(S,k,ue),S.onBeforeCompile(ue,D),Pe=se.acquireProgram(ue,ge),Te.set(ge,Pe),V.uniforms=ue.uniforms;const Ne=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=Ee.uniform),ml(S,ue),V.needsLights=Zd(S),V.lightsStateVersion=_e,V.needsLights&&(Ne.ambientLightColor.value=H.state.ambient,Ne.lightProbe.value=H.state.probe,Ne.directionalLights.value=H.state.directional,Ne.directionalLightShadows.value=H.state.directionalShadow,Ne.spotLights.value=H.state.spot,Ne.spotLightShadows.value=H.state.spotShadow,Ne.rectAreaLights.value=H.state.rectArea,Ne.ltc_1.value=H.state.rectAreaLTC1,Ne.ltc_2.value=H.state.rectAreaLTC2,Ne.pointLights.value=H.state.point,Ne.pointLightShadows.value=H.state.pointShadow,Ne.hemisphereLights.value=H.state.hemi,Ne.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ne.spotLightMatrix.value=H.state.spotLightMatrix,Ne.spotLightMap.value=H.state.spotLightMap,Ne.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=C.state.lightProbeGridArray.length>0,V.currentProgram=Pe,V.uniformsList=null,Pe}function pl(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=Oa.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function ml(S,O){const k=R.get(S);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.batchingColor=O.batchingColor,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.instancingMorph=O.instancingMorph,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function Yd(S,O){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;N.setFromMatrixPosition(O.matrixWorld);for(let k=0,V=S.length;k<V;k++){const H=S[k];if(H.texture!==null&&H.boundingBox.containsPoint(N))return H}return null}function Xd(S,O,k,V,H){O.isScene!==!0&&(O=Nt),I.resetTextureUnits();const de=O.fog,_e=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,ue=w===null?D.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ze.workingColorSpace,ge=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Te=F.get(V.envMap||_e,ge),we=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Pe=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ne=!!k.morphAttributes.position,Je=!!k.morphAttributes.normal,Et=!!k.morphAttributes.color;let pt=0;V.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(pt=D.toneMapping);const Qe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,bt=Qe!==void 0?Qe.length:0,Ae=R.get(V),$t=C.state.lights;if(ot===!0&&(Ve===!0||S!==U)){const rt=S===U&&V.id===B;Ee.setState(V,S,rt)}let Xe=!1;V.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==$t.state.version||Ae.outputColorSpace!==ue||H.isBatchedMesh&&Ae.batching===!1||!H.isBatchedMesh&&Ae.batching===!0||H.isBatchedMesh&&Ae.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ae.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ae.instancing===!1||!H.isInstancedMesh&&Ae.instancing===!0||H.isSkinnedMesh&&Ae.skinning===!1||!H.isSkinnedMesh&&Ae.skinning===!0||H.isInstancedMesh&&Ae.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ae.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ae.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ae.instancingMorph===!1&&H.morphTexture!==null||Ae.envMap!==Te||V.fog===!0&&Ae.fog!==de||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Ee.numPlanes||Ae.numIntersection!==Ee.numIntersection)||Ae.vertexAlphas!==we||Ae.vertexTangents!==Pe||Ae.morphTargets!==Ne||Ae.morphNormals!==Je||Ae.morphColors!==Et||Ae.toneMapping!==pt||Ae.morphTargetsCount!==bt||!!Ae.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(Xe=!0):(Xe=!0,Ae.__version=V.version);let cn=Ae.currentProgram;Xe===!0&&(cn=sa(V,O,H),P&&V.isNodeMaterial&&P.onUpdateProgram(V,cn,Ae));let vn=!1,Jn=!1,Hi=!1;const et=cn.getUniforms(),_t=Ae.uniforms;if(le.useProgram(cn.program)&&(vn=!0,Jn=!0,Hi=!0),V.id!==B&&(B=V.id,Jn=!0),Ae.needsLights){const rt=Yd(C.state.lightProbeGridArray,H);Ae.lightProbeGrid!==rt&&(Ae.lightProbeGrid=rt,Jn=!0)}if(vn||U!==S){le.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),et.setValue(L,"projectionMatrix",S.projectionMatrix),et.setValue(L,"viewMatrix",S.matrixWorldInverse);const ei=et.map.cameraPosition;ei!==void 0&&ei.setValue(L,at.setFromMatrixPosition(S.matrixWorld)),it.logarithmicDepthBuffer&&et.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&et.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),U!==S&&(U=S,Jn=!0,Hi=!0)}if(Ae.needsLights&&($t.state.directionalShadowMap.length>0&&et.setValue(L,"directionalShadowMap",$t.state.directionalShadowMap,I),$t.state.spotShadowMap.length>0&&et.setValue(L,"spotShadowMap",$t.state.spotShadowMap,I),$t.state.pointShadowMap.length>0&&et.setValue(L,"pointShadowMap",$t.state.pointShadowMap,I)),H.isSkinnedMesh){et.setOptional(L,H,"bindMatrix"),et.setOptional(L,H,"bindMatrixInverse");const rt=H.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),et.setValue(L,"boneTexture",rt.boneTexture,I))}H.isBatchedMesh&&(et.setOptional(L,H,"batchingTexture"),et.setValue(L,"batchingTexture",H._matricesTexture,I),et.setOptional(L,H,"batchingIdTexture"),et.setValue(L,"batchingIdTexture",H._indirectTexture,I),et.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&et.setValue(L,"batchingColorTexture",H._colorsTexture,I));const Qn=k.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&xe.update(H,k,cn),(Jn||Ae.receiveShadow!==H.receiveShadow)&&(Ae.receiveShadow=H.receiveShadow,et.setValue(L,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(_t.envMapIntensity.value=O.environmentIntensity),_t.dfgLUT!==void 0&&(_t.dfgLUT.value=OE()),Jn){if(et.setValue(L,"toneMappingExposure",D.toneMappingExposure),Ae.needsLights&&qd(_t,Hi),de&&V.fog===!0&&Y.refreshFogUniforms(_t,de),Y.refreshMaterialUniforms(_t,V,Ce,Ue,C.state.transmissionRenderTarget[S.id]),Ae.needsLights&&Ae.lightProbeGrid){const rt=Ae.lightProbeGrid;_t.probesSH.value=rt.texture,_t.probesMin.value.copy(rt.boundingBox.min),_t.probesMax.value.copy(rt.boundingBox.max),_t.probesResolution.value.copy(rt.resolution)}Oa.upload(L,pl(Ae),_t,I)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Oa.upload(L,pl(Ae),_t,I),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&et.setValue(L,"center",H.center),et.setValue(L,"modelViewMatrix",H.modelViewMatrix),et.setValue(L,"normalMatrix",H.normalMatrix),et.setValue(L,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const rt=V.uniformsGroups;for(let ei=0,zi=rt.length;ei<zi;ei++){const Al=rt[ei];X.update(Al,cn),X.bind(Al,cn)}}return cn}function qd(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Zd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,O,k){const V=R.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),R.get(S.texture).__webglTexture=O,R.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:k,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){const k=R.get(S);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0};const Kd=L.createFramebuffer();this.setRenderTarget=function(S,O=0,k=0){w=S,z=O,W=k;let V=null,H=!1,de=!1;if(S){const ue=R.get(S);if(ue.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(L.FRAMEBUFFER,ue.__webglFramebuffer),$.copy(S.viewport),Q.copy(S.scissor),oe=S.scissorTest,le.viewport($),le.scissor(Q),le.setScissorTest(oe),B=-1;return}else if(ue.__webglFramebuffer===void 0)I.setupRenderTarget(S);else if(ue.__hasExternalTextures)I.rebindTextures(S,R.get(S.texture).__webglTexture,R.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const we=S.depthTexture;if(ue.__boundDepthTexture!==we){if(we!==null&&R.has(we)&&(S.width!==we.image.width||S.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(S)}}const ge=S.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(de=!0);const Te=R.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Te[O])?V=Te[O][k]:V=Te[O],H=!0):S.samples>0&&I.useMultisampledRTT(S)===!1?V=R.get(S).__webglMultisampledFramebuffer:Array.isArray(Te)?V=Te[k]:V=Te,$.copy(S.viewport),Q.copy(S.scissor),oe=S.scissorTest}else $.copy(ie).multiplyScalar(Ce).floor(),Q.copy(Re).multiplyScalar(Ce).floor(),oe=ye;if(k!==0&&(V=Kd),le.bindFramebuffer(L.FRAMEBUFFER,V)&&le.drawBuffers(S,V),le.viewport($),le.scissor(Q),le.setScissorTest(oe),H){const ue=R.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,ue.__webglTexture,k)}else if(de){const ue=O;for(let ge=0;ge<S.textures.length;ge++){const Te=R.get(S.textures[ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ge,Te.__webglTexture,k,ue)}}else if(S!==null&&k!==0){const ue=R.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ue.__webglTexture,k)}B=-1},this.readRenderTargetPixels=function(S,O,k,V,H,de,_e,ue=0){if(!(S&&S.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=R.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(ge=ge[_e]),ge){le.bindFramebuffer(L.FRAMEBUFFER,ge);try{const Te=S.textures[ue],we=Te.format,Pe=Te.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue),!it.textureFormatReadable(we)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Pe)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-V&&k>=0&&k<=S.height-H&&L.readPixels(O,k,V,H,b.convert(we),b.convert(Pe),de)}finally{const Te=w!==null?R.get(w).__webglFramebuffer:null;le.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(S,O,k,V,H,de,_e,ue=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=R.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(ge=ge[_e]),ge)if(O>=0&&O<=S.width-V&&k>=0&&k<=S.height-H){le.bindFramebuffer(L.FRAMEBUFFER,ge);const Te=S.textures[ue],we=Te.format,Pe=Te.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue),!it.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ne),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(O,k,V,H,b.convert(we),b.convert(Pe),0);const Je=w!==null?R.get(w).__webglFramebuffer:null;le.bindFramebuffer(L.FRAMEBUFFER,Je);const Et=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ef(L,Et,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ne),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.deleteBuffer(Ne),L.deleteSync(Et),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,k=0){const V=Math.pow(2,-k),H=Math.floor(S.image.width*V),de=Math.floor(S.image.height*V),_e=O!==null?O.x:0,ue=O!==null?O.y:0;I.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,_e,ue,H,de),le.unbindTexture()};const $d=L.createFramebuffer(),jd=L.createFramebuffer();this.copyTextureToTexture=function(S,O,k=null,V=null,H=0,de=0){let _e,ue,ge,Te,we,Pe,Ne,Je,Et;const pt=S.isCompressedTexture?S.mipmaps[de]:S.image;if(k!==null)_e=k.max.x-k.min.x,ue=k.max.y-k.min.y,ge=k.isBox3?k.max.z-k.min.z:1,Te=k.min.x,we=k.min.y,Pe=k.isBox3?k.min.z:0;else{const _t=Math.pow(2,-H);_e=Math.floor(pt.width*_t),ue=Math.floor(pt.height*_t),S.isDataArrayTexture?ge=pt.depth:S.isData3DTexture?ge=Math.floor(pt.depth*_t):ge=1,Te=0,we=0,Pe=0}V!==null?(Ne=V.x,Je=V.y,Et=V.z):(Ne=0,Je=0,Et=0);const Qe=b.convert(O.format),bt=b.convert(O.type);let Ae;O.isData3DTexture?(I.setTexture3D(O,0),Ae=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(I.setTexture2DArray(O,0),Ae=L.TEXTURE_2D_ARRAY):(I.setTexture2D(O,0),Ae=L.TEXTURE_2D),le.activeTexture(L.TEXTURE0),le.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),le.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),le.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const $t=le.getParameter(L.UNPACK_ROW_LENGTH),Xe=le.getParameter(L.UNPACK_IMAGE_HEIGHT),cn=le.getParameter(L.UNPACK_SKIP_PIXELS),vn=le.getParameter(L.UNPACK_SKIP_ROWS),Jn=le.getParameter(L.UNPACK_SKIP_IMAGES);le.pixelStorei(L.UNPACK_ROW_LENGTH,pt.width),le.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt.height),le.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),le.pixelStorei(L.UNPACK_SKIP_ROWS,we),le.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe);const Hi=S.isDataArrayTexture||S.isData3DTexture,et=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){const _t=R.get(S),Qn=R.get(O),rt=R.get(_t.__renderTarget),ei=R.get(Qn.__renderTarget);le.bindFramebuffer(L.READ_FRAMEBUFFER,rt.__webglFramebuffer),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let zi=0;zi<ge;zi++)Hi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,R.get(S).__webglTexture,H,Pe+zi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,R.get(O).__webglTexture,de,Et+zi)),L.blitFramebuffer(Te,we,_e,ue,Ne,Je,_e,ue,L.DEPTH_BUFFER_BIT,L.NEAREST);le.bindFramebuffer(L.READ_FRAMEBUFFER,null),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||R.has(S)){const _t=R.get(S),Qn=R.get(O);le.bindFramebuffer(L.READ_FRAMEBUFFER,$d),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,jd);for(let rt=0;rt<ge;rt++)Hi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_t.__webglTexture,H,Pe+rt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_t.__webglTexture,H),et?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Qn.__webglTexture,de,Et+rt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Qn.__webglTexture,de),H!==0?L.blitFramebuffer(Te,we,_e,ue,Ne,Je,_e,ue,L.COLOR_BUFFER_BIT,L.NEAREST):et?L.copyTexSubImage3D(Ae,de,Ne,Je,Et+rt,Te,we,_e,ue):L.copyTexSubImage2D(Ae,de,Ne,Je,Te,we,_e,ue);le.bindFramebuffer(L.READ_FRAMEBUFFER,null),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else et?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Ae,de,Ne,Je,Et,_e,ue,ge,Qe,bt,pt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Ae,de,Ne,Je,Et,_e,ue,ge,Qe,pt.data):L.texSubImage3D(Ae,de,Ne,Je,Et,_e,ue,ge,Qe,bt,pt):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,de,Ne,Je,_e,ue,Qe,bt,pt.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,de,Ne,Je,pt.width,pt.height,Qe,pt.data):L.texSubImage2D(L.TEXTURE_2D,de,Ne,Je,_e,ue,Qe,bt,pt);le.pixelStorei(L.UNPACK_ROW_LENGTH,$t),le.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xe),le.pixelStorei(L.UNPACK_SKIP_PIXELS,cn),le.pixelStorei(L.UNPACK_SKIP_ROWS,vn),le.pixelStorei(L.UNPACK_SKIP_IMAGES,Jn),de===0&&O.generateMipmaps&&L.generateMipmap(Ae),le.unbindTexture()},this.initRenderTarget=function(S){R.get(S).__webglFramebuffer===void 0&&I.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?I.setTextureCube(S,0):S.isData3DTexture?I.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?I.setTexture2DArray(S,0):I.setTexture2D(S,0),le.unbindTexture()},this.resetState=function(){z=0,W=0,w=null,le.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}function Yn(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Su(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var an={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zr={duration:.5,overwrite:!1,delay:0},Vo,yt,st,mn=1e8,nt=1/mn,uo=Math.PI*2,UE=uo/4,FE=0,Tu=Math.sqrt,GE=Math.cos,BE=Math.sin,xt=function(e){return typeof e=="string"},mt=function(e){return typeof e=="function"},$n=function(e){return typeof e=="number"},Ho=function(e){return typeof e>"u"},Fn=function(e){return typeof e=="object"},kt=function(e){return e!==!1},zo=function(){return typeof window<"u"},wa=function(e){return mt(e)||xt(e)},Nu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ut=Array.isArray,VE=/random\([^)]+\)/g,HE=/,\s*/g,Ac=/(?:-?\.?\d|\.)+/gi,Mu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xs=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cu=/[+-]=-?[.\d]+/,zE=/[^,'"\[\]\s]+/gi,kE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ut,Dn,fo,ko,on={},Xa={},Ru,vu=function(e){return(Xa=fr(e,on))&&qt},Wo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},kr=function(e,t){return!t&&console.warn(e)},xu=function(e,t){return e&&(on[e]=t)&&Xa&&(Xa[e]=t)||on},Wr=function(){return 0},WE={suppressEvents:!0,isStart:!0,kill:!1},Pa={suppressEvents:!0,kill:!1},YE={suppressEvents:!0},Yo={},fi=[],ho={},yu,Qt={},qs={},Ec=30,Ua=[],Xo="",qo=function(e){var t=e[0],n,r;if(Fn(t)||mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ua.length;r--&&!Ua[r].targetTest(t););n=Ua[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new ju(e[r],n)))||e.splice(r,1);return e},wi=function(e){return e._gsap||qo(An(e))[0]._gsap},Du=function(e,t,n){return(n=e[t])&&mt(n)?e[t]():Ho(n)&&e.getAttribute&&e.getAttribute(t)||n},Wt=function(e,t){return(e=e.split(",")).forEach(t)||e},It=function(e){return Math.round(e*1e5)/1e5||0},ct=function(e){return Math.round(e*1e7)/1e7||0},or=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},XE=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},qa=function(){var e=fi.length,t=fi.slice(0),n,r;for(ho={},fi.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Zo=function(e){return!!(e._initted||e._startAt||e.add)},bu=function(e,t,n,r){fi.length&&!yt&&qa(),e.render(t,n,!!(yt&&t<0&&Zo(e))),fi.length&&!yt&&qa()},wu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(zE).length<2?t:xt(e)?e.trim():e},Lu=function(e){return e},ln=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},qE=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},fr=function(e,t){for(var n in t)e[n]=t[n];return e},_c=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Fn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Za=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Br=function(e){var t=e.parent||ut,n=e.keyframes?qE(Ut(e.keyframes)):ln;if(kt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ZE=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Ou=function(e,t,n,r,a){var s=e[r],o;if(a)for(o=t[a];s&&s[a]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=s,t.parent=t._dp=e,t},os=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t._prev,s=t._next;a?a._next=s:e[n]===t&&(e[n]=s),s?s._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},mi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Li=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},KE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},po=function(e,t,n,r){return e._startAt&&(yt?e._startAt.revert(Pa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},$E=function i(e){return!e||e._ts&&i(e.parent)},Ic=function(e){return e._repeat?hr(e._tTime,e=e.duration()+e._rDelay)*e:0},hr=function(e,t){var n=Math.floor(e=ct(e/t));return e&&n===e?n-1:n},Ka=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ls=function(e){return e._end=ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||nt)||0))},cs=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ls(e),n._dirty||Li(n,e)),e},Pu=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ka(e.rawTime(),t),(!t._dur||ia(0,t.totalDuration(),n)-t._tTime>nt)&&t.render(n,!0)),Li(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-nt}},wn=function(e,t,n,r){return t.parent&&mi(t),t._start=ct(($n(n)?n:n||e!==ut?dn(e,n,t):e._time)+t._delay),t._end=ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ou(e,t,"_first","_last",e._sort?"_start":0),mo(t)||(e._recent=t),r||Pu(e,t),e._ts<0&&cs(e,e._tTime),e},Uu=function(e,t){return(on.ScrollTrigger||Wo("scrollTrigger",t))&&on.ScrollTrigger.create(t,e)},Fu=function(e,t,n,r,a){if($o(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!yt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&yu!==en.frame)return fi.push(e),e._lazy=[a,r],1},jE=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},mo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},JE=function(e,t,n,r){var a=e.ratio,s=t<0||!t&&(!e._start&&jE(e)&&!(!e._initted&&mo(e))||(e._ts<0||e._dp._ts<0)&&!mo(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=ia(0,e._tDur,t),u=hr(l,o),e._yoyo&&u&1&&(s=1-s),u!==hr(e._tTime,o)&&(a=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==a||yt||r||e._zTime===nt||!t&&e._zTime){if(!e._initted&&Fu(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?nt:0),n||(n=t&&!f),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&po(e,t,n,!0),e._onUpdate&&!n&&tn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&tn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&mi(e,1),!n&&!yt&&(tn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},QE=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},pr=function(e,t,n,r){var a=e._repeat,s=ct(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=a?a<0?1e10:ct(s*(a+1)+e._rDelay*a):s,o>0&&!r&&cs(e,e._tTime=e._tDur*o),e.parent&&ls(e),n||Li(e.parent,e),e},gc=function(e){return e instanceof zt?Li(e):pr(e,e._dur)},e_={_start:0,endTime:Wr,totalDuration:Wr},dn=function i(e,t,n){var r=e.labels,a=e._recent||e_,s=e.duration()>=mn?a.endTime(!1):e._dur,o,l,c;return xt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?a:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=s),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Ut(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:s+l)):t==null?s:+t},Vr=function(e,t,n){var r=$n(t[1]),a=(r?2:1)+(e<2?0:1),s=t[a],o,l;if(r&&(s.duration=t[1]),s.parent=n,e){for(o=s,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=kt(l.vars.inherit)&&l.parent;s.immediateRender=kt(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[a-1]}return new Tt(t[0],s,t[a+1])},_i=function(e,t){return e||e===0?t(e):t},ia=function(e,t,n){return n<e?e:n>t?t:n},Ot=function(e,t){return!xt(e)||!(t=kE.exec(e))?"":t[1]},t_=function(e,t,n){return _i(n,function(r){return ia(e,t,r)})},Ao=[].slice,Gu=function(e,t){return e&&Fn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fn(e[0]))&&!e.nodeType&&e!==Dn},n_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var a;return xt(r)&&!t||Gu(r,1)?(a=n).push.apply(a,An(r)):n.push(r)})||n},An=function(e,t,n){return st&&!t&&st.selector?st.selector(e):xt(e)&&!n&&(fo||!mr())?Ao.call((t||ko).querySelectorAll(e),0):Ut(e)?n_(e,n):Gu(e)?Ao.call(e,0):e?[e]:[]},Eo=function(e){return e=An(e)[0]||kr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return An(t,n.querySelectorAll?n:n===e?kr("Invalid scope")||ko.createElement("div"):e)}},Bu=function(e){return e.sort(function(){return .5-Math.random()})},Vu=function(e){if(mt(e))return e;var t=Fn(e)?e:{each:e},n=Oi(t.ease),r=t.from||0,a=parseFloat(t.base)||0,s={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,f=r;return xt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(d,h,E){var A=(E||t).length,p=s[A],m,g,T,N,v,C,x,_,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,mn])[1],!M){for(x=-mn;x<(x=E[M++].getBoundingClientRect().left)&&M<A;);M<A&&M--}for(p=s[A]=[],m=l?Math.min(M,A)*u-.5:r%M,g=M===mn?0:l?A*f/M-.5:r/M|0,x=0,_=mn,C=0;C<A;C++)T=C%M-m,N=g-(C/M|0),p[C]=v=c?Math.abs(c==="y"?N:T):Tu(T*T+N*N),v>x&&(x=v),v<_&&(_=v);r==="random"&&Bu(p),p.max=x-_,p.min=_,p.v=A=(parseFloat(t.amount)||parseFloat(t.each)*(M>A?A-1:c?c==="y"?A/M:M:Math.max(M,A/M))||0)*(r==="edges"?-1:1),p.b=A<0?a-A:a,p.u=Ot(t.amount||t.each)||0,n=n&&A<0?m_(n):n}return A=(p[d]-p.min)/p.max||0,ct(p.b+(n?n(A):A)*p.v)+p.u}},_o=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=ct(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+($n(n)?0:Ot(n))}},Hu=function(e,t){var n=Ut(e),r,a;return!n&&Fn(e)&&(r=n=e.radius||mn,e.values?(e=An(e.values),(a=!$n(e[0]))&&(r*=r)):e=_o(e.increment)),_i(t,n?mt(e)?function(s){return a=e(s),Math.abs(a-s)<=r?a:s}:function(s){for(var o=parseFloat(a?s.x:s),l=parseFloat(a?s.y:0),c=mn,u=0,f=e.length,d,h;f--;)a?(d=e[f].x-o,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-o),d<c&&(c=d,u=f);return u=!r||c<=r?e[u]:s,a||u===s||$n(s)?u:u+Ot(s)}:_o(e))},zu=function(e,t,n,r){return _i(Ut(e)?!t:n===!0?!!(n=0):!r,function(){return Ut(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},i_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(a,s){return s(a)},r)}},r_=function(e,t){return function(n){return e(parseFloat(n))+(t||Ot(n))}},a_=function(e,t,n){return Wu(e,t,0,1,n)},ku=function(e,t,n){return _i(n,function(r){return e[~~t(r)]})},s_=function i(e,t,n){var r=t-e;return Ut(e)?ku(e,i(0,e.length),t):_i(n,function(a){return(r+(a-e)%r)%r+e})},o_=function i(e,t,n){var r=t-e,a=r*2;return Ut(e)?ku(e,i(0,e.length-1),t):_i(n,function(s){return s=(a+(s-e)%a)%a||0,e+(s>r?a-s:s)})},Yr=function(e){return e.replace(VE,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(HE);return zu(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Wu=function(e,t,n,r,a){var s=t-e,o=r-n;return _i(a,function(l){return n+((l-e)/s*o||0)})},l_=function i(e,t,n,r){var a=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!a){var s=xt(e),o={},l,c,u,f,d;if(n===!0&&(r=1)&&(n=null),s)e={p:e},t={p:t};else if(Ut(e)&&!Ut(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,a=function(E){E*=f;var A=Math.min(d,~~E);return u[A](E-A)},n=t}else r||(e=fr(Ut(e)?[]:{},e));if(!u){for(l in t)Ko.call(o,e,l,"get",t[l]);a=function(E){return Qo(E,o)||(s?e.p:e)}}}return _i(n,a)},Sc=function(e,t,n){var r=e.labels,a=mn,s,o,l;for(s in r)o=r[s]-t,o<0==!!n&&o&&a>(o=Math.abs(o))&&(l=s,a=o);return l},tn=function(e,t,n){var r=e.vars,a=r[t],s=st,o=e._ctx,l,c,u;if(a)return l=r[t+"Params"],c=r.callbackScope||e,n&&fi.length&&qa(),o&&(st=o),u=l?a.apply(c,l):a.call(c),st=s,u},Ur=function(e){return mi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yt),e.progress()<1&&tn(e,"onInterrupt"),e},ar,Yu=[],Xu=function(e){if(e)if(e=!e.name&&e.default||e,zo()||e.headless){var t=e.name,n=mt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,a={init:Wr,render:Qo,add:Ko,kill:C_,modifier:M_,rawVars:0},s={targetTest:0,get:0,getSetter:Jo,aliases:{},register:0};if(mr(),e!==r){if(Qt[t])return;ln(r,ln(Za(e,a),s)),fr(r.prototype,fr(a,Za(e,s))),Qt[r.prop=t]=r,e.targetTest&&(Ua.push(r),Yo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}xu(t,r),e.register&&e.register(qt,r,Yt)}else Yu.push(e)},tt=255,Fr={aqua:[0,tt,tt],lime:[0,tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,tt],navy:[0,0,128],white:[tt,tt,tt],olive:[128,128,0],yellow:[tt,tt,0],orange:[tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[tt,0,0],pink:[tt,192,203],cyan:[0,tt,tt],transparent:[tt,tt,tt,0]},Zs=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*tt+.5|0},qu=function(e,t,n){var r=e?$n(e)?[e>>16,e>>8&tt,e&tt]:0:Fr.black,a,s,o,l,c,u,f,d,h,E;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Fr[e])r=Fr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+a+a+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&tt,r&tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&tt,e&tt]}else if(e.substr(0,3)==="hsl"){if(r=E=e.match(Ac),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,s=u<=.5?u*(c+1):u+c-u*c,a=u*2-s,r.length>3&&(r[3]*=1),r[0]=Zs(l+1/3,a,s),r[1]=Zs(l,a,s),r[2]=Zs(l-1/3,a,s);else if(~e.indexOf("="))return r=e.match(Mu),n&&r.length<4&&(r[3]=1),r}else r=e.match(Ac)||Fr.transparent;r=r.map(Number)}return t&&!E&&(a=r[0]/tt,s=r[1]/tt,o=r[2]/tt,f=Math.max(a,s,o),d=Math.min(a,s,o),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===a?(s-o)/h+(s<o?6:0):f===s?(o-a)/h+2:(a-s)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Zu=function(e){var t=[],n=[],r=-1;return e.split(hi).forEach(function(a){var s=a.match(rr)||[];t.push.apply(t,s),n.push(r+=s.length+1)}),t.c=n,t},Tc=function(e,t,n){var r="",a=(e+r).match(hi),s=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!a)return e;if(a=a.map(function(d){return(d=qu(d,t,1))&&s+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Zu(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(hi,"1").split(rr),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?a.shift()||s+"0,0,0,0)":(u.length?u:a.length?a:n).shift());if(!c)for(c=e.split(hi),f=c.length-1;o<f;o++)r+=c[o]+a[o];return r+c[f]},hi=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Fr)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),c_=/hsl[a]?\(/,Ku=function(e){var t=e.join(" "),n;if(hi.lastIndex=0,hi.test(t))return n=c_.test(t),e[1]=Tc(e[1],n),e[0]=Tc(e[0],n,Zu(e[1])),!0},Xr,en=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,a=1e3/240,s=a,o=[],l,c,u,f,d,h,E=function A(p){var m=i()-r,g=p===!0,T,N,v,C;if((m>e||m<0)&&(n+=m-t),r+=m,v=r-n,T=v-s,(T>0||g)&&(C=++f.frame,d=v-f.time*1e3,f.time=v=v/1e3,s+=T+(T>=a?4:a-T),N=1),g||(l=c(A)),N)for(h=0;h<o.length;h++)o[h](v,d,C,p)};return f={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Ru&&(!fo&&zo()&&(Dn=fo=window,ko=Dn.document||{},on.gsap=qt,(Dn.gsapVersions||(Dn.gsapVersions=[])).push(qt.version),vu(Xa||Dn.GreenSockGlobals||!Dn.gsap&&Dn||{}),Yu.forEach(Xu)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,s-f.time*1e3+1|0)},Xr=1,E(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Xr=0,c=Wr},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){a=1e3/(p||240),s=f.time*1e3+a},add:function(p,m,g){var T=m?function(N,v,C,x){p(N,v,C,x),f.remove(T)}:p;return f.remove(p),o[g?"unshift":"push"](T),mr(),T},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&h>=m&&h--},_listeners:o},f})(),mr=function(){return!Xr&&en.wake()},We={},u_=/^[\d.\-M][\d.\-,\s]/,d_=/["']/g,f_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],a=1,s=n.length,o,l,c;a<s;a++)l=n[a],o=a!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(d_,"").trim():+c,r=l.substr(o+1).trim();return t},h_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},p_=function(e){var t=(e+"").split("("),n=We[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[f_(t[1])]:h_(e).split(",").map(wu)):We._CE&&u_.test(e)?We._CE("",e):n},m_=function(e){return function(t){return 1-e(1-t)}},Oi=function(e,t){return e&&(mt(e)?e:We[e]||p_(e))||t},Vi=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:r},s;return Wt(e,function(o){We[o]=on[o]=a,We[s=o.toLowerCase()]=n;for(var l in a)We[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=We[o+"."+l]=a[l]}),a},$u=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ks=function i(e,t,n){var r=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),s=a/uo*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*BE((u-s)*a)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:$u(o);return a=uo/a,l.config=function(c,u){return i(e,c,u)},l},$s=function i(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},r=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:$u(n);return r.config=function(a){return i(e,a)},r};Wt("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Vi(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});We.Linear.easeNone=We.none=We.Linear.easeIn;Vi("Elastic",Ks("in"),Ks("out"),Ks());(function(i,e){var t=1/e,n=2*t,r=2.5*t,a=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};Vi("Bounce",function(s){return 1-a(1-s)},a)})(7.5625,2.75);Vi("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Vi("Circ",function(i){return-(Tu(1-i*i)-1)});Vi("Sine",function(i){return i===1?1:-GE(i*UE)+1});Vi("Back",$s("in"),$s("out"),$s());We.SteppedEase=We.steps=on.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),a=t?1:0,s=1-nt;return function(o){return((r*ia(0,s,o)|0)+a)*n}}};zr.ease=We["quad.out"];Wt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Xo+=i+","+i+"Params,"});var ju=function(e,t){this.id=FE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Du,this.set=t?t.getSetter:Jo},qr=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,pr(this,+t.duration,1,1),this.data=t.data,st&&(this._ctx=st,st.data.push(this)),Xr||en.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,pr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(mr(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(cs(this,n),!a._dp||a.parent||Pu(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===nt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),bu(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ic(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ic(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,r):this._repeat?hr(this._tTime,a)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-nt?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?Ka(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-nt?0:this._rts,this.totalTime(ia(-Math.abs(this._delay),this.totalDuration(),a),r!==!1),ls(this),KE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(mr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==nt&&(this._tTime-=nt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=ct(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&wn(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(kt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ka(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=YE);var r=yt;return yt=n,Zo(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),yt=r,this},e.globalTime=function(n){for(var r=this,a=arguments.length?n:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,gc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,gc(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(dn(this,n),kt(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,kt(r)),this._dur||(this._zTime=-nt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-nt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=r&&a<this.endTime(!0)-nt)},e.eventCallback=function(n,r,a){var s=this.vars;return arguments.length>1?(r?(s[n]=r,a&&(s[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=r)):delete s[n],this):s[n]},e.then=function(n){var r=this,a=r._prom;return new Promise(function(s){var o=mt(n)?n:Lu,l=function(){var u=r.then;r.then=null,a&&a(),mt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ur(this)},i})();ln(qr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-nt,_prom:0,_ps:!1,_rts:1});var zt=(function(i){Su(e,i);function e(n,r){var a;return n===void 0&&(n={}),a=i.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=kt(n.sortChildren),ut&&wn(n.parent||ut,Yn(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&Uu(Yn(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,s){return Vr(0,arguments,this),this},t.from=function(r,a,s){return Vr(1,arguments,this),this},t.fromTo=function(r,a,s,o){return Vr(2,arguments,this),this},t.set=function(r,a,s){return a.duration=0,a.parent=this,Br(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Tt(r,a,dn(this,s),1),this},t.call=function(r,a,s){return wn(this,Tt.delayedCall(0,r,a),s)},t.staggerTo=function(r,a,s,o,l,c,u){return s.duration=a,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new Tt(r,s,dn(this,l)),this},t.staggerFrom=function(r,a,s,o,l,c,u){return s.runBackwards=1,Br(s).immediateRender=kt(s.immediateRender),this.staggerTo(r,a,s,o,l,c,u)},t.staggerFromTo=function(r,a,s,o,l,c,u,f){return o.startAt=s,Br(o).immediateRender=kt(o.immediateRender),this.staggerTo(r,a,o,l,c,u,f)},t.render=function(r,a,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:ct(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,h,E,A,p,m,g,T,N,v,C,x;if(this!==ut&&u>l&&r>=0&&(u=l),u!==this._tTime||s||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),d=u,N=this._start,T=this._ts,m=!T,f&&(c||(o=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,a,s);if(d=ct(u%p),u===l?(A=this._repeat,d=c):(v=ct(u/p),A=~~v,A&&A===v&&(d=c,A--),d>c&&(d=c)),v=hr(this._tTime,p),!o&&this._tTime&&v!==A&&this._tTime-v*p-this._dur<=0&&(v=A),C&&A&1&&(d=c-d,x=1),A!==v&&!this._lock){var _=C&&v&1,M=_===(C&&A&1);if(A<v&&(_=!_),o=_?0:u%c?c:u,this._lock=1,this.render(o||(x?0:ct(A*p)),a,!c)._lock=0,this._tTime=u,!a&&this.parent&&tn(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,v=A),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=_?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=QE(this,ct(o),ct(d)),g&&(u-=d-(d=g._start))),this._tTime=u,this._time=d,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!a&&!v&&(tn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&r>=0)for(h=this._first;h;){if(E=h._next,(h._act||d>=h._start)&&h._ts&&g!==h){if(h.parent!==this)return this.render(r,a,s);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,a,s),d!==this._time||!this._ts&&!m){g=0,E&&(u+=this._zTime=-nt);break}}h=E}else{h=this._last;for(var D=r<0?r:d;h;){if(E=h._prev,(h._act||D<=h._end)&&h._ts&&g!==h){if(h.parent!==this)return this.render(r,a,s);if(h.render(h._ts>0?(D-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(D-h._start)*h._ts,a,s||yt&&Zo(h)),d!==this._time||!this._ts&&!m){g=0,E&&(u+=this._zTime=D?-nt:nt);break}}h=E}}if(g&&!a&&(this.pause(),g.render(d>=o?0:-nt)._zTime=d>=o?1:-1,this._ts))return this._start=N,ls(this),this.render(r,a,s);this._onUpdate&&!a&&tn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(N===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&mi(this,1),!a&&!(r<0&&!o)&&(u||o||!l)&&(tn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var s=this;if($n(a)||(a=dn(this,a,r)),!(r instanceof qr)){if(Ut(r))return r.forEach(function(o){return s.add(o,a)}),this;if(xt(r))return this.addLabel(r,a);if(mt(r))r=Tt.delayedCall(0,r);else return this}return this!==r?wn(this,r,a):this},t.getChildren=function(r,a,s,o){r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=!0),o===void 0&&(o=-mn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Tt?a&&l.push(c):(s&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,a,s)))),c=c._next;return l},t.getById=function(r){for(var a=this.getChildren(1,1,1),s=a.length;s--;)if(a[s].vars.id===r)return a[s]},t.remove=function(r){return xt(r)?this.removeLabel(r):mt(r)?this.killTweensOf(r):(r.parent===this&&os(this,r),r===this._recent&&(this._recent=this._last),Li(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ct(en.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=dn(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,s){var o=Tt.delayedCall(0,a||Wr,s);return o.data="isPause",this._hasPause=1,wn(this,o,dn(this,r))},t.removePause=function(r){var a=this._first;for(r=dn(this,r);a;)a._start===r&&a.data==="isPause"&&mi(a),a=a._next},t.killTweensOf=function(r,a,s){for(var o=this.getTweensOf(r,s),l=o.length;l--;)ci!==o[l]&&o[l].kill(r,a);return this},t.getTweensOf=function(r,a){for(var s=[],o=An(r),l=this._first,c=$n(a),u;l;)l instanceof Tt?XE(l._targets,o)&&(c?(!ci||l._initted&&l._ts)&&l.globalTime(0)<=a&&l.globalTime(l.totalDuration())>a:!a||l.isActive())&&s.push(l):(u=l.getTweensOf(o,a)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(r,a){a=a||{};var s=this,o=dn(s,r),l=a,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,E=Tt.to(s,ln({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:a.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||nt,onStart:function(){if(s.pause(),!h){var p=a.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());E._dur!==p&&pr(E,p,0,1).render(E._time,!0,!0),h=1}u&&u.apply(E,f||[])}},a));return d?E.render(0):E},t.tweenFromTo=function(r,a,s){return this.tweenTo(a,ln({startAt:{time:dn(this,r)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Sc(this,dn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Sc(this,dn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+nt)},t.shiftChildren=function(r,a,s){s===void 0&&(s=0);var o=this._first,l=this.labels,c;for(r=ct(r);o;)o._start>=s&&(o._start+=r,o._end+=r),o=o._next;if(a)for(c in l)l[c]>=s&&(l[c]+=r);return Li(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,s;a;)s=a._next,this.remove(a),a=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Li(this)},t.totalDuration=function(r){var a=0,s=this,o=s._last,l=mn,c,u,f;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(f=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,wn(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(a-=u,(!f&&!s._dp||f&&f.smoothChildTiming)&&(s._start+=ct(u/s._ts),s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>a&&o._ts&&(a=o._end),o=c;pr(s,s===ut&&s._time>a?s._time:a,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if(ut._ts&&(bu(ut,Ka(r,ut)),yu=en.frame),en.frame>=Ec){Ec+=an.autoSleep||120;var a=ut._first;if((!a||!a._ts)&&an.autoSleep&&en._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||en.sleep()}}},e})(qr);ln(zt.prototype,{_lock:0,_hasPause:0,_forcing:0});var A_=function(e,t,n,r,a,s,o){var l=new Yt(this._pt,e,t,0,1,id,null,a),c=0,u=0,f,d,h,E,A,p,m,g;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=Yr(r)),s&&(g=[n,r],s(g,e,t),n=g[0],r=g[1]),d=n.match(Xs)||[];f=Xs.exec(r);)E=f[0],A=r.substring(c,f.index),h?h=(h+1)%5:A.substr(-5)==="rgba("&&(h=1),E!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:A||u===1?A:",",s:p,c:E.charAt(1)==="="?or(p,E)-p:parseFloat(E)-p,m:h&&h<4?Math.round:0},c=Xs.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Cu.test(r)||m)&&(l.e=0),this._pt=l,l},Ko=function(e,t,n,r,a,s,o,l,c,u){mt(r)&&(r=r(a||0,e,s));var f=e[t],d=n!=="get"?n:mt(f)?c?e[t.indexOf("set")||!mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=mt(f)?c?S_:td:jo,E;if(xt(r)&&(~r.indexOf("random(")&&(r=Yr(r)),r.charAt(1)==="="&&(E=or(d,r)+(Ot(d)||0),(E||E===0)&&(r=E))),!u||d!==r||Io)return!isNaN(d*r)&&r!==""?(E=new Yt(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?N_:nd,0,h),c&&(E.fp=c),o&&E.modifier(o,this,e),this._pt=E):(!f&&!(t in e)&&Wo(t,r),A_.call(this,e,t,d,r,h,l||an.stringFilter,c))},E_=function(e,t,n,r,a){if(mt(e)&&(e=Hr(e,a,t,n,r)),!Fn(e)||e.style&&e.nodeType||Ut(e)||Nu(e))return xt(e)?Hr(e,a,t,n,r):e;var s={},o;for(o in e)s[o]=Hr(e[o],a,t,n,r);return s},Ju=function(e,t,n,r,a,s){var o,l,c,u;if(Qt[e]&&(o=new Qt[e]).init(a,o.rawVars?t[e]:E_(t[e],r,a,s,n),n,r,s)!==!1&&(n._pt=l=new Yt(n._pt,a,e,0,1,o.render,o,0,o.priority),n!==ar))for(c=n._ptLookup[n._targets.indexOf(a)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ci,Io,$o=function i(e,t,n){var r=e.vars,a=r.ease,s=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,h=r.autoRevert,E=e._dur,A=e._startAt,p=e._targets,m=e.parent,g=m&&m.data==="nested"?m.vars.targets:p,T=e._overwrite==="auto"&&!Vo,N=e.timeline,v=r.easeReverse||f,C,x,_,M,D,y,P,z,W,w,B,U,$;if(N&&(!d||!a)&&(a="none"),e._ease=Oi(a,zr.ease),e._rEase=v&&(Oi(v)||e._ease),e._from=!N&&!!r.runBackwards,e._from&&(e.ratio=1),!N||d&&!r.stagger){if(z=p[0]?wi(p[0]).harness:0,U=z&&r[z.prop],C=Za(r,Yo),A&&(A._zTime<0&&A.progress(1),t<0&&u&&o&&!h?A.render(-1,!0):A.revert(u&&E?Pa:WE),A._lazy=0),s){if(mi(e._startAt=Tt.set(p,ln({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!A&&kt(l),startAt:null,delay:0,onUpdate:c&&function(){return tn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yt||!o&&!h)&&e._startAt.revert(Pa),o&&E&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&E&&!A){if(t&&(o=!1),_=ln({overwrite:!1,data:"isFromStart",lazy:o&&!A&&kt(l),immediateRender:o,stagger:0,parent:m},C),U&&(_[z.prop]=U),mi(e._startAt=Tt.set(p,_)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yt?e._startAt.revert(Pa):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,nt,nt);else if(!t)return}for(e._pt=e._ptCache=0,l=E&&kt(l)||l&&!E,x=0;x<p.length;x++){if(D=p[x],P=D._gsap||qo(p)[x]._gsap,e._ptLookup[x]=w={},ho[P.id]&&fi.length&&qa(),B=g===p?x:g.indexOf(D),z&&(W=new z).init(D,U||C,e,B,g)!==!1&&(e._pt=M=new Yt(e._pt,D,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(Q){w[Q]=M}),W.priority&&(y=1)),!z||U)for(_ in C)Qt[_]&&(W=Ju(_,C,e,B,D,g))?W.priority&&(y=1):w[_]=M=Ko.call(e,D,_,"get",C[_],B,g,0,r.stringFilter);e._op&&e._op[x]&&e.kill(D,e._op[x]),T&&e._pt&&(ci=e,ut.killTweensOf(D,w,e.globalTime(t)),$=!e.parent,ci=0),e._pt&&l&&(ho[P.id]=1)}y&&rd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,d&&t<=0&&N.render(mn,!0,!0)},__=function(e,t,n,r,a,s,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Io=1,e.vars[t]="+=0",$o(e,o),Io=0,l?kr(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(r||r===0)&&!a?r:u.s+(r||0)+s*u.c,u.c=n-u.s,f.e&&(f.e=It(n)+Ot(f.e)),f.b&&(f.b=u.s+Ot(f.b))},I_=function(e,t){var n=e[0]?wi(e[0]).harness:0,r=n&&n.aliases,a,s,o,l;if(!r)return t;a=fr({},t);for(s in r)if(s in a)for(l=r[s].split(","),o=l.length;o--;)a[l[o]]=a[s];return a},g_=function(e,t,n,r){var a=t.ease||r||"power1.inOut",s,o;if(Ut(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:a})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:a})},Hr=function(e,t,n,r,a){return mt(e)?e.call(t,n,r,a):xt(e)&&~e.indexOf("random(")?Yr(e):e},Qu=Xo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ed={};Wt(Qu+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return ed[i]=1});var Tt=(function(i){Su(e,i);function e(n,r,a,s){var o;typeof r=="number"&&(a.duration=r,r=a,a=null),o=i.call(this,s?r:Br(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,E=l.keyframes,A=l.defaults,p=l.scrollTrigger,m=r.parent||ut,g=(Ut(n)||Nu(n)?$n(n[0]):"length"in r)?[n]:An(n),T,N,v,C,x,_,M,D;if(o._targets=g.length?qo(g):kr("GSAP target "+n+" not found. https://gsap.com",!an.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,E||d||wa(c)||wa(u)){r=o.vars;var y=r.easeReverse||r.yoyoEase;if(T=o.timeline=new zt({data:"nested",defaults:A||{},targets:m&&m.data==="nested"?m.vars.targets:g}),T.kill(),T.parent=T._dp=Yn(o),T._start=0,d||wa(c)||wa(u)){if(C=g.length,M=d&&Vu(d),Fn(d))for(x in d)~Qu.indexOf(x)&&(D||(D={}),D[x]=d[x]);for(N=0;N<C;N++)v=Za(r,ed),v.stagger=0,y&&(v.easeReverse=y),D&&fr(v,D),_=g[N],v.duration=+Hr(c,Yn(o),N,_,g),v.delay=(+Hr(u,Yn(o),N,_,g)||0)-o._delay,!d&&C===1&&v.delay&&(o._delay=u=v.delay,o._start+=u,v.delay=0),T.to(_,v,M?M(N,_,g):0),T._ease=We.none;T.duration()?c=u=0:o.timeline=0}else if(E){Br(ln(T.vars.defaults,{ease:"none"})),T._ease=Oi(E.ease||r.ease||"none");var P=0,z,W,w;if(Ut(E))E.forEach(function(B){return T.to(g,B,">")}),T.duration();else{v={};for(x in E)x==="ease"||x==="easeEach"||g_(x,E[x],v,E.easeEach);for(x in v)for(z=v[x].sort(function(B,U){return B.t-U.t}),P=0,N=0;N<z.length;N++)W=z[N],w={ease:W.e,duration:(W.t-(N?z[N-1].t:0))/100*c},w[x]=W.v,T.to(g,w,P),P+=w.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return h===!0&&!Vo&&(ci=Yn(o),ut.killTweensOf(g),ci=0),wn(m,Yn(o),a),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!E&&o._start===ct(m._time)&&kt(f)&&$E(Yn(o))&&m.data!=="nested")&&(o._tTime=-nt,o.render(Math.max(0,-u)||0)),p&&Uu(Yn(o),p),o}var t=e.prototype;return t.render=function(r,a,s){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-nt&&!u?l:r<nt?0:r,d,h,E,A,p,m,g,T;if(!c)JE(this,r,a,s);else if(f!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,T=this.timeline,this._repeat){if(A=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(A*100+r,a,s);if(d=ct(f%A),f===l?(E=this._repeat,d=c):(p=ct(f/A),E=~~p,E&&E===p?(d=c,E--):d>c&&(d=c)),m=this._yoyo&&E&1,m&&(d=c-d),p=hr(this._tTime,A),d===o&&!s&&this._initted&&E===p)return this._tTime=f,this;E!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==A&&this._initted&&(this._lock=s=1,this.render(ct(A*E),!0).invalidate()._lock=0)}if(!this._initted){if(Fu(this,u?r:d,s,a,f))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&E!==p))return this;if(c!==this._dur)return this.render(r,a,s)}if(this._rEase){var N=d<o;if(N!==this._inv){var v=N?o:c-o;this._inv=N,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=v?(N?-1:1)/v:0,this._invScale=N?-this.ratio:1-this.ratio,this._invEase=N?this._rEase:this._ease}this.ratio=g=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=g=this._ease(d/c);if(this._from&&(this.ratio=g=1-g),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!a&&!p&&(tn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(g,h.d),h=h._next;T&&T.render(r<0?r:T._dur*T._ease(d/this._dur),a,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(u&&po(this,r,a,s),tn(this,"onUpdate")),this._repeat&&E!==p&&this.vars.onRepeat&&!a&&this.parent&&tn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&po(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&mi(this,1),!a&&!(u&&!o)&&(f||o||m)&&(tn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,s,o,l){Xr||en.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||$o(this,c),u=this._ease(c/this._dur),__(this,r,a,s,o,u,c,l)?this.resetTo(r,a,s,o,1):(cs(this,0),this.parent||Ou(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Ur(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yt),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,ci&&ci.vars.overwrite!==!0)._first||Ur(this),this.parent&&s!==this.timeline.totalDuration()&&pr(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=r?An(r):o,c=this._ptLookup,u=this._pt,f,d,h,E,A,p,m;if((!a||a==="all")&&ZE(o,l))return a==="all"&&(this._pt=0),Ur(this);for(f=this._op=this._op||[],a!=="all"&&(xt(a)&&(A={},Wt(a,function(g){return A[g]=1}),a=A),a=I_(o,a)),m=o.length;m--;)if(~l.indexOf(o[m])){d=c[m],a==="all"?(f[m]=a,E=d,h={}):(h=f[m]=f[m]||{},E=a);for(A in E)p=d&&d[A],p&&((!("kill"in p.d)||p.d.kill(A)===!0)&&os(this,p,"_pt"),delete d[A]),h!=="all"&&(h[A]=1)}return this._initted&&!this._pt&&u&&Ur(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return Vr(1,arguments)},e.delayedCall=function(r,a,s,o){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(r,a,s){return Vr(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,s){return ut.killTweensOf(r,a,s)},e})(qr);ln(Tt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wt("staggerTo,staggerFrom,staggerFromTo",function(i){Tt[i]=function(){var e=new zt,t=Ao.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var jo=function(e,t,n){return e[t]=n},td=function(e,t,n){return e[t](n)},S_=function(e,t,n,r){return e[t](r.fp,n)},T_=function(e,t,n){return e.setAttribute(t,n)},Jo=function(e,t){return mt(e[t])?td:Ho(e[t])&&e.setAttribute?T_:jo},nd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},N_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},id=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Qo=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},M_=function(e,t,n,r){for(var a=this._pt,s;a;)s=a._next,a.p===r&&a.modifier(e,t,n),a=s},C_=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?os(this,t,"_pt"):t.dep||(n=1),t=r;return!n},R_=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},rd=function(e){for(var t=e._pt,n,r,a,s;t;){for(n=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:s)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:s=t,t=n}e._pt=a},Yt=(function(){function i(t,n,r,a,s,o,l,c,u){this.t=n,this.s=a,this.c=s,this.p=r,this.r=o||nd,this.d=l||this,this.set=c||jo,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,a){this.mSet=this.mSet||this.set,this.set=R_,this.m=n,this.mt=a,this.tween=r},i})();Wt(Xo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Yo[i]=1});on.TweenMax=on.TweenLite=Tt;on.TimelineLite=on.TimelineMax=zt;ut=new zt({sortChildren:!1,defaults:zr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});an.stringFilter=Ku;var Pi=[],Fa={},v_=[],Nc=0,x_=0,js=function(e){return(Fa[e]||v_).map(function(t){return t()})},go=function(){var e=Date.now(),t=[];e-Nc>2&&(js("matchMediaInit"),Pi.forEach(function(n){var r=n.queries,a=n.conditions,s,o,l,c;for(o in r)s=Dn.matchMedia(r[o]).matches,s&&(l=1),s!==a[o]&&(a[o]=s,c=1);c&&(n.revert(),l&&t.push(n))}),js("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Nc=e,js("matchMedia"))},ad=(function(){function i(t,n){this.selector=n&&Eo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=x_++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,a){mt(n)&&(a=r,r=n,n=mt);var s=this,o=function(){var c=st,u=s.selector,f;return c&&c!==s&&c.data.push(s),a&&(s.selector=Eo(a)),st=s,f=r.apply(s,arguments),mt(f)&&s._r.push(f),st=c,s.selector=u,s.isReverted=!1,f};return s.last=o,n===mt?o(s,function(l){return s.add(null,l)}):n?s[n]=o:o},e.ignore=function(n){var r=st;st=null,n(this),st=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Tt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var a=this;if(n?(function(){for(var o=a.getTweens(),l=a.data.length,c;l--;)c=a.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=a.data.length;l--;)c=a.data[l],c instanceof zt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Tt)&&c.revert&&c.revert(n);a._r.forEach(function(u){return u(n,a)}),a.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var s=Pi.length;s--;)Pi[s].id===this.id&&Pi.splice(s,1)},e.revert=function(n){this.kill(n||{})},i})(),y_=(function(){function i(t){this.contexts=[],this.scope=t,st&&st.data.push(this)}var e=i.prototype;return e.add=function(n,r,a){Fn(n)||(n={matches:n});var s=new ad(0,a||this.scope),o=s.conditions={},l,c,u;st&&!s.selector&&(s.selector=st.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=n;for(c in n)c==="all"?u=1:(l=Dn.matchMedia(n[c]),l&&(Pi.indexOf(s)<0&&Pi.push(s),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(go):l.addEventListener("change",go)));return u&&r(s,function(f){return s.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),$a={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Xu(r)})},timeline:function(e){return new zt(e)},getTweensOf:function(e,t){return ut.getTweensOf(e,t)},getProperty:function(e,t,n,r){xt(e)&&(e=An(e)[0]);var a=wi(e||{}).get,s=n?Lu:wu;return n==="native"&&(n=""),e&&(t?s((Qt[t]&&Qt[t].get||a)(e,t,n,r)):function(o,l,c){return s((Qt[o]&&Qt[o].get||a)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=An(e),e.length>1){var r=e.map(function(u){return qt.quickSetter(u,t,n)}),a=r.length;return function(u){for(var f=a;f--;)r[f](u)}}e=e[0]||{};var s=Qt[t],o=wi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(u){var f=new s;ar._pt=0,f.init(e,n?u+n:u,ar,0,[e]),f.render(1,f),ar._pt&&Qo(1,ar)}:o.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,a=qt.to(e,ln((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),s=function(l,c,u){return a.resetTo(t,l,c,u)};return s.tween=a,s},isTweening:function(e){return ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Oi(e.ease,zr.ease)),_c(zr,e||{})},config:function(e){return _c(an,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,a=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Qt[o]&&!on[o]&&kr(t+" effect requires "+o+" plugin.")}),qs[t]=function(o,l,c){return n(An(o),ln(l||{},a),c)},s&&(zt.prototype[t]=function(o,l,c){return this.add(qs[t](o,Fn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){We[e]=Oi(t)},parseEase:function(e,t){return arguments.length?Oi(e,t):We},getById:function(e){return ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new zt(e),r,a;for(n.smoothChildTiming=kt(e.smoothChildTiming),ut.remove(n),n._dp=0,n._time=n._tTime=ut._time,r=ut._first;r;)a=r._next,(t||!(!r._dur&&r instanceof Tt&&r.vars.onComplete===r._targets[0]))&&wn(n,r,r._start-r._delay),r=a;return wn(ut,n,0),n},context:function(e,t){return e?new ad(e,t):st},matchMedia:function(e){return new y_(e)},matchMediaRefresh:function(){return Pi.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||go()},addEventListener:function(e,t){var n=Fa[e]||(Fa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Fa[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:s_,wrapYoyo:o_,distribute:Vu,random:zu,snap:Hu,normalize:a_,getUnit:Ot,clamp:t_,splitColor:qu,toArray:An,selector:Eo,mapRange:Wu,pipe:i_,unitize:r_,interpolate:l_,shuffle:Bu},install:vu,effects:qs,ticker:en,updateRoot:zt.updateRoot,plugins:Qt,globalTimeline:ut,core:{PropTween:Yt,globals:xu,Tween:Tt,Timeline:zt,Animation:qr,getCache:wi,_removeLinkedListItem:os,reverting:function(){return yt},context:function(e){return e&&st&&(st.data.push(e),e._ctx=st),st},suppressOverwrites:function(e){return Vo=e}}};Wt("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return $a[i]=Tt[i]});en.add(zt.updateRoot);ar=$a.to({},{duration:0});var D_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},b_=function(e,t){var n=e._targets,r,a,s;for(r in t)for(a=n.length;a--;)s=e._ptLookup[a][r],s&&(s=s.d)&&(s._pt&&(s=D_(s,r)),s&&s.modifier&&s.modifier(t[r],e,n[a],r))},Js=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,a,s){s._onInit=function(o){var l,c;if(xt(a)&&(l={},Wt(a,function(u){return l[u]=1}),a=l),t){l={};for(c in a)l[c]=t(a[c]);a=l}b_(o,a)}}}},qt=$a.registerPlugin({name:"attr",init:function(e,t,n,r,a){var s,o,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],r,a,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)yt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Js("roundProps",_o),Js("modifiers"),Js("snap",Hu))||$a;Tt.version=zt.version=qt.version="3.15.0";Ru=1;zo()&&mr();We.Power0;We.Power1;We.Power2;We.Power3;We.Power4;We.Linear;We.Quad;We.Cubic;We.Quart;We.Quint;We.Strong;We.Elastic;We.Back;We.SteppedEase;We.Bounce;We.Sine;We.Expo;We.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mc,ui,lr,el,bi,Cc,tl,w_=function(){return typeof window<"u"},jn={},yi=180/Math.PI,cr=Math.PI/180,nr=Math.atan2,Rc=1e8,nl=/([A-Z])/g,L_=/(left|right|width|margin|padding|x)/i,O_=/[\s,\(]\S/,On={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},So=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},P_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},U_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},F_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},G_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},sd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},od=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},B_=function(e,t,n){return e.style[t]=n},V_=function(e,t,n){return e.style.setProperty(t,n)},H_=function(e,t,n){return e._gsap[t]=n},z_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},k_=function(e,t,n,r,a){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(a,s)},W_=function(e,t,n,r,a){var s=e._gsap;s[t]=n,s.renderTransform(a,s)},dt="transform",Xt=dt+"Origin",Y_=function i(e,t){var n=this,r=this.target,a=r.style,s=r._gsap;if(e in jn&&a){if(this.tfm=this.tfm||{},e!=="transform")e=On[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Xn(r,o)}):this.tfm[e]=s.x?s[e]:Xn(r,e),e===Xt&&(this.tfm.zOrigin=s.zOrigin);else return On.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(dt)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Xt,t,"")),e=dt}(a||t)&&this.props.push(e,t,a[e])},ld=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},X_=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,a,s;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(nl,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=tl(),(!a||!a.isStart)&&!n[dt]&&(ld(n),r.zOrigin&&n[Xt]&&(n[Xt]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},cd=function(e,t){var n={target:e,props:[],revert:X_,save:Y_};return e._gsap||qt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},ud,To=function(e,t){var n=ui.createElementNS?ui.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ui.createElement(e);return n&&n.style?n:ui.createElement(e)},nn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(nl,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Ar(t)||t,1)||""},vc="O,Moz,ms,Ms,Webkit".split(","),Ar=function(e,t,n){var r=t||bi,a=r.style,s=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(vc[s]+e in a););return s<0?null:(s===3?"ms":s>=0?vc[s]:"")+e},No=function(){w_()&&window.document&&(Mc=window,ui=Mc.document,lr=ui.documentElement,bi=To("div")||{style:{}},To("div"),dt=Ar(dt),Xt=dt+"Origin",bi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ud=!!Ar("perspective"),tl=qt.core.reverting,el=1)},xc=function(e){var t=e.ownerSVGElement,n=To("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),a;r.style.display="block",n.appendChild(r),lr.appendChild(n);try{a=r.getBBox()}catch{}return n.removeChild(r),lr.removeChild(n),a},yc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},dd=function(e){var t,n;try{t=e.getBBox()}catch{t=xc(e),n=1}return t&&(t.width||t.height)||n||(t=xc(e)),t&&!t.width&&!t.x&&!t.y?{x:+yc(e,["x","cx","x1"])||0,y:+yc(e,["y","cy","y1"])||0,width:0,height:0}:t},fd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&dd(e))},Ai=function(e,t){if(t){var n=e.style,r;t in jn&&t!==Xt&&(t=dt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(nl,"-$1").toLowerCase())):n.removeAttribute(t)}},di=function(e,t,n,r,a,s){var o=new Yt(e._pt,t,n,0,1,s?od:sd);return e._pt=o,o.b=r,o.e=a,e._props.push(n),o},Dc={deg:1,rad:1,turn:1},q_={grid:1,flex:1},Ei=function i(e,t,n,r){var a=parseFloat(n)||0,s=(n+"").trim().substr((a+"").length)||"px",o=bi.style,l=L_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",h=r==="%",E,A,p,m;if(r===s||!a||Dc[r]||Dc[s])return a;if(s!=="px"&&!d&&(a=i(e,t,n,"px")),m=e.getCTM&&fd(e),(h||s==="%")&&(jn[t]||~t.indexOf("adius")))return E=m?e.getBBox()[l?"width":"height"]:e[u],It(h?a/E*f:a/100*E);if(o[l?"width":"height"]=f+(d?s:r),A=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(A=(e.ownerSVGElement||{}).parentNode),(!A||A===ui||!A.appendChild)&&(A=ui.body),p=A._gsap,p&&h&&p.width&&l&&p.time===en.time&&!p.uncache)return It(a/p.width*f);if(h&&(t==="height"||t==="width")){var g=e.style[t];e.style[t]=f+r,E=e[u],g?e.style[t]=g:Ai(e,t)}else(h||s==="%")&&!q_[nn(A,"display")]&&(o.position=nn(e,"position")),A===e&&(o.position="static"),A.appendChild(bi),E=bi[u],A.removeChild(bi),o.position="absolute";return l&&h&&(p=wi(A),p.time=en.time,p.width=A[u]),It(d?E*a/f:E&&a?f/E*a:0)},Xn=function(e,t,n,r){var a;return el||No(),t in On&&t!=="transform"&&(t=On[t],~t.indexOf(",")&&(t=t.split(",")[0])),jn[t]&&t!=="transform"?(a=Kr(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:Ja(nn(e,Xt))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=ja[t]&&ja[t](e,t,n)||nn(e,t)||Du(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?Ei(e,t,a,n)+n:a},Z_=function(e,t,n,r){if(!n||n==="none"){var a=Ar(t,e,1),s=a&&nn(e,a,1);s&&s!==n?(t=a,n=s):t==="borderColor"&&(n=nn(e,"borderTopColor"))}var o=new Yt(this._pt,e.style,t,0,1,id),l=0,c=0,u,f,d,h,E,A,p,m,g,T,N,v;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=nn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(A=e.style[t],e.style[t]=r,r=nn(e,t)||r,A?e.style[t]=A:Ai(e,t)),u=[n,r],Ku(u),n=u[0],r=u[1],d=n.match(rr)||[],v=r.match(rr)||[],v.length){for(;f=rr.exec(r);)p=f[0],g=r.substring(l,f.index),E?E=(E+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(E=1),p!==(A=d[c++]||"")&&(h=parseFloat(A)||0,N=A.substr((h+"").length),p.charAt(1)==="="&&(p=or(h,p)+N),m=parseFloat(p),T=p.substr((m+"").length),l=rr.lastIndex-T.length,T||(T=T||an.units[t]||N,l===r.length&&(r+=T,o.e+=T)),N!==T&&(h=Ei(e,t,A,T)||0),o._pt={_next:o._pt,p:g||c===1?g:",",s:h,c:m-h,m:E&&E<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?od:sd;return Cu.test(r)&&(o.e=0),this._pt=o,o},bc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},K_=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=bc[n]||n,t[1]=bc[r]||r,t.join(" ")},$_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,a=t.u,s=n._gsap,o,l,c;if(a==="all"||a===!0)r.cssText="",l=1;else for(a=a.split(","),c=a.length;--c>-1;)o=a[c],jn[o]&&(l=1,o=o==="transformOrigin"?Xt:dt),Ai(n,o);l&&(Ai(n,dt),s&&(s.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Kr(n,1),s.uncache=1,ld(r)))}},ja={clearProps:function(e,t,n,r,a){if(a.data!=="isFromStart"){var s=e._pt=new Yt(e._pt,t,n,0,0,$_);return s.u=r,s.pr=-10,s.tween=a,e._props.push(n),1}}},Zr=[1,0,0,1,0,0],hd={},pd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},wc=function(e){var t=nn(e,dt);return pd(t)?Zr:t.substr(7).match(Mu).map(It)},il=function(e,t){var n=e._gsap||wi(e),r=e.style,a=wc(e),s,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,a=[l.a,l.b,l.c,l.d,l.e,l.f],a.join(",")==="1,0,0,1,0,0"?Zr:a):(a===Zr&&!e.offsetParent&&e!==lr&&!n.svg&&(l=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,lr.appendChild(e)),a=wc(e),l?r.display=l:Ai(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):lr.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Mo=function(e,t,n,r,a,s){var o=e._gsap,l=a||il(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,d=o.yOffset||0,h=l[0],E=l[1],A=l[2],p=l[3],m=l[4],g=l[5],T=t.split(" "),N=parseFloat(T[0])||0,v=parseFloat(T[1])||0,C,x,_,M;n?l!==Zr&&(x=h*p-E*A)&&(_=N*(p/x)+v*(-A/x)+(A*g-p*m)/x,M=N*(-E/x)+v*(h/x)-(h*g-E*m)/x,N=_,v=M):(C=dd(e),N=C.x+(~T[0].indexOf("%")?N/100*C.width:N),v=C.y+(~(T[1]||T[0]).indexOf("%")?v/100*C.height:v)),r||r!==!1&&o.smooth?(m=N-c,g=v-u,o.xOffset=f+(m*h+g*A)-m,o.yOffset=d+(m*E+g*p)-g):o.xOffset=o.yOffset=0,o.xOrigin=N,o.yOrigin=v,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Xt]="0px 0px",s&&(di(s,o,"xOrigin",c,N),di(s,o,"yOrigin",u,v),di(s,o,"xOffset",f,o.xOffset),di(s,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",N+" "+v)},Kr=function(e,t){var n=e._gsap||new ju(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,a=n.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=nn(e,Xt)||"0",u,f,d,h,E,A,p,m,g,T,N,v,C,x,_,M,D,y,P,z,W,w,B,U,$,Q,oe,me,Ie,Be,Ue,Ce;return u=f=d=A=p=m=g=T=N=0,h=E=1,n.svg=!!(e.getCTM&&fd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[dt]!=="none"?l[dt]:"")),r.scale=r.rotate=r.translate="none"),x=il(e,n.svg),n.svg&&(n.uncache?($=e.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",U=""):U=!t&&e.getAttribute("data-svg-origin"),Mo(e,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,x)),v=n.xOrigin||0,C=n.yOrigin||0,x!==Zr&&(y=x[0],P=x[1],z=x[2],W=x[3],u=w=x[4],f=B=x[5],x.length===6?(h=Math.sqrt(y*y+P*P),E=Math.sqrt(W*W+z*z),A=y||P?nr(P,y)*yi:0,g=z||W?nr(z,W)*yi+A:0,g&&(E*=Math.abs(Math.cos(g*cr))),n.svg&&(u-=v-(v*y+C*z),f-=C-(v*P+C*W))):(Ce=x[6],Be=x[7],oe=x[8],me=x[9],Ie=x[10],Ue=x[11],u=x[12],f=x[13],d=x[14],_=nr(Ce,Ie),p=_*yi,_&&(M=Math.cos(-_),D=Math.sin(-_),U=w*M+oe*D,$=B*M+me*D,Q=Ce*M+Ie*D,oe=w*-D+oe*M,me=B*-D+me*M,Ie=Ce*-D+Ie*M,Ue=Be*-D+Ue*M,w=U,B=$,Ce=Q),_=nr(-z,Ie),m=_*yi,_&&(M=Math.cos(-_),D=Math.sin(-_),U=y*M-oe*D,$=P*M-me*D,Q=z*M-Ie*D,Ue=W*D+Ue*M,y=U,P=$,z=Q),_=nr(P,y),A=_*yi,_&&(M=Math.cos(_),D=Math.sin(_),U=y*M+P*D,$=w*M+B*D,P=P*M-y*D,B=B*M-w*D,y=U,w=$),p&&Math.abs(p)+Math.abs(A)>359.9&&(p=A=0,m=180-m),h=It(Math.sqrt(y*y+P*P+z*z)),E=It(Math.sqrt(B*B+Ce*Ce)),_=nr(w,B),g=Math.abs(_)>2e-4?_*yi:0,N=Ue?1/(Ue<0?-Ue:Ue):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!pd(nn(e,dt)),U&&e.setAttribute("transform",U))),Math.abs(g)>90&&Math.abs(g)<270&&(a?(h*=-1,g+=A<=0?180:-180,A+=A<=0?180:-180):(E*=-1,g+=g<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=d+s,n.scaleX=It(h),n.scaleY=It(E),n.rotation=It(A)+o,n.rotationX=It(p)+o,n.rotationY=It(m)+o,n.skewX=g+o,n.skewY=T+o,n.transformPerspective=N+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Xt]=Ja(c)),n.xOffset=n.yOffset=0,n.force3D=an.force3D,n.renderTransform=n.svg?J_:ud?md:j_,n.uncache=0,n},Ja=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qs=function(e,t,n){var r=Ot(t);return It(parseFloat(t)+parseFloat(Ei(e,"x",n+"px",r)))+r},j_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,md(e,t)},Ci="0deg",wr="0px",Ri=") ",md=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,s=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,h=n.skewY,E=n.scaleX,A=n.scaleY,p=n.transformPerspective,m=n.force3D,g=n.target,T=n.zOrigin,N="",v=m==="auto"&&e&&e!==1||m===!0;if(T&&(f!==Ci||u!==Ci)){var C=parseFloat(u)*cr,x=Math.sin(C),_=Math.cos(C),M;C=parseFloat(f)*cr,M=Math.cos(C),s=Qs(g,s,x*M*-T),o=Qs(g,o,-Math.sin(C)*-T),l=Qs(g,l,_*M*-T+T)}p!==wr&&(N+="perspective("+p+Ri),(r||a)&&(N+="translate("+r+"%, "+a+"%) "),(v||s!==wr||o!==wr||l!==wr)&&(N+=l!==wr||v?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+Ri),c!==Ci&&(N+="rotate("+c+Ri),u!==Ci&&(N+="rotateY("+u+Ri),f!==Ci&&(N+="rotateX("+f+Ri),(d!==Ci||h!==Ci)&&(N+="skew("+d+", "+h+Ri),(E!==1||A!==1)&&(N+="scale("+E+", "+A+Ri),g.style[dt]=N||"translate(0, 0)"},J_=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,s=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,h=n.target,E=n.xOrigin,A=n.yOrigin,p=n.xOffset,m=n.yOffset,g=n.forceCSS,T=parseFloat(s),N=parseFloat(o),v,C,x,_,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=cr,c*=cr,v=Math.cos(l)*f,C=Math.sin(l)*f,x=Math.sin(l-c)*-d,_=Math.cos(l-c)*d,c&&(u*=cr,M=Math.tan(c-u),M=Math.sqrt(1+M*M),x*=M,_*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),v*=M,C*=M)),v=It(v),C=It(C),x=It(x),_=It(_)):(v=f,_=d,C=x=0),(T&&!~(s+"").indexOf("px")||N&&!~(o+"").indexOf("px"))&&(T=Ei(h,"x",s,"px"),N=Ei(h,"y",o,"px")),(E||A||p||m)&&(T=It(T+E-(E*v+A*x)+p),N=It(N+A-(E*C+A*_)+m)),(r||a)&&(M=h.getBBox(),T=It(T+r/100*M.width),N=It(N+a/100*M.height)),M="matrix("+v+","+C+","+x+","+_+","+T+","+N+")",h.setAttribute("transform",M),g&&(h.style[dt]=M)},Q_=function(e,t,n,r,a){var s=360,o=xt(a),l=parseFloat(a)*(o&&~a.indexOf("rad")?yi:1),c=l-r,u=r+c+"deg",f,d;return o&&(f=a.split("_")[1],f==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),f==="cw"&&c<0?c=(c+s*Rc)%s-~~(c/s)*s:f==="ccw"&&c>0&&(c=(c-s*Rc)%s-~~(c/s)*s)),e._pt=d=new Yt(e._pt,t,n,r,c,P_),d.e=u,d.u="deg",e._props.push(n),d},Lc=function(e,t){for(var n in t)e[n]=t[n];return e},eI=function(e,t,n){var r=Lc({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,l,c,u,f,d,h,E;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[dt]=t,o=Kr(n,1),Ai(n,dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[dt],s[dt]=t,o=Kr(n,1),s[dt]=c);for(l in jn)c=r[l],u=o[l],c!==u&&a.indexOf(l)<0&&(h=Ot(c),E=Ot(u),f=h!==E?Ei(n,l,c,E):parseFloat(c),d=parseFloat(u),e._pt=new Yt(e._pt,o,l,f,d-f,So),e._pt.u=E||0,e._props.push(l));Lc(o,r)};Wt("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",a="Left",s=(e<3?[t,n,r,a]:[t+a,t+n,r+n,r+a]).map(function(o){return e<2?i+o:"border"+o+i});ja[e>1?"border"+i:i]=function(o,l,c,u,f){var d,h;if(arguments.length<4)return d=s.map(function(E){return Xn(o,E,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},s.forEach(function(E,A){return h[E]=d[A]=d[A]||d[(A-1)/2|0]}),o.init(l,h,f)}});var Ad={name:"css",register:No,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var s=this._props,o=e.style,l=n.vars.startAt,c,u,f,d,h,E,A,p,m,g,T,N,v,C,x,_,M;el||No(),this.styles=this.styles||cd(e),_=this.styles.props,this.tween=n;for(A in t)if(A!=="autoRound"&&(u=t[A],!(Qt[A]&&Ju(A,t,n,r,e,a)))){if(h=typeof u,E=ja[A],h==="function"&&(u=u.call(n,r,e,a),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Yr(u)),E)E(this,e,A,u,n)&&(x=1);else if(A.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(A)+"").trim(),u+="",hi.lastIndex=0,hi.test(c)||(p=Ot(c),m=Ot(u),m?p!==m&&(c=Ei(e,A,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,r,a,0,0,A),s.push(A),_.push(A,0,o[A]);else if(h!=="undefined"){if(l&&A in l?(c=typeof l[A]=="function"?l[A].call(n,r,e,a):l[A],xt(c)&&~c.indexOf("random(")&&(c=Yr(c)),Ot(c+"")||c==="auto"||(c+=an.units[A]||Ot(Xn(e,A))||""),(c+"").charAt(1)==="="&&(c=Xn(e,A))):c=Xn(e,A),d=parseFloat(c),g=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),g&&(u=u.substr(2)),f=parseFloat(u),A in On&&(A==="autoAlpha"&&(d===1&&Xn(e,"visibility")==="hidden"&&f&&(d=0),_.push("visibility",0,o.visibility),di(this,o,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),A!=="scale"&&A!=="transform"&&(A=On[A],~A.indexOf(",")&&(A=A.split(",")[0]))),T=A in jn,T){if(this.styles.save(A),M=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=nn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var D=e.style.perspective;e.style.perspective=u,u=nn(e,"perspective"),D?e.style.perspective=D:Ai(e,"perspective")}f=parseFloat(u)}if(N||(v=e._gsap,v.renderTransform&&!t.parseTransform||Kr(e,t.parseTransform),C=t.smoothOrigin!==!1&&v.smooth,N=this._pt=new Yt(this._pt,o,dt,0,1,v.renderTransform,v,0,-1),N.dep=1),A==="scale")this._pt=new Yt(this._pt,v,"scaleY",v.scaleY,(g?or(v.scaleY,g+f):f)-v.scaleY||0,So),this._pt.u=0,s.push("scaleY",A),A+="X";else if(A==="transformOrigin"){_.push(Xt,0,o[Xt]),u=K_(u),v.svg?Mo(e,u,0,C,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==v.zOrigin&&di(this,v,"zOrigin",v.zOrigin,m),di(this,o,A,Ja(c),Ja(u)));continue}else if(A==="svgOrigin"){Mo(e,u,1,C,0,this);continue}else if(A in hd){Q_(this,v,A,d,g?or(d,g+u):u);continue}else if(A==="smoothOrigin"){di(this,v,"smooth",v.smooth,u);continue}else if(A==="force3D"){v[A]=u;continue}else if(A==="transform"){eI(this,u,e);continue}}else A in o||(A=Ar(A)||A);if(T||(f||f===0)&&(d||d===0)&&!O_.test(u)&&A in o)p=(c+"").substr((d+"").length),f||(f=0),m=Ot(u)||(A in an.units?an.units[A]:p),p!==m&&(d=Ei(e,A,c,m)),this._pt=new Yt(this._pt,T?v:o,A,d,(g?or(d,g+f):f)-d,!T&&(m==="px"||A==="zIndex")&&t.autoRound!==!1?G_:So),this._pt.u=m||0,T&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=F_):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=U_);else if(A in o)Z_.call(this,e,A,c,g?g+u:u);else if(A in e)this.add(e,A,c||e[A],g?g+u:u,r,a);else if(A!=="parseTransform"){Wo(A,u);continue}T||(A in o?_.push(A,0,o[A]):typeof e[A]=="function"?_.push(A,2,e[A]()):_.push(A,1,c||e[A])),s.push(A)}}x&&rd(this)},render:function(e,t){if(t.tween._time||!tl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Xn,aliases:On,getSetter:function(e,t,n){var r=On[t];return r&&r.indexOf(",")<0&&(t=r),t in jn&&t!==Xt&&(e._gsap.x||Xn(e,"x"))?n&&Cc===n?t==="scale"?z_:H_:(Cc=n||{})&&(t==="scale"?k_:W_):e.style&&!Ho(e.style[t])?B_:~t.indexOf("-")?V_:Jo(e,t)},core:{_removeProperty:Ai,_getMatrix:il}};qt.utils.checkPrefix=Ar;qt.core.getStyleSaver=cd;(function(i,e,t,n){var r=Wt(i+","+e+","+t,function(a){jn[a]=1});Wt(e,function(a){an.units[a]="deg",hd[a]=1}),On[r[13]]=i+","+e,Wt(n,function(a){var s=a.split(":");On[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){an.units[i]="px"});qt.registerPlugin(Ad);var Dt=qt.registerPlugin(Ad)||qt;Dt.core.Tween;class Ed{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const t=this._partials;let n=0;for(let r=0;r<this._n&&r<32;r++){const a=t[r],s=e+a,o=Math.abs(e)<Math.abs(a)?e-(s-a):a-(s-e);o&&(t[n++]=o),e=s}return t[n]=e,this._n=n+1,this}valueOf(){const e=this._partials;let t=this._n,n,r,a,s=0;if(t>0){for(s=e[--t];t>0&&(n=s,r=e[--t],s=n+r,a=r-(s-n),!a););t>0&&(a<0&&e[t-1]<0||a>0&&e[t-1]>0)&&(r=a*2,n=s+r,r==n-s&&(s=n))}return s}}var La=1e-6,_d=1e-12,pi=Math.PI,Qa=pi/2,Oc=pi/4,Id=pi*2,Er=pi/180,Co=Math.abs,gd=Math.atan2,qn=Math.cos,Ln=Math.sin,tI=Math.sign||function(i){return i>0?1:i<0?-1:0},Sd=Math.sqrt;function nI(i){return i>1?Qa:i<-1?-Qa:Math.asin(i)}function ir(){}function es(i,e){i&&Uc.hasOwnProperty(i.type)&&Uc[i.type](i,e)}var Pc={Feature:function(i,e){es(i.geometry,e)},FeatureCollection:function(i,e){for(var t=i.features,n=-1,r=t.length;++n<r;)es(t[n].geometry,e)}},Uc={Sphere:function(i,e){e.sphere()},Point:function(i,e){i=i.coordinates,e.point(i[0],i[1],i[2])},MultiPoint:function(i,e){for(var t=i.coordinates,n=-1,r=t.length;++n<r;)i=t[n],e.point(i[0],i[1],i[2])},LineString:function(i,e){Ro(i.coordinates,e,0)},MultiLineString:function(i,e){for(var t=i.coordinates,n=-1,r=t.length;++n<r;)Ro(t[n],e,0)},Polygon:function(i,e){Fc(i.coordinates,e)},MultiPolygon:function(i,e){for(var t=i.coordinates,n=-1,r=t.length;++n<r;)Fc(t[n],e)},GeometryCollection:function(i,e){for(var t=i.geometries,n=-1,r=t.length;++n<r;)es(t[n],e)}};function Ro(i,e,t){var n=-1,r=i.length-t,a;for(e.lineStart();++n<r;)a=i[n],e.point(a[0],a[1],a[2]);e.lineEnd()}function Fc(i,e){var t=-1,n=i.length;for(e.polygonStart();++t<n;)Ro(i[t],e,1);e.polygonEnd()}function iI(i,e){i&&Pc.hasOwnProperty(i.type)?Pc[i.type](i,e):es(i,e)}function Gc(i){var e=i[0],t=i[1],n=qn(t);return[n*qn(e),n*Ln(e),Ln(t)]}function Bc(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function Vc(i){var e=Sd(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);i[0]/=e,i[1]/=e,i[2]/=e}function eo(i){return Co(i[0])<=pi?i[0]:tI(i[0])*((Co(i[0])+pi)%Id-pi)}function rI(i,e){var t=eo(e),n=e[1],r=Ln(n),a=[Ln(t),-qn(t),0],s=0,o=0,l=new Ed;r===1?n=Qa+La:r===-1&&(n=-Qa-La);for(var c=0,u=i.length;c<u;++c)if(d=(f=i[c]).length)for(var f,d,h=f[d-1],E=eo(h),A=h[1]/2+Oc,p=Ln(A),m=qn(A),g=0;g<d;++g,E=N,p=C,m=x,h=T){var T=f[g],N=eo(T),v=T[1]/2+Oc,C=Ln(v),x=qn(v),_=N-E,M=_>=0?1:-1,D=M*_,y=D>pi,P=p*C;if(l.add(gd(P*M*Ln(D),m*x+P*qn(D))),s+=y?_+M*Id:_,y^E>=t^N>=t){var z=Bc(Gc(h),Gc(T));Vc(z);var W=Bc(a,z);Vc(W);var w=(y^_>=0?-1:1)*nI(W[2]);(n>w||n===w&&(z[0]||z[1]))&&(o+=y^_>=0?1:-1)}}return(s<-La||s<La&&l<-_d)^o&1}var vo,xo,Ga,Ba,_r={sphere:ir,point:ir,lineStart:aI,lineEnd:ir,polygonStart:ir,polygonEnd:ir};function aI(){_r.point=oI,_r.lineEnd=sI}function sI(){_r.point=_r.lineEnd=ir}function oI(i,e){i*=Er,e*=Er,xo=i,Ga=Ln(e),Ba=qn(e),_r.point=lI}function lI(i,e){i*=Er,e*=Er;var t=Ln(e),n=qn(e),r=Co(i-xo),a=qn(r),s=Ln(r),o=n*s,l=Ba*t-Ga*n*a,c=Ga*t+Ba*n*a;vo.add(gd(Sd(o*o+l*l),c)),xo=i,Ga=t,Ba=n}function cI(i){return vo=new Ed,iI(i,_r),+vo}var yo=[null,null],uI={type:"LineString",coordinates:yo};function Do(i,e){return yo[0]=i,yo[1]=e,cI(uI)}var Hc={Feature:function(i,e){return ts(i.geometry,e)},FeatureCollection:function(i,e){for(var t=i.features,n=-1,r=t.length;++n<r;)if(ts(t[n].geometry,e))return!0;return!1}},zc={Sphere:function(){return!0},Point:function(i,e){return kc(i.coordinates,e)},MultiPoint:function(i,e){for(var t=i.coordinates,n=-1,r=t.length;++n<r;)if(kc(t[n],e))return!0;return!1},LineString:function(i,e){return Wc(i.coordinates,e)},MultiLineString:function(i,e){for(var t=i.coordinates,n=-1,r=t.length;++n<r;)if(Wc(t[n],e))return!0;return!1},Polygon:function(i,e){return Yc(i.coordinates,e)},MultiPolygon:function(i,e){for(var t=i.coordinates,n=-1,r=t.length;++n<r;)if(Yc(t[n],e))return!0;return!1},GeometryCollection:function(i,e){for(var t=i.geometries,n=-1,r=t.length;++n<r;)if(ts(t[n],e))return!0;return!1}};function ts(i,e){return i&&zc.hasOwnProperty(i.type)?zc[i.type](i,e):!1}function kc(i,e){return Do(i,e)===0}function Wc(i,e){for(var t,n,r,a=0,s=i.length;a<s;a++){if(n=Do(i[a],e),n===0||a>0&&(r=Do(i[a],i[a-1]),r>0&&t<=r&&n<=r&&(t+n-r)*(1-Math.pow((t-n)/r,2))<_d*r))return!0;t=n}return!1}function Yc(i,e){return!!rI(i.map(dI),Td(e))}function dI(i){return i=i.map(Td),i.pop(),i}function Td(i){return[i[0]*Er,i[1]*Er]}function fI(i,e){return(i&&Hc.hasOwnProperty(i.type)?Hc[i.type]:ts)(i,e)}function hI(i){return i}function pI(i){if(i==null)return hI;var e,t,n=i.scale[0],r=i.scale[1],a=i.translate[0],s=i.translate[1];return function(o,l){l||(e=t=0);var c=2,u=o.length,f=new Array(u);for(f[0]=(e+=o[0])*n+a,f[1]=(t+=o[1])*r+s;c<u;)f[c]=o[c],++c;return f}}function mI(i,e){for(var t,n=i.length,r=n-e;r<--n;)t=i[r],i[r++]=i[n],i[n]=t}function AI(i,e){return typeof e=="string"&&(e=i.objects[e]),e.type==="GeometryCollection"?{type:"FeatureCollection",features:e.geometries.map(function(t){return Xc(i,t)})}:Xc(i,e)}function Xc(i,e){var t=e.id,n=e.bbox,r=e.properties==null?{}:e.properties,a=EI(i,e);return t==null&&n==null?{type:"Feature",properties:r,geometry:a}:n==null?{type:"Feature",id:t,properties:r,geometry:a}:{type:"Feature",id:t,bbox:n,properties:r,geometry:a}}function EI(i,e){var t=pI(i.transform),n=i.arcs;function r(u,f){f.length&&f.pop();for(var d=n[u<0?~u:u],h=0,E=d.length;h<E;++h)f.push(t(d[h],h));u<0&&mI(f,E)}function a(u){return t(u)}function s(u){for(var f=[],d=0,h=u.length;d<h;++d)r(u[d],f);return f.length<2&&f.push(f[0]),f}function o(u){for(var f=s(u);f.length<4;)f.push(f[0]);return f}function l(u){return u.map(o)}function c(u){var f=u.type,d;switch(f){case"GeometryCollection":return{type:f,geometries:u.geometries.map(c)};case"Point":d=a(u.coordinates);break;case"MultiPoint":d=u.coordinates.map(a);break;case"LineString":d=s(u.arcs);break;case"MultiLineString":d=u.arcs.map(s);break;case"Polygon":d=l(u.arcs);break;case"MultiPolygon":d=u.arcs.map(l);break;default:return null}return{type:f,coordinates:d}}return c(e)}const _I=[{id:"uajf",name:"UNIVERSIDAD ARGENTINA JOHN F. KENNEDY",country:"Argentina",lat:-34.6075079,lon:-58.386832,flagCode:"ar",logo:"www.kennedy.edu.ar",labelDelay:.56},{id:"udba",name:"UNIVERSIDAD DE BUENOS AIRES",country:"Argentina",lat:-34.5999126,lon:-58.3733015,flagCode:"ar",logo:"www.uba.ar",labelDelay:.56},{id:"edc",name:"ESCOLA DA CIDADE",country:"Brasil",lat:-23.5449146,lon:-46.6456228,flagCode:"br",logo:"escoladacidade.edu.br",labelDelay:.56},{id:"undl",name:"UNIVERSIDAD NACIONAL DE LA MATANZA",country:"Argentina",lat:-34.670721,lon:-58.5630865,flagCode:"ar",logo:"www.unlam.edu.ar",labelDelay:.56},{id:"undq",name:"UNIVERSIDAD NACIONAL DE QUILMES",country:"Argentina",lat:-34.7065626,lon:-58.2785088,flagCode:"ar",logo:"www.unq.edu.ar",labelDelay:.56},{id:"undm",name:"UNIVERSIDAD NACIONAL DE MAR DEL PLATA",country:"Argentina",lat:-38.0056676,lon:-57.5714289,flagCode:"ar",logo:"www.mdp.edu.ar",labelDelay:.56},{id:"utn",name:"UNIVERSIDAD TECNOLÓGICA NACIONAL",country:"Argentina",lat:-34.6595436,lon:-58.4682726,flagCode:"ar",logo:"www.utn.edu.ar/es",labelDelay:.56},{id:"up",name:"UNIVERSIDAD PAULISTA",country:"Brasil",lat:-23.6049821,lon:-46.6487951,flagCode:"br",logo:"www.unip.br",labelDelay:.56},{id:"ufdm",name:"UNIVERSIDAD FEDERAL DE MATO GROSSO",country:"Brasil",lat:-15.6080851,lon:-56.0617428,flagCode:"br",logo:"www.ufmt.br",labelDelay:.56},{id:"cusc",name:"CENTRO UNIVERSITÁRIO SÃO CAMILO",country:"Brasil",lat:-23.5972867,lon:-46.6096804,flagCode:"br",logo:"saocamilo-sp.br",labelDelay:.56},{id:"uedl",name:"UNIVERSIDAD ESTADUAL DE LONDRINA",country:"Brasil",lat:-23.3267805,lon:-51.2038645,flagCode:"br",logo:"portal.uel.br",labelDelay:.56},{id:"usa",name:"UNIVERSIDAD SERGIO ARBOLEDA",country:"Colombia",lat:4.6606417,lon:-74.0597872,flagCode:"co",logo:"www.usergioarboleda.edu.co",labelDelay:.56},{id:"uado",name:"UNIVERSIDAD AUTÓNOMA DE OCCIDENTE",country:"Colombia",lat:3.3537196,lon:-76.5230661,flagCode:"co",logo:"www.uao.edu.co",labelDelay:.56},{id:"uab",name:"UNIVERSIDAD ANDRÉS BELLO",country:"Chile",lat:-33.451665,lon:-70.6680136,flagCode:"cl",logo:"www.unab.cl",labelDelay:.56},{id:"fukl",name:"FUNDACIÓN UNIVERSITARIA KONRAD LORENZ",country:"Colombia",lat:4.6483539,lon:-74.0617266,flagCode:"co",logo:"www.konradlorenz.edu.co",labelDelay:.56},{id:"udsb",name:"UNIVERSIDAD DE SAN BUENAVENTURA",country:"Colombia",lat:3.3449695,lon:-76.5446096,flagCode:"co",logo:"www.usbbog.edu.co",labelDelay:.56},{id:"uc",name:"UNIVERSIDAD CENTRAL",country:"Chile",lat:-33.4529697,lon:-70.6603415,flagCode:"cl",logo:"www.ucentral.cl",labelDelay:.56},{id:"uss",name:"UNIVERSIDAD SAN SEBASTIÁN",country:"Chile",lat:-33.4345014,lon:-70.6362405,flagCode:"cl",logo:"www.uss.cl",labelDelay:.56},{id:"uc",name:"UNIVERSIDAD CENTRAL",country:"Colombia",lat:4.6059101,lon:-74.0687553,flagCode:"co",logo:"www.ucentral.edu.co",labelDelay:.56},{id:"ucdn",name:"UNIVERSIDAD CATÓLICA DEL NORTE DE CHILE",country:"Chile",lat:-23.6792929,lon:-70.4096571,flagCode:"cl",logo:"www.ucn.cl",labelDelay:.56},{id:"udlc",name:"UNIVERSIDAD DE LA COSTA",country:"Colombia",lat:10.9951879,lon:-74.7910336,flagCode:"co",logo:"www.cuc.edu.co",labelDelay:.56},{id:"ual",name:"UNIVERSIDAD AUTÓNOMA LATINOAMERICANA",country:"Colombia",lat:6.2515252,lon:-75.5734137,flagCode:"co",logo:"www.unaula.edu.co",labelDelay:.56},{id:"udiy",name:"UNIVERSIDAD DE INVESTIGACION Y DESARROLLO",country:"Colombia",lat:7.1383233,lon:-73.124186,flagCode:"co",logo:"web.udi.edu.co",labelDelay:.56},{id:"uda",name:"UNIVERSIDAD DE ANTIOQUIA",country:"Colombia",lat:6.2681976,lon:-75.5674599,flagCode:"co",logo:"www.udea.edu.co/wps/portal/udea/web/inicio",labelDelay:.56},{id:"fudá",name:"FUNDACIÓN UNIVERSITARIA DEL ÁREA ANDINA",country:"Colombia",lat:4.6576587,lon:-74.0628089,flagCode:"co",logo:"www.areandina.edu.co",labelDelay:.56},{id:"ug",name:"UNIVERSIDAD GALILEO",country:"Guatemala",lat:14.6094756,lon:-90.5058296,flagCode:"gt",logo:"www.galileo.edu",labelDelay:.56},{id:"udi",name:"UNIVERSIDAD DE IBAGUÉ",country:"Colombia",lat:4.4491758,lon:-75.2001036,flagCode:"co",logo:"www.unibague.edu.co",labelDelay:.56},{id:"udn",name:"UNIVERSIDAD DE NARIÑO",country:"Colombia",lat:1.2314895,lon:-77.2935756,flagCode:"co",logo:"www.udenar.edu.co",labelDelay:.56},{id:"udla",name:"UNIVERSIDAD DE LOS ANDES",country:"Colombia",lat:4.6014973,lon:-74.0663897,flagCode:"co",logo:"www.uniandes.edu.co",labelDelay:.56},{id:"fujn",name:"FUNDACIÓN UNIVERSITARIA JUAN N. CORPAS",country:"Colombia",lat:4.7612507,lon:-74.0925038,flagCode:"co",logo:"www.juanncorpas.edu.co",labelDelay:.56},{id:"upyt",name:"UNIVERSIDAD PEDAGÓGICA Y TECNOLÓGICA DE COLOMBIA",country:"Colombia",lat:5.5519468,lon:-73.3567038,flagCode:"co",logo:"www.uptc.edu.co",labelDelay:.56},{id:"uds",name:"UNIVERSIDAD DE SANTANDER",country:"Colombia",lat:7.1052983,lon:-73.0947421,flagCode:"co",logo:"udes.edu.co",labelDelay:.56},{id:"hudl",name:"HOSPITAL UNIVERSITARIO DE LA SAMARITANA",country:"Colombia",lat:4.5873258,lon:-74.0838993,flagCode:"co",logo:"www.hus.org.co",labelDelay:.56},{id:"cuad",name:"CORPORACIÓN UNIVERSITARIA AUTÓNOMA DE NARIÑO",country:"Colombia",lat:1.2177425,lon:-77.2790422,flagCode:"co",logo:"www.aunar.edu.co",labelDelay:.56},{id:"iue",name:"INSTITUCIÓN UNIVERSITARIA ESUMER",country:"Colombia",lat:6.2776966,lon:-75.5906361,flagCode:"co",logo:"esumer.edu.co",labelDelay:.56},{id:"curn",name:"CORPORACION UNIVERSITARIA RAFAEL NÚÑEZ",country:"Colombia",lat:10.4265431,lon:-75.5377676,flagCode:"co",logo:"www.uninunez.edu.co",labelDelay:.56},{id:"utdh",name:"UNIVERSIDAD TECNOLÓGICA DE HUEJOTZINGO",country:"México",lat:19.2088704,lon:-98.3909331,flagCode:"mx",logo:"www.uth.edu.mx",labelDelay:.56},{id:"updt",name:"UNIVERSIDAD POLITÉCNICA DE TULANCINGO",country:"México",lat:20.1353038,lon:-98.3805153,flagCode:"mx",logo:"www.upt.edu.mx",labelDelay:.56},{id:"uan",name:"UNIVERSIDAD ANTONIO NARIÑO",country:"Colombia",lat:10.3952969,lon:-75.5171968,flagCode:"co",logo:"www.uan.edu.co",labelDelay:.56},{id:"utdc",name:"UNIVERSIDAD TECNOLÓGICA DE CANCÚN",country:"México",lat:21.0495137,lon:-86.8473376,flagCode:"mx",logo:"utcancun.edu.mx",labelDelay:.56},{id:"updt",name:"UNIVERSIDAD POLITÉCNICA DE TLAXCALA",country:"México",lat:19.2328388,lon:-98.2390046,flagCode:"mx",logo:"uptlax.edu.mx",labelDelay:.56},{id:"utdt",name:"UNIVERSIDAD TECNOLÓGICA DE TLAXCALA",country:"México",lat:19.3867352,lon:-97.9667386,flagCode:"mx",logo:"www.uttlaxcala.edu.mx",labelDelay:.56},{id:"cpdl",name:"CORPORACION POLITÉCNICO DE LA COSTA ATLÁNTICA",country:"Colombia",lat:10.9868612,lon:-74.8194545,flagCode:"co",logo:"pca.edu.co/wp",labelDelay:.56},{id:"udfj",name:"UNIVERSIDAD DISTRITAL FRANCISCO JOSE DE CALDAS",country:"Colombia",lat:4.628008,lon:-74.0661499,flagCode:"co",logo:"www.udistrital.edu.co/inicio",labelDelay:.56},{id:"uidl",name:"UNIVERSIDAD INTERNACIONAL DE LAS AMÉRICAS",country:"Costa Rica",lat:9.9355299,lon:-84.0676283,flagCode:"cr",logo:"uia.ac.cr",labelDelay:.56},{id:"ua",name:"UNIVERSIDAD AMERICANA",country:"Paraguay",lat:-25.2785855,lon:-57.5995961,flagCode:"py",logo:"www.americana.edu.py",labelDelay:.56},{id:"udv",name:"UNIVERSIDAD DE VALLADOLID",country:"España",lat:41.6570224,lon:-4.7141359,flagCode:"es",logo:"www.uva.es/export/sites/uva",labelDelay:.56},{id:"e",name:"Euroespes",country:"España",lat:43.3059449,lon:-8.2546364,flagCode:"es",logo:"euroespes.com",labelDelay:.56},{id:"cufc",name:"Continental University Florida - CUF",country:"Estados Unidos De Norteamérica",lat:38.8,lon:-99.5,flagCode:"us",logo:"",labelDelay:.56},{id:"udsp",name:"UNIVERSIDAD DE SAO PAULO",country:"Brasil",lat:-23.5613431,lon:-46.7309363,flagCode:"br",logo:"www5.usp.br",labelDelay:.56},{id:"udvd",name:"UNIVERSIDAD DEL VALLE DE ATEMAJAC",country:"México",lat:20.6616605,lon:-103.4204974,flagCode:"mx",logo:"www.univa.mx",labelDelay:.56},{id:"updo",name:"UNIVERSIDAD PABLO DE OLAVIDE",country:"España",lat:37.3551303,lon:-5.9375252,flagCode:"es",logo:"www.upo.es/portal/impe/web/portada/index.html",labelDelay:.56},{id:"uriv",name:"UNIVERSITAT ROVIRA I VIRGILI",country:"España",lat:41.1228008,lon:1.2491983,flagCode:"es",logo:"www.urv.cat/ca",labelDelay:.56},{id:"utds",name:"UNIVERSIDAD TECNOLÓGIA DE SALAMANCA",country:"México",lat:20.5768884,lon:-101.2326167,flagCode:"mx",logo:"www.utsalamanca.edu.mx",labelDelay:.56},{id:"utdl",name:"UNIVERSIDAD TECNOLOGICA DE LOS VALLES CENTRALES DE OAXACA",country:"México",lat:16.8185845,lon:-96.7981379,flagCode:"mx",logo:"utvco.edu.mx",labelDelay:.56},{id:"upmd",name:"UNIVERSIDAD POLITÉCNICA METROPOLITANA DE HIDALGO",country:"México",lat:19.9457765,lon:-98.8900663,flagCode:"mx",logo:"www.upmh.edu.mx",labelDelay:.56},{id:"uadc",name:"UNIVERSIDAD ABIERTA DE CATALUÑA",country:"España",lat:41.406649,lon:2.1944055,flagCode:"es",logo:"www.uoc.edu/es",labelDelay:.56},{id:"fudb",name:"FUNDACIÓN UNIVERSITARIA DEL BAGES-UMANRESA",country:"España",lat:41.736561,lon:1.8251932,flagCode:"es",logo:"www.umanresa.cat",labelDelay:.56},{id:"uam",name:"UNIVERSIDAD AUTÓNOMA METROPOLITANA",country:"México",lat:19.5033813,lon:-99.1872052,flagCode:"mx",logo:"www.uam.mx",labelDelay:.56},{id:"upda",name:"UNIVERSIDAD POLITÉCNICA DE ATLAUTLA",country:"México",lat:19.0347936,lon:-98.7866762,flagCode:"mx",logo:"upa.edomex.gob.mx",labelDelay:.56},{id:"itsd",name:"INSTITUTO TECNOLÓGICO SUPERIOR DEL ORIENTE ESTADO DE HIDALGO",country:"México",lat:19.7284923,lon:-98.4678625,flagCode:"mx",logo:"www.itesa.edu.mx",labelDelay:.56},{id:"udg",name:"UNIVERSIDAD DE GUADALAJARA",country:"México",lat:20.6747283,lon:-103.3592209,flagCode:"mx",logo:"www.udg.mx",labelDelay:.56},{id:"unad",name:"UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO - UNAM",country:"México",lat:19.3273741,lon:-99.184797,flagCode:"mx",logo:"www.unam.mx",labelDelay:.56},{id:"andu",name:"ASOCIACIÓN NACIONAL DE UNIVERSIDADES TECNOLÓGICAS-ANUT",country:"México",lat:19.3618287,lon:-99.1690521,flagCode:"mx",logo:"",labelDelay:.56},{id:"buad",name:"BENEMÉRITA UNIVERSIDAD AUTÓNOMA DE PUEBLA",country:"México",lat:19.042032,lon:-98.1952728,flagCode:"mx",logo:"www.buap.mx",labelDelay:.56},{id:"isde",name:"INSTITUTOS SUPERIORES DE ESTUDIOS PSICOLÓGICOS - ISEP",country:"España",lat:40.4324891,lon:-3.7001919,flagCode:"es",logo:"www.isep.es",labelDelay:.56},{id:"fesd",name:"FUNDACIÓN ESCUELA SUPERIOR DE ECONOMÍA Y ADMINISTRACIÓN DE EMPRESAS (ESADE)",country:"Argentina",lat:-34.5808031,lon:-58.4233914,flagCode:"ar",logo:"www.eseade.edu.ar",labelDelay:.56},{id:"ebsa",name:"EUNCENT BUSINESS SCHOOL - Afiliada a la U. Politécnica de Cataluña",country:"España",lat:41.4009173,lon:2.1913319,flagCode:"es",logo:"www.euncet.com/es",labelDelay:.56},{id:"upad",name:"UNIVERSIDAD POPULAR AUTÓNOMA DEL ESTADO DE PUEBLA",country:"México",lat:19.0479912,lon:-98.2132929,flagCode:"mx",logo:"www.upaep.mx",labelDelay:.56},{id:"utdv",name:"UNIVERSIDAD TECNOLÓGICA DEL VALLE DE MEZQUITAL",country:"México",lat:20.4957781,lon:-99.1831135,flagCode:"mx",logo:"www.utvm.edu.mx",labelDelay:.56},{id:"uqr",name:"UNIVERSIDAD QUINTANA ROO",country:"México",lat:18.5230315,lon:-88.2710138,flagCode:"mx",logo:"www.uqroo.mx",labelDelay:.56},{id:"uads",name:"UNIVERSIDAD AUTÓNOMA DE SINALOA",country:"México",lat:24.7978553,lon:-107.4493179,flagCode:"mx",logo:"www.uas.edu.mx",labelDelay:.56},{id:"udsc",name:"UNIVERSIDADE DE SANTA CRUZ DO SUL",country:"Brasil",lat:-29.6980932,lon:-52.4385345,flagCode:"br",logo:"www.unisc.br/pt",labelDelay:.56},{id:"uadb",name:"UNIVERSIDAD AUTÓNOMA DE BAJA CALIFORNIA",country:"México",lat:32.6634296,lon:-115.4688796,flagCode:"mx",logo:"www.uabc.mx",labelDelay:.56},{id:"udm",name:"UNIVERSIDAD DE MONTERREY",country:"México",lat:25.6610557,lon:-100.4203624,flagCode:"mx",logo:"www.udem.edu.mx/es",labelDelay:.56},{id:"utds",name:"UNIVERSIDAD TECNOLÓGICA DE SAN JUAN DEL RÍO (UTSJR)",country:"México",lat:20.3676701,lon:-100.010105,flagCode:"mx",logo:"www.utsjr.edu.mx",labelDelay:.56},{id:"udls",name:"UNIVERSIDAD DE LA SALLE BAJÍO",country:"México",lat:21.1522895,lon:-101.7114697,flagCode:"mx",logo:"www.lasallebajio.edu.mx",labelDelay:.56},{id:"uadq",name:"UNIVERSIDAD AUTÓNOMA DE QUERÉTANO",country:"México",lat:20.591971,lon:-100.4104099,flagCode:"mx",logo:"www.uaq.mx",labelDelay:.56},{id:"udn",name:"UNIVERSIDAD DEL NORTE",country:"Paraguay",lat:-25.2861879,lon:-57.6183747,flagCode:"py",logo:"uninorte.edu.py",labelDelay:.56},{id:"ues2",name:"UNIVERSIDAD EMPRESARIAL SIGLO 21",country:"Argentina",lat:-31.3222298,lon:-64.2222009,flagCode:"ar",logo:"21.edu.ar",labelDelay:.56},{id:"undi",name:"UNIVERSIDAD NACIONAL DE INGENIERÍA",country:"Nicaragua",lat:12.1318972,lon:-86.2701044,flagCode:"ni",logo:"www.uni.edu.ni/#",labelDelay:.56},{id:"ipdb",name:"INSTITUTO POLITÉCNICO DE BRAGANÇA",country:"Portugal",lat:41.798665,lon:-6.7647139,flagCode:"pt",logo:"ipb.pt/pt",labelDelay:.56},{id:"uau",name:"UNIVERSIDAD AMERICANA UAM",country:"Nicaragua",lat:12.1084439,lon:-86.2570282,flagCode:"ni",logo:"www.uam.edu.ni",labelDelay:.56},{id:"updm",name:"UNIVERSIDAD POLITECNICA DE MADRID",country:"España",lat:40.4486378,lon:-3.7194271,flagCode:"es",logo:"www.upm.es",labelDelay:.56},{id:"udlg",name:"UNIVERSIDAD DE LA GUAJIRA",country:"Colombia",lat:11.5140504,lon:-72.8693211,flagCode:"co",logo:"uniguajira.edu.co",labelDelay:.56},{id:"undg",name:"UNIVERSIDAD NACIONAL DE GENERAL SAN MARTÍN",country:"Argentina",lat:-34.5807614,lon:-58.5225126,flagCode:"ar",logo:"www.unsam.edu.ar",labelDelay:.56},{id:"ibde",name:"INSTITUTO BRASILEIRO DE ENSINO",country:"Brasil",lat:-15.8215606,lon:-47.8949679,flagCode:"br",logo:"www.idp.edu.br",labelDelay:.56},{id:"pti",name:"PARQUE TECNOLÓGICO ITAPU",country:"Paraguay",lat:-25.4157411,lon:-54.6162396,flagCode:"py",logo:"www.pti.org.py",labelDelay:.56},{id:"uedg",name:"UNIVERSIDADE EVANGÉLICA DE GOIÁS - UNIEVANGÉLICA",country:"Brasil",lat:-16.2949001,lon:-48.9448292,flagCode:"br",logo:"www4.unievangelica.edu.br",labelDelay:.56},{id:"us",name:"UNIVERSIDAD SUDAMERICANA",country:"Paraguay",lat:-22.5480479,lon:-55.735428,flagCode:"py",logo:"www.unisud.edu.py",labelDelay:.56},{id:"ucdp",name:"UNIVERSIDADE CATÓLICA DO PARANÁ",country:"Brasil",lat:-25.4516039,lon:-49.2530321,flagCode:"br",logo:"www.pucpr.br",labelDelay:.56},{id:"uai",name:"UNIVERSIDAD ABIERTA INTERAMERICANA",country:"Argentina",lat:-34.6218347,lon:-58.3794829,flagCode:"ar",logo:"uai.edu.ar",labelDelay:.56},{id:"cal",name:"CÉGEP ANDRÉ-LAURENDEAU",country:"Canadá",lat:45.4366036,lon:-73.6053998,flagCode:"ca",logo:"claurendeau.qc.ca",labelDelay:.56},{id:"utdm",name:"UNIVERSIDAD TENCOLÓGICA DE MINERAL DE LA REFORMA",country:"México",lat:20.0394709,lon:-98.7189277,flagCode:"mx",logo:"www.utmir.edu.mx",labelDelay:.56},{id:"idm",name:"INSTITUTO DE MAUÁ",country:"Brasil",lat:-23.6480092,lon:-46.5735916,flagCode:"br",logo:"maua.br",labelDelay:.56},{id:"udc",name:"UNIVERSIDAD DE CHILE",country:"Chile",lat:-33.4530541,lon:-70.6601488,flagCode:"cl",logo:"uchile.cl",labelDelay:.56},{id:"uaxe",name:"UNIVERSIDAD ALFONSO X EL SABIO",country:"España",lat:40.4508665,lon:-3.9873869,flagCode:"es",logo:"www.uax.com",labelDelay:.56},{id:"ucll",name:"UNIVERSITY COLLEGES LEUVEN - LIMBURG",country:"Belgica",lat:50.9288116,lon:5.3952402,flagCode:"be",logo:"www.ucll.be/en",labelDelay:.56},{id:"upda",name:"UNIVERSIDAD POLITÉCNICA DE ATLAUTLA",country:"México",lat:19.0347993,lon:-98.7866417,flagCode:"mx",logo:"upa.edomex.gob.mx",labelDelay:.56},{id:"iudd",name:"INSTITUCIÓN UNIVERSITARIA DIGITAL DE ANTIOQUIA –LA IU DIGITAL",country:"Colombia",lat:6.2441097,lon:-75.5748423,flagCode:"co",logo:"www.iudigital.edu.co",labelDelay:.56},{id:"cua",name:"CORPORACIÓN UNIVERSITARIA AMERICANA",country:"Colombia",lat:10.991339,lon:-74.8073861,flagCode:"co",logo:"americana.edu.co",labelDelay:.56},{id:"uslu",name:"UNIVERSIDAD SAN LORENZO (USAL)",country:"Paraguay",lat:-25.3422388,lon:-57.5108768,flagCode:"py",logo:"unisal.edu.py",labelDelay:.56},{id:"uadb",name:"UNIVERSIDAD AUTÓNOMA DE BUCARAMANGA",country:"Colombia",lat:7.116811,lon:-73.1052478,flagCode:"co",logo:"unab.edu.co",labelDelay:.56},{id:"fusm",name:"FUNDACIÓN UNIVERSITARIA SAN MARTÍN",country:"Colombia",lat:4.6675038,lon:-74.0587265,flagCode:"co",logo:"sanmartin.edu.co",labelDelay:.56},{id:"espd",name:"ESCUELA SUPERIOR POLITÉCNICA DEL LITORAL (ESPOL)",country:"Ecuador",lat:-2.1479123,lon:-79.9678659,flagCode:"ec",logo:"www.espol.edu.ec/es",labelDelay:.56},{id:"utdm",name:"UNIVERSIDAD TECNOLOGICA DEL MAR DEL ESTADO DE GUERRERO",country:"México",lat:16.5227446,lon:-98.7438087,flagCode:"mx",logo:"utmarguerrero.edu.mx",labelDelay:.56},{id:"ucsp",name:"UNIVERSIDAD CEU SAN PABLO",country:"España",lat:40.4425896,lon:-3.7178301,flagCode:"es",logo:"www.uspceu.com",labelDelay:.56},{id:"ue",name:"UNIVERSIDAD EXTREMADURA",country:"España",lat:38.885057,lon:-7.0078488,flagCode:"es",logo:"www.unex.es",labelDelay:.56},{id:"t",name:"TECNOCAMPUS",country:"España",lat:41.5278353,lon:2.4345242,flagCode:"es",logo:"www.tecnocampus.cat",labelDelay:.56},{id:"uotb",name:"UNIVERSITY OF TECHNOLOGY , BUSINESS AN DESING KONSTANZ",country:"Alemania",lat:47.6679934,lon:9.1707572,flagCode:"de",logo:"www.htwg-konstanz.de",labelDelay:.56},{id:"ucdv",name:"UNIVERSIDAD CATÓLICA DEL VALPARAÍSO",country:"Chile",lat:-33.0263743,lon:-71.6391217,flagCode:"cl",logo:"www.pucv.cl",labelDelay:.56},{id:"undc",name:"UNIVERSIDAD NACIONAL DE CHIMBORAZO",country:"Ecuador",lat:-1.653497,lon:-78.6428417,flagCode:"ec",logo:"www.unach.edu.ec",labelDelay:.56},{id:"csct",name:"CHILDREN´S CRISIS TREATMENT CENTER",country:"Estados Unidos De Norteamérica",lat:39.9657651,lon:-75.132808,flagCode:"us",logo:"www.cctckids.org",labelDelay:.56},{id:"tnrc",name:"THE NATIONAL RESEARCH COUNCIL OF ITALY",country:"Italia",lat:41.9008023,lon:12.5123918,flagCode:"it",logo:"www.cnr.it",labelDelay:.56},{id:"uoj",name:"UNIVERSITY OF JOHANNESBURG",country:"Sudafrica",lat:-26.1833726,lon:27.9986201,flagCode:"za",logo:"www.uj.ac.za",labelDelay:.56},{id:"iedp",name:"INSTITUTO EUROPEO DE PSICOLOGÍA POSITIVA",country:"España",lat:40.3836311,lon:-3.631406,flagCode:"es",logo:"www.iepp.es",labelDelay:.56},{id:"gc",name:"GRUPO CTO",country:"España",lat:40.4343284,lon:-3.6335603,flagCode:"es",logo:"grupocto.es",labelDelay:.56},{id:"uds",name:"UNIVERSIDAD DE SEVILLA",country:"España",lat:37.3805757,lon:-5.9904816,flagCode:"es",logo:"www.us.es",labelDelay:.56},{id:"ityd",name:"INSTITUTO TECNOLÓGICO Y DE ESTUDIOS SUPERIORES DE MONTERREY",country:"México",lat:25.6516021,lon:-100.2896174,flagCode:"mx",logo:"tec.mx/es",labelDelay:.56},{id:"undc",name:"UNIVERDSIDAD NACIONAL DE COLOMBIA",country:"Colombia",lat:4.6396836,lon:-74.0892497,flagCode:"co",logo:"unal.edu.co",labelDelay:.56},{id:"ueb",name:"UNIVERSIDAD EL BOSQUE",country:"Colombia",lat:4.7103139,lon:-74.0324053,flagCode:"co",logo:"www.unbosque.edu.co",labelDelay:.56},{id:"ucdc",name:"UNIVERSIDAD COOPERATIVA DE COLOMBIA",country:"Colombia",lat:4.6261306,lon:-74.0694073,flagCode:"co",logo:"www.ucc.edu.co",labelDelay:.56},{id:"ust",name:"UNIVERSIDAD SANTO TOMÁS",country:"Colombia",lat:4.6381861,lon:-74.0644269,flagCode:"co",logo:"usantotomas.edu.co/inicio",labelDelay:.56},{id:"uft",name:"UNIVERSIDAD FINIS TERRAE",country:"Chile",lat:-33.4366843,lon:-70.6084329,flagCode:"cl",logo:"finis.cl",labelDelay:.56},{id:"luep",name:'LA UNIVERSIDADE ESTADUAL PAULISTA "JÚLIO DE MESQUITA FILHO" (UNESP)',country:"Brasil",lat:-23.5910092,lon:-46.6103055,flagCode:"br",logo:"www2.unesp.br",labelDelay:.56},{id:"undc",name:"UNIVERSIDAD NACIONAL DEL CUYO",country:"Argentina",lat:-32.8807297,lon:-68.8780391,flagCode:"ar",logo:"www.uncuyo.edu.ar",labelDelay:.56}],Kn=[{flagCode:"ar",name:"Argentina",programs:"Intercambio estudiantil",institutions:11,cities:"",photo:"/images/Argentina.jpg",universities:[{abbr:"UAJF",name:"UNIVERSIDAD ARGENTINA JOHN F. KENNEDY",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, ODONTOLOGÍA",website:"https://www.kennedy.edu.ar/"},{abbr:"UDBA",name:"UNIVERSIDAD DE BUENOS AIRES",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, CIENCIAS DE LA COMUNICACION, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, ECONOMÍA",website:"https://www.uba.ar/"},{abbr:"UNDL",name:"UNIVERSIDAD NACIONAL DE LA MATANZA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA ELECTRÓNICA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, ADMINISTRACIÓN Y RECURSOS HUMANOS, CONTABILIDAD, ECONOMÍA, MEDICINA HUMANA, ENFERMERÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN",website:"https://www.unlam.edu.ar/"},{abbr:"UNDQ",name:"UNIVERSIDAD NACIONAL DE QUILMES",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PRACTICAS / PASANTIAS",carrerasUC:"DERECHO, CIENCIAS DE LA COMUNICACION, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, ADMINISTRACIÓN Y RECURSOS HUMANOS, CONTABILIDAD, ECONOMÍA, ADMINISTRACIÓN Y GESTIÓN PÚBLICA, INGENIERÍA INDUSTRIAL, PSICOLOGÍA, CONTABILIDAD, ADMINISTRACIÓN",website:"https://www.unq.edu.ar/"},{abbr:"UNDM",name:"UNIVERSIDAD NACIONAL DE MAR DEL PLATA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA ELECTRÓNICA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD, ECONOMÍA, MEDICINA HUMANA, ENFERMERÍA",website:"https://www.mdp.edu.ar/"},{abbr:"UTN",name:"UNIVERSIDAD TECNOLÓGICA NACIONAL",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"INGENIERÍA AMBIENTAL, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA ELECTRÓNICA, INGENIERÍA EMPRESARIAL, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA MECATRÓNICA, INGENIERÍA DE MINAS, INGENIERÍA DE SISTEMAS",website:"https://www.utn.edu.ar/es/"},{abbr:"FESD",name:"FUNDACIÓN ESCUELA SUPERIOR DE ECONOMÍA Y ADMINISTRACIÓN DE EMPRESAS (ESADE)",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, ADMINISTRACIÓN Y RECURSOS HUMANOS, CONTABILIDAD, ECONOMÍA",website:"https://www.eseade.edu.ar/"},{abbr:"UES2",name:"UNIVERSIDAD EMPRESARIAL SIGLO 21",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN, ADMINISTRACIÓN Y GESTIÓN PÚBLICA, CONTABILIDAD",website:"https://21.edu.ar/"},{abbr:"UNDG",name:"UNIVERSIDAD NACIONAL DE GENERAL SAN MARTÍN",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"CIENCIAS DE LA COMUNICACION, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA AMBIENTAL, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, CONTABILIDAD, ECONOMÍA, MEDICINA HUMANA, ENFERMERÍA, CONTABILIDAD, ADMINISTRACIÓN",website:"https://www.unsam.edu.ar/"},{abbr:"UAI",name:"UNIVERSIDAD ABIERTA INTERAMERICANA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, CIENCIAS DE LA COMUNICACION, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, ECONOMÍA, MEDICINA HUMANA, ODONTOLOGÍA, ENFERMERÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN, PSICOLOGÍA, CONTABILIDAD, ADMINISTRACIÓN",website:"https://uai.edu.ar/"},{abbr:"UNDC",name:"UNIVERSIDAD NACIONAL DEL CUYO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ECONOMÍA, MEDICINA HUMANA, ODONTOLOGÍA",website:"https://www.uncuyo.edu.ar/"}]},{flagCode:"br",name:"Brasil",programs:"Intercambio estudiantil",institutions:12,cities:"",photo:"/images/Faculdade_de_Direito_do_Largo_de_Sao_Francisco.jpg",universities:[{abbr:"EDC",name:"ESCOLA DA CIDADE",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"ARQUITECTURA",website:"https://escoladacidade.edu.br/"},{abbr:"UP",name:"UNIVERSIDAD PAULISTA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, CIENCIAS DE LA COMUNICACION, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA AMBIENTAL, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA ELECTRÓNICA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y RECURSOS HUMANOS, CONTABILIDAD, ECONOMÍA, ODONTOLOGÍA, ENFERMERÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN",website:"https://www.unip.br/"},{abbr:"UFDM",name:"UNIVERSIDAD FEDERAL DE MATO GROSSO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA AMBIENTAL, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, ECONOMÍA, ENFERMERÍA",website:"https://www.ufmt.br/"},{abbr:"CUSC",name:"CENTRO UNIVERSITÁRIO SÃO CAMILO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PRACTICAS / PASANTIAS, ROTACIONES MEDICAS",carrerasUC:"PSICOLOGÍA, ADMINISTRACIÓN Y FINANZAS, MEDICINA HUMANA, ENFERMERÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN, RADIOLOGÍA",website:"https://saocamilo-sp.br/"},{abbr:"UEDL",name:"UNIVERSIDAD ESTADUAL DE LONDRINA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PRACTICAS / PASANTIAS",carrerasUC:"DERECHO, CIENCIAS DE LA COMUNICACION, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, ECONOMÍA, ODONTOLOGÍA, ENFERMERÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN",website:"https://portal.uel.br/"},{abbr:"UDSP",name:"UNIVERSIDAD DE SAO PAULO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS",carrerasUC:"DERECHO, CIENCIAS DE LA COMUNICACION, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA AMBIENTAL, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA ELECTRÓNICA, INGENIERÍA EMPRESARIAL, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, CONTABILIDAD, ECONOMÍA, MEDICINA HUMANA, ODONTOLOGÍA, ENFERMERÍA",website:"https://www5.usp.br/"},{abbr:"UDSC",name:"UNIVERSIDADE DE SANTA CRUZ DO SUL",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS, MISIONES ACADEMICAS",carrerasUC:"DERECHO, CIENCIAS DE LA COMUNICACION, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA EMPRESARIAL, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, ADMINISTRACIÓN Y RECURSOS HUMANOS, CONTABILIDAD",website:"https://www.unisc.br/pt/"},{abbr:"IBDE",name:"INSTITUTO BRASILEIRO DE ENSINO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, INGENIERÍA AMBIENTAL, INGENIERÍA EMPRESARIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, ADMINISTRACIÓN Y RECURSOS HUMANOS, CONTABILIDAD, ADMINISTRACIÓN",website:"https://www.idp.edu.br/"},{abbr:"UEDG",name:"UNIVERSIDADE EVANGÉLICA DE GOIÁS - UNIEVANGÉLICA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD, MEDICINA HUMANA, ENFERMERÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN",website:"https://www4.unievangelica.edu.br/"},{abbr:"UCDP",name:"UNIVERSIDADE CATÓLICA DO PARANÁ",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS, ROTACIONES MEDICAS",carrerasUC:"DERECHO, CIENCIAS DE LA COMUNICACION, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, ECONOMÍA, MEDICINA HUMANA, ODONTOLOGÍA, ENFERMERÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN, PSICOLOGÍA, CONTABILIDAD, ADMINISTRACIÓN",website:"https://www.pucpr.br/"},{abbr:"IDM",name:"INSTITUTO DE MAUÁ",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PRACTICAS / PASANTIAS",carrerasUC:"INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA ELECTRÓNICA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN",website:"https://maua.br/"},{abbr:"LUEP",name:'LA UNIVERSIDADE ESTADUAL PAULISTA "JÚLIO DE MESQUITA FILHO" (UNESP)',city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS, ROTACIONES MEDICAS",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ECONOMÍA, MEDICINA HUMANA",website:"https://www2.unesp.br/"}]},{flagCode:"co",name:"Colombia",programs:"Intercambio estudiantil",institutions:32,cities:"",photo:"/images/UniandesBogota.jpg",universities:[{abbr:"USA",name:"UNIVERSIDAD SERGIO ARBOLEDA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL",carrerasUC:"DERECHO, CIENCIAS DE LA COMUNICACION, PSICOLOGÍA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, ECONOMÍA",website:"https://www.usergioarboleda.edu.co/"},{abbr:"UADO",name:"UNIVERSIDAD AUTÓNOMA DE OCCIDENTE",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"CIENCIAS DE LA COMUNICACION, PSICOLOGÍA, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA ELECTRÓNICA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, ECONOMÍA",website:"https://www.uao.edu.co/"},{abbr:"FUKL",name:"FUNDACIÓN UNIVERSITARIA KONRAD LORENZ",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL",carrerasUC:"CIENCIAS DE LA COMUNICACION, PSICOLOGÍA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES",website:"https://www.konradlorenz.edu.co/"},{abbr:"UDSB",name:"UNIVERSIDAD DE SAN BUENAVENTURA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA ELECTRÓNICA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD",website:"https://www.usbbog.edu.co/"},{abbr:"UC",name:"UNIVERSIDAD CENTRAL",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL, PASANTIAS DE INVESTIGACION",carrerasUC:"CIENCIAS DE LA COMUNICACION, PSICOLOGÍA, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD, ECONOMÍA",website:"https://www.ucentral.edu.co/"},{abbr:"UDLC",name:"UNIVERSIDAD DE LA COSTA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL, DOBLE TITULACION, MISIONES ACADEMICAS",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA AMBIENTAL, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA ELECTRÓNICA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD",website:"https://www.cuc.edu.co/"},{abbr:"UAL",name:"UNIVERSIDAD AUTÓNOMA LATINOAMERICANA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, ECONOMÍA",website:"https://www.unaula.edu.co/"},{abbr:"UDIY",name:"UNIVERSIDAD DE INVESTIGACION Y DESARROLLO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL, PASANTIAS DE INVESTIGACION",carrerasUC:"DERECHO, CIENCIAS DE LA COMUNICACION, PSICOLOGÍA, INGENIERÍA CIVIL, INGENIERÍA ELECTRÓNICA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD",website:"https://web.udi.edu.co/"},{abbr:"UDA",name:"UNIVERSIDAD DE ANTIOQUIA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS, MISIONES ACADEMICAS",carrerasUC:"DERECHO, PSICOLOGÍA, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, ECONOMÍA, MEDICINA HUMANA, ODONTOLOGÍA, ENFERMERÍA",website:"https://www.udea.edu.co/wps/portal/udea/web/inicio"},{abbr:"FUDÁ",name:"FUNDACIÓN UNIVERSITARIA DEL ÁREA ANDINA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS, ROTACIONES MEDICAS, MISIONES ACADEMICAS",carrerasUC:"MEDICINA HUMANA, ODONTOLOGÍA, ENFERMERÍA, TECNOLOGÍA MÉDICA:LABORATORIO CLÍNICO Y ANATOMÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN, RADIOLOGÍA",website:"https://www.areandina.edu.co/"},{abbr:"UDI",name:"UNIVERSIDAD DE IBAGUÉ",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PRACTICAS / PASANTIAS",carrerasUC:"DERECHO, CIENCIAS DE LA COMUNICACION, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA ELECTRÓNICA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, ECONOMÍA",website:"https://www.unibague.edu.co/"},{abbr:"UDN",name:"UNIVERSIDAD DE NARIÑO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL",carrerasUC:"ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, ADMINISTRACIÓN Y RECURSOS HUMANOS",website:"https://www.udenar.edu.co/"},{abbr:"UDLA",name:"UNIVERSIDAD DE LOS ANDES",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PRACTICAS / PASANTIAS, ROTACIONES MEDICAS, MISIONES ACADEMICAS",carrerasUC:"ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, MEDICINA HUMANA, ENFERMERÍA",website:"https://www.uniandes.edu.co/"},{abbr:"FUJN",name:"FUNDACIÓN UNIVERSITARIA JUAN N. CORPAS",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PRACTICAS / PASANTIAS, ROTACIONES MEDICAS, MISIONES ACADEMICAS",carrerasUC:"MEDICINA HUMANA, ENFERMERÍA",website:"https://www.juanncorpas.edu.co/"},{abbr:"UPYT",name:"UNIVERSIDAD PEDAGÓGICA Y TECNOLÓGICA DE COLOMBIA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, INGENIERÍA CIVIL, INGENIERÍA ELECTRÓNICA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, ECONOMÍA, MEDICINA HUMANA, ENFERMERÍA",website:"https://www.uptc.edu.co/"},{abbr:"UDS",name:"UNIVERSIDAD DE SANTANDER",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS, ROTACIONES MEDICAS, MISIONES ACADEMICAS",carrerasUC:"DERECHO, PSICOLOGÍA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, MEDICINA HUMANA, ODONTOLOGÍA, TECNOLOGÍA MÉDICA:LABORATORIO CLÍNICO Y ANATOMÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN",website:"https://udes.edu.co/"},{abbr:"HUDL",name:"HOSPITAL UNIVERSITARIO DE LA SAMARITANA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PRACTICAS / PASANTIAS, ROTACIONES MEDICAS",carrerasUC:"MEDICINA HUMANA, ENFERMERÍA",website:"https://www.hus.org.co/"},{abbr:"CUAD",name:"CORPORACIÓN UNIVERSITARIA AUTÓNOMA DE NARIÑO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PRACTICAS / PASANTIAS",carrerasUC:"DERECHO, INGENIERÍA ELECTRÓNICA, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD, CONTABILIDAD, ADMINISTRACIÓN",website:"https://www.aunar.edu.co/"},{abbr:"IUE",name:"INSTITUCIÓN UNIVERSITARIA ESUMER",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS",carrerasUC:"ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES",website:"https://esumer.edu.co/"},{abbr:"CURN",name:"CORPORACION UNIVERSITARIA RAFAEL NÚÑEZ",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, INGENIERÍA DE SISTEMAS, CONTABILIDAD, MEDICINA HUMANA, ODONTOLOGÍA, ENFERMERÍA",website:"https://www.uninunez.edu.co/"},{abbr:"UAN",name:"UNIVERSIDAD ANTONIO NARIÑO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL",carrerasUC:"ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, ADMINISTRACIÓN Y RECURSOS HUMANOS",website:"https://www.uan.edu.co/"},{abbr:"CPDL",name:"CORPORACION POLITÉCNICO DE LA COSTA ATLÁNTICA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD",website:"https://pca.edu.co/wp/"},{abbr:"UDFJ",name:"UNIVERSIDAD DISTRITAL FRANCISCO JOSE DE CALDAS",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, ROTACIONES MEDICAS",carrerasUC:"INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA ELECTRÓNICA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, ADMINISTRACIÓN Y RECURSOS HUMANOS",website:"https://www.udistrital.edu.co/inicio"},{abbr:"UDLG",name:"UNIVERSIDAD DE LA GUAJIRA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS",carrerasUC:"DERECHO, PSICOLOGÍA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, ECONOMÍA, ADMINISTRACIÓN Y GESTIÓN PÚBLICA, INGENIERÍA INDUSTRIAL, ADMINISTRACIÓN",website:"https://uniguajira.edu.co/"},{abbr:"IUDD",name:"INSTITUCIÓN UNIVERSITARIA DIGITAL DE ANTIOQUIA –LA IU DIGITAL",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PRACTICAS / PASANTIAS",carrerasUC:"INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, ADMINISTRACIÓN Y RECURSOS HUMANOS, ADMINISTRACIÓN",website:"https://www.iudigital.edu.co/"},{abbr:"CUA",name:"CORPORACIÓN UNIVERSITARIA AMERICANA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PRACTICAS / PASANTIAS",carrerasUC:"DERECHO, PSICOLOGÍA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, INGENIERÍA INDUSTRIAL, PSICOLOGÍA, CONTABILIDAD, ADMINISTRACIÓN",website:"https://americana.edu.co/"},{abbr:"UADB",name:"UNIVERSIDAD AUTÓNOMA DE BUCARAMANGA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL, PRACTICAS / PASANTIAS, ROTACIONES MEDICAS",carrerasUC:"INGENIERÍA EMPRESARIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, ECONOMÍA, INGENIERÍA INDUSTRIAL, PSICOLOGÍA, CONTABILIDAD, ADMINISTRACIÓN",website:"https://unab.edu.co/"},{abbr:"FUSM",name:"FUNDACIÓN UNIVERSITARIA SAN MARTÍN",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PRACTICAS / PASANTIAS, ROTACIONES MEDICAS",carrerasUC:"DERECHO, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, MEDICINA HUMANA, ODONTOLOGÍA, CONTABILIDAD, ADMINISTRACIÓN",website:"https://sanmartin.edu.co/"},{abbr:"UNDC",name:"UNIVERDSIDAD NACIONAL DE COLOMBIA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD, MEDICINA HUMANA, ODONTOLOGÍA",website:"https://unal.edu.co/"},{abbr:"UEB",name:"UNIVERSIDAD EL BOSQUE",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA ELECTRÓNICA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, MEDICINA HUMANA, ODONTOLOGÍA",website:"https://www.unbosque.edu.co/"},{abbr:"UCDC",name:"UNIVERSIDAD COOPERATIVA DE COLOMBIA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD, MEDICINA HUMANA, ODONTOLOGÍA",website:"https://www.ucc.edu.co/"},{abbr:"UST",name:"UNIVERSIDAD SANTO TOMÁS",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL, PRACTICAS / PASANTIAS, ROTACIONES MEDICAS",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD",website:"https://usantotomas.edu.co/inicio"}]},{flagCode:"cl",name:"Chile",programs:"Intercambio estudiantil",institutions:7,cities:"",photo:"/images/Chile.jpg",universities:[{abbr:"UAB",name:"UNIVERSIDAD ANDRÉS BELLO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE MINAS, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, MEDICINA HUMANA, ODONTOLOGÍA, ENFERMERÍA, TECNOLOGÍA MÉDICA:LABORATORIO CLÍNICO Y ANATOMÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN",website:"https://www.unab.cl/"},{abbr:"UC",name:"UNIVERSIDAD CENTRAL",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL",carrerasUC:"DERECHO, CIENCIAS DE LA COMUNICACION, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE MINAS, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y MARKETING, CONTABILIDAD, ENFERMERÍA, TECNOLOGÍA MÉDICA:LABORATORIO CLÍNICO Y ANATOMÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN",website:"https://www.ucentral.cl/"},{abbr:"USS",name:"UNIVERSIDAD SAN SEBASTIÁN",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA DE MINAS, INGENIERÍA DE SISTEMAS, MEDICINA HUMANA, ODONTOLOGÍA, ENFERMERÍA, TECNOLOGÍA MÉDICA:LABORATORIO CLÍNICO Y ANATOMÍA",website:"https://www.uss.cl/"},{abbr:"UCDN",name:"UNIVERSIDAD CATÓLICA DEL NORTE DE CHILE",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PRACTICAS / PASANTIAS",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE MINAS, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y MARKETING, CONTABILIDAD, MEDICINA HUMANA, ENFERMERÍA",website:"https://www.ucn.cl/"},{abbr:"UDC",name:"UNIVERSIDAD DE CHILE",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS",carrerasUC:"DERECHO, CIENCIAS DE LA COMUNICACION, ARQUITECTURA, INGENIERÍA DE MINAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, MEDICINA HUMANA, ENFERMERÍA",website:"https://uchile.cl/"},{abbr:"UCDV",name:"UNIVERSIDAD CATÓLICA DEL VALPARAÍSO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, CIENCIAS DE LA COMUNICACION, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA ELECTRÓNICA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, ADMINISTRACIÓN Y RECURSOS HUMANOS, CONTABILIDAD, ECONOMÍA, TECNOLOGÍA MÉDICA:LABORATORIO CLÍNICO Y ANATOMÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN, ADMINISTRACIÓN Y GESTIÓN PÚBLICA, INGENIERÍA INDUSTRIAL, PSICOLOGÍA, CONTABILIDAD, ADMINISTRACIÓN",website:"https://www.pucv.cl/"},{abbr:"UFT",name:"UNIVERSIDAD FINIS TERRAE",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA EMPRESARIAL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, MEDICINA HUMANA, ODONTOLOGÍA",website:"https://finis.cl/"}]},{flagCode:"gt",name:"Guatemala",programs:"Intercambio estudiantil",institutions:1,cities:"",photo:"/images/Guatemala.jpg",universities:[{abbr:"UG",name:"UNIVERSIDAD GALILEO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION",carrerasUC:"CIENCIAS DE LA COMUNICACION, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ENFERMERÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN, INGENIERÍA INDUSTRIAL, ADMINISTRACIÓN",website:"https://www.galileo.edu/"}]},{flagCode:"mx",name:"México",programs:"Intercambio estudiantil",institutions:29,cities:"",photo:"/images/mexicocapital.jpg",universities:[{abbr:"UTDH",name:"UNIVERSIDAD TECNOLÓGICA DE HUEJOTZINGO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION",carrerasUC:"INGENIERÍA INDUSTRIAL, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING",website:"https://www.uth.edu.mx/"},{abbr:"UPDT",name:"UNIVERSIDAD POLITÉCNICA DE TULANCINGO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES",website:"https://www.upt.edu.mx/"},{abbr:"UTDC",name:"UNIVERSIDAD TECNOLÓGICA DE CANCÚN",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD",website:"https://utcancun.edu.mx/"},{abbr:"UPDT",name:"UNIVERSIDAD POLITÉCNICA DE TLAXCALA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"INGENIERÍA INDUSTRIAL, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS",website:"https://uptlax.edu.mx/"},{abbr:"UTDT",name:"UNIVERSIDAD TECNOLÓGICA DE TLAXCALA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING",website:"https://www.uttlaxcala.edu.mx/"},{abbr:"UDVD",name:"UNIVERSIDAD DEL VALLE DE ATEMAJAC",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, MEDICINA HUMANA",website:"https://www.univa.mx/"},{abbr:"UTDS",name:"UNIVERSIDAD TECNOLÓGIA DE SALAMANCA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"INGENIERÍA AMBIENTAL, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES",website:"https://www.utsalamanca.edu.mx/"},{abbr:"UTDL",name:"UNIVERSIDAD TECNOLOGICA DE LOS VALLES CENTRALES DE OAXACA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION",carrerasUC:"INGENIERÍA AMBIENTAL, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES",website:"https://utvco.edu.mx/"},{abbr:"UPMD",name:"UNIVERSIDAD POLITÉCNICA METROPOLITANA DE HIDALGO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL",carrerasUC:"CIENCIAS DE LA COMUNICACION, INGENIERÍA ELÉCTRICA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, INGENIERÍA INDUSTRIAL",website:"https://www.upmh.edu.mx/"},{abbr:"UAM",name:"UNIVERSIDAD AUTÓNOMA METROPOLITANA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA AMBIENTAL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ECONOMÍA, MEDICINA HUMANA, ENFERMERÍA, INGENIERÍA INDUSTRIAL, PSICOLOGÍA, ADMINISTRACIÓN",website:"https://www.uam.mx/"},{abbr:"UPDA",name:"UNIVERSIDAD POLITÉCNICA DE ATLAUTLA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PRACTICAS / PASANTIAS",carrerasUC:"INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS",website:"https://upa.edomex.gob.mx/"},{abbr:"ITSD",name:"INSTITUTO TECNOLÓGICO SUPERIOR DEL ORIENTE ESTADO DE HIDALGO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS",website:"https://www.itesa.edu.mx/"},{abbr:"UDG",name:"UNIVERSIDAD DE GUADALAJARA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD, MEDICINA HUMANA, ENFERMERÍA",website:"https://www.udg.mx/"},{abbr:"UNAD",name:"UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO - UNAM",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL, PRACTICAS / PASANTIAS, ROTACIONES MEDICAS",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD, MEDICINA HUMANA, INGENIERÍA INDUSTRIAL, PSICOLOGÍA, CONTABILIDAD, ADMINISTRACIÓN",website:"https://www.unam.mx/"},{abbr:"ANDU",name:"ASOCIACIÓN NACIONAL DE UNIVERSIDADES TECNOLÓGICAS-ANUT",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL, PASANTIAS DE INVESTIGACION",carrerasUC:"INGENIERÍA AMBIENTAL, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA ELECTRÓNICA, INGENIERÍA EMPRESARIAL, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA MECATRÓNICA, INGENIERÍA DE MINAS, INGENIERÍA DE SISTEMAS",website:""},{abbr:"BUAD",name:"BENEMÉRITA UNIVERSIDAD AUTÓNOMA DE PUEBLA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD, MEDICINA HUMANA, ENFERMERÍA",website:"https://www.buap.mx/"},{abbr:"UPAD",name:"UNIVERSIDAD POPULAR AUTÓNOMA DEL ESTADO DE PUEBLA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, MEDICINA HUMANA, ODONTOLOGÍA",website:"https://www.upaep.mx/"},{abbr:"UTDV",name:"UNIVERSIDAD TECNOLÓGICA DEL VALLE DE MEZQUITAL",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"INGENIERÍA AMBIENTAL, INGENIERÍA INDUSTRIAL, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS",website:"https://www.utvm.edu.mx/"},{abbr:"UQR",name:"UNIVERSIDAD QUINTANA ROO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES",website:"https://www.uqroo.mx/"},{abbr:"UADS",name:"UNIVERSIDAD AUTÓNOMA DE SINALOA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PRACTICAS / PASANTIAS",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD, MEDICINA HUMANA",website:"https://www.uas.edu.mx/"},{abbr:"UADB",name:"UNIVERSIDAD AUTÓNOMA DE BAJA CALIFORNIA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, MEDICINA HUMANA, ODONTOLOGÍA",website:"https://www.uabc.mx/"},{abbr:"UDM",name:"UNIVERSIDAD DE MONTERREY",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS, ROTACIONES MEDICAS",carrerasUC:"MEDICINA HUMANA, ODONTOLOGÍA, ENFERMERÍA, TECNOLOGÍA MÉDICA:LABORATORIO CLÍNICO Y ANATOMÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN",website:"https://www.udem.edu.mx/es"},{abbr:"UTDS",name:"UNIVERSIDAD TECNOLÓGICA DE SAN JUAN DEL RÍO (UTSJR)",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"INGENIERÍA AMBIENTAL, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING",website:"https://www.utsjr.edu.mx/"},{abbr:"UDLS",name:"UNIVERSIDAD DE LA SALLE BAJÍO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION",carrerasUC:"DERECHO, ARQUITECTURA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, CONTABILIDAD, MEDICINA HUMANA, ODONTOLOGÍA",website:"https://www.lasallebajio.edu.mx/"},{abbr:"UADQ",name:"UNIVERSIDAD AUTÓNOMA DE QUERÉTANO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD, MEDICINA HUMANA, ENFERMERÍA",website:"https://www.uaq.mx/"},{abbr:"UTDM",name:"UNIVERSIDAD TENCOLÓGICA DE MINERAL DE LA REFORMA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"INGENIERÍA AMBIENTAL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y RECURSOS HUMANOS, ADMINISTRACIÓN",website:"https://www.utmir.edu.mx/"},{abbr:"UPDA",name:"UNIVERSIDAD POLITÉCNICA DE ATLAUTLA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"INGENIERÍA CIVIL, INGENIERÍA ELECTRÓNICA, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN",website:"https://upa.edomex.gob.mx/"},{abbr:"UTDM",name:"UNIVERSIDAD TECNOLOGICA DEL MAR DEL ESTADO DE GUERRERO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS",carrerasUC:"INGENIERÍA AMBIENTAL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN",website:"https://utmarguerrero.edu.mx/"},{abbr:"ITYD",name:"INSTITUTO TECNOLÓGICO Y DE ESTUDIOS SUPERIORES DE MONTERREY",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"ROTACIONES MEDICAS",carrerasUC:"PSICOLOGÍA, MEDICINA HUMANA, ENFERMERÍA",website:"https://tec.mx/es"}]},{flagCode:"cr",name:"Costa Rica",programs:"Intercambio estudiantil",institutions:1,cities:"",photo:"https://images.unsplash.com/photo-1534430480872-3498386e7856?w=900&q=80",universities:[{abbr:"UIDL",name:"UNIVERSIDAD INTERNACIONAL DE LAS AMÉRICAS",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, CIENCIAS DE LA COMUNICACION, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, ADMINISTRACIÓN Y RECURSOS HUMANOS, CONTABILIDAD, ECONOMÍA, MEDICINA HUMANA, ODONTOLOGÍA",website:"https://uia.ac.cr/"}]},{flagCode:"py",name:"Paraguay",programs:"Intercambio estudiantil",institutions:5,cities:"",photo:"https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=900&q=80",universities:[{abbr:"UA",name:"UNIVERSIDAD AMERICANA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, MEDICINA HUMANA, ODONTOLOGÍA, INGENIERÍA INDUSTRIAL, PSICOLOGÍA, ADMINISTRACIÓN",website:"https://www.americana.edu.py/"},{abbr:"UDN",name:"UNIVERSIDAD DEL NORTE",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL, ROTACIONES MEDICAS",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA EMPRESARIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD, MEDICINA HUMANA, ODONTOLOGÍA, ENFERMERÍA, PSICOLOGÍA, CONTABILIDAD, ADMINISTRACIÓN",website:"https://uninorte.edu.py/"},{abbr:"PTI",name:"PARQUE TECNOLÓGICO ITAPU",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL, PASANTIAS DE INVESTIGACION, MISIONES ACADEMICAS",carrerasUC:"ARQUITECTURA, INGENIERÍA AMBIENTAL, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA MECATRÓNICA, INGENIERÍA DE SISTEMAS",website:"https://www.pti.org.py/"},{abbr:"US",name:"UNIVERSIDAD SUDAMERICANA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS, ROTACIONES MEDICAS",carrerasUC:"MEDICINA HUMANA, ODONTOLOGÍA, ENFERMERÍA, TECNOLOGÍA MÉDICA:LABORATORIO CLÍNICO Y ANATOMÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN, RADIOLOGÍA, ADMINISTRACIÓN",website:"https://www.unisud.edu.py/"},{abbr:"USLU",name:"UNIVERSIDAD SAN LORENZO (USAL)",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS",carrerasUC:"DERECHO, ARQUITECTURA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD, ENFERMERÍA, CONTABILIDAD, ADMINISTRACIÓN",website:"https://unisal.edu.py/"}]},{flagCode:"es",name:"España",programs:"Intercambio estudiantil",institutions:16,cities:"",photo:"/images/España.jpg",universities:[{abbr:"UDV",name:"UNIVERSIDAD DE VALLADOLID",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"",carrerasUC:"ARQUITECTURA, INGENIERÍA ELÉCTRICA, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ECONOMÍA, MEDICINA HUMANA, ENFERMERÍA",website:"https://www.uva.es/export/sites/uva/"},{abbr:"E",name:"Euroespes",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS",carrerasUC:"MEDICINA HUMANA, ENFERMERÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN",website:"https://euroespes.com/"},{abbr:"UPDO",name:"UNIVERSIDAD PABLO DE OLAVIDE",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"",carrerasUC:"DERECHO, PSICOLOGÍA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD, MEDICINA HUMANA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN",website:"https://www.upo.es/portal/impe/web/portada/index.html"},{abbr:"URIV",name:"UNIVERSITAT ROVIRA I VIRGILI",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, INGENIERÍA ELÉCTRICA, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD, MEDICINA HUMANA",website:"https://www.urv.cat/ca/"},{abbr:"UADC",name:"UNIVERSIDAD ABIERTA DE CATALUÑA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL VIRTUAL",carrerasUC:"DERECHO, PSICOLOGÍA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y GESTIÓN PÚBLICA",website:"https://www.uoc.edu/es"},{abbr:"FUDB",name:"FUNDACIÓN UNIVERSITARIA DEL BAGES-UMANRESA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"",carrerasUC:"ADMINISTRACIÓN Y FINANZAS, MEDICINA HUMANA, ENFERMERÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN",website:"https://www.umanresa.cat/"},{abbr:"ISDE",name:"INSTITUTOS SUPERIORES DE ESTUDIOS PSICOLÓGICOS - ISEP",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"PSICOLOGÍA, ADMINISTRACIÓN Y RECURSOS HUMANOS, CONTABILIDAD",website:"https://www.isep.es/"},{abbr:"EBSA",name:"EUNCENT BUSINESS SCHOOL - Afiliada a la U. Politécnica de Cataluña",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"",carrerasUC:"CIENCIAS DE LA COMUNICACION, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING",website:"https://www.euncet.com/es/"},{abbr:"UPDM",name:"UNIVERSIDAD POLITECNICA DE MADRID",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS",carrerasUC:"ARQUITECTURA, INGENIERÍA AMBIENTAL, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS",website:"https://www.upm.es/"},{abbr:"UAXE",name:"UNIVERSIDAD ALFONSO X EL SABIO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS",carrerasUC:"DERECHO, PSICOLOGÍA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, MEDICINA HUMANA, ODONTOLOGÍA, PSICOLOGÍA, ADMINISTRACIÓN",website:"https://www.uax.com/"},{abbr:"UCSP",name:"UNIVERSIDAD CEU SAN PABLO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS",carrerasUC:"DERECHO, CIENCIAS DE LA COMUNICACION, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD, ECONOMÍA, MEDICINA HUMANA, ODONTOLOGÍA, ENFERMERÍA, ADMINISTRACIÓN Y GESTIÓN PÚBLICA, INGENIERÍA INDUSTRIAL, PSICOLOGÍA, CONTABILIDAD, ADMINISTRACIÓN",website:"https://www.uspceu.com/"},{abbr:"UE",name:"UNIVERSIDAD EXTREMADURA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, MEDICINA HUMANA, ENFERMERÍA",website:"https://www.unex.es/"},{abbr:"T",name:"TECNOCAMPUS",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PRACTICAS / PASANTIAS",carrerasUC:"CIENCIAS DE LA COMUNICACION, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ENFERMERÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN, INGENIERÍA INDUSTRIAL, ADMINISTRACIÓN",website:"https://www.tecnocampus.cat/"},{abbr:"IEDP",name:"INSTITUTO EUROPEO DE PSICOLOGÍA POSITIVA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL VIRTUAL",carrerasUC:"PSICOLOGÍA",website:"https://www.iepp.es/"},{abbr:"GC",name:"GRUPO CTO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PRACTICAS / PASANTIAS, ROTACIONES MEDICAS",carrerasUC:"ENFERMERÍA",website:"https://grupocto.es/"},{abbr:"UDS",name:"UNIVERSIDAD DE SEVILLA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"DERECHO, ADMINISTRACIÓN Y FINANZAS, ECONOMÍA",website:"https://www.us.es/"}]},{flagCode:"us",name:"Estados Unidos De Norteamérica",programs:"Intercambio estudiantil",institutions:2,cities:"",photo:"/images/gatestowermit.jpg",universities:[{abbr:"CUFC",name:"Continental University Florida - CUF",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"PSICOLOGÍA, ARQUITECTURA, INGENIERÍA AMBIENTAL, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA ELECTRÓNICA, INGENIERÍA EMPRESARIAL, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA MECATRÓNICA, INGENIERÍA DE MINAS, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, ADMINISTRACIÓN Y RECURSOS HUMANOS, CONTABILIDAD, ECONOMÍA, ADMINISTRACIÓN Y GESTIÓN PÚBLICA, INGENIERÍA INDUSTRIAL, PSICOLOGÍA, CONTABILIDAD, ADMINISTRACIÓN",website:""},{abbr:"CSCT",name:"CHILDREN´S CRISIS TREATMENT CENTER",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS",carrerasUC:"PSICOLOGÍA",website:"https://www.cctckids.org/"}]},{flagCode:"ni",name:"Nicaragua",programs:"Intercambio estudiantil",institutions:2,cities:"",photo:"https://images.unsplash.com/photo-1597945161640-9366e6587f58?w=900&q=80",universities:[{abbr:"UNDI",name:"UNIVERSIDAD NACIONAL DE INGENIERÍA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS",website:"https://www.uni.edu.ni/#/"},{abbr:"UAU",name:"UNIVERSIDAD AMERICANA UAM",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, INTERCAMBIO SEMESTRAL VIRTUAL, DOBLE TITULACION, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS",carrerasUC:"DERECHO",website:"https://www.uam.edu.ni/"}]},{flagCode:"pt",name:"Portugal",programs:"Intercambio estudiantil",institutions:1,cities:"",photo:"https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&q=80",universities:[{abbr:"IPDB",name:"INSTITUTO POLITÉCNICO DE BRAGANÇA",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL",carrerasUC:"ARQUITECTURA, INGENIERÍA AMBIENTAL, INGENIERÍA CIVIL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y RECURSOS HUMANOS, ENFERMERÍA, TECNOLOGÍA MÉDICA:LABORATORIO CLÍNICO Y ANATOMÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN",website:"https://ipb.pt/pt"}]},{flagCode:"ca",name:"Canadá",programs:"Intercambio estudiantil",institutions:1,cities:"",photo:"/images/Canada.jpg",universities:[{abbr:"CAL",name:"CÉGEP ANDRÉ-LAURENDEAU",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS",carrerasUC:"ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y RECURSOS HUMANOS, CONTABILIDAD, ECONOMÍA, ENFERMERÍA, ADMINISTRACIÓN",website:"https://claurendeau.qc.ca/"}]},{flagCode:"be",name:"Belgica",programs:"Intercambio estudiantil",institutions:1,cities:"",photo:"https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=900&q=80",universities:[{abbr:"UCLL",name:"UNIVERSITY COLLEGES LEUVEN - LIMBURG",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"",carrerasUC:"INGENIERÍA ELECTRÓNICA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, ADMINISTRACIÓN Y RECURSOS HUMANOS, ODONTOLOGÍA, ENFERMERÍA, ADMINISTRACIÓN",website:"https://www.ucll.be/en"}]},{flagCode:"ec",name:"Ecuador",programs:"Intercambio estudiantil",institutions:2,cities:"",photo:"/images/Ecuador.jpg",universities:[{abbr:"ESPD",name:"ESCUELA SUPERIOR POLITÉCNICA DEL LITORAL (ESPOL)",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS",carrerasUC:"INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ECONOMÍA, INGENIERÍA INDUSTRIAL, ADMINISTRACIÓN",website:"https://www.espol.edu.ec/es"},{abbr:"UNDC",name:"UNIVERSIDAD NACIONAL DE CHIMBORAZO",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, MEDICINA HUMANA, ODONTOLOGÍA",website:"https://www.unach.edu.ec/"}]},{flagCode:"de",name:"Alemania",programs:"Intercambio estudiantil",institutions:1,cities:"",photo:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=900&q=80",universities:[{abbr:"UOTB",name:"UNIVERSITY OF TECHNOLOGY , BUSINESS AN DESING KONSTANZ",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"INTERCAMBIO SEMESTRAL PRESENCIAL, PASANTIAS DE INVESTIGACION, PRACTICAS / PASANTIAS",carrerasUC:"DERECHO, ARQUITECTURA, INGENIERÍA AMBIENTAL, INGENIERÍA CIVIL, INGENIERÍA ELÉCTRICA, INGENIERÍA EMPRESARIAL, INGENIERÍA INDUSTRIAL, INGENIERÍA MECÁNICA, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, ADMINISTRACIÓN Y MARKETING, ADMINISTRACIÓN Y NEGOCIOS INTERNACIONALES, ADMINISTRACIÓN Y RECURSOS HUMANOS, CONTABILIDAD, ECONOMÍA, TECNOLOGÍA MÉDICA:LABORATORIO CLÍNICO Y ANATOMÍA, INGENIERÍA INDUSTRIAL, PSICOLOGÍA, CONTABILIDAD, ADMINISTRACIÓN",website:"https://www.htwg-konstanz.de/"}]},{flagCode:"it",name:"Italia",programs:"Intercambio estudiantil",institutions:1,cities:"",photo:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900&q=80",universities:[{abbr:"TNRC",name:"THE NATIONAL RESEARCH COUNCIL OF ITALY",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"PASANTIAS DE INVESTIGACION",carrerasUC:"INGENIERÍA AMBIENTAL, INGENIERÍA ELÉCTRICA, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, MEDICINA HUMANA, TECNOLOGÍA MÉDICA:LABORATORIO CLÍNICO Y ANATOMÍA, TECNOLOGÍA MÉDICA: TERAPIA FÍSICA Y REHABILITACIÓN",website:"https://www.cnr.it/"}]},{flagCode:"za",name:"Sudafrica",programs:"Intercambio estudiantil",institutions:1,cities:"",photo:"https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=900&q=80",universities:[{abbr:"UOJ",name:"UNIVERSITY OF JOHANNESBURG",city:"",modality:"Presencial",requirements:"",deadline:"",vacancies:0,convenioType:"PASANTIAS DE INVESTIGACION",carrerasUC:"DERECHO, PSICOLOGÍA, ARQUITECTURA, INGENIERÍA CIVIL, INGENIERÍA INDUSTRIAL, INGENIERÍA DE SISTEMAS, ADMINISTRACIÓN Y FINANZAS, CONTABILIDAD",website:"https://www.uj.ac.za/"}]}],II=Object.fromEntries(Kn.map((i,e)=>[i.flagCode,e])),bo=new Set(["US","MX","CO","AR","UY","CL","ES","DE","BR","ZA","CN","GT","PY","NI","PT","BE","EC","IT","CR","CA"]);let Lr=null;function us(){return Lr||(Lr=new(window.AudioContext||window.webkitAudioContext)),Lr.state==="suspended"&&Lr.resume(),Lr}let qc=0;function gI(){const i=Date.now();if(i-qc<90)return;qc=i;const e=us(),t=e.currentTime,n=2600+Math.random()*900,r=e.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.2,t+.016),r.gain.exponentialRampToValueAtTime(.001,t+.22),r.connect(e.destination),[[1,.65],[1.5,.25],[3,.1]].forEach(([a,s])=>{const o=e.createOscillator(),l=e.createGain();o.type="sine",o.frequency.value=n*a,l.gain.value=s,o.connect(l),l.connect(r),o.start(t),o.stop(t+.26)})}let wo=null,pn=null;function SI(){const i=us();if(pn)return;const e=i.currentTime,t=i.sampleRate,n=Math.floor(t*3),r=i.createBuffer(1,n,t),a=r.getChannelData(0);let s=0,o=0,l=0;for(let d=0;d<n;d++){const h=Math.random()*2-1;s=.99886*s+h*.0555179,o=.99332*o+h*.0750759,l=.969*l+h*.153852,a[d]=(s+o+l+h*.016898)*.11}const c=i.createBufferSource();c.buffer=r,c.loop=!0;const u=i.createBiquadFilter();u.type="bandpass",u.frequency.value=260,u.Q.value=.75;const f=i.createBiquadFilter();f.type="highpass",f.frequency.value=150,pn=i.createGain(),pn.gain.setValueAtTime(0,e),pn.gain.linearRampToValueAtTime(.13,e+.38),c.connect(u),u.connect(f),f.connect(pn),pn.connect(i.destination),c.start(),wo=c}function TI(){if(!pn)return;const e=us().currentTime;pn.gain.cancelScheduledValues(e),pn.gain.setValueAtTime(pn.gain.value,e),pn.gain.linearRampToValueAtTime(0,e+.55);const t=wo;wo=null,pn=null,setTimeout(()=>{try{t.stop()}catch{}},700)}function NI(){const i=us(),e=i.currentTime,t=490+Math.random()*50,n=i.createGain();n.gain.setValueAtTime(.28,e),n.gain.exponentialRampToValueAtTime(.001,e+.62),n.connect(i.destination),[[1,.42,0],[1.259,.28,.05],[1.498,.18,.1],[2,.12,.15]].forEach(([r,a,s])=>{const o=i.createOscillator(),l=i.createGain();o.type="sine",o.frequency.setValueAtTime(t*r,e+s),o.frequency.exponentialRampToValueAtTime(t*r*.982,e+.58),l.gain.value=a,o.connect(l),l.connect(n),o.start(e+s),o.stop(e+.68)})}const MI={4:"AF",8:"AL",12:"DZ",20:"AD",24:"AO",28:"AG",32:"AR",36:"AU",40:"AT",31:"AZ",44:"BS",48:"BH",50:"BD",52:"BB",56:"BE",84:"BZ",204:"BJ",64:"BT",68:"BO",70:"BA",72:"BW",76:"BR",96:"BN",100:"BG",854:"BF",108:"BI",132:"CV",116:"KH",120:"CM",124:"CA",140:"CF",148:"TD",152:"CL",156:"CN",170:"CO",174:"KM",178:"CG",180:"CD",188:"CR",384:"CI",191:"HR",192:"CU",196:"CY",203:"CZ",208:"DK",262:"DJ",212:"DM",214:"DO",218:"EC",818:"EG",222:"SV",226:"GQ",232:"ER",233:"EE",231:"ET",242:"FJ",246:"FI",250:"FR",266:"GA",270:"GM",268:"GE",276:"DE",288:"GH",300:"GR",308:"GD",320:"GT",324:"GN",624:"GW",328:"GY",332:"HT",340:"HN",348:"HU",356:"IN",360:"ID",364:"IR",368:"IQ",372:"IE",376:"IL",380:"IT",388:"JM",392:"JP",400:"JO",398:"KZ",404:"KE",296:"KI",408:"KP",410:"KR",414:"KW",417:"KG",418:"LA",422:"LB",426:"LS",430:"LR",434:"LY",428:"LV",440:"LT",442:"LU",807:"MK",450:"MG",454:"MW",458:"MY",462:"MV",466:"ML",470:"MT",584:"MH",478:"MR",480:"MU",484:"MX",583:"FM",498:"MD",492:"MC",496:"MN",499:"ME",504:"MA",508:"MZ",516:"NA",520:"NR",524:"NP",528:"NL",554:"NZ",558:"NI",562:"NE",566:"NG",578:"NO",512:"OM",586:"PK",585:"PW",275:"PS",591:"PA",598:"PG",600:"PY",604:"PE",608:"PH",616:"PL",620:"PT",634:"QA",642:"RO",643:"RU",646:"RW",659:"KN",662:"LC",670:"VC",882:"WS",674:"SM",678:"ST",682:"SA",686:"SN",688:"RS",690:"SC",694:"SL",703:"SK",705:"SI",90:"SB",706:"SO",710:"ZA",724:"ES",144:"LK",728:"SS",736:"SD",740:"SR",748:"SZ",752:"SE",756:"CH",760:"SY",762:"TJ",834:"TZ",764:"TH",626:"TL",768:"TG",776:"TO",780:"TT",788:"TN",792:"TR",795:"TM",798:"TV",800:"UG",804:"UA",784:"AE",826:"GB",840:"US",858:"UY",860:"UZ",548:"VU",862:"VE",704:"VN",887:"YE",894:"ZM",716:"ZW",352:"IS",438:"LI",492:"MC",336:"VA",674:"SM"},CI=`
  varying vec3 vNormal;
  varying vec3 vViewDir;
  varying vec3 vLocalNorm;
  void main() {
    vNormal    = normalize(normalMatrix * normal);
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    vViewDir   = normalize(-mvPos.xyz);
    vLocalNorm = normalize(position);
    gl_Position = projectionMatrix * mvPos;
  }
`,RI=`
  uniform vec3  glowColor;
  uniform float glowPower;
  uniform float opacity;
  varying vec3 vNormal;
  varying vec3 vViewDir;
  varying vec3 vLocalNorm;
  void main() {
    if (abs(vLocalNorm.y) > 0.85) discard;
    float poleMask = 1.0 - smoothstep(0.58, 0.97, abs(vLocalNorm.y));
    float rim = 1.0 - max(dot(vNormal, vViewDir), 0.0);
    rim = pow(rim, glowPower) * poleMask;
    gl_FragColor = vec4(glowColor * rim, rim * opacity);
  }
`,vI=`
  varying vec3 vNormal;
  varying vec2 vUv;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vUv     = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,xI=`
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
    vec3  halfDir  = normalize(lightDir + vec3(0.0, 0.0, 1.0));

    // Ocean
    vec3 ocean = deepColor;
    ocean = mix(ocean, midColor, fullDay * 0.18);
    ocean += edgeColor * rimPow3 * 0.60;
    // Specular reflection on ocean surface (Atlantic highlight)
    float oceanSpec = pow(max(dot(vNormal, halfDir), 0.0), 120.0) * daySide * 0.90;
    ocean += vec3(0.50, 0.30, 0.75) * oceanSpec;

    // Land
    vec3 land = mix(landDark, landColor, daySide);
    land      = mix(land, landBright, fullDay * 0.72);
    land     *= (1.0 - rimPow2 * 0.70);
    float landSpec = pow(max(dot(vNormal, halfDir), 0.0), 38.0) * daySide;
    land += vec3(0.38, 0.28, 0.52) * landSpec;

    float isLand      = texture2D(landMask,      vUv).r;
    float isHighlight = texture2D(highlightMask, vUv).r;

    vec3 color = mix(ocean, land, isLand);
    float hl = isHighlight * isLand;
    vec3  hlColor = vec3(0.82, 0.38, 1.0);
    color = mix(color, hlColor, hl * 0.92);
    color += hlColor * hl * 0.30;

    // Side darkening – gradual vignette on lateral edges to reinforce sphere shape
    color *= 1.0 - pow(rim, 1.8) * 0.42;

    // Bottom shadow – 25% darkening on the lower hemisphere (view-space Y)
    float bottomShadow = smoothstep(0.18, -0.52, vNormal.y) * 0.25;
    color *= 1.0 - bottomShadow;

    gl_FragColor = vec4(color, 1.0);
  }
`,Cn=document.getElementById("globe-canvas"),Ii=new PE({canvas:Cn,antialias:!0,alpha:!0});Ii.setPixelRatio(Math.min(window.devicePixelRatio,2));Ii.setSize(window.innerWidth,window.innerHeight);Ii.setClearColor(0,0);Ii.toneMapping=4;Ii.toneMappingExposure=1.3;const ds=new Ef,sn=new hn(45,window.innerWidth/window.innerHeight,.1,100);function rl(){const i=window.innerWidth/window.innerHeight;return i<.6?{z:11.5,y:0}:i<.85?{z:8.5,y:0}:i<1.2?{z:7.5,y:0}:{z:6.5,y:0}}function Nd(){const i=window.innerWidth,{z:e}=rl(),t=e*Math.tan(22.5*Math.PI/180);return-(((window.innerWidth>=900?200:0)+10)*(2*t)/i)}function Md(){const{z:i,y:e}=rl(),t=Nd(),n=window.innerWidth>=900?.7:0;sn.position.set(t+n,e,i),sn.lookAt(0,0,0)}Md();function yI(){const e=new Float32Array(10500),t=new Float32Array(3500*3);for(let r=0;r<3500;r++){const a=Math.random()*Math.PI*2,s=Math.acos(2*Math.random()-1),o=28+Math.random()*32;e[r*3]=o*Math.sin(s)*Math.cos(a),e[r*3+1]=o*Math.sin(s)*Math.sin(a),e[r*3+2]=o*Math.cos(s),Math.random()<.65?(t[r*3]=.9+Math.random()*.1,t[r*3+1]=.9+Math.random()*.1,t[r*3+2]=1):(t[r*3]=.6+Math.random()*.4,t[r*3+1]=.3+Math.random()*.4,t[r*3+2]=1)}const n=new Zt;return n.setAttribute("position",new En(e,3)),n.setAttribute("color",new En(t,3)),new vf(n,new su({size:.1,vertexColors:!0,transparent:!0,opacity:.9}))}const Cd=yI();ds.add(Cd);function DI(){const t=document.createElement("canvas");t.width=1024,t.height=512;const n=t.getContext("2d");n.fillStyle="#000000",n.fillRect(0,0,1024,512);const r=n.createRadialGradient(1024*.82,512*.55,0,1024*.82,512*.55,1024*.28);r.addColorStop(0,"rgba(16,12,22,0.3)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,512);const a=n.createRadialGradient(1024*.18,512*.55,0,1024*.18,512*.55,1024*.28);a.addColorStop(0,"rgba(23,14,36,0.3)"),a.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=a,n.fillRect(0,0,1024,512);for(let s=0;s<6;s++){const o=Math.random()*1024,l=Math.random()*512,c=30+Math.random()*90,u=n.createRadialGradient(o,l,0,o,l,c);u.addColorStop(0,`rgba(${60+Math.random()*60},${Math.random()*10},${130+Math.random()*80},0.18)`),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.fillRect(0,0,1024,512)}return new Bo(t)}const Rd=new _n(new na(72,42),new Go({map:DI(),transparent:!0,depthWrite:!1}));Rd.position.z=-18;ds.add(Rd);const $r=2,rn=new Or;ds.add(rn);const vd=new ru(new Uint8Array([0,0,0,255]),1,1);vd.needsUpdate=!0;const Ir=document.createElement("canvas");Ir.width=2048;Ir.height=1024;const vi=Ir.getContext("2d"),xd=new Bo(Ir),yd=new In({vertexShader:vI,fragmentShader:xI,uniforms:{deepColor:{value:new Ge(1718896)},midColor:{value:new Ge(2644128)},edgeColor:{value:new Ge(2644128)},landColor:{value:new Ge(10972336)},landBright:{value:new Ge(14865656)},landDark:{value:new Ge(2629202)},landMask:{value:vd},highlightMask:{value:xd}}}),Dd=new _n(new rs($r,64,64),yd);rn.add(Dd);rn.add(new _n(new rs($r+.1,64,64),new In({vertexShader:CI,fragmentShader:RI,uniforms:{glowColor:{value:new Ge(11150062)},glowPower:{value:1.5},opacity:{value:.22}},transparent:!0,blending:2,depthWrite:!1,side:0})));let to=null,jr=null;function bd(){return to||(to=fetch("/data/countries-50m.json").then(i=>i.json()).then(i=>{const e=AI(i,i.objects.countries);return e.features.forEach(t=>{t.properties=t.properties||{},t.properties.ISO_A2=MI[parseInt(t.id,10)]||"-99"}),jr=e,e})),to}function wd(i,e,t){const n=(90-i)*(Math.PI/180),r=(e+180)*(Math.PI/180);return new G(-t*Math.sin(n)*Math.cos(r),t*Math.cos(n),t*Math.sin(n)*Math.sin(r))}async function bI(i,e,t){try{const n=await bd(),r=e+.007,a=[];n.features.forEach(c=>{const u=c.geometry;if(!u)return;(u.type==="Polygon"?[u.coordinates]:u.type==="MultiPolygon"?u.coordinates:[]).forEach(d=>d.forEach(h=>{const E=h.map(([p])=>p);if(Math.max(...E)-Math.min(...E)>350)return;const A=h.map(([p,m])=>wd(m,p,r));for(let p=0;p<A.length-1;p++){const m=A[p],g=A[p+1],T=Math.max(1,Math.ceil(m.angleTo(g)/.04));for(let N=0;N<T;N++){const v=m.clone().lerp(g,N/T).normalize().multiplyScalar(r),C=m.clone().lerp(g,(N+1)/T).normalize().multiplyScalar(r);a.push(v.x,v.y,v.z,C.x,C.y,C.z)}}}))});const s=new Zt;s.setAttribute("position",new Bt(a,3));const o=new ao({color:14721279,transparent:!0,opacity:0,blending:2,depthWrite:!1}),l=new ao({color:16765183,transparent:!0,opacity:0,blending:2,depthWrite:!1});i.add(new Gl(s,o)),i.add(new Gl(s.clone(),l)),Dt.to(o,{opacity:t*.5,duration:1.8,delay:.4}),Dt.to(l,{opacity:t*.15,duration:1.8,delay:.6})}catch(n){console.warn("GeoJSON error",n)}}bI(rn,$r,1);async function wI(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const n=t.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,2048,1024),n.fillStyle="#fff",(await bd()).features.forEach(s=>{const o=s.geometry;if(!o)return;(o.type==="Polygon"?[o.coordinates]:o.type==="MultiPolygon"?o.coordinates:[]).forEach(c=>{n.beginPath(),c.forEach(u=>{const f=u.map(([d])=>d);Math.max(...f)-Math.min(...f)>350||(u.forEach(([d,h],E)=>{const A=(d+180)/360*2048,p=(90-h)/180*1024;E===0?n.moveTo(A,p):n.lineTo(A,p)}),n.closePath())}),n.fill("evenodd")})});const a=new Bo(t);return a.anisotropy=Ii.capabilities.getMaxAnisotropy(),a}wI().then(i=>{yd.uniforms.landMask.value=i,i.needsUpdate=!0}).catch(i=>console.warn("Texture error",i));function LI(i){const e=i.clone().normalize(),t=Math.acos(Math.max(-1,Math.min(1,e.y)));let r=Math.atan2(e.z,-e.x)*(180/Math.PI)-180;return r<-180&&(r+=360),{lat:90-t*(180/Math.PI),lon:r}}function OI(i,e){return jr?jr.features.find(t=>t.geometry&&fI(t,[e,i]))??null:null}function Ld(i){return jr?jr.features.find(e=>e.properties?.ISO_A2===i)??null:null}function Gi(i){const e=Ir.width,t=Ir.height;if(vi.clearRect(0,0,e,t),i){const n=i.geometry,r=n.type==="Polygon"?[n.coordinates]:n.type==="MultiPolygon"?n.coordinates:[];vi.fillStyle="#fff",r.forEach(a=>{vi.beginPath(),a.forEach(s=>{s.forEach(([o,l],c)=>{const u=(o+180)/360*e,f=(90-l)/180*t;c===0?vi.moveTo(u,f):vi.lineTo(u,f)}),vi.closePath()}),vi.fill("evenodd")})}xd.needsUpdate=!0}function PI(i,e){const t=i.clone();e.localToWorld(t);const n=sn.position.clone().normalize(),a=t.clone().normalize().dot(n),s=a>.05,o=t.clone().project(sn);return{x:(o.x*.5+.5)*window.innerWidth,y:(-o.y*.5+.5)*window.innerHeight,visible:s,dot:a}}const Od=Object.values(_I.reduce((i,e)=>(i[e.flagCode]||(i[e.flagCode]={flagCode:e.flagCode,country:e.country,lat:0,lon:0,n:0,unis:[],delay:e.labelDelay}),i[e.flagCode].lat+=e.lat,i[e.flagCode].lon+=e.lon,i[e.flagCode].n++,i[e.flagCode].unis.push(e),e.labelDelay<i[e.flagCode].delay&&(i[e.flagCode].delay=e.labelDelay),i),{})).map(i=>({...i,lat:i.lat/i.n,lon:i.lon/i.n})),Zc=document.getElementById("flag-nodes"),fs=document.getElementById("lines-svg");Od.forEach(i=>{const e=document.createElement("div");e.className="flag-node",e.dataset.fc=i.flagCode;const t=document.createElement("img");t.src=`https://flagcdn.com/w80/${i.flagCode}.png`,t.alt=i.country,t.onerror=()=>{e.style.background="linear-gradient(135deg,#4a0095,#9930ee)",e.textContent=i.flagCode.toUpperCase(),e.style.fontSize="8px",e.style.fontWeight="700",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center"},e.appendChild(t),Zc.appendChild(e),e.addEventListener("mouseenter",()=>{Kc(i.flagCode,!0),gI()}),e.addEventListener("mouseleave",()=>Kc(i.flagCode,!1)),e.addEventListener("click",()=>ns(i.flagCode));const n=document.createElement("div");n.className="flag-dot",n.dataset.fc=i.flagCode,Zc.appendChild(n);const r=document.createElementNS("http://www.w3.org/2000/svg","line");r.setAttribute("data-fc",i.flagCode),r.setAttribute("class","flag-connector-line"),fs.appendChild(r)});function Kc(i,e){const t=document.querySelector(`.flag-node[data-fc="${i}"]`);if(t&&(t.style.transform=e?"translate(-50%,-50%) scale(1.25)":"translate(-50%,-50%)"),e){const n=Ud[i];n&&(Pn=n,Gi(Ld(n)),Cn.classList.add("country-hover"))}else Gi(null),Cn.classList.remove("country-hover"),Pn=null}let Mn=-1,Ui=!0;const al='<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><rect x="5" y="3" width="5" height="18" rx="2"/><rect x="14" y="3" width="5" height="18" rx="2"/></svg>',Pd='<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><polygon points="6,3 20,12 6,21"/></svg>',Lo={US:"us",MX:"mx",CO:"co",CL:"cl",CR:"cr",CA:"ca",ES:"es",DE:"de",BR:"br",AR:"ar",UY:"uy",ZA:"za",CN:"cn",GT:"gt",PY:"py",NI:"ni",PT:"pt",BE:"be",EC:"ec",IT:"it"},Ud=Object.fromEntries(Object.entries(Lo).map(([i,e])=>[e,i]));function ns(i){const e=II[i];e!==void 0&&(Mn=e,NI(),ll(e),document.getElementById("country-panel").classList.add("visible"),document.getElementById("country-panel").setAttribute("aria-hidden","false"),document.getElementById("panel-backdrop").classList.add("visible"),Dt.to(gr,{speed:0,duration:.5,ease:"power2.in"}),Ui=!1,Ht.innerHTML=Pd,Ht.classList.remove("is-playing"),Ht.setAttribute("aria-label","Reanudar rotación"))}function sl(){document.getElementById("country-panel").classList.remove("visible"),document.getElementById("country-panel").setAttribute("aria-hidden","true"),document.getElementById("panel-backdrop").classList.remove("visible"),Mn=-1,Pn=null,Gi(null),Cn.classList.remove("country-hover"),Ui&&Dt.to(gr,{speed:.08,duration:1.8,ease:"power2.out"})}function $c(){Ui||(Ui=!0,Dt.to(gr,{speed:.08,duration:1.8,ease:"power2.out"}),Ht.innerHTML=al,Ht.classList.add("is-playing"),Ht.setAttribute("aria-label","Pausar rotación"))}function ol(i){if(Mn===-1)return;Mn=(Mn+i+Kn.length)%Kn.length,ll(Mn);const e=Kn[Mn].flagCode,t=Ud[e];t&&(Pn=t,Gi(Ld(t)))}function UI(i){const e=document.getElementById("cp-accordion");e.innerHTML="",i.forEach(t=>{const n=t.modality.includes("Virtual")&&t.modality.includes("Presencial"),r=n?"mixta":t.modality.includes("Virtual")?"virtual":"presencial",a=n?"Presencial / Virtual":t.modality.includes("Virtual")?"Virtual":"Presencial",s=document.createElement("div");s.className="acc-item",s.innerHTML=`
      <div class="acc-header">
        <div class="acc-abbr">${t.abbr}</div>
        <div class="acc-info">
          <div class="acc-name">${t.name}</div>
      
        </div>
        <div class="acc-chevron">&#8250;</div>
      </div>
      <div class="acc-body">
        <div class="acc-content">
          <div class="acc-badges">
            <span class="acc-row-label">Modalidad</span>
            <span class="acc-badge ${r}">${a}</span>
          </div>
          ${t.convenioType?`<div class="acc-row">
            <span class="acc-row-label">Tipo de convenio</span>
            <span class="acc-row-value">${t.convenioType}</span>
          </div>`:""}
          ${t.carrerasUC?`<div class="acc-row">
            <span class="acc-row-label">Carreras UC</span>
            <span class="acc-row-value">${t.carrerasUC}</span>
          </div>`:""}
        
          ${t.requirements?`<div class="acc-row">
            <span class="acc-row-label">Requisitos</span>
            <span class="acc-row-value">${t.requirements}</span>
          </div>`:""}
          ${t.deadline?`<div class="acc-row">
            <span class="acc-row-label">Fecha límite</span>
            <span class="acc-row-value">${t.deadline}</span>
          </div>`:""}
         
          <a href="${t.website||"#"}" target="_blank" rel="noopener noreferrer" class="acc-btn">Más Información</a>
        </div>
      </div>
    `,s.querySelector(".acc-header").addEventListener("click",()=>{const o=s.classList.contains("open");e.querySelectorAll(".acc-item.open").forEach(l=>l.classList.remove("open")),o||s.classList.add("open")}),e.appendChild(s)})}function ll(i){const e=Kn[i],t=document.querySelector(".cp-body");t&&(t.scrollTop=0),document.getElementById("cp-photo").src=e.photo,document.getElementById("cp-photo").alt=e.name,document.getElementById("cp-flag").src=`https://flagcdn.com/80x60/${e.flagCode}.png`,document.getElementById("cp-flag").alt=e.name,document.getElementById("cp-country-name").textContent=e.name,UI(e.universities),document.getElementById("cp-pager-count").textContent=`${i+1} / ${Kn.length}`;const n=document.getElementById("cp-dots");n.innerHTML="",Kn.forEach((r,a)=>{const s=document.createElement("div");s.className="cp-dot"+(a===i?" active":""),s.addEventListener("click",()=>{Mn=a,ll(a)}),n.appendChild(s)})}document.getElementById("cp-close").addEventListener("click",sl);document.getElementById("cp-prev").addEventListener("click",()=>ol(-1));document.getElementById("cp-next").addEventListener("click",()=>ol(1));document.getElementById("panel-backdrop").addEventListener("click",sl);function Fd(i){Mn===-1?ns(Kn[i<0?Kn.length-1:0].flagCode):ol(i)}document.getElementById("fn-prev").addEventListener("click",()=>Fd(-1));document.getElementById("fn-next").addEventListener("click",()=>Fd(1));const Ht=document.getElementById("globe-toggle");Ht.innerHTML=al;Ht.addEventListener("click",()=>{Ui=!Ui,Ui?(Mn===-1&&Dt.to(gr,{speed:.08,duration:1.2,ease:"power2.out"}),Ht.innerHTML=al,Ht.classList.add("is-playing"),Ht.setAttribute("aria-label","Pausar rotación")):(Dt.to(gr,{speed:0,duration:.5,ease:"power2.in"}),Ht.innerHTML=Pd,Ht.classList.remove("is-playing"),Ht.setAttribute("aria-label","Reanudar rotación"))});let Oo=0,Po=0,Wn={xMin:0,xMax:9999,yMin:0,yMax:9999};function Gd(){const i=window.innerWidth,e=window.innerHeight,t=16,n=document.getElementById("left-hero"),r=document.getElementById("hint-panel"),a=document.getElementById("inscripciones-card"),s=n?n.getBoundingClientRect().right+t:t,o=r&&r.offsetParent?r.getBoundingClientRect().left-t:i,l=a&&a.offsetParent?a.getBoundingClientRect().left-t:i;Wn={xMin:s,xMax:Math.min(o,l),yMin:t,yMax:e-t}}function FI(){const i=window.innerWidth;return i<480?38:i<768?44:40}function Bd(i){const e=i.x-Oo,t=i.y-Po,n=Math.sqrt(e*e+t*t)||1;return{nx:e/n,ny:t/n}}function GI(i){const{nx:e,ny:t}=Bd(i),n=FI(),r=i.dot??1,a=Math.max(0,Math.min(1,(r-.05)/.5)),s=a*a*(3-2*a),o=18+(n-18)*s,l=-t,c=e,u=(1-s)*.98,f=e*(1-u)+l*u,d=t*(1-u)+c*u,h=Math.sqrt(f*f+d*d)||1;return{x:i.x+f/h*o,y:i.y+d/h*o}}function BI(){const i=new G(0,0,0).project(sn);if(Oo=(i.x*.5+.5)*window.innerWidth,Po=(-i.y*.5+.5)*window.innerHeight,zd)if(window.innerWidth>900){const l=sn.position.length(),c=Math.asin(Math.min(.999,$r/l)),u=Math.tan(c)/Math.tan(sn.fov*Math.PI/360)*(window.innerHeight/2);oi.style.left=Oo+"px",oi.style.top=Po+u+16+"px",oi.style.bottom="auto",oi.style.transform="translateX(-50%)"}else oi.style.left="",oi.style.top="",oi.style.bottom="",oi.style.transform="";const e=110,t=26,n=5,r=46,a=e+n,s=Od.map(l=>{const c=PI(wd(l.lat,l.lon,$r+.05),rn),u=c.visible,f=GI(c),d=Math.max(Wn.xMin+e,Math.min(Wn.xMax-e,f.x)),h=Math.max(Wn.yMin+t,Math.min(Wn.yMax-t,f.y));return{group:l,flagPos:c,show:u,ax:d,ay:h}}),o=s.filter(l=>l.show);for(let l=0;l<12;l++){let c=!1;for(let u=0;u<o.length;u++)for(let f=u+1;f<o.length;f++){const d=o[u],h=o[f],E=(d.group.n-1)*r/2+t,A=(h.group.n-1)*r/2+t,p=E+A+n,m=Math.abs(d.ax-h.ax),g=Math.abs(d.ay-h.ay);if(m>=a*2||g>=p*2)continue;const T=(d.ay+h.ay)/2;d.ay<=h.ay?(d.ay=T-p,h.ay=T+p):(d.ay=T+p,h.ay=T-p),d.ay=Math.max(Wn.yMin+E,Math.min(Wn.yMax-E,d.ay)),h.ay=Math.max(Wn.yMin+A,Math.min(Wn.yMax-A,h.ay)),c=!0}if(!c)break}s.forEach(({group:l,flagPos:c,show:u})=>{const d=window.innerWidth>900?52:8,{nx:h,ny:E}=Bd(c),A=c.x+h*d,p=c.y+E*d,m=document.querySelector(`.flag-node[data-fc="${l.flagCode}"]`);m&&(m.style.left=A+"px",m.style.top=p+"px",m.style.opacity=u?"1":"0",m.style.visibility=u?"visible":"hidden",m.style.pointerEvents=u?"auto":"none");const g=document.querySelector(`.flag-dot[data-fc="${l.flagCode}"]`);g&&(g.style.left=c.x+"px",g.style.top=c.y+"px",g.style.opacity=u?"1":"0",g.style.visibility=u?"visible":"hidden");const T=fs.querySelector(`line[data-fc="${l.flagCode}"]`);T&&(T.setAttribute("x1",c.x),T.setAttribute("y1",c.y),T.setAttribute("x2",A-h*30),T.setAttribute("y2",p-E*30),T.style.opacity=u?"1":"0",T.style.visibility=u?"visible":"hidden")})}const{z:Vd}=rl(),VI=Nd();rn.scale.set(.001,.001,.001);Dt.set(["#left-hero","#hint-panel"],{y:-16});Dt.set(["#inscripciones-card","#footer-nav"],{y:16});Dt.to("#globe-canvas",{opacity:1,duration:1.8,ease:"power2.inOut",delay:.1});Dt.to(rn.scale,{x:1,y:1,z:1,duration:2.2,ease:"expo.out",delay:.25});sn.position.set(VI,0,Vd+5);requestAnimationFrame(()=>{Gd(),Dt.to(sn.position,{z:Vd,duration:3.2,ease:"power2.inOut",delay:.1})});Dt.to("#left-hero",{opacity:1,y:0,duration:.9,ease:"power2.out",delay:1.6});Dt.to("#hint-panel",{opacity:1,y:0,duration:.8,ease:"power2.out",delay:1.9});Dt.to("#footer-nav",{opacity:1,y:0,duration:.7,ease:"power2.out",delay:2.1});Dt.to("#inscripciones-card",{opacity:1,y:0,duration:.7,ease:"power2.out",delay:2.2});const jc=new Gf,no=new Ke;let Pn=null;function HI(i,e){no.x=i/window.innerWidth*2-1,no.y=e/window.innerHeight*-2+1,jc.setFromCamera(no,sn);const t=jc.intersectObject(Dd);return t.length>0?t[0]:null}function Hd(i,e){const t=HI(i,e);if(!t)return null;const n=rn.worldToLocal(t.point.clone()),{lat:r,lon:a}=LI(n);return OI(r,a)}let ra=!1,Va={x:0,y:0},Gr=null;Cn.addEventListener("pointerdown",i=>{i.isPrimary&&(ra=!0,Va={x:i.clientX,y:i.clientY},Gr={x:i.clientX,y:i.clientY},Cn.setPointerCapture(i.pointerId))});window.addEventListener("pointerup",i=>{i.isPrimary&&(ra=!1,TI())});window.addEventListener("pointermove",i=>{if(!i.isPrimary||!ra)return;const e=i.clientX-Va.x,t=i.clientY-Va.y;rn.rotation.y+=e*.005,rn.rotation.x+=t*.005,rn.rotation.x=Math.max(-.6,Math.min(.6,rn.rotation.x)),Va={x:i.clientX,y:i.clientY},SI()});Cn.addEventListener("pointermove",i=>{if(!i.isPrimary||ra)return;const e=Hd(i.clientX,i.clientY),t=e?.properties?.ISO_A2??null;t!==Pn&&(Pn=t,t&&bo.has(t)?(Gi(e),Cn.classList.add("country-hover")):(Gi(null),Cn.classList.remove("country-hover")))});Cn.addEventListener("pointerup",i=>{if(!i.isPrimary||!Gr)return;const e=i.clientX-Gr.x,t=i.clientY-Gr.y;if(Gr=null,Math.sqrt(e*e+t*t)>8)return;if(Mn!==-1){sl(),$c();return}if(Pn&&bo.has(Pn)){const a=Lo[Pn];if(a){ns(a);return}}const n=Hd(i.clientX,i.clientY),r=n?.properties?.ISO_A2??null;if(r&&bo.has(r)){Pn=r,Gi(n),Cn.classList.add("country-hover");const a=Lo[r];if(a){ns(a);return}}$c()});const oi=document.getElementById("footer-nav");let zd=!1;setTimeout(()=>{zd=!0},3200);const Jc=new Bf,gr={speed:.08};function kd(){requestAnimationFrame(kd);const i=Jc.getDelta();Jc.elapsedTime,ra||(rn.rotation.y-=i*gr.speed),Cd.rotation.y+=i*.004,BI(),Ii.render(ds,sn)}kd();window.addEventListener("resize",()=>{sn.aspect=window.innerWidth/window.innerHeight,sn.updateProjectionMatrix(),Ii.setSize(window.innerWidth,window.innerHeight),fs.setAttribute("viewBox",`0 0 ${window.innerWidth} ${window.innerHeight}`),requestAnimationFrame(()=>{Md(),Gd()})});fs.setAttribute("viewBox",`0 0 ${window.innerWidth} ${window.innerHeight}`);
