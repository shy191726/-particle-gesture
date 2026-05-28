(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zl="171",i0=0,Ju=1,r0=2,cd=1,s0=2,fi=3,Hi=0,sn=1,di=2,ki=0,Kr=1,eo=2,Qu=3,th=4,a0=5,rr=100,o0=101,c0=102,l0=103,u0=104,h0=200,f0=201,d0=202,p0=203,Dc=204,Ic=205,m0=206,g0=207,_0=208,v0=209,x0=210,M0=211,S0=212,E0=213,y0=214,Uc=0,Nc=1,Fc=2,es=3,Oc=4,Bc=5,kc=6,zc=7,ld=0,T0=1,A0=2,zi=0,b0=1,w0=2,R0=3,C0=4,P0=5,L0=6,D0=7,ud=300,ns=301,is=302,Gc=303,Hc=304,po=306,Vc=1e3,ar=1001,Wc=1002,Hn=1003,I0=1004,ma=1005,$n=1006,Vo=1007,or=1008,Mi=1009,hd=1010,fd=1011,js=1012,Gl=1013,_r=1014,gi=1015,Qs=1016,Hl=1017,Vl=1018,rs=1020,dd=35902,pd=1021,md=1022,Gn=1023,gd=1024,_d=1025,$r=1026,ss=1027,vd=1028,Wl=1029,xd=1030,Xl=1031,ql=1033,qa=33776,Ya=33777,ja=33778,Ka=33779,Xc=35840,qc=35841,Yc=35842,jc=35843,Kc=36196,$c=37492,Zc=37496,Jc=37808,Qc=37809,tl=37810,el=37811,nl=37812,il=37813,rl=37814,sl=37815,al=37816,ol=37817,cl=37818,ll=37819,ul=37820,hl=37821,$a=36492,fl=36494,dl=36495,Md=36283,pl=36284,ml=36285,gl=36286,U0=3200,N0=3201,F0=0,O0=1,Fi="",Pn="srgb",as="srgb-linear",no="linear",re="srgb",wr=7680,eh=519,B0=512,k0=513,z0=514,Sd=515,G0=516,H0=517,V0=518,W0=519,nh=35044,ih="300 es",_i=2e3,io=2001;class xs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wo=Math.PI/180,_l=180/Math.PI;function ta(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qe[e&255]+qe[e>>8&255]+qe[e>>16&255]+qe[e>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[n&63|128]+qe[n>>8&255]+"-"+qe[n>>16&255]+qe[n>>24&255]+qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]).toLowerCase()}function Gt(e,t,n){return Math.max(t,Math.min(n,e))}function X0(e,t){return(e%t+t)%t}function Xo(e,t,n){return(1-n)*e+n*t}function Us(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function en(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class ce{constructor(t=0,n=0){ce.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Gt(this.x,t.x,n.x),this.y=Gt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Gt(this.x,t,n),this.y=Gt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,n,i,r,s,a,o,c,l){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,o,c,l)}set(t,n,i,r,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],m=i[5],_=i[8],x=r[0],p=r[3],h=r[6],A=r[1],T=r[4],y=r[7],I=r[2],L=r[5],w=r[8];return s[0]=a*x+o*A+c*I,s[3]=a*p+o*T+c*L,s[6]=a*h+o*y+c*w,s[1]=l*x+u*A+f*I,s[4]=l*p+u*T+f*L,s[7]=l*h+u*y+f*w,s[2]=d*x+m*A+_*I,s[5]=d*p+m*T+_*L,s[8]=d*h+m*y+_*w,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return n*a*u-n*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,d=o*c-u*s,m=l*s-a*c,_=n*f+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=f*x,t[1]=(r*l-u*i)*x,t[2]=(o*i-r*a)*x,t[3]=d*x,t[4]=(u*n-r*c)*x,t[5]=(r*s-o*n)*x,t[6]=m*x,t[7]=(i*c-l*n)*x,t[8]=(a*n-i*s)*x,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(qo.makeScale(t,n)),this}rotate(t){return this.premultiply(qo.makeRotation(-t)),this}translate(t,n){return this.premultiply(qo.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qo=new Ft;function Ed(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ro(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function q0(){const e=ro("canvas");return e.style.display="block",e}const rh={};function Xr(e){e in rh||(rh[e]=!0,console.warn(e))}function Y0(e,t,n){return new Promise(function(i,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function j0(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function K0(e){const t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const sh=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $0(){const e={enabled:!0,workingColorSpace:as,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===re&&(r.r=xi(r.r),r.g=xi(r.g),r.b=xi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(r.r=Zr(r.r),r.g=Zr(r.g),r.b=Zr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fi?no:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[as]:{primaries:t,whitePoint:i,transfer:no,toXYZ:sh,fromXYZ:ah,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:t,whitePoint:i,transfer:re,toXYZ:sh,fromXYZ:ah,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),e}const Zt=$0();function xi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Zr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Rr;class Z0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Rr===void 0&&(Rr=ro("canvas")),Rr.width=t.width,Rr.height=t.height;const i=Rr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Rr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=ro("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xi(n[i]/255)*255):n[i]=xi(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let J0=0;class yd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=ta(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Yo(r[a].image)):s.push(Yo(r[a]))}else s=Yo(r);i.url=s}return n||(t.images[this.uuid]=i),i}}function Yo(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Z0.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Q0=0;class an extends xs{constructor(t=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=ar,r=ar,s=$n,a=or,o=Gn,c=Mi,l=an.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=ta(),this.name="",this.source=new yd(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ud)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vc:t.x=t.x-Math.floor(t.x);break;case ar:t.x=t.x<0?0:1;break;case Wc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vc:t.y=t.y-Math.floor(t.y);break;case ar:t.y=t.y<0?0:1;break;case Wc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=ud;an.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,n=0,i=0,r=1){we.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],_=c[9],x=c[2],p=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(l+1)/2,y=(m+1)/2,I=(h+1)/2,L=(u+d)/4,w=(f+x)/4,U=(_+p)/4;return T>y&&T>I?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=L/i,s=w/i):y>I?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=L/r,s=U/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=w/s,r=U/s),this.set(i,r,s,n),this}let A=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(p-_)/A,this.y=(f-x)/A,this.z=(d-u)/A,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Gt(this.x,t.x,n.x),this.y=Gt(this.y,t.y,n.y),this.z=Gt(this.z,t.z,n.z),this.w=Gt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Gt(this.x,t,n),this.y=Gt(this.y,t,n),this.z=Gt(this.z,t,n),this.w=Gt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tg extends xs{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new we(0,0,t,n),this.scissorTest=!1,this.viewport=new we(0,0,t,n);const r={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new yd(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends tg{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Td extends an{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class eg extends an{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],_=s[a+2],x=s[a+3];if(o===0){t[n+0]=c,t[n+1]=l,t[n+2]=u,t[n+3]=f;return}if(o===1){t[n+0]=d,t[n+1]=m,t[n+2]=_,t[n+3]=x;return}if(f!==x||c!==d||l!==m||u!==_){let p=1-o;const h=c*d+l*m+u*_+f*x,A=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const I=Math.sqrt(T),L=Math.atan2(I,h*A);p=Math.sin(p*L)/I,o=Math.sin(o*L)/I}const y=o*A;if(c=c*p+d*y,l=l*p+m*y,u=u*p+_*y,f=f*p+x*y,p===1-o){const I=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=I,l*=I,u*=I,f*=I}}t[n]=c,t[n+1]=l,t[n+2]=u,t[n+3]=f}static multiplyQuaternionsFlat(t,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return t[n]=o*_+u*f+c*m-l*d,t[n+1]=c*_+u*d+l*f-o*m,t[n+2]=l*_+u*m+o*d-c*f,t[n+3]=u*_-o*f-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),d=c(i/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*m*_,this._y=l*m*f-d*u*_,this._z=l*u*_+d*m*f,this._w=l*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+l*m*_,this._y=l*m*f-d*u*_,this._z=l*u*_-d*m*f,this._w=l*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-l*m*_,this._y=l*m*f+d*u*_,this._z=l*u*_+d*m*f,this._w=l*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-l*m*_,this._y=l*m*f+d*u*_,this._z=l*u*_-d*m*f,this._w=l*u*f+d*m*_;break;case"YZX":this._x=d*u*f+l*m*_,this._y=l*m*f+d*u*_,this._z=l*u*_-d*m*f,this._w=l*u*f-d*m*_;break;case"XZY":this._x=d*u*f-l*m*_,this._y=l*m*f-d*u*_,this._z=l*u*_+d*m*f,this._w=l*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],u=n[6],f=n[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,s=t._z,a=t._w,o=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-n)*u)/l,d=Math.sin(n*u)/l;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,n=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(oh.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(oh.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Gt(this.x,t.x,n.x),this.y=Gt(this.y,t.y,n.y),this.z=Gt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Gt(this.x,t,n),this.y=Gt(this.y,t,n),this.z=Gt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return jo.copy(this).projectOnVector(t),this.sub(jo)}reflect(t){return this.sub(jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jo=new B,oh=new ea;class na{constructor(t=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fn):Fn.fromBufferAttribute(s,a),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),_a.subVectors(this.max,Ns),Cr.subVectors(t.a,Ns),Pr.subVectors(t.b,Ns),Lr.subVectors(t.c,Ns),wi.subVectors(Pr,Cr),Ri.subVectors(Lr,Pr),Ki.subVectors(Cr,Lr);let n=[0,-wi.z,wi.y,0,-Ri.z,Ri.y,0,-Ki.z,Ki.y,wi.z,0,-wi.x,Ri.z,0,-Ri.x,Ki.z,0,-Ki.x,-wi.y,wi.x,0,-Ri.y,Ri.x,0,-Ki.y,Ki.x,0];return!Ko(n,Cr,Pr,Lr,_a)||(n=[1,0,0,0,1,0,0,0,1],!Ko(n,Cr,Pr,Lr,_a))?!1:(va.crossVectors(wi,Ri),n=[va.x,va.y,va.z],Ko(n,Cr,Pr,Lr,_a))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const oi=[new B,new B,new B,new B,new B,new B,new B,new B],Fn=new B,ga=new na,Cr=new B,Pr=new B,Lr=new B,wi=new B,Ri=new B,Ki=new B,Ns=new B,_a=new B,va=new B,$i=new B;function Ko(e,t,n,i,r){for(let s=0,a=e.length-3;s<=a;s+=3){$i.fromArray(e,s);const o=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),c=t.dot($i),l=n.dot($i),u=i.dot($i);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ng=new na,Fs=new B,$o=new B;class mo{constructor(t=new B,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):ng.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);const n=Fs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Fs,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add($o)),this.expandByPoint(Fs.copy(t.center).sub($o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new B,Zo=new B,xa=new B,Ci=new B,Jo=new B,Ma=new B,Qo=new B;class Ad{constructor(t=new B,n=new B(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ci.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,n),ci.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){Zo.copy(t).add(n).multiplyScalar(.5),xa.copy(n).sub(t).normalize(),Ci.copy(this.origin).sub(Zo);const s=t.distanceTo(n)*.5,a=-this.direction.dot(xa),o=Ci.dot(this.direction),c=-Ci.dot(xa),l=Ci.lengthSq(),u=Math.abs(1-a*a);let f,d,m,_;if(u>0)if(f=a*c-o,d=a*o-c,_=s*u,f>=0)if(d>=-_)if(d<=_){const x=1/u;f*=x,d*=x,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zo).addScaledVector(xa,d),m}intersectSphere(t,n){ci.subVectors(t.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,n,i,r,s){Jo.subVectors(n,t),Ma.subVectors(i,t),Qo.crossVectors(Jo,Ma);let a=this.direction.dot(Qo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,t);const c=o*this.direction.dot(Ma.crossVectors(Ci,Ma));if(c<0)return null;const l=o*this.direction.dot(Jo.cross(Ci));if(l<0||c+l>a)return null;const u=-o*Ci.dot(Qo);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,n,i,r,s,a,o,c,l,u,f,d,m,_,x,p){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,o,c,l,u,f,d,m,_,x,p)}set(t,n,i,r,s,a,o,c,l,u,f,d,m,_,x,p){const h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=_,h[11]=x,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/Dr.setFromMatrixColumn(t,0).length(),s=1/Dr.setFromMatrixColumn(t,1).length(),a=1/Dr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*u,m=a*f,_=o*u,x=o*f;n[0]=c*u,n[4]=-c*f,n[8]=l,n[1]=m+_*l,n[5]=d-x*l,n[9]=-o*c,n[2]=x-d*l,n[6]=_+m*l,n[10]=a*c}else if(t.order==="YXZ"){const d=c*u,m=c*f,_=l*u,x=l*f;n[0]=d+x*o,n[4]=_*o-m,n[8]=a*l,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=m*o-_,n[6]=x+d*o,n[10]=a*c}else if(t.order==="ZXY"){const d=c*u,m=c*f,_=l*u,x=l*f;n[0]=d-x*o,n[4]=-a*f,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*u,n[9]=x-d*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(t.order==="ZYX"){const d=a*u,m=a*f,_=o*u,x=o*f;n[0]=c*u,n[4]=_*l-m,n[8]=d*l+x,n[1]=c*f,n[5]=x*l+d,n[9]=m*l-_,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(t.order==="YZX"){const d=a*c,m=a*l,_=o*c,x=o*l;n[0]=c*u,n[4]=x-d*f,n[8]=_*f+m,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-l*u,n[6]=m*f+_,n[10]=d-x*f}else if(t.order==="XZY"){const d=a*c,m=a*l,_=o*c,x=o*l;n[0]=c*u,n[4]=-f,n[8]=l*u,n[1]=d*f+x,n[5]=a*u,n[9]=m*f-_,n[2]=_*f-m,n[6]=o*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ig,t,rg)}lookAt(t,n,i){const r=this.elements;return un.subVectors(t,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Pi.crossVectors(i,un),Pi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Pi.crossVectors(i,un)),Pi.normalize(),Sa.crossVectors(un,Pi),r[0]=Pi.x,r[4]=Sa.x,r[8]=un.x,r[1]=Pi.y,r[5]=Sa.y,r[9]=un.y,r[2]=Pi.z,r[6]=Sa.z,r[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],m=i[13],_=i[2],x=i[6],p=i[10],h=i[14],A=i[3],T=i[7],y=i[11],I=i[15],L=r[0],w=r[4],U=r[8],S=r[12],M=r[1],R=r[5],V=r[9],k=r[13],j=r[2],K=r[6],X=r[10],Z=r[14],G=r[3],rt=r[7],ht=r[11],yt=r[15];return s[0]=a*L+o*M+c*j+l*G,s[4]=a*w+o*R+c*K+l*rt,s[8]=a*U+o*V+c*X+l*ht,s[12]=a*S+o*k+c*Z+l*yt,s[1]=u*L+f*M+d*j+m*G,s[5]=u*w+f*R+d*K+m*rt,s[9]=u*U+f*V+d*X+m*ht,s[13]=u*S+f*k+d*Z+m*yt,s[2]=_*L+x*M+p*j+h*G,s[6]=_*w+x*R+p*K+h*rt,s[10]=_*U+x*V+p*X+h*ht,s[14]=_*S+x*k+p*Z+h*yt,s[3]=A*L+T*M+y*j+I*G,s[7]=A*w+T*R+y*K+I*rt,s[11]=A*U+T*V+y*X+I*ht,s[15]=A*S+T*k+y*Z+I*yt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],d=t[10],m=t[14],_=t[3],x=t[7],p=t[11],h=t[15];return _*(+s*c*f-r*l*f-s*o*d+i*l*d+r*o*m-i*c*m)+x*(+n*c*m-n*l*d+s*a*d-r*a*m+r*l*u-s*c*u)+p*(+n*l*f-n*o*m-s*a*f+i*a*m+s*o*u-i*l*u)+h*(-r*o*u-n*c*f+n*o*d+r*a*f-i*a*d+i*c*u)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],m=t[11],_=t[12],x=t[13],p=t[14],h=t[15],A=f*p*l-x*d*l+x*c*m-o*p*m-f*c*h+o*d*h,T=_*d*l-u*p*l-_*c*m+a*p*m+u*c*h-a*d*h,y=u*x*l-_*f*l+_*o*m-a*x*m-u*o*h+a*f*h,I=_*f*c-u*x*c-_*o*d+a*x*d+u*o*p-a*f*p,L=n*A+i*T+r*y+s*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/L;return t[0]=A*w,t[1]=(x*d*s-f*p*s-x*r*m+i*p*m+f*r*h-i*d*h)*w,t[2]=(o*p*s-x*c*s+x*r*l-i*p*l-o*r*h+i*c*h)*w,t[3]=(f*c*s-o*d*s-f*r*l+i*d*l+o*r*m-i*c*m)*w,t[4]=T*w,t[5]=(u*p*s-_*d*s+_*r*m-n*p*m-u*r*h+n*d*h)*w,t[6]=(_*c*s-a*p*s-_*r*l+n*p*l+a*r*h-n*c*h)*w,t[7]=(a*d*s-u*c*s+u*r*l-n*d*l-a*r*m+n*c*m)*w,t[8]=y*w,t[9]=(_*f*s-u*x*s-_*i*m+n*x*m+u*i*h-n*f*h)*w,t[10]=(a*x*s-_*o*s+_*i*l-n*x*l-a*i*h+n*o*h)*w,t[11]=(u*o*s-a*f*s-u*i*l+n*f*l+a*i*m-n*o*m)*w,t[12]=I*w,t[13]=(u*x*r-_*f*r+_*i*d-n*x*d-u*i*p+n*f*p)*w,t[14]=(_*o*r-a*x*r-_*i*c+n*x*c+a*i*p-n*o*p)*w,t[15]=(a*f*r-u*o*r+u*i*c-n*f*c-a*i*d+n*o*d)*w,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,u=a+a,f=o+o,d=s*l,m=s*u,_=s*f,x=a*u,p=a*f,h=o*f,A=c*l,T=c*u,y=c*f,I=i.x,L=i.y,w=i.z;return r[0]=(1-(x+h))*I,r[1]=(m+y)*I,r[2]=(_-T)*I,r[3]=0,r[4]=(m-y)*L,r[5]=(1-(d+h))*L,r[6]=(p+A)*L,r[7]=0,r[8]=(_+T)*w,r[9]=(p-A)*w,r[10]=(1-(d+x))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let s=Dr.set(r[0],r[1],r[2]).length();const a=Dr.set(r[4],r[5],r[6]).length(),o=Dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],On.copy(this);const l=1/s,u=1/a,f=1/o;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,n.setFromRotationMatrix(On),i.x=s,i.y=a,i.z=o,this}makePerspective(t,n,i,r,s,a,o=_i){const c=this.elements,l=2*s/(n-t),u=2*s/(i-r),f=(n+t)/(n-t),d=(i+r)/(i-r);let m,_;if(o===_i)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===io)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,r,s,a,o=_i){const c=this.elements,l=1/(n-t),u=1/(i-r),f=1/(a-s),d=(n+t)*l,m=(i+r)*u;let _,x;if(o===_i)_=(a+s)*f,x=-2*f;else if(o===io)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Dr=new B,On=new Re,ig=new B(0,0,0),rg=new B(1,1,1),Pi=new B,Sa=new B,un=new B,ch=new Re,lh=new ea;class Si{constructor(t=0,n=0,i=0,r=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return ch.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ch,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return lh.setFromEuler(this),this.setFromQuaternion(lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class bd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sg=0;const uh=new B,Ir=new ea,li=new Re,Ea=new B,Os=new B,ag=new B,og=new ea,hh=new B(1,0,0),fh=new B(0,1,0),dh=new B(0,0,1),ph={type:"added"},cg={type:"removed"},Ur={type:"childadded",child:null},tc={type:"childremoved",child:null};class on extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const t=new B,n=new Si,i=new ea,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Re},normalMatrix:{value:new Ft}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ir.setFromAxisAngle(t,n),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(t,n){return Ir.setFromAxisAngle(t,n),this.quaternion.premultiply(Ir),this}rotateX(t){return this.rotateOnAxis(hh,t)}rotateY(t){return this.rotateOnAxis(fh,t)}rotateZ(t){return this.rotateOnAxis(dh,t)}translateOnAxis(t,n){return uh.copy(t).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(hh,t)}translateY(t){return this.translateOnAxis(fh,t)}translateZ(t){return this.translateOnAxis(dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Ea.copy(t):Ea.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Os,Ea,this.up):li.lookAt(Ea,Os,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(li),this.quaternion.premultiply(Ir.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ph),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(cg),tc.child=t,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ph),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,ag),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,og,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(n){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}on.DEFAULT_UP=new B(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new B,ui=new B,ec=new B,hi=new B,Nr=new B,Fr=new B,mh=new B,nc=new B,ic=new B,rc=new B,sc=new we,ac=new we,oc=new we;class zn{constructor(t=new B,n=new B,i=new B){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),Bn.subVectors(t,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){Bn.subVectors(r,n),ui.subVectors(i,n),ec.subVectors(t,n);const a=Bn.dot(Bn),o=Bn.dot(ui),c=Bn.dot(ec),l=ui.dot(ui),u=ui.dot(ec),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-o*u)*d,_=(a*u-o*c)*d;return s.set(1-m-_,_,m)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,n,i,r,s,a,o,c){return this.getBarycoord(t,n,i,r,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,hi.x),c.addScaledVector(a,hi.y),c.addScaledVector(o,hi.z),c)}static getInterpolatedAttribute(t,n,i,r,s,a){return sc.setScalar(0),ac.setScalar(0),oc.setScalar(0),sc.fromBufferAttribute(t,n),ac.fromBufferAttribute(t,i),oc.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(sc,s.x),a.addScaledVector(ac,s.y),a.addScaledVector(oc,s.z),a}static isFrontFacing(t,n,i,r){return Bn.subVectors(i,n),ui.subVectors(t,n),Bn.cross(ui).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Bn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return zn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,s){return zn.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,s=this.c;let a,o;Nr.subVectors(r,i),Fr.subVectors(s,i),nc.subVectors(t,i);const c=Nr.dot(nc),l=Fr.dot(nc);if(c<=0&&l<=0)return n.copy(i);ic.subVectors(t,r);const u=Nr.dot(ic),f=Fr.dot(ic);if(u>=0&&f<=u)return n.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(Nr,a);rc.subVectors(t,s);const m=Nr.dot(rc),_=Fr.dot(rc);if(_>=0&&m<=_)return n.copy(s);const x=m*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),n.copy(i).addScaledVector(Fr,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return mh.subVectors(s,r),o=(f-u)/(f-u+(m-_)),n.copy(r).addScaledVector(mh,o);const h=1/(p+x+d);return a=x*h,o=d*h,n.copy(i).addScaledVector(Nr,a).addScaledVector(Fr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},ya={h:0,s:0,l:0};function cc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class ie{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,n),this}setRGB(t,n,i,r=Zt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Zt.toWorkingColorSpace(this,r),this}setHSL(t,n,i,r=Zt.workingColorSpace){if(t=X0(t,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=cc(a,s,t+1/3),this.g=cc(a,s,t),this.b=cc(a,s,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,n=Pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Pn){const i=wd[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=Zr(t.r),this.g=Zr(t.g),this.b=Zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return Zt.fromWorkingColorSpace(Ye.copy(this),t),Math.round(Gt(Ye.r*255,0,255))*65536+Math.round(Gt(Ye.g*255,0,255))*256+Math.round(Gt(Ye.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ye.copy(this),n);const i=Ye.r,r=Ye.g,s=Ye.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,n=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ye.copy(this),n),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Pn){Zt.fromWorkingColorSpace(Ye.copy(this),t);const n=Ye.r,i=Ye.g,r=Ye.b;return t!==Pn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+n,Li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Li),t.getHSL(ya);const i=Xo(Li.h,ya.h,n),r=Xo(Li.s,ya.s,n),s=Xo(Li.l,ya.l,n);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new ie;ie.NAMES=wd;let lg=0;class ia extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=Kr,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Ic,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Dc&&(i.blendSrc=this.blendSrc),this.blendDst!==Ic&&(i.blendDst=this.blendDst),this.blendEquation!==rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rd extends ia{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new B,Ta=new ce;class Ae{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=nh,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ta.fromBufferAttribute(this,n),Ta.applyMatrix3(t),this.setXY(n,Ta.x,Ta.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pe.fromBufferAttribute(this,n),Pe.applyMatrix3(t),this.setXYZ(n,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Pe.fromBufferAttribute(this,n),Pe.applyMatrix4(t),this.setXYZ(n,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Pe.fromBufferAttribute(this,n),Pe.applyNormalMatrix(t),this.setXYZ(n,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Pe.fromBufferAttribute(this,n),Pe.transformDirection(t),this.setXYZ(n,Pe.x,Pe.y,Pe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Us(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=en(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Us(n,this.array)),n}setX(t,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Us(n,this.array)),n}setY(t,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Us(n,this.array)),n}setZ(t,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Us(n,this.array)),n}setW(t,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nh&&(t.usage=this.usage),t}}class Cd extends Ae{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Pd extends Ae{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class ur extends Ae{constructor(t,n,i){super(new Float32Array(t),n,i)}}let ug=0;const bn=new Re,lc=new on,Or=new B,hn=new na,Bs=new na,ze=new B;class Qn extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ed(t)?Pd:Cd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ft().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,n,i){return bn.makeTranslation(t,n,i),this.applyMatrix4(bn),this}scale(t,n,i){return bn.makeScale(t,n,i),this.applyMatrix4(bn),this}lookAt(t){return lc.lookAt(t),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ur(i,3))}else{const i=Math.min(t.length,n.count);for(let r=0;r<i;r++){const s=t[r];n.setXYZ(r,s.x,s.y,s.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(hn.min,Bs.min),hn.expandByPoint(ze),ze.addVectors(hn.max,Bs.max),hn.expandByPoint(ze)):(hn.expandByPoint(Bs.min),hn.expandByPoint(Bs.max))}hn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)ze.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ze));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ze.fromBufferAttribute(o,l),c&&(Or.fromBufferAttribute(t,l),ze.add(Or)),r=Math.max(r,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<i.count;U++)o[U]=new B,c[U]=new B;const l=new B,u=new B,f=new B,d=new ce,m=new ce,_=new ce,x=new B,p=new B;function h(U,S,M){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,U),m.fromBufferAttribute(s,S),_.fromBufferAttribute(s,M),u.sub(l),f.sub(l),m.sub(d),_.sub(d);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(R),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(R),o[U].add(x),o[S].add(x),o[M].add(x),c[U].add(p),c[S].add(p),c[M].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let U=0,S=A.length;U<S;++U){const M=A[U],R=M.start,V=M.count;for(let k=R,j=R+V;k<j;k+=3)h(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const T=new B,y=new B,I=new B,L=new B;function w(U){I.fromBufferAttribute(r,U),L.copy(I);const S=o[U];T.copy(S),T.sub(I.multiplyScalar(I.dot(S))).normalize(),y.crossVectors(L,S);const R=y.dot(c[U])<0?-1:1;a.setXYZW(U,T.x,T.y,T.z,R)}for(let U=0,S=A.length;U<S;++U){const M=A[U],R=M.start,V=M.count;for(let k=R,j=R+V;k<j;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ae(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,a=new B,o=new B,c=new B,l=new B,u=new B,f=new B;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)ze.fromBufferAttribute(t,n),ze.normalize(),t.setXYZ(n,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let m=0,_=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*u;for(let h=0;h<u;h++)d[_++]=l[m++]}return new Ae(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],m=t(d,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];u.push(m.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gh=new Re,Zi=new Ad,Aa=new mo,_h=new B,ba=new B,wa=new B,Ra=new B,uc=new B,Ca=new B,vh=new B,Pa=new B;class vi extends on{constructor(t=new Qn,n=new Rd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Ca.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(uc.fromBufferAttribute(f,t),a?Ca.addScaledVector(uc,u):Ca.addScaledVector(uc.sub(n),u))}n.add(Ca)}return n}raycast(t,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),Zi.copy(t.ray).recast(t.near),!(Aa.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Aa,_h)===null||Zi.origin.distanceToSquared(_h)>(t.far-t.near)**2))&&(gh.copy(s).invert(),Zi.copy(t.ray).applyMatrix4(gh),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Zi)))}_computeIntersections(t,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const p=d[_],h=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=A,I=T;y<I;y+=3){const L=o.getX(y),w=o.getX(y+1),U=o.getX(y+2);r=La(this,h,t,i,l,u,f,L,w,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=_,h=x;p<h;p+=3){const A=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);r=La(this,a,t,i,l,u,f,A,T,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const p=d[_],h=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let y=A,I=T;y<I;y+=3){const L=y,w=y+1,U=y+2;r=La(this,h,t,i,l,u,f,L,w,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=_,h=x;p<h;p+=3){const A=p,T=p+1,y=p+2;r=La(this,a,t,i,l,u,f,A,T,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function hg(e,t,n,i,r,s,a,o){let c;if(t.side===sn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===Hi,o),c===null)return null;Pa.copy(o),Pa.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(Pa);return l<n.near||l>n.far?null:{distance:l,point:Pa.clone(),object:e}}function La(e,t,n,i,r,s,a,o,c,l){e.getVertexPosition(o,ba),e.getVertexPosition(c,wa),e.getVertexPosition(l,Ra);const u=hg(e,t,n,i,ba,wa,Ra,vh);if(u){const f=new B;zn.getBarycoord(vh,ba,wa,Ra,f),r&&(u.uv=zn.getInterpolatedAttribute(r,o,c,l,f,new ce)),s&&(u.uv1=zn.getInterpolatedAttribute(s,o,c,l,f,new ce)),a&&(u.normal=zn.getInterpolatedAttribute(a,o,c,l,f,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new B,materialIndex:0};zn.getNormal(ba,wa,Ra,d.normal),u.face=d,u.barycoord=f}return u}class ra extends Qn{constructor(t=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,i,n,t,a,s,0),_("z","y","x",1,-1,i,n,-t,a,s,1),_("x","z","y",1,1,t,i,n,r,a,2),_("x","z","y",1,-1,t,i,-n,r,a,3),_("x","y","z",1,-1,t,n,i,r,s,4),_("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ur(l,3)),this.setAttribute("normal",new ur(u,3)),this.setAttribute("uv",new ur(f,2));function _(x,p,h,A,T,y,I,L,w,U,S){const M=y/w,R=I/U,V=y/2,k=I/2,j=L/2,K=w+1,X=U+1;let Z=0,G=0;const rt=new B;for(let ht=0;ht<X;ht++){const yt=ht*R-k;for(let kt=0;kt<K;kt++){const ae=kt*M-V;rt[x]=ae*A,rt[p]=yt*T,rt[h]=j,l.push(rt.x,rt.y,rt.z),rt[x]=0,rt[p]=0,rt[h]=L>0?1:-1,u.push(rt.x,rt.y,rt.z),f.push(kt/w),f.push(1-ht/U),Z+=1}}for(let ht=0;ht<U;ht++)for(let yt=0;yt<w;yt++){const kt=d+yt+K*ht,ae=d+yt+K*(ht+1),W=d+(yt+1)+K*(ht+1),tt=d+(yt+1)+K*ht;c.push(kt,ae,tt),c.push(ae,W,tt),G+=6}o.addGroup(m,G,S),m+=G,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function os(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function Qe(e){const t={};for(let n=0;n<e.length;n++){const i=os(e[n]);for(const r in i)t[r]=i[r]}return t}function fg(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ld(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const dg={clone:os,merge:Qe};var pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends ia{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pg,this.fragmentShader=mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=fg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Dd extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=_i}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new B,xh=new ce,Mh=new ce;class kn extends Dd{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=_l*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _l*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,n){return this.getViewBounds(t,xh,Mh),n.subVectors(Mh,xh)}setViewOffset(t,n,i,r,s,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Wo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Br=-90,kr=1;class gg extends on{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(Br,kr,t,n);r.layers=this.layers,this.add(r);const s=new kn(Br,kr,t,n);s.layers=this.layers,this.add(s);const a=new kn(Br,kr,t,n);a.layers=this.layers,this.add(a);const o=new kn(Br,kr,t,n);o.layers=this.layers,this.add(o);const c=new kn(Br,kr,t,n);c.layers=this.layers,this.add(c);const l=new kn(Br,kr,t,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(t===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===io)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of n)this.add(l),l.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(n,s),t.setRenderTarget(i,1,r),t.render(n,a),t.setRenderTarget(i,2,r),t.render(n,o),t.setRenderTarget(i,3,r),t.render(n,c),t.setRenderTarget(i,4,r),t.render(n,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(n,u),t.setRenderTarget(f,d,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Id extends an{constructor(t,n,i,r,s,a,o,c,l,u){t=t!==void 0?t:[],n=n!==void 0?n:ns,super(t,n,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _g extends vr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Id(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$n}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ra(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:ki});s.uniforms.tEquirect.value=n;const a=new vi(r,s),o=n.minFilter;return n.minFilter===or&&(n.minFilter=$n),new gg(1,10,this).update(t,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,n,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,r);t.setRenderTarget(s)}}class vg extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const hc=new B,xg=new B,Mg=new Ft;class nr{constructor(t=new B(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=hc.subVectors(i,n).cross(xg.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(hc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||Mg.getNormalMatrix(t),r=this.coplanarPoint(hc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new mo,Da=new B;class Ud{constructor(t=new nr,n=new nr,i=new nr,r=new nr,s=new nr,a=new nr){this.planes=[t,n,i,r,s,a]}set(t,n,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=_i){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],m=r[8],_=r[9],x=r[10],p=r[11],h=r[12],A=r[13],T=r[14],y=r[15];if(i[0].setComponents(c-s,d-l,p-m,y-h).normalize(),i[1].setComponents(c+s,d+l,p+m,y+h).normalize(),i[2].setComponents(c+a,d+u,p+_,y+A).normalize(),i[3].setComponents(c-a,d-u,p-_,y-A).normalize(),i[4].setComponents(c-o,d-f,p-x,y-T).normalize(),n===_i)i[5].setComponents(c+o,d+f,p+x,y+T).normalize();else if(n===io)i[5].setComponents(o,f,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Da.x=r.normal.x>0?t.max.x:t.min.x,Da.y=r.normal.y>0?t.max.y:t.min.y,Da.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Da)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nd extends ia{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Sh=new Re,vl=new Ad,Ia=new mo,Ua=new B;class Eh extends on{constructor(t=new Qn,n=new Nd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(r),Ia.radius+=s,t.ray.intersectsSphere(Ia)===!1)return;Sh.copy(r).invert(),vl.copy(t.ray).applyMatrix4(Sh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let _=d,x=m;_<x;_++){const p=l.getX(_);Ua.fromBufferAttribute(f,p),yh(Ua,p,c,r,t,n,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=d,x=m;_<x;_++)Ua.fromBufferAttribute(f,_),yh(Ua,_,c,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function yh(e,t,n,i,r,s,a){const o=vl.distanceSqToPoint(e);if(o<n){const c=new B;vl.closestPointToPoint(e,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Na extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Fd extends an{constructor(t,n,i,r,s,a,o,c,l,u=$r){if(u!==$r&&u!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$r&&(i=_r),i===void 0&&u===ss&&(i=rs),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:Hn,this.minFilter=c!==void 0?c:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class go extends Qn{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=t/o,d=n/c,m=[],_=[],x=[],p=[];for(let h=0;h<u;h++){const A=h*d-a;for(let T=0;T<l;T++){const y=T*f-s;_.push(y,-A,0),x.push(0,0,1),p.push(T/o),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let A=0;A<o;A++){const T=A+l*h,y=A+l*(h+1),I=A+1+l*(h+1),L=A+1+l*h;m.push(T,y,L),m.push(y,I,L)}this.setIndex(m),this.setAttribute("position",new ur(_,3)),this.setAttribute("normal",new ur(x,3)),this.setAttribute("uv",new ur(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new go(t.width,t.height,t.widthSegments,t.heightSegments)}}class Sg extends ia{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Eg extends ia{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Od extends Dd{constructor(t=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class yg extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}function Th(e,t,n,i){const r=Tg(i);switch(n){case pd:return e*t;case gd:return e*t;case _d:return e*t*2;case vd:return e*t/r.components*r.byteLength;case Wl:return e*t/r.components*r.byteLength;case xd:return e*t*2/r.components*r.byteLength;case Xl:return e*t*2/r.components*r.byteLength;case md:return e*t*3/r.components*r.byteLength;case Gn:return e*t*4/r.components*r.byteLength;case ql:return e*t*4/r.components*r.byteLength;case qa:case Ya:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ja:case Ka:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case qc:case jc:return Math.max(e,16)*Math.max(t,8)/4;case Xc:case Yc:return Math.max(e,8)*Math.max(t,8)/2;case Kc:case $c:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Zc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Jc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Qc:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case tl:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case el:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case nl:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case il:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case rl:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case sl:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case al:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ul:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case hl:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case $a:case fl:case dl:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Md:case pl:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ml:case gl:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Tg(e){switch(e){case Mi:case hd:return{byteLength:1,components:1};case js:case fd:case Qs:return{byteLength:2,components:1};case Hl:case Vl:return{byteLength:2,components:4};case _r:case Gl:case gi:return{byteLength:4,components:1};case dd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bd(){let e=null,t=!1,n=null,i=null;function r(s,a){n(s,a),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function Ag(e){const t=new WeakMap;function n(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=e.createBuffer();e.bindBuffer(c,d),e.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=e.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=e.SHORT;else if(l instanceof Uint32Array)m=e.UNSIGNED_INT;else if(l instanceof Int32Array)m=e.INT;else if(l instanceof Int8Array)m=e.BYTE;else if(l instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(e.bindBuffer(l,o),f.length===0)e.bufferSubData(l,0,u);else{f.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<f.length;m++){const _=f[d],x=f[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let m=0,_=f.length;m<_;m++){const x=f[m];e.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(e.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wg=`#ifdef USE_ALPHAHASH
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
#endif`,Rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dg=`#ifdef USE_AOMAP
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
#endif`,Ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ug=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kg=`#ifdef USE_IRIDESCENCE
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
#endif`,zg=`#ifdef USE_BUMPMAP
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
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kg=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,$g=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zg=`vec3 transformedNormal = objectNormal;
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
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n_="gl_FragColor = linearToOutputTexel( gl_FragColor );",i_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,a_=`#ifdef USE_ENVMAP
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
#endif`,o_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
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
#endif`,l_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d_=`#ifdef USE_GRADIENTMAP
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
}`,p_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,__=`uniform bool receiveShadow;
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
#endif`,v_=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,x_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,T_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,A_=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,w_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N_=`#if defined( USE_POINTS_UV )
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
#endif`,F_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G_=`#ifdef USE_MORPHTARGETS
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
#endif`,H_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,W_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j_=`#ifdef USE_NORMALMAP
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
#endif`,K_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,e1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,u1=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,h1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f1=`#ifdef USE_SKINNING
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
#endif`,d1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p1=`#ifdef USE_SKINNING
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
#endif`,m1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x1=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,M1=`#ifdef USE_TRANSMISSION
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b1=`uniform sampler2D t2D;
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`#include <common>
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
}`,D1=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,I1=`#define DISTANCE
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
}`,U1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
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
}`,B1=`uniform vec3 diffuse;
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
}`,k1=`#include <common>
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
}`,z1=`uniform vec3 diffuse;
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
}`,G1=`#define LAMBERT
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
}`,H1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,V1=`#define MATCAP
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
}`,W1=`#define MATCAP
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
}`,X1=`#define NORMAL
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
}`,q1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y1=`#define PHONG
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
}`,j1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,K1=`#define STANDARD
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
}`,$1=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Z1=`#define TOON
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
}`,J1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Q1=`uniform float size;
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
}`,t2=`uniform vec3 diffuse;
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
}`,e2=`#include <common>
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
}`,n2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,i2=`uniform float rotation;
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
}`,r2=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:bg,alphahash_pars_fragment:wg,alphamap_fragment:Rg,alphamap_pars_fragment:Cg,alphatest_fragment:Pg,alphatest_pars_fragment:Lg,aomap_fragment:Dg,aomap_pars_fragment:Ig,batching_pars_vertex:Ug,batching_vertex:Ng,begin_vertex:Fg,beginnormal_vertex:Og,bsdfs:Bg,iridescence_fragment:kg,bumpmap_pars_fragment:zg,clipping_planes_fragment:Gg,clipping_planes_pars_fragment:Hg,clipping_planes_pars_vertex:Vg,clipping_planes_vertex:Wg,color_fragment:Xg,color_pars_fragment:qg,color_pars_vertex:Yg,color_vertex:jg,common:Kg,cube_uv_reflection_fragment:$g,defaultnormal_vertex:Zg,displacementmap_pars_vertex:Jg,displacementmap_vertex:Qg,emissivemap_fragment:t_,emissivemap_pars_fragment:e_,colorspace_fragment:n_,colorspace_pars_fragment:i_,envmap_fragment:r_,envmap_common_pars_fragment:s_,envmap_pars_fragment:a_,envmap_pars_vertex:o_,envmap_physical_pars_fragment:v_,envmap_vertex:c_,fog_vertex:l_,fog_pars_vertex:u_,fog_fragment:h_,fog_pars_fragment:f_,gradientmap_pars_fragment:d_,lightmap_pars_fragment:p_,lights_lambert_fragment:m_,lights_lambert_pars_fragment:g_,lights_pars_begin:__,lights_toon_fragment:x_,lights_toon_pars_fragment:M_,lights_phong_fragment:S_,lights_phong_pars_fragment:E_,lights_physical_fragment:y_,lights_physical_pars_fragment:T_,lights_fragment_begin:A_,lights_fragment_maps:b_,lights_fragment_end:w_,logdepthbuf_fragment:R_,logdepthbuf_pars_fragment:C_,logdepthbuf_pars_vertex:P_,logdepthbuf_vertex:L_,map_fragment:D_,map_pars_fragment:I_,map_particle_fragment:U_,map_particle_pars_fragment:N_,metalnessmap_fragment:F_,metalnessmap_pars_fragment:O_,morphinstance_vertex:B_,morphcolor_vertex:k_,morphnormal_vertex:z_,morphtarget_pars_vertex:G_,morphtarget_vertex:H_,normal_fragment_begin:V_,normal_fragment_maps:W_,normal_pars_fragment:X_,normal_pars_vertex:q_,normal_vertex:Y_,normalmap_pars_fragment:j_,clearcoat_normal_fragment_begin:K_,clearcoat_normal_fragment_maps:$_,clearcoat_pars_fragment:Z_,iridescence_pars_fragment:J_,opaque_fragment:Q_,packing:t1,premultiplied_alpha_fragment:e1,project_vertex:n1,dithering_fragment:i1,dithering_pars_fragment:r1,roughnessmap_fragment:s1,roughnessmap_pars_fragment:a1,shadowmap_pars_fragment:o1,shadowmap_pars_vertex:c1,shadowmap_vertex:l1,shadowmask_pars_fragment:u1,skinbase_vertex:h1,skinning_pars_vertex:f1,skinning_vertex:d1,skinnormal_vertex:p1,specularmap_fragment:m1,specularmap_pars_fragment:g1,tonemapping_fragment:_1,tonemapping_pars_fragment:v1,transmission_fragment:x1,transmission_pars_fragment:M1,uv_pars_fragment:S1,uv_pars_vertex:E1,uv_vertex:y1,worldpos_vertex:T1,background_vert:A1,background_frag:b1,backgroundCube_vert:w1,backgroundCube_frag:R1,cube_vert:C1,cube_frag:P1,depth_vert:L1,depth_frag:D1,distanceRGBA_vert:I1,distanceRGBA_frag:U1,equirect_vert:N1,equirect_frag:F1,linedashed_vert:O1,linedashed_frag:B1,meshbasic_vert:k1,meshbasic_frag:z1,meshlambert_vert:G1,meshlambert_frag:H1,meshmatcap_vert:V1,meshmatcap_frag:W1,meshnormal_vert:X1,meshnormal_frag:q1,meshphong_vert:Y1,meshphong_frag:j1,meshphysical_vert:K1,meshphysical_frag:$1,meshtoon_vert:Z1,meshtoon_frag:J1,points_vert:Q1,points_frag:t2,shadow_vert:e2,shadow_frag:n2,sprite_vert:i2,sprite_frag:r2},et={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Kn={basic:{uniforms:Qe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Qe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new ie(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Qe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Qe([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Qe([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new ie(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Qe([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Qe([et.points,et.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Qe([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Qe([et.common,et.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Qe([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Qe([et.sprite,et.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Qe([et.common,et.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Qe([et.lights,et.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Kn.physical={uniforms:Qe([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Fa={r:0,b:0,g:0},Qi=new Si,s2=new Re;function a2(e,t,n,i,r,s,a){const o=new ie(0);let c=s===!0?0:1,l,u,f=null,d=0,m=null;function _(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?n:t).get(y)),y}function x(T){let y=!1;const I=_(T);I===null?h(o,c):I&&I.isColor&&(h(I,1),y=!0);const L=e.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function p(T,y){const I=_(y);I&&(I.isCubeTexture||I.mapping===po)?(u===void 0&&(u=new vi(new ra(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:os(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Qi.copy(y.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(s2.makeRotationFromEuler(Qi)),u.material.toneMapped=Zt.getTransfer(I.colorSpace)!==re,(f!==I||d!==I.version||m!==e.toneMapping)&&(u.material.needsUpdate=!0,f=I,d=I.version,m=e.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new vi(new go(2,2),new Ei({name:"BackgroundMaterial",uniforms:os(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(I.colorSpace)!==re,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||d!==I.version||m!==e.toneMapping)&&(l.material.needsUpdate=!0,f=I,d=I.version,m=e.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function h(T,y){T.getRGB(Fa,Ld(e)),i.buffers.color.setClear(Fa.r,Fa.g,Fa.b,y,a)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),c=y,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,h(o,c)},render:x,addToRenderList:p,dispose:A}}function o2(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(M,R,V,k,j){let K=!1;const X=f(k,V,R);s!==X&&(s=X,l(s.object)),K=m(M,k,V,j),K&&_(M,k,V,j),j!==null&&t.update(j,e.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(M,R,V,k),j!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function c(){return e.createVertexArray()}function l(M){return e.bindVertexArray(M)}function u(M){return e.deleteVertexArray(M)}function f(M,R,V){const k=V.wireframe===!0;let j=i[M.id];j===void 0&&(j={},i[M.id]=j);let K=j[R.id];K===void 0&&(K={},j[R.id]=K);let X=K[k];return X===void 0&&(X=d(c()),K[k]=X),X}function d(M){const R=[],V=[],k=[];for(let j=0;j<n;j++)R[j]=0,V[j]=0,k[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:k,object:M,attributes:{},index:null}}function m(M,R,V,k){const j=s.attributes,K=R.attributes;let X=0;const Z=V.getAttributes();for(const G in Z)if(Z[G].location>=0){const ht=j[G];let yt=K[G];if(yt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),ht===void 0||ht.attribute!==yt||yt&&ht.data!==yt.data)return!0;X++}return s.attributesNum!==X||s.index!==k}function _(M,R,V,k){const j={},K=R.attributes;let X=0;const Z=V.getAttributes();for(const G in Z)if(Z[G].location>=0){let ht=K[G];ht===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const yt={};yt.attribute=ht,ht&&ht.data&&(yt.data=ht.data),j[G]=yt,X++}s.attributes=j,s.attributesNum=X,s.index=k}function x(){const M=s.newAttributes;for(let R=0,V=M.length;R<V;R++)M[R]=0}function p(M){h(M,0)}function h(M,R){const V=s.newAttributes,k=s.enabledAttributes,j=s.attributeDivisors;V[M]=1,k[M]===0&&(e.enableVertexAttribArray(M),k[M]=1),j[M]!==R&&(e.vertexAttribDivisor(M,R),j[M]=R)}function A(){const M=s.newAttributes,R=s.enabledAttributes;for(let V=0,k=R.length;V<k;V++)R[V]!==M[V]&&(e.disableVertexAttribArray(V),R[V]=0)}function T(M,R,V,k,j,K,X){X===!0?e.vertexAttribIPointer(M,R,V,j,K):e.vertexAttribPointer(M,R,V,k,j,K)}function y(M,R,V,k){x();const j=k.attributes,K=V.getAttributes(),X=R.defaultAttributeValues;for(const Z in K){const G=K[Z];if(G.location>=0){let rt=j[Z];if(rt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){const ht=rt.normalized,yt=rt.itemSize,kt=t.get(rt);if(kt===void 0)continue;const ae=kt.buffer,W=kt.type,tt=kt.bytesPerElement,xt=W===e.INT||W===e.UNSIGNED_INT||rt.gpuType===Gl;if(rt.isInterleavedBufferAttribute){const st=rt.data,Pt=st.stride,Ut=rt.offset;if(st.isInstancedInterleavedBuffer){for(let zt=0;zt<G.locationSize;zt++)h(G.location+zt,st.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let zt=0;zt<G.locationSize;zt++)p(G.location+zt);e.bindBuffer(e.ARRAY_BUFFER,ae);for(let zt=0;zt<G.locationSize;zt++)T(G.location+zt,yt/G.locationSize,W,ht,Pt*tt,(Ut+yt/G.locationSize*zt)*tt,xt)}else{if(rt.isInstancedBufferAttribute){for(let st=0;st<G.locationSize;st++)h(G.location+st,rt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let st=0;st<G.locationSize;st++)p(G.location+st);e.bindBuffer(e.ARRAY_BUFFER,ae);for(let st=0;st<G.locationSize;st++)T(G.location+st,yt/G.locationSize,W,ht,yt*tt,yt/G.locationSize*st*tt,xt)}}else if(X!==void 0){const ht=X[Z];if(ht!==void 0)switch(ht.length){case 2:e.vertexAttrib2fv(G.location,ht);break;case 3:e.vertexAttrib3fv(G.location,ht);break;case 4:e.vertexAttrib4fv(G.location,ht);break;default:e.vertexAttrib1fv(G.location,ht)}}}}A()}function I(){U();for(const M in i){const R=i[M];for(const V in R){const k=R[V];for(const j in k)u(k[j].object),delete k[j];delete R[V]}delete i[M]}}function L(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const V in R){const k=R[V];for(const j in k)u(k[j].object),delete k[j];delete R[V]}delete i[M.id]}function w(M){for(const R in i){const V=i[R];if(V[M.id]===void 0)continue;const k=V[M.id];for(const j in k)u(k[j].object),delete k[j];delete V[M.id]}}function U(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:p,disableUnusedAttributes:A}}function c2(e,t,n){let i;function r(l){i=l}function s(l,u){e.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,f){f!==0&&(e.drawArraysInstanced(i,l,u,f),n.update(u,i,f))}function o(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];n.update(m,i,1)}function c(l,u,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)a(l[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*d[x];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function l2(e,t,n,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Gn&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const U=w===Qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Mi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==gi&&!U)}function c(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),A=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,L=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:I,maxSamples:L}}function u2(e){const t=this;let n=null,i=0,r=!1,s=!1;const a=new nr,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,h=e.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):l();else{const A=s?0:i,T=A*4;let y=h.clippingState||null;c.value=y,y=u(_,d,T,m);for(let I=0;I!==T;++I)y[I]=n[I];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,m,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=c.value,_!==!0||p===null){const h=m+x*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<h)&&(p=new Float32Array(h));for(let T=0,y=m;T!==x;++T,y+=4)a.copy(f[T]).applyMatrix4(A,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function h2(e){let t=new WeakMap;function n(a,o){return o===Gc?a.mapping=ns:o===Hc&&(a.mapping=is),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Gc||o===Hc)if(t.has(a)){const c=t.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new _g(c.height);return l.fromEquirectangularTexture(e,a),t.set(a,l),a.addEventListener("dispose",r),n(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Yr=4,Ah=[.125,.215,.35,.446,.526,.582],sr=20,fc=new Od,bh=new ie;let dc=null,pc=0,mc=0,gc=!1;const ir=(1+Math.sqrt(5))/2,zr=1/ir,wh=[new B(-ir,zr,0),new B(ir,zr,0),new B(-zr,0,ir),new B(zr,0,ir),new B(0,ir,-zr),new B(0,ir,zr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Rh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100){dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dc,pc,mc),this._renderer.xr.enabled=gc,t.scissorTest=!1,Oa(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ns||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Qs,format:Gn,colorSpace:as,depthBuffer:!1},r=Ch(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f2(s)),this._blurMaterial=d2(s,t,n)}return r}_compileMaterial(t){const n=new vi(this._lodPlanes[0],t);this._renderer.compile(n,fc)}_sceneToCubeUV(t,n,i,r){const o=new kn(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(bh),u.toneMapping=zi,u.autoClear=!1;const m=new Rd({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),_=new vi(new ra,m);let x=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(bh),x=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):A===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const T=this._cubeSize;Oa(r,A*T,h>2?T:0,T,T),u.setRenderTarget(r),x&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=p}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===ns||t.mapping===is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new vi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Oa(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,fc)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=wh[(r-s-1)%wh.length];this._blur(t,s-1,s,a,o)}n.autoClear=i}_blur(t,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,n,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new vi(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*sr-1),x=s/_,p=isFinite(s)?1+Math.floor(u*x):sr;p>sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${sr}`);const h=[];let A=0;for(let w=0;w<sr;++w){const U=w/x,S=Math.exp(-U*U/2);h.push(S),w===0?A+=S:w<p&&(A+=2*S)}for(let w=0;w<h.length;w++)h[w]=h[w]/A;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-i;const y=this._sizeLods[r],I=3*y*(r>T-Yr?r-T+Yr:0),L=4*(this._cubeSize-y);Oa(n,I,L,3*y,2*y),c.setRenderTarget(n),c.render(f,fc)}}function f2(e){const t=[],n=[],i=[];let r=e;const s=e-Yr+1+Ah.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>e-Yr?c=Ah[a-e+Yr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,x=3,p=2,h=1,A=new Float32Array(x*_*m),T=new Float32Array(p*_*m),y=new Float32Array(h*_*m);for(let L=0;L<m;L++){const w=L%3*2/3-1,U=L>2?0:-1,S=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];A.set(S,x*_*L),T.set(d,p*_*L);const M=[L,L,L,L,L,L];y.set(M,h*_*L)}const I=new Qn;I.setAttribute("position",new Ae(A,x)),I.setAttribute("uv",new Ae(T,p)),I.setAttribute("faceIndex",new Ae(y,h)),t.push(I),r>Yr&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Ch(e,t,n){const i=new vr(e,t,n);return i.texture.mapping=po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oa(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function d2(e,t,n){const i=new Float32Array(sr),r=new B(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Ph(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Lh(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Yl(){return`

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
	`}function p2(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Gc||c===Hc,u=c===ns||c===is;if(l||u){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new Rh(e)),f=l?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new Rh(e)),f=l?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function m2(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Xr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function g2(e,t,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function c(f){const d=f.attributes;for(const m in d)t.update(d[m],e.ARRAY_BUFFER)}function l(f){const d=[],m=f.index,_=f.attributes.position;let x=0;if(m!==null){const A=m.array;x=m.version;for(let T=0,y=A.length;T<y;T+=3){const I=A[T+0],L=A[T+1],w=A[T+2];d.push(I,L,L,w,w,I)}}else if(_!==void 0){const A=_.array;x=_.version;for(let T=0,y=A.length/3-1;T<y;T+=3){const I=T+0,L=T+1,w=T+2;d.push(I,L,L,w,w,I)}}else return;const p=new(Ed(d)?Pd:Cd)(d,1);p.version=x;const h=s.get(f);h&&t.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function _2(e,t,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,m){e.drawElements(i,m,s,d*a),n.update(m,i,1)}function l(d,m,_){_!==0&&(e.drawElementsInstanced(i,m,s,d*a,_),n.update(m,i,_))}function u(d,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,_);let p=0;for(let h=0;h<_;h++)p+=m[h];n.update(p,i,1)}function f(d,m,_,x){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)l(d[h]/a,m[h],x[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,x,0,_);let h=0;for(let A=0;A<_;A++)h+=m[A]*x[A];n.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function v2(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function x2(e,t,n){const i=new WeakMap,r=new we;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let M=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),x===!0&&(y=2),p===!0&&(y=3);let I=o.attributes.position.count*y,L=1;I>t.maxTextureSize&&(L=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const w=new Float32Array(I*L*4*f),U=new Td(w,I,L,f);U.type=gi,U.needsUpdate=!0;const S=y*4;for(let R=0;R<f;R++){const V=h[R],k=A[R],j=T[R],K=I*L*4*R;for(let X=0;X<V.count;X++){const Z=X*S;_===!0&&(r.fromBufferAttribute(V,X),w[K+Z+0]=r.x,w[K+Z+1]=r.y,w[K+Z+2]=r.z,w[K+Z+3]=0),x===!0&&(r.fromBufferAttribute(k,X),w[K+Z+4]=r.x,w[K+Z+5]=r.y,w[K+Z+6]=r.z,w[K+Z+7]=0),p===!0&&(r.fromBufferAttribute(j,X),w[K+Z+8]=r.x,w[K+Z+9]=r.y,w[K+Z+10]=r.z,w[K+Z+11]=j.itemSize===4?r.w:1)}}d={count:f,texture:U,size:new ce(I,L)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const x=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(e,"morphTargetBaseInfluence",x),c.getUniforms().setValue(e,"morphTargetInfluences",l)}c.getUniforms().setValue(e,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:s}}function M2(e,t,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:a}}const kd=new an,Dh=new Fd(1,1),zd=new Td,Gd=new eg,Hd=new Id,Ih=[],Uh=[],Nh=new Float32Array(16),Fh=new Float32Array(9),Oh=new Float32Array(4);function Ms(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=Ih[r];if(s===void 0&&(s=new Float32Array(r),Ih[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(s,o)}return s}function Oe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Be(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function _o(e,t){let n=Uh[t];n===void 0&&(n=new Int32Array(t),Uh[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function S2(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function E2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Oe(n,t))return;e.uniform2fv(this.addr,t),Be(n,t)}}function y2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Oe(n,t))return;e.uniform3fv(this.addr,t),Be(n,t)}}function T2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Oe(n,t))return;e.uniform4fv(this.addr,t),Be(n,t)}}function A2(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Oe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Be(n,t)}else{if(Oe(n,i))return;Oh.set(i),e.uniformMatrix2fv(this.addr,!1,Oh),Be(n,i)}}function b2(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Oe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Be(n,t)}else{if(Oe(n,i))return;Fh.set(i),e.uniformMatrix3fv(this.addr,!1,Fh),Be(n,i)}}function w2(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Oe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Be(n,t)}else{if(Oe(n,i))return;Nh.set(i),e.uniformMatrix4fv(this.addr,!1,Nh),Be(n,i)}}function R2(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function C2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Oe(n,t))return;e.uniform2iv(this.addr,t),Be(n,t)}}function P2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Oe(n,t))return;e.uniform3iv(this.addr,t),Be(n,t)}}function L2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Oe(n,t))return;e.uniform4iv(this.addr,t),Be(n,t)}}function D2(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function I2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Oe(n,t))return;e.uniform2uiv(this.addr,t),Be(n,t)}}function U2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Oe(n,t))return;e.uniform3uiv(this.addr,t),Be(n,t)}}function N2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Oe(n,t))return;e.uniform4uiv(this.addr,t),Be(n,t)}}function F2(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(Dh.compareFunction=Sd,s=Dh):s=kd,n.setTexture2D(t||s,r)}function O2(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||Gd,r)}function B2(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||Hd,r)}function k2(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||zd,r)}function z2(e){switch(e){case 5126:return S2;case 35664:return E2;case 35665:return y2;case 35666:return T2;case 35674:return A2;case 35675:return b2;case 35676:return w2;case 5124:case 35670:return R2;case 35667:case 35671:return C2;case 35668:case 35672:return P2;case 35669:case 35673:return L2;case 5125:return D2;case 36294:return I2;case 36295:return U2;case 36296:return N2;case 35678:case 36198:case 36298:case 36306:case 35682:return F2;case 35679:case 36299:case 36307:return O2;case 35680:case 36300:case 36308:case 36293:return B2;case 36289:case 36303:case 36311:case 36292:return k2}}function G2(e,t){e.uniform1fv(this.addr,t)}function H2(e,t){const n=Ms(t,this.size,2);e.uniform2fv(this.addr,n)}function V2(e,t){const n=Ms(t,this.size,3);e.uniform3fv(this.addr,n)}function W2(e,t){const n=Ms(t,this.size,4);e.uniform4fv(this.addr,n)}function X2(e,t){const n=Ms(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function q2(e,t){const n=Ms(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Y2(e,t){const n=Ms(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function j2(e,t){e.uniform1iv(this.addr,t)}function K2(e,t){e.uniform2iv(this.addr,t)}function $2(e,t){e.uniform3iv(this.addr,t)}function Z2(e,t){e.uniform4iv(this.addr,t)}function J2(e,t){e.uniform1uiv(this.addr,t)}function Q2(e,t){e.uniform2uiv(this.addr,t)}function tv(e,t){e.uniform3uiv(this.addr,t)}function ev(e,t){e.uniform4uiv(this.addr,t)}function nv(e,t,n){const i=this.cache,r=t.length,s=_o(n,r);Oe(i,s)||(e.uniform1iv(this.addr,s),Be(i,s));for(let a=0;a!==r;++a)n.setTexture2D(t[a]||kd,s[a])}function iv(e,t,n){const i=this.cache,r=t.length,s=_o(n,r);Oe(i,s)||(e.uniform1iv(this.addr,s),Be(i,s));for(let a=0;a!==r;++a)n.setTexture3D(t[a]||Gd,s[a])}function rv(e,t,n){const i=this.cache,r=t.length,s=_o(n,r);Oe(i,s)||(e.uniform1iv(this.addr,s),Be(i,s));for(let a=0;a!==r;++a)n.setTextureCube(t[a]||Hd,s[a])}function sv(e,t,n){const i=this.cache,r=t.length,s=_o(n,r);Oe(i,s)||(e.uniform1iv(this.addr,s),Be(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(t[a]||zd,s[a])}function av(e){switch(e){case 5126:return G2;case 35664:return H2;case 35665:return V2;case 35666:return W2;case 35674:return X2;case 35675:return q2;case 35676:return Y2;case 5124:case 35670:return j2;case 35667:case 35671:return K2;case 35668:case 35672:return $2;case 35669:case 35673:return Z2;case 5125:return J2;case 36294:return Q2;case 36295:return tv;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return sv}}class ov{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=z2(n.type)}}class cv{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=av(n.type)}}class lv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,n[o.id],i)}}}const _c=/(\w+)(\])?(\[|\.)?/g;function Bh(e,t){e.seq.push(t),e.map[t.id]=t}function uv(e,t,n){const i=e.name,r=i.length;for(_c.lastIndex=0;;){const s=_c.exec(i),a=_c.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Bh(n,l===void 0?new ov(o,e,t):new cv(o,e,t));break}else{let f=n.map[o];f===void 0&&(f=new lv(o),Bh(n,f)),n=f}}}class Za{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(n,r),a=t.getUniformLocation(n,s.name);uv(s,a,this)}}setValue(t,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in n&&i.push(a)}return i}}function kh(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const hv=37297;let fv=0;function dv(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const zh=new Ft;function pv(e){Zt._getMatrix(zh,Zt.workingColorSpace,e);const t=`mat3( ${zh.elements.map(n=>n.toFixed(4))} )`;switch(Zt.getTransfer(e)){case no:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Gh(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+dv(e.getShaderSource(t),a)}else return r}function mv(e,t){const n=pv(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function gv(e,t){let n;switch(t){case b0:n="Linear";break;case w0:n="Reinhard";break;case R0:n="Cineon";break;case C0:n="ACESFilmic";break;case L0:n="AgX";break;case D0:n="Neutral";break;case P0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ba=new B;function _v(){Zt.getLuminanceCoefficients(Ba);const e=Ba.x.toFixed(4),t=Ba.y.toFixed(4),n=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vv(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function xv(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Mv(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=e.getActiveAttrib(t,r),a=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Gs(e){return e!==""}function Hh(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(e){return e.replace(Sv,yv)}const Ev=new Map;function yv(e,t){let n=Bt[t];if(n===void 0){const i=Ev.get(t);if(i!==void 0)n=Bt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return xl(n)}const Tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(e){return e.replace(Tv,Av)}function Av(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xh(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bv(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===cd?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===s0?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function wv(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case ns:case is:t="ENVMAP_TYPE_CUBE";break;case po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rv(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case is:t="ENVMAP_MODE_REFRACTION";break}return t}function Cv(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case ld:t="ENVMAP_BLENDING_MULTIPLY";break;case T0:t="ENVMAP_BLENDING_MIX";break;case A0:t="ENVMAP_BLENDING_ADD";break}return t}function Pv(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Lv(e,t,n,i){const r=e.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=bv(n),l=wv(n),u=Rv(n),f=Cv(n),d=Pv(n),m=vv(n),_=xv(s),x=r.createProgram();let p,h,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Gs).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Gs).join(`
`),h.length>0&&(h+=`
`)):(p=[Xh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),h=[Xh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zi?"#define TONE_MAPPING":"",n.toneMapping!==zi?Bt.tonemapping_pars_fragment:"",n.toneMapping!==zi?gv("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,mv("linearToOutputTexel",n.outputColorSpace),_v(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Gs).join(`
`)),a=xl(a),a=Hh(a,n),a=Vh(a,n),o=xl(o),o=Hh(o,n),o=Vh(o,n),a=Wh(a),o=Wh(o),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",n.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=A+p+a,y=A+h+o,I=kh(r,r.VERTEX_SHADER,T),L=kh(r,r.FRAGMENT_SHADER,y);r.attachShader(x,I),r.attachShader(x,L),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(R){if(e.debug.checkShaderErrors){const V=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(I).trim(),j=r.getShaderInfoLog(L).trim();let K=!0,X=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(K=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,x,I,L);else{const Z=Gh(r,I,"vertex"),G=Gh(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+Z+`
`+G)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||j==="")&&(X=!1);X&&(R.diagnostics={runnable:K,programLog:V,vertexShader:{log:k,prefix:p},fragmentShader:{log:j,prefix:h}})}r.deleteShader(I),r.deleteShader(L),U=new Za(r,x),S=Mv(r,x)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,hv)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=L,this}let Dv=0;class Iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new Uv(t),n.set(t,i)),i}}class Uv{constructor(t){this.id=Dv++,this.code=t,this.usedTimes=0}}function Nv(e,t,n,i,r,s,a){const o=new bd,c=new Iv,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,M,R,V,k){const j=V.fog,K=k.geometry,X=S.isMeshStandardMaterial?V.environment:null,Z=(S.isMeshStandardMaterial?n:t).get(S.envMap||X),G=Z&&Z.mapping===po?Z.image.height:null,rt=_[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,yt=ht!==void 0?ht.length:0;let kt=0;K.morphAttributes.position!==void 0&&(kt=1),K.morphAttributes.normal!==void 0&&(kt=2),K.morphAttributes.color!==void 0&&(kt=3);let ae,W,tt,xt;if(rt){const ne=Kn[rt];ae=ne.vertexShader,W=ne.fragmentShader}else ae=S.vertexShader,W=S.fragmentShader,c.update(S),tt=c.getVertexShaderID(S),xt=c.getFragmentShaderID(S);const st=e.getRenderTarget(),Pt=e.state.buffers.depth.getReversed(),Ut=k.isInstancedMesh===!0,zt=k.isBatchedMesh===!0,me=!!S.map,qt=!!S.matcap,Te=!!Z,b=!!S.aoMap,yn=!!S.lightMap,Ht=!!S.bumpMap,Vt=!!S.normalMap,Tt=!!S.displacementMap,ue=!!S.emissiveMap,At=!!S.metalnessMap,E=!!S.roughnessMap,g=S.anisotropy>0,N=S.clearcoat>0,q=S.dispersion>0,$=S.iridescence>0,H=S.sheen>0,St=S.transmission>0,at=g&&!!S.anisotropyMap,ft=N&&!!S.clearcoatMap,Yt=N&&!!S.clearcoatNormalMap,Q=N&&!!S.clearcoatRoughnessMap,pt=$&&!!S.iridescenceMap,Ct=$&&!!S.iridescenceThicknessMap,Lt=H&&!!S.sheenColorMap,mt=H&&!!S.sheenRoughnessMap,Wt=!!S.specularMap,Ot=!!S.specularColorMap,le=!!S.specularIntensityMap,C=St&&!!S.transmissionMap,nt=St&&!!S.thicknessMap,z=!!S.gradientMap,Y=!!S.alphaMap,ct=S.alphaTest>0,ot=!!S.alphaHash,Nt=!!S.extensions;let Me=zi;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Me=e.toneMapping);const Xe={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:ae,fragmentShader:W,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:xt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:zt,batchingColor:zt&&k._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&k.instanceColor!==null,instancingMorph:Ut&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?e.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:as,alphaToCoverage:!!S.alphaToCoverage,map:me,matcap:qt,envMap:Te,envMapMode:Te&&Z.mapping,envMapCubeUVHeight:G,aoMap:b,lightMap:yn,bumpMap:Ht,normalMap:Vt,displacementMap:d&&Tt,emissiveMap:ue,normalMapObjectSpace:Vt&&S.normalMapType===O0,normalMapTangentSpace:Vt&&S.normalMapType===F0,metalnessMap:At,roughnessMap:E,anisotropy:g,anisotropyMap:at,clearcoat:N,clearcoatMap:ft,clearcoatNormalMap:Yt,clearcoatRoughnessMap:Q,dispersion:q,iridescence:$,iridescenceMap:pt,iridescenceThicknessMap:Ct,sheen:H,sheenColorMap:Lt,sheenRoughnessMap:mt,specularMap:Wt,specularColorMap:Ot,specularIntensityMap:le,transmission:St,transmissionMap:C,thicknessMap:nt,gradientMap:z,opaque:S.transparent===!1&&S.blending===Kr&&S.alphaToCoverage===!1,alphaMap:Y,alphaTest:ct,alphaHash:ot,combine:S.combine,mapUv:me&&x(S.map.channel),aoMapUv:b&&x(S.aoMap.channel),lightMapUv:yn&&x(S.lightMap.channel),bumpMapUv:Ht&&x(S.bumpMap.channel),normalMapUv:Vt&&x(S.normalMap.channel),displacementMapUv:Tt&&x(S.displacementMap.channel),emissiveMapUv:ue&&x(S.emissiveMap.channel),metalnessMapUv:At&&x(S.metalnessMap.channel),roughnessMapUv:E&&x(S.roughnessMap.channel),anisotropyMapUv:at&&x(S.anisotropyMap.channel),clearcoatMapUv:ft&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:mt&&x(S.sheenRoughnessMap.channel),specularMapUv:Wt&&x(S.specularMap.channel),specularColorMapUv:Ot&&x(S.specularColorMap.channel),specularIntensityMapUv:le&&x(S.specularIntensityMap.channel),transmissionMapUv:C&&x(S.transmissionMap.channel),thicknessMapUv:nt&&x(S.thicknessMap.channel),alphaMapUv:Y&&x(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Vt||g),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(me||Y),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Pt,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:kt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:me&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===re,decodeVideoTextureEmissive:ue&&S.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(S.emissiveMap.colorSpace)===re,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===di,flipSided:S.side===sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Nt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&S.extensions.multiDraw===!0||zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function h(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(A(M,S),T(M,S),M.push(e.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function A(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function T(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const M=_[S.type];let R;if(M){const V=Kn[M];R=dg.clone(V.uniforms)}else R=S.uniforms;return R}function I(S,M){let R;for(let V=0,k=u.length;V<k;V++){const j=u[V];if(j.cacheKey===M){R=j,++R.usedTimes;break}}return R===void 0&&(R=new Lv(e,M,S,s),u.push(R)),R}function L(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function w(S){c.remove(S)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:y,acquireProgram:I,releaseProgram:L,releaseShaderCache:w,programs:u,dispose:U}}function Fv(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function r(a,o,c){e.get(a)[o]=c}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:s}}function Ov(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function qh(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Yh(){const e=[];let t=0;const n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function a(f,d,m,_,x,p){let h=e[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},e[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=x,h.group=p),t++,h}function o(f,d,m,_,x,p){const h=a(f,d,m,_,x,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):n.push(h)}function c(f,d,m,_,x,p){const h=a(f,d,m,_,x,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):n.unshift(h)}function l(f,d){n.length>1&&n.sort(f||Ov),i.length>1&&i.sort(d||qh),r.length>1&&r.sort(d||qh)}function u(){for(let f=t,d=e.length;f<d;f++){const m=e[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Bv(){let e=new WeakMap;function t(i,r){const s=e.get(i);let a;return s===void 0?(a=new Yh,e.set(i,[a])):r>=s.length?(a=new Yh,s.push(a)):a=s[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function kv(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new B,color:new ie};break;case"SpotLight":n={position:new B,direction:new B,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new ie,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":n={color:new ie,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function zv(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Gv=0;function Hv(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Vv(e){const t=new kv,n=zv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);const r=new B,s=new Re,a=new Re;function o(l){let u=0,f=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,_=0,x=0,p=0,h=0,A=0,T=0,y=0,I=0,L=0,w=0;l.sort(Hv);for(let S=0,M=l.length;S<M;S++){const R=l[S],V=R.color,k=R.intensity,j=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=V.r*k,f+=V.g*k,d+=V.b*k;else if(R.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(R.sh.coefficients[X],k);w++}else if(R.isDirectionalLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,G=n.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=R.shadow.matrix,A++}i.directional[m]=X,m++}else if(R.isSpotLight){const X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(V).multiplyScalar(k),X.distance=j,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,i.spot[x]=X;const Z=R.shadow;if(R.map&&(i.spotLightMap[I]=R.map,I++,Z.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[x]=Z.matrix,R.castShadow){const G=n.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=K,y++}x++}else if(R.isRectAreaLight){const X=t.get(R);X.color.copy(V).multiplyScalar(k),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=X,p++}else if(R.isPointLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const Z=R.shadow,G=n.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=R.shadow.matrix,T++}i.point[_]=X,_++}else if(R.isHemisphereLight){const X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(k),X.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[h]=X,h++}}p>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=et.LTC_FLOAT_1,i.rectAreaLTC2=et.LTC_FLOAT_2):(i.rectAreaLTC1=et.LTC_HALF_1,i.rectAreaLTC2=et.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==m||U.pointLength!==_||U.spotLength!==x||U.rectAreaLength!==p||U.hemiLength!==h||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==y||U.numSpotMaps!==I||U.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=y+I-L,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=w,U.directionalLength=m,U.pointLength=_,U.spotLength=x,U.rectAreaLength=p,U.hemiLength=h,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=y,U.numSpotMaps=I,U.numLightProbes=w,i.version=Gv++)}function c(l,u){let f=0,d=0,m=0,_=0,x=0;const p=u.matrixWorldInverse;for(let h=0,A=l.length;h<A;h++){const T=l[h];if(T.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),f++}else if(T.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:i}}function jh(e){const t=new Vv(e),n=[],i=[];function r(u){l.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){t.setup(n)}function c(u){t.setupView(n,u)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Wv(e){let t=new WeakMap;function n(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new jh(e),t.set(r,[o])):s>=a.length?(o=new jh(e),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const Xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yv(e,t,n){let i=new Ud;const r=new ce,s=new ce,a=new we,o=new Sg({depthPacking:N0}),c=new Eg,l={},u=n.maxTextureSize,f={[Hi]:sn,[sn]:Hi,[di]:di},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Xv,fragmentShader:qv}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Qn;_.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new vi(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cd;let h=this.type;this.render=function(L,w,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;const S=e.getRenderTarget(),M=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),V=e.state;V.setBlending(ki),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=h!==fi&&this.type===fi,j=h===fi&&this.type!==fi;for(let K=0,X=L.length;K<X;K++){const Z=L[K],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const rt=G.getFrameExtents();if(r.multiply(rt),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/rt.x),r.x=s.x*rt.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/rt.y),r.y=s.y*rt.y,G.mapSize.y=s.y)),G.map===null||k===!0||j===!0){const yt=this.type!==fi?{minFilter:Hn,magFilter:Hn}:{};G.map!==null&&G.map.dispose(),G.map=new vr(r.x,r.y,yt),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}e.setRenderTarget(G.map),e.clear();const ht=G.getViewportCount();for(let yt=0;yt<ht;yt++){const kt=G.getViewport(yt);a.set(s.x*kt.x,s.y*kt.y,s.x*kt.z,s.y*kt.w),V.viewport(a),G.updateMatrices(Z,yt),i=G.getFrustum(),y(w,U,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===fi&&A(G,U),G.needsUpdate=!1}h=this.type,p.needsUpdate=!1,e.setRenderTarget(S,M,R)};function A(L,w){const U=t.update(x);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new vr(r.x,r.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,e.setRenderTarget(L.mapPass),e.clear(),e.renderBufferDirect(w,null,U,d,x,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,e.setRenderTarget(L.map),e.clear(),e.renderBufferDirect(w,null,U,m,x,null)}function T(L,w,U,S){let M=null;const R=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)M=R;else if(M=U.isPointLight===!0?c:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=M.uuid,k=w.uuid;let j=l[V];j===void 0&&(j={},l[V]=j);let K=j[k];K===void 0&&(K=M.clone(),j[k]=K,w.addEventListener("dispose",I)),M=K}if(M.visible=w.visible,M.wireframe=w.wireframe,S===fi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=e.properties.get(M);V.light=U}return M}function y(L,w,U,S,M){if(L.visible===!1)return;if(L.layers.test(w.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===fi)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);const k=t.update(L),j=L.material;if(Array.isArray(j)){const K=k.groups;for(let X=0,Z=K.length;X<Z;X++){const G=K[X],rt=j[G.materialIndex];if(rt&&rt.visible){const ht=T(L,rt,S,M);L.onBeforeShadow(e,L,w,U,k,ht,G),e.renderBufferDirect(U,null,k,ht,L,G),L.onAfterShadow(e,L,w,U,k,ht,G)}}}else if(j.visible){const K=T(L,j,S,M);L.onBeforeShadow(e,L,w,U,k,K,null),e.renderBufferDirect(U,null,k,K,L,null),L.onAfterShadow(e,L,w,U,k,K,null)}}const V=L.children;for(let k=0,j=V.length;k<j;k++)y(V[k],w,U,S,M)}function I(L){L.target.removeEventListener("dispose",I);for(const U in l){const S=l[U],M=L.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const jv={[Uc]:Nc,[Fc]:kc,[Oc]:zc,[es]:Bc,[Nc]:Uc,[kc]:Fc,[zc]:Oc,[Bc]:es};function Kv(e,t){function n(){let C=!1;const nt=new we;let z=null;const Y=new we(0,0,0,0);return{setMask:function(ct){z!==ct&&!C&&(e.colorMask(ct,ct,ct,ct),z=ct)},setLocked:function(ct){C=ct},setClear:function(ct,ot,Nt,Me,Xe){Xe===!0&&(ct*=Me,ot*=Me,Nt*=Me),nt.set(ct,ot,Nt,Me),Y.equals(nt)===!1&&(e.clearColor(ct,ot,Nt,Me),Y.copy(nt))},reset:function(){C=!1,z=null,Y.set(-1,0,0,0)}}}function i(){let C=!1,nt=!1,z=null,Y=null,ct=null;return{setReversed:function(ot){if(nt!==ot){const Nt=t.get("EXT_clip_control");nt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const Me=ct;ct=null,this.setClear(Me)}nt=ot},getReversed:function(){return nt},setTest:function(ot){ot?st(e.DEPTH_TEST):Pt(e.DEPTH_TEST)},setMask:function(ot){z!==ot&&!C&&(e.depthMask(ot),z=ot)},setFunc:function(ot){if(nt&&(ot=jv[ot]),Y!==ot){switch(ot){case Uc:e.depthFunc(e.NEVER);break;case Nc:e.depthFunc(e.ALWAYS);break;case Fc:e.depthFunc(e.LESS);break;case es:e.depthFunc(e.LEQUAL);break;case Oc:e.depthFunc(e.EQUAL);break;case Bc:e.depthFunc(e.GEQUAL);break;case kc:e.depthFunc(e.GREATER);break;case zc:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Y=ot}},setLocked:function(ot){C=ot},setClear:function(ot){ct!==ot&&(nt&&(ot=1-ot),e.clearDepth(ot),ct=ot)},reset:function(){C=!1,z=null,Y=null,ct=null,nt=!1}}}function r(){let C=!1,nt=null,z=null,Y=null,ct=null,ot=null,Nt=null,Me=null,Xe=null;return{setTest:function(ne){C||(ne?st(e.STENCIL_TEST):Pt(e.STENCIL_TEST))},setMask:function(ne){nt!==ne&&!C&&(e.stencilMask(ne),nt=ne)},setFunc:function(ne,Un,ai){(z!==ne||Y!==Un||ct!==ai)&&(e.stencilFunc(ne,Un,ai),z=ne,Y=Un,ct=ai)},setOp:function(ne,Un,ai){(ot!==ne||Nt!==Un||Me!==ai)&&(e.stencilOp(ne,Un,ai),ot=ne,Nt=Un,Me=ai)},setLocked:function(ne){C=ne},setClear:function(ne){Xe!==ne&&(e.clearStencil(ne),Xe=ne)},reset:function(){C=!1,nt=null,z=null,Y=null,ct=null,ot=null,Nt=null,Me=null,Xe=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,m=[],_=null,x=!1,p=null,h=null,A=null,T=null,y=null,I=null,L=null,w=new ie(0,0,0),U=0,S=!1,M=null,R=null,V=null,k=null,j=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const G=e.getParameter(e.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=Z>=2);let rt=null,ht={};const yt=e.getParameter(e.SCISSOR_BOX),kt=e.getParameter(e.VIEWPORT),ae=new we().fromArray(yt),W=new we().fromArray(kt);function tt(C,nt,z,Y){const ct=new Uint8Array(4),ot=e.createTexture();e.bindTexture(C,ot),e.texParameteri(C,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(C,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Nt=0;Nt<z;Nt++)C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY?e.texImage3D(nt,0,e.RGBA,1,1,Y,0,e.RGBA,e.UNSIGNED_BYTE,ct):e.texImage2D(nt+Nt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ct);return ot}const xt={};xt[e.TEXTURE_2D]=tt(e.TEXTURE_2D,e.TEXTURE_2D,1),xt[e.TEXTURE_CUBE_MAP]=tt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[e.TEXTURE_2D_ARRAY]=tt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),xt[e.TEXTURE_3D]=tt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(e.DEPTH_TEST),a.setFunc(es),Ht(!1),Vt(Ju),st(e.CULL_FACE),b(ki);function st(C){u[C]!==!0&&(e.enable(C),u[C]=!0)}function Pt(C){u[C]!==!1&&(e.disable(C),u[C]=!1)}function Ut(C,nt){return f[C]!==nt?(e.bindFramebuffer(C,nt),f[C]=nt,C===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=nt),C===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=nt),!0):!1}function zt(C,nt){let z=m,Y=!1;if(C){z=d.get(nt),z===void 0&&(z=[],d.set(nt,z));const ct=C.textures;if(z.length!==ct.length||z[0]!==e.COLOR_ATTACHMENT0){for(let ot=0,Nt=ct.length;ot<Nt;ot++)z[ot]=e.COLOR_ATTACHMENT0+ot;z.length=ct.length,Y=!0}}else z[0]!==e.BACK&&(z[0]=e.BACK,Y=!0);Y&&e.drawBuffers(z)}function me(C){return _!==C?(e.useProgram(C),_=C,!0):!1}const qt={[rr]:e.FUNC_ADD,[o0]:e.FUNC_SUBTRACT,[c0]:e.FUNC_REVERSE_SUBTRACT};qt[l0]=e.MIN,qt[u0]=e.MAX;const Te={[h0]:e.ZERO,[f0]:e.ONE,[d0]:e.SRC_COLOR,[Dc]:e.SRC_ALPHA,[x0]:e.SRC_ALPHA_SATURATE,[_0]:e.DST_COLOR,[m0]:e.DST_ALPHA,[p0]:e.ONE_MINUS_SRC_COLOR,[Ic]:e.ONE_MINUS_SRC_ALPHA,[v0]:e.ONE_MINUS_DST_COLOR,[g0]:e.ONE_MINUS_DST_ALPHA,[M0]:e.CONSTANT_COLOR,[S0]:e.ONE_MINUS_CONSTANT_COLOR,[E0]:e.CONSTANT_ALPHA,[y0]:e.ONE_MINUS_CONSTANT_ALPHA};function b(C,nt,z,Y,ct,ot,Nt,Me,Xe,ne){if(C===ki){x===!0&&(Pt(e.BLEND),x=!1);return}if(x===!1&&(st(e.BLEND),x=!0),C!==a0){if(C!==p||ne!==S){if((h!==rr||y!==rr)&&(e.blendEquation(e.FUNC_ADD),h=rr,y=rr),ne)switch(C){case Kr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case eo:e.blendFunc(e.ONE,e.ONE);break;case Qu:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case th:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Kr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case eo:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Qu:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case th:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}A=null,T=null,I=null,L=null,w.set(0,0,0),U=0,p=C,S=ne}return}ct=ct||nt,ot=ot||z,Nt=Nt||Y,(nt!==h||ct!==y)&&(e.blendEquationSeparate(qt[nt],qt[ct]),h=nt,y=ct),(z!==A||Y!==T||ot!==I||Nt!==L)&&(e.blendFuncSeparate(Te[z],Te[Y],Te[ot],Te[Nt]),A=z,T=Y,I=ot,L=Nt),(Me.equals(w)===!1||Xe!==U)&&(e.blendColor(Me.r,Me.g,Me.b,Xe),w.copy(Me),U=Xe),p=C,S=!1}function yn(C,nt){C.side===di?Pt(e.CULL_FACE):st(e.CULL_FACE);let z=C.side===sn;nt&&(z=!z),Ht(z),C.blending===Kr&&C.transparent===!1?b(ki):b(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const Y=C.stencilWrite;o.setTest(Y),Y&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ue(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?st(e.SAMPLE_ALPHA_TO_COVERAGE):Pt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(C){M!==C&&(C?e.frontFace(e.CW):e.frontFace(e.CCW),M=C)}function Vt(C){C!==i0?(st(e.CULL_FACE),C!==R&&(C===Ju?e.cullFace(e.BACK):C===r0?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Pt(e.CULL_FACE),R=C}function Tt(C){C!==V&&(X&&e.lineWidth(C),V=C)}function ue(C,nt,z){C?(st(e.POLYGON_OFFSET_FILL),(k!==nt||j!==z)&&(e.polygonOffset(nt,z),k=nt,j=z)):Pt(e.POLYGON_OFFSET_FILL)}function At(C){C?st(e.SCISSOR_TEST):Pt(e.SCISSOR_TEST)}function E(C){C===void 0&&(C=e.TEXTURE0+K-1),rt!==C&&(e.activeTexture(C),rt=C)}function g(C,nt,z){z===void 0&&(rt===null?z=e.TEXTURE0+K-1:z=rt);let Y=ht[z];Y===void 0&&(Y={type:void 0,texture:void 0},ht[z]=Y),(Y.type!==C||Y.texture!==nt)&&(rt!==z&&(e.activeTexture(z),rt=z),e.bindTexture(C,nt||xt[C]),Y.type=C,Y.texture=nt)}function N(){const C=ht[rt];C!==void 0&&C.type!==void 0&&(e.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function q(){try{e.compressedTexImage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{e.compressedTexImage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function H(){try{e.texSubImage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function St(){try{e.texSubImage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function at(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ft(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Yt(){try{e.texStorage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{e.texStorage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pt(){try{e.texImage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ct(){try{e.texImage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Lt(C){ae.equals(C)===!1&&(e.scissor(C.x,C.y,C.z,C.w),ae.copy(C))}function mt(C){W.equals(C)===!1&&(e.viewport(C.x,C.y,C.z,C.w),W.copy(C))}function Wt(C,nt){let z=l.get(nt);z===void 0&&(z=new WeakMap,l.set(nt,z));let Y=z.get(C);Y===void 0&&(Y=e.getUniformBlockIndex(nt,C.name),z.set(C,Y))}function Ot(C,nt){const Y=l.get(nt).get(C);c.get(nt)!==Y&&(e.uniformBlockBinding(nt,Y,C.__bindingPointIndex),c.set(nt,Y))}function le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},rt=null,ht={},f={},d=new WeakMap,m=[],_=null,x=!1,p=null,h=null,A=null,T=null,y=null,I=null,L=null,w=new ie(0,0,0),U=0,S=!1,M=null,R=null,V=null,k=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),W.set(0,0,e.canvas.width,e.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:st,disable:Pt,bindFramebuffer:Ut,drawBuffers:zt,useProgram:me,setBlending:b,setMaterial:yn,setFlipSided:Ht,setCullFace:Vt,setLineWidth:Tt,setPolygonOffset:ue,setScissorTest:At,activeTexture:E,bindTexture:g,unbindTexture:N,compressedTexImage2D:q,compressedTexImage3D:$,texImage2D:pt,texImage3D:Ct,updateUBOMapping:Wt,uniformBlockBinding:Ot,texStorage2D:Yt,texStorage3D:Q,texSubImage2D:H,texSubImage3D:St,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Lt,viewport:mt,reset:le}}function $v(e,t,n,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return m?new OffscreenCanvas(E,g):ro("canvas")}function x(E,g,N){let q=1;const $=At(E);if(($.width>N||$.height>N)&&(q=N/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const H=Math.floor(q*$.width),St=Math.floor(q*$.height);f===void 0&&(f=_(H,St));const at=g?_(H,St):f;return at.width=H,at.height=St,at.getContext("2d").drawImage(E,0,0,H,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+H+"x"+St+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function p(E){return E.generateMipmaps}function h(E){e.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function T(E,g,N,q,$=!1){if(E!==null){if(e[E]!==void 0)return e[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let H=g;if(g===e.RED&&(N===e.FLOAT&&(H=e.R32F),N===e.HALF_FLOAT&&(H=e.R16F),N===e.UNSIGNED_BYTE&&(H=e.R8)),g===e.RED_INTEGER&&(N===e.UNSIGNED_BYTE&&(H=e.R8UI),N===e.UNSIGNED_SHORT&&(H=e.R16UI),N===e.UNSIGNED_INT&&(H=e.R32UI),N===e.BYTE&&(H=e.R8I),N===e.SHORT&&(H=e.R16I),N===e.INT&&(H=e.R32I)),g===e.RG&&(N===e.FLOAT&&(H=e.RG32F),N===e.HALF_FLOAT&&(H=e.RG16F),N===e.UNSIGNED_BYTE&&(H=e.RG8)),g===e.RG_INTEGER&&(N===e.UNSIGNED_BYTE&&(H=e.RG8UI),N===e.UNSIGNED_SHORT&&(H=e.RG16UI),N===e.UNSIGNED_INT&&(H=e.RG32UI),N===e.BYTE&&(H=e.RG8I),N===e.SHORT&&(H=e.RG16I),N===e.INT&&(H=e.RG32I)),g===e.RGB_INTEGER&&(N===e.UNSIGNED_BYTE&&(H=e.RGB8UI),N===e.UNSIGNED_SHORT&&(H=e.RGB16UI),N===e.UNSIGNED_INT&&(H=e.RGB32UI),N===e.BYTE&&(H=e.RGB8I),N===e.SHORT&&(H=e.RGB16I),N===e.INT&&(H=e.RGB32I)),g===e.RGBA_INTEGER&&(N===e.UNSIGNED_BYTE&&(H=e.RGBA8UI),N===e.UNSIGNED_SHORT&&(H=e.RGBA16UI),N===e.UNSIGNED_INT&&(H=e.RGBA32UI),N===e.BYTE&&(H=e.RGBA8I),N===e.SHORT&&(H=e.RGBA16I),N===e.INT&&(H=e.RGBA32I)),g===e.RGB&&N===e.UNSIGNED_INT_5_9_9_9_REV&&(H=e.RGB9_E5),g===e.RGBA){const St=$?no:Zt.getTransfer(q);N===e.FLOAT&&(H=e.RGBA32F),N===e.HALF_FLOAT&&(H=e.RGBA16F),N===e.UNSIGNED_BYTE&&(H=St===re?e.SRGB8_ALPHA8:e.RGBA8),N===e.UNSIGNED_SHORT_4_4_4_4&&(H=e.RGBA4),N===e.UNSIGNED_SHORT_5_5_5_1&&(H=e.RGB5_A1)}return(H===e.R16F||H===e.R32F||H===e.RG16F||H===e.RG32F||H===e.RGBA16F||H===e.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function y(E,g){let N;return E?g===null||g===_r||g===rs?N=e.DEPTH24_STENCIL8:g===gi?N=e.DEPTH32F_STENCIL8:g===js&&(N=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===_r||g===rs?N=e.DEPTH_COMPONENT24:g===gi?N=e.DEPTH_COMPONENT32F:g===js&&(N=e.DEPTH_COMPONENT16),N}function I(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Hn&&E.minFilter!==$n?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function L(E){const g=E.target;g.removeEventListener("dispose",L),U(g),g.isVideoTexture&&u.delete(g)}function w(E){const g=E.target;g.removeEventListener("dispose",w),M(g)}function U(E){const g=i.get(E);if(g.__webglInit===void 0)return;const N=E.source,q=d.get(N);if(q){const $=q[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(E),Object.keys(q).length===0&&d.delete(N)}i.remove(E)}function S(E){const g=i.get(E);e.deleteTexture(g.__webglTexture);const N=E.source,q=d.get(N);delete q[g.__cacheKey],a.memory.textures--}function M(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let $=0;$<g.__webglFramebuffer[q].length;$++)e.deleteFramebuffer(g.__webglFramebuffer[q][$]);else e.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)e.deleteFramebuffer(g.__webglFramebuffer[q]);else e.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&e.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&e.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=E.textures;for(let q=0,$=N.length;q<$;q++){const H=i.get(N[q]);H.__webglTexture&&(e.deleteTexture(H.__webglTexture),a.memory.textures--),i.remove(N[q])}i.remove(E)}let R=0;function V(){R=0}function k(){const E=R;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function j(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function K(E,g){const N=i.get(E);if(E.isVideoTexture&&Tt(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(N,E,g);return}}n.bindTexture(e.TEXTURE_2D,N.__webglTexture,e.TEXTURE0+g)}function X(E,g){const N=i.get(E);if(E.version>0&&N.__version!==E.version){W(N,E,g);return}n.bindTexture(e.TEXTURE_2D_ARRAY,N.__webglTexture,e.TEXTURE0+g)}function Z(E,g){const N=i.get(E);if(E.version>0&&N.__version!==E.version){W(N,E,g);return}n.bindTexture(e.TEXTURE_3D,N.__webglTexture,e.TEXTURE0+g)}function G(E,g){const N=i.get(E);if(E.version>0&&N.__version!==E.version){tt(N,E,g);return}n.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+g)}const rt={[Vc]:e.REPEAT,[ar]:e.CLAMP_TO_EDGE,[Wc]:e.MIRRORED_REPEAT},ht={[Hn]:e.NEAREST,[I0]:e.NEAREST_MIPMAP_NEAREST,[ma]:e.NEAREST_MIPMAP_LINEAR,[$n]:e.LINEAR,[Vo]:e.LINEAR_MIPMAP_NEAREST,[or]:e.LINEAR_MIPMAP_LINEAR},yt={[B0]:e.NEVER,[W0]:e.ALWAYS,[k0]:e.LESS,[Sd]:e.LEQUAL,[z0]:e.EQUAL,[V0]:e.GEQUAL,[G0]:e.GREATER,[H0]:e.NOTEQUAL};function kt(E,g){if(g.type===gi&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===$n||g.magFilter===Vo||g.magFilter===ma||g.magFilter===or||g.minFilter===$n||g.minFilter===Vo||g.minFilter===ma||g.minFilter===or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,rt[g.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,rt[g.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,rt[g.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,ht[g.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,ht[g.minFilter]),g.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,yt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Hn||g.minFilter!==ma&&g.minFilter!==or||g.type===gi&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ae(E,g){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",L));const q=g.source;let $=d.get(q);$===void 0&&($={},d.set(q,$));const H=j(g);if(H!==E.__cacheKey){$[H]===void 0&&($[H]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,N=!0),$[H].usedTimes++;const St=$[E.__cacheKey];St!==void 0&&($[E.__cacheKey].usedTimes--,St.usedTimes===0&&S(g)),E.__cacheKey=H,E.__webglTexture=$[H].texture}return N}function W(E,g,N){let q=e.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=e.TEXTURE_3D);const $=ae(E,g),H=g.source;n.bindTexture(q,E.__webglTexture,e.TEXTURE0+N);const St=i.get(H);if(H.version!==St.__version||$===!0){n.activeTexture(e.TEXTURE0+N);const at=Zt.getPrimaries(Zt.workingColorSpace),ft=g.colorSpace===Fi?null:Zt.getPrimaries(g.colorSpace),Yt=g.colorSpace===Fi||at===ft?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let Q=x(g.image,!1,r.maxTextureSize);Q=ue(g,Q);const pt=s.convert(g.format,g.colorSpace),Ct=s.convert(g.type);let Lt=T(g.internalFormat,pt,Ct,g.colorSpace,g.isVideoTexture);kt(q,g);let mt;const Wt=g.mipmaps,Ot=g.isVideoTexture!==!0,le=St.__version===void 0||$===!0,C=H.dataReady,nt=I(g,Q);if(g.isDepthTexture)Lt=y(g.format===ss,g.type),le&&(Ot?n.texStorage2D(e.TEXTURE_2D,1,Lt,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,Lt,Q.width,Q.height,0,pt,Ct,null));else if(g.isDataTexture)if(Wt.length>0){Ot&&le&&n.texStorage2D(e.TEXTURE_2D,nt,Lt,Wt[0].width,Wt[0].height);for(let z=0,Y=Wt.length;z<Y;z++)mt=Wt[z],Ot?C&&n.texSubImage2D(e.TEXTURE_2D,z,0,0,mt.width,mt.height,pt,Ct,mt.data):n.texImage2D(e.TEXTURE_2D,z,Lt,mt.width,mt.height,0,pt,Ct,mt.data);g.generateMipmaps=!1}else Ot?(le&&n.texStorage2D(e.TEXTURE_2D,nt,Lt,Q.width,Q.height),C&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,Ct,Q.data)):n.texImage2D(e.TEXTURE_2D,0,Lt,Q.width,Q.height,0,pt,Ct,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ot&&le&&n.texStorage3D(e.TEXTURE_2D_ARRAY,nt,Lt,Wt[0].width,Wt[0].height,Q.depth);for(let z=0,Y=Wt.length;z<Y;z++)if(mt=Wt[z],g.format!==Gn)if(pt!==null)if(Ot){if(C)if(g.layerUpdates.size>0){const ct=Th(mt.width,mt.height,g.format,g.type);for(const ot of g.layerUpdates){const Nt=mt.data.subarray(ot*ct/mt.data.BYTES_PER_ELEMENT,(ot+1)*ct/mt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,ot,mt.width,mt.height,1,pt,Nt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,z,Lt,mt.width,mt.height,Q.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?C&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,0,mt.width,mt.height,Q.depth,pt,Ct,mt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,z,Lt,mt.width,mt.height,Q.depth,0,pt,Ct,mt.data)}else{Ot&&le&&n.texStorage2D(e.TEXTURE_2D,nt,Lt,Wt[0].width,Wt[0].height);for(let z=0,Y=Wt.length;z<Y;z++)mt=Wt[z],g.format!==Gn?pt!==null?Ot?C&&n.compressedTexSubImage2D(e.TEXTURE_2D,z,0,0,mt.width,mt.height,pt,mt.data):n.compressedTexImage2D(e.TEXTURE_2D,z,Lt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?C&&n.texSubImage2D(e.TEXTURE_2D,z,0,0,mt.width,mt.height,pt,Ct,mt.data):n.texImage2D(e.TEXTURE_2D,z,Lt,mt.width,mt.height,0,pt,Ct,mt.data)}else if(g.isDataArrayTexture)if(Ot){if(le&&n.texStorage3D(e.TEXTURE_2D_ARRAY,nt,Lt,Q.width,Q.height,Q.depth),C)if(g.layerUpdates.size>0){const z=Th(Q.width,Q.height,g.format,g.type);for(const Y of g.layerUpdates){const ct=Q.data.subarray(Y*z/Q.data.BYTES_PER_ELEMENT,(Y+1)*z/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,pt,Ct,ct)}g.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,Ct,Q.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Lt,Q.width,Q.height,Q.depth,0,pt,Ct,Q.data);else if(g.isData3DTexture)Ot?(le&&n.texStorage3D(e.TEXTURE_3D,nt,Lt,Q.width,Q.height,Q.depth),C&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,Ct,Q.data)):n.texImage3D(e.TEXTURE_3D,0,Lt,Q.width,Q.height,Q.depth,0,pt,Ct,Q.data);else if(g.isFramebufferTexture){if(le)if(Ot)n.texStorage2D(e.TEXTURE_2D,nt,Lt,Q.width,Q.height);else{let z=Q.width,Y=Q.height;for(let ct=0;ct<nt;ct++)n.texImage2D(e.TEXTURE_2D,ct,Lt,z,Y,0,pt,Ct,null),z>>=1,Y>>=1}}else if(Wt.length>0){if(Ot&&le){const z=At(Wt[0]);n.texStorage2D(e.TEXTURE_2D,nt,Lt,z.width,z.height)}for(let z=0,Y=Wt.length;z<Y;z++)mt=Wt[z],Ot?C&&n.texSubImage2D(e.TEXTURE_2D,z,0,0,pt,Ct,mt):n.texImage2D(e.TEXTURE_2D,z,Lt,pt,Ct,mt);g.generateMipmaps=!1}else if(Ot){if(le){const z=At(Q);n.texStorage2D(e.TEXTURE_2D,nt,Lt,z.width,z.height)}C&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,pt,Ct,Q)}else n.texImage2D(e.TEXTURE_2D,0,Lt,pt,Ct,Q);p(g)&&h(q),St.__version=H.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function tt(E,g,N){if(g.image.length!==6)return;const q=ae(E,g),$=g.source;n.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+N);const H=i.get($);if($.version!==H.__version||q===!0){n.activeTexture(e.TEXTURE0+N);const St=Zt.getPrimaries(Zt.workingColorSpace),at=g.colorSpace===Fi?null:Zt.getPrimaries(g.colorSpace),ft=g.colorSpace===Fi||St===at?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Yt=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,pt=[];for(let Y=0;Y<6;Y++)!Yt&&!Q?pt[Y]=x(g.image[Y],!0,r.maxCubemapSize):pt[Y]=Q?g.image[Y].image:g.image[Y],pt[Y]=ue(g,pt[Y]);const Ct=pt[0],Lt=s.convert(g.format,g.colorSpace),mt=s.convert(g.type),Wt=T(g.internalFormat,Lt,mt,g.colorSpace),Ot=g.isVideoTexture!==!0,le=H.__version===void 0||q===!0,C=$.dataReady;let nt=I(g,Ct);kt(e.TEXTURE_CUBE_MAP,g);let z;if(Yt){Ot&&le&&n.texStorage2D(e.TEXTURE_CUBE_MAP,nt,Wt,Ct.width,Ct.height);for(let Y=0;Y<6;Y++){z=pt[Y].mipmaps;for(let ct=0;ct<z.length;ct++){const ot=z[ct];g.format!==Gn?Lt!==null?Ot?C&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,0,0,ot.width,ot.height,Lt,ot.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,Wt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,0,0,ot.width,ot.height,Lt,mt,ot.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,Wt,ot.width,ot.height,0,Lt,mt,ot.data)}}}else{if(z=g.mipmaps,Ot&&le){z.length>0&&nt++;const Y=At(pt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,nt,Wt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){Ot?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,pt[Y].width,pt[Y].height,Lt,mt,pt[Y].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Wt,pt[Y].width,pt[Y].height,0,Lt,mt,pt[Y].data);for(let ct=0;ct<z.length;ct++){const Nt=z[ct].image[Y].image;Ot?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,0,0,Nt.width,Nt.height,Lt,mt,Nt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,Wt,Nt.width,Nt.height,0,Lt,mt,Nt.data)}}else{Ot?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Lt,mt,pt[Y]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Wt,Lt,mt,pt[Y]);for(let ct=0;ct<z.length;ct++){const ot=z[ct];Ot?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,0,0,Lt,mt,ot.image[Y]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,Wt,Lt,mt,ot.image[Y])}}}p(g)&&h(e.TEXTURE_CUBE_MAP),H.__version=$.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function xt(E,g,N,q,$,H){const St=s.convert(N.format,N.colorSpace),at=s.convert(N.type),ft=T(N.internalFormat,St,at,N.colorSpace),Yt=i.get(g),Q=i.get(N);if(Q.__renderTarget=g,!Yt.__hasExternalTextures){const pt=Math.max(1,g.width>>H),Ct=Math.max(1,g.height>>H);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?n.texImage3D($,H,ft,pt,Ct,g.depth,0,St,at,null):n.texImage2D($,H,ft,pt,Ct,0,St,at,null)}n.bindFramebuffer(e.FRAMEBUFFER,E),Vt(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,$,Q.__webglTexture,0,Ht(g)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,$,Q.__webglTexture,H),n.bindFramebuffer(e.FRAMEBUFFER,null)}function st(E,g,N){if(e.bindRenderbuffer(e.RENDERBUFFER,E),g.depthBuffer){const q=g.depthTexture,$=q&&q.isDepthTexture?q.type:null,H=y(g.stencilBuffer,$),St=g.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=Ht(g);Vt(g)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,at,H,g.width,g.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,at,H,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,H,g.width,g.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,St,e.RENDERBUFFER,E)}else{const q=g.textures;for(let $=0;$<q.length;$++){const H=q[$],St=s.convert(H.format,H.colorSpace),at=s.convert(H.type),ft=T(H.internalFormat,St,at,H.colorSpace),Yt=Ht(g);N&&Vt(g)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Yt,ft,g.width,g.height):Vt(g)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Yt,ft,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,ft,g.width,g.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Pt(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(g.depthTexture);q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),K(g.depthTexture,0);const $=q.__webglTexture,H=Ht(g);if(g.depthTexture.format===$r)Vt(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,$,0,H):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,$,0);else if(g.depthTexture.format===ss)Vt(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,$,0,H):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ut(E){const g=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=q}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Pt(g.__webglFramebuffer,E)}else if(N){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=e.createRenderbuffer(),st(g.__webglDepthbuffer[q],E,!1);else{const $=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,H),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,H)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=e.createRenderbuffer(),st(g.__webglDepthbuffer,E,!1);else{const q=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,$),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,$)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function zt(E,g,N){const q=i.get(E);g!==void 0&&xt(q.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),N!==void 0&&Ut(E)}function me(E){const g=E.texture,N=i.get(E),q=i.get(g);E.addEventListener("dispose",w);const $=E.textures,H=E.isWebGLCubeRenderTarget===!0,St=$.length>1;if(St||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=g.version,a.memory.textures++),H){N.__webglFramebuffer=[];for(let at=0;at<6;at++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[at]=[];for(let ft=0;ft<g.mipmaps.length;ft++)N.__webglFramebuffer[at][ft]=e.createFramebuffer()}else N.__webglFramebuffer[at]=e.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let at=0;at<g.mipmaps.length;at++)N.__webglFramebuffer[at]=e.createFramebuffer()}else N.__webglFramebuffer=e.createFramebuffer();if(St)for(let at=0,ft=$.length;at<ft;at++){const Yt=i.get($[at]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=e.createTexture(),a.memory.textures++)}if(E.samples>0&&Vt(E)===!1){N.__webglMultisampledFramebuffer=e.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let at=0;at<$.length;at++){const ft=$[at];N.__webglColorRenderbuffer[at]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,N.__webglColorRenderbuffer[at]);const Yt=s.convert(ft.format,ft.colorSpace),Q=s.convert(ft.type),pt=T(ft.internalFormat,Yt,Q,ft.colorSpace,E.isXRRenderTarget===!0),Ct=Ht(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ct,pt,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+at,e.RENDERBUFFER,N.__webglColorRenderbuffer[at])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=e.createRenderbuffer(),st(N.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(H){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),kt(e.TEXTURE_CUBE_MAP,g);for(let at=0;at<6;at++)if(g.mipmaps&&g.mipmaps.length>0)for(let ft=0;ft<g.mipmaps.length;ft++)xt(N.__webglFramebuffer[at][ft],E,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else xt(N.__webglFramebuffer[at],E,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(g)&&h(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(St){for(let at=0,ft=$.length;at<ft;at++){const Yt=$[at],Q=i.get(Yt);n.bindTexture(e.TEXTURE_2D,Q.__webglTexture),kt(e.TEXTURE_2D,Yt),xt(N.__webglFramebuffer,E,Yt,e.COLOR_ATTACHMENT0+at,e.TEXTURE_2D,0),p(Yt)&&h(e.TEXTURE_2D)}n.unbindTexture()}else{let at=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(at,q.__webglTexture),kt(at,g),g.mipmaps&&g.mipmaps.length>0)for(let ft=0;ft<g.mipmaps.length;ft++)xt(N.__webglFramebuffer[ft],E,g,e.COLOR_ATTACHMENT0,at,ft);else xt(N.__webglFramebuffer,E,g,e.COLOR_ATTACHMENT0,at,0);p(g)&&h(at),n.unbindTexture()}E.depthBuffer&&Ut(E)}function qt(E){const g=E.textures;for(let N=0,q=g.length;N<q;N++){const $=g[N];if(p($)){const H=A(E),St=i.get($).__webglTexture;n.bindTexture(H,St),h(H),n.unbindTexture()}}}const Te=[],b=[];function yn(E){if(E.samples>0){if(Vt(E)===!1){const g=E.textures,N=E.width,q=E.height;let $=e.COLOR_BUFFER_BIT;const H=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,St=i.get(E),at=g.length>1;if(at)for(let ft=0;ft<g.length;ft++)n.bindFramebuffer(e.FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,St.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ft=0;ft<g.length;ft++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),at){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);const Yt=i.get(g[ft]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Yt,0)}e.blitFramebuffer(0,0,N,q,0,0,N,q,$,e.NEAREST),c===!0&&(Te.length=0,b.length=0,Te.push(e.COLOR_ATTACHMENT0+ft),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Te.push(H),b.push(H),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,b)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Te))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<g.length;ft++){n.bindFramebuffer(e.FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);const Yt=i.get(g[ft]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,St.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,Yt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const g=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[g])}}}function Ht(E){return Math.min(r.maxSamples,E.samples)}function Vt(E){const g=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Tt(E){const g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function ue(E,g){const N=E.colorSpace,q=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==as&&N!==Fi&&(Zt.getTransfer(N)===re?(q!==Gn||$!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}function At(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=zt,this.setupRenderTarget=me,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Vt}function Zv(e,t){function n(i,r=Fi){let s;const a=Zt.getTransfer(r);if(i===Mi)return e.UNSIGNED_BYTE;if(i===Hl)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Vl)return e.UNSIGNED_SHORT_5_5_5_1;if(i===dd)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===hd)return e.BYTE;if(i===fd)return e.SHORT;if(i===js)return e.UNSIGNED_SHORT;if(i===Gl)return e.INT;if(i===_r)return e.UNSIGNED_INT;if(i===gi)return e.FLOAT;if(i===Qs)return e.HALF_FLOAT;if(i===pd)return e.ALPHA;if(i===md)return e.RGB;if(i===Gn)return e.RGBA;if(i===gd)return e.LUMINANCE;if(i===_d)return e.LUMINANCE_ALPHA;if(i===$r)return e.DEPTH_COMPONENT;if(i===ss)return e.DEPTH_STENCIL;if(i===vd)return e.RED;if(i===Wl)return e.RED_INTEGER;if(i===xd)return e.RG;if(i===Xl)return e.RG_INTEGER;if(i===ql)return e.RGBA_INTEGER;if(i===qa||i===Ya||i===ja||i===Ka)if(a===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xc||i===qc||i===Yc||i===jc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kc||i===$c||i===Zc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kc||i===$c)return a===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zc)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jc||i===Qc||i===tl||i===el||i===nl||i===il||i===rl||i===sl||i===al||i===ol||i===cl||i===ll||i===ul||i===hl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jc)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qc)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===el)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===il)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===al)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ol)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ll)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ul)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$a||i===fl||i===dl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===$a)return a===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Md||i===pl||i===ml||i===gl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===$a)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rs?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const Jv={type:"move"};class vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const x of t.hand.values()){const p=n.getJointPose(x,i),h=this._getHandJoint(l,x);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jv)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Na;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const Qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t3=`
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

}`;class e3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const r=new an,s=t.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Ei({vertexShader:Qv,fragmentShader:t3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vi(new go(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n3 extends xs{constructor(t,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,m=null,_=null;const x=new e3,p=n.getContextAttributes();let h=null,A=null;const T=[],y=[],I=new ce;let L=null;const w=new kn;w.viewport=new we;const U=new kn;U.viewport=new we;const S=[w,U],M=new yg;let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let tt=T[W];return tt===void 0&&(tt=new vc,T[W]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(W){let tt=T[W];return tt===void 0&&(tt=new vc,T[W]=tt),tt.getGripSpace()},this.getHand=function(W){let tt=T[W];return tt===void 0&&(tt=new vc,T[W]=tt),tt.getHandSpace()};function k(W){const tt=y.indexOf(W.inputSource);if(tt===-1)return;const xt=T[tt];xt!==void 0&&(xt.update(W.inputSource,W.frame,l||a),xt.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",K);for(let W=0;W<T.length;W++){const tt=y[W];tt!==null&&(y[W]=null,T[W].disconnect(tt))}R=null,V=null,x.reset(),t.setRenderTarget(h),m=null,d=null,f=null,r=null,A=null,ae.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",j),r.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await n.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(I),r.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,tt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new vr(m.framebufferWidth,m.framebufferHeight,{format:Gn,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,xt=null,st=null;p.depth&&(st=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,tt=p.stencil?ss:$r,xt=p.stencil?rs:_r);const Pt={colorFormat:n.RGBA8,depthFormat:st,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Pt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),A=new vr(d.textureWidth,d.textureHeight,{format:Gn,type:Mi,depthTexture:new Fd(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(W){for(let tt=0;tt<W.removed.length;tt++){const xt=W.removed[tt],st=y.indexOf(xt);st>=0&&(y[st]=null,T[st].disconnect(xt))}for(let tt=0;tt<W.added.length;tt++){const xt=W.added[tt];let st=y.indexOf(xt);if(st===-1){for(let Ut=0;Ut<T.length;Ut++)if(Ut>=y.length){y.push(xt),st=Ut;break}else if(y[Ut]===null){y[Ut]=xt,st=Ut;break}if(st===-1)break}const Pt=T[st];Pt&&Pt.connect(xt)}}const X=new B,Z=new B;function G(W,tt,xt){X.setFromMatrixPosition(tt.matrixWorld),Z.setFromMatrixPosition(xt.matrixWorld);const st=X.distanceTo(Z),Pt=tt.projectionMatrix.elements,Ut=xt.projectionMatrix.elements,zt=Pt[14]/(Pt[10]-1),me=Pt[14]/(Pt[10]+1),qt=(Pt[9]+1)/Pt[5],Te=(Pt[9]-1)/Pt[5],b=(Pt[8]-1)/Pt[0],yn=(Ut[8]+1)/Ut[0],Ht=zt*b,Vt=zt*yn,Tt=st/(-b+yn),ue=Tt*-b;if(tt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ue),W.translateZ(Tt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Pt[10]===-1)W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const At=zt+Tt,E=me+Tt,g=Ht-ue,N=Vt+(st-ue),q=qt*me/E*At,$=Te*me/E*At;W.projectionMatrix.makePerspective(g,N,q,$,At,E),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function rt(W,tt){tt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(tt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let tt=W.near,xt=W.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(xt=x.depthFar)),M.near=U.near=w.near=tt,M.far=U.far=w.far=xt,(R!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,V=M.far),w.layers.mask=W.layers.mask|2,U.layers.mask=W.layers.mask|4,M.layers.mask=w.layers.mask|U.layers.mask;const st=W.parent,Pt=M.cameras;rt(M,st);for(let Ut=0;Ut<Pt.length;Ut++)rt(Pt[Ut],st);Pt.length===2?G(M,w,U):M.projectionMatrix.copy(w.projectionMatrix),ht(W,M,st)};function ht(W,tt,xt){xt===null?W.matrix.copy(tt.matrixWorld):(W.matrix.copy(xt.matrixWorld),W.matrix.invert(),W.matrix.multiply(tt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=_l*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let yt=null;function kt(W,tt){if(u=tt.getViewerPose(l||a),_=tt,u!==null){const xt=u.views;m!==null&&(t.setRenderTargetFramebuffer(A,m.framebuffer),t.setRenderTarget(A));let st=!1;xt.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let Ut=0;Ut<xt.length;Ut++){const zt=xt[Ut];let me=null;if(m!==null)me=m.getViewport(zt);else{const Te=f.getViewSubImage(d,zt);me=Te.viewport,Ut===0&&(t.setRenderTargetTextures(A,Te.colorTexture,d.ignoreDepthValues?void 0:Te.depthStencilTexture),t.setRenderTarget(A))}let qt=S[Ut];qt===void 0&&(qt=new kn,qt.layers.enable(Ut),qt.viewport=new we,S[Ut]=qt),qt.matrix.fromArray(zt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(zt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(me.x,me.y,me.width,me.height),Ut===0&&(M.matrix.copy(qt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(qt)}const Pt=r.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Ut=f.getDepthInformation(xt[0]);Ut&&Ut.isValid&&Ut.texture&&x.init(t,Ut,r.renderState)}}for(let xt=0;xt<T.length;xt++){const st=y[xt],Pt=T[xt];st!==null&&Pt!==void 0&&Pt.update(st,tt,l||a)}yt&&yt(W,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),_=null}const ae=new Bd;ae.setAnimationLoop(kt),this.setAnimationLoop=function(W){yt=W},this.dispose=function(){}}}const tr=new Si,i3=new Re;function r3(e,t){function n(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Ld(e)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,A,T,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,y)):h.isMeshMatcapMaterial?(s(p,h),_(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),x(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?c(p,h,A,T):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,n(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===sn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,n(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===sn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,n(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,n(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const A=t.get(h),T=A.envMap,y=A.envMapRotation;T&&(p.envMap.value=T,tr.copy(y),tr.x*=-1,tr.y*=-1,tr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),p.envMapRotation.value.setFromMatrix4(i3.makeRotationFromEuler(tr)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,A,T){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*A,p.scale.value=T*.5,h.map&&(p.map.value=h.map,n(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,A){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===sn&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){const A=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function s3(e,t,n,i){let r={},s={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,T){const y=T.program;i.uniformBlockBinding(A,y)}function l(A,T){let y=r[A.id];y===void 0&&(_(A),y=u(A),r[A.id]=y,A.addEventListener("dispose",p));const I=T.program;i.updateUBOMapping(A,I);const L=t.render.frame;s[A.id]!==L&&(d(A),s[A.id]=L)}function u(A){const T=f();A.__bindingPointIndex=T;const y=e.createBuffer(),I=A.__size,L=A.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,I,L),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,y),y}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=r[A.id],y=A.uniforms,I=A.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let L=0,w=y.length;L<w;L++){const U=Array.isArray(y[L])?y[L]:[y[L]];for(let S=0,M=U.length;S<M;S++){const R=U[S];if(m(R,L,S,I)===!0){const V=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let j=0;for(let K=0;K<k.length;K++){const X=k[K],Z=x(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,e.bufferSubData(e.UNIFORM_BUFFER,V+j,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,j),j+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,V,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(A,T,y,I){const L=A.value,w=T+"_"+y;if(I[w]===void 0)return typeof L=="number"||typeof L=="boolean"?I[w]=L:I[w]=L.clone(),!0;{const U=I[w];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return I[w]=L,!0}else if(U.equals(L)===!1)return U.copy(L),!0}return!1}function _(A){const T=A.uniforms;let y=0;const I=16;for(let w=0,U=T.length;w<U;w++){const S=Array.isArray(T[w])?T[w]:[T[w]];for(let M=0,R=S.length;M<R;M++){const V=S[M],k=Array.isArray(V.value)?V.value:[V.value];for(let j=0,K=k.length;j<K;j++){const X=k[j],Z=x(X),G=y%I,rt=G%Z.boundary,ht=G+rt;y+=rt,ht!==0&&I-ht<Z.storage&&(y+=I-ht),V.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=Z.storage}}}const L=y%I;return L>0&&(y+=I-L),A.__size=y,A.__cache={},this}function x(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function p(A){const T=A.target;T.removeEventListener("dispose",p);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),e.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const A in r)e.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class a3{constructor(t={}){const{canvas:n=q0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),x=new Int32Array(4);let p=null,h=null;const A=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this.toneMapping=zi,this.toneMappingExposure=1;const y=this;let I=!1,L=0,w=0,U=null,S=-1,M=null;const R=new we,V=new we;let k=null;const j=new ie(0);let K=0,X=n.width,Z=n.height,G=1,rt=null,ht=null;const yt=new we(0,0,X,Z),kt=new we(0,0,X,Z);let ae=!1;const W=new Ud;let tt=!1,xt=!1;const st=new Re,Pt=new Re,Ut=new B,zt=new we,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function Te(){return U===null?G:1}let b=i;function yn(v,P){return n.getContext(v,P)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zl}`),n.addEventListener("webglcontextlost",Y,!1),n.addEventListener("webglcontextrestored",ct,!1),n.addEventListener("webglcontextcreationerror",ot,!1),b===null){const P="webgl2";if(b=yn(P,v),b===null)throw yn(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ht,Vt,Tt,ue,At,E,g,N,q,$,H,St,at,ft,Yt,Q,pt,Ct,Lt,mt,Wt,Ot,le,C;function nt(){Ht=new m2(b),Ht.init(),Ot=new Zv(b,Ht),Vt=new l2(b,Ht,t,Ot),Tt=new Kv(b,Ht),Vt.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),ue=new v2(b),At=new Fv,E=new $v(b,Ht,Tt,At,Vt,Ot,ue),g=new h2(y),N=new p2(y),q=new Ag(b),le=new o2(b,q),$=new g2(b,q,ue,le),H=new M2(b,$,q,ue),Lt=new x2(b,Vt,E),Q=new u2(At),St=new Nv(y,g,N,Ht,Vt,le,Q),at=new r3(y,At),ft=new Bv,Yt=new Wv(Ht),Ct=new a2(y,g,N,Tt,H,m,c),pt=new Yv(y,H,Vt),C=new s3(b,ue,Vt,Tt),mt=new c2(b,Ht,ue),Wt=new _2(b,Ht,ue),ue.programs=St.programs,y.capabilities=Vt,y.extensions=Ht,y.properties=At,y.renderLists=ft,y.shadowMap=pt,y.state=Tt,y.info=ue}nt();const z=new n3(y,b);this.xr=z,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const v=Ht.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ht.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize(X,Z,!1))},this.getSize=function(v){return v.set(X,Z)},this.setSize=function(v,P,F=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,Z=P,n.width=Math.floor(v*G),n.height=Math.floor(P*G),F===!0&&(n.style.width=v+"px",n.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(X*G,Z*G).floor()},this.setDrawingBufferSize=function(v,P,F){X=v,Z=P,G=F,n.width=Math.floor(v*F),n.height=Math.floor(P*F),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(yt)},this.setViewport=function(v,P,F,O){v.isVector4?yt.set(v.x,v.y,v.z,v.w):yt.set(v,P,F,O),Tt.viewport(R.copy(yt).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(kt)},this.setScissor=function(v,P,F,O){v.isVector4?kt.set(v.x,v.y,v.z,v.w):kt.set(v,P,F,O),Tt.scissor(V.copy(kt).multiplyScalar(G).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(v){Tt.setScissorTest(ae=v)},this.setOpaqueSort=function(v){rt=v},this.setTransparentSort=function(v){ht=v},this.getClearColor=function(v){return v.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(v=!0,P=!0,F=!0){let O=0;if(v){let D=!1;if(U!==null){const J=U.texture.format;D=J===ql||J===Xl||J===Wl}if(D){const J=U.texture.type,it=J===Mi||J===_r||J===js||J===rs||J===Hl||J===Vl,ut=Ct.getClearColor(),gt=Ct.getClearAlpha(),Dt=ut.r,It=ut.g,bt=ut.b;it?(_[0]=Dt,_[1]=It,_[2]=bt,_[3]=gt,b.clearBufferuiv(b.COLOR,0,_)):(x[0]=Dt,x[1]=It,x[2]=bt,x[3]=gt,b.clearBufferiv(b.COLOR,0,x))}else O|=b.COLOR_BUFFER_BIT}P&&(O|=b.DEPTH_BUFFER_BIT),F&&(O|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Y,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",ot,!1),Ct.dispose(),ft.dispose(),Yt.dispose(),At.dispose(),g.dispose(),N.dispose(),H.dispose(),le.dispose(),C.dispose(),St.dispose(),z.dispose(),z.removeEventListener("sessionstart",Xu),z.removeEventListener("sessionend",qu),Yi.stop()};function Y(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const v=ue.autoReset,P=pt.enabled,F=pt.autoUpdate,O=pt.needsUpdate,D=pt.type;nt(),ue.autoReset=v,pt.enabled=P,pt.autoUpdate=F,pt.needsUpdate=O,pt.type=D}function ot(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Nt(v){const P=v.target;P.removeEventListener("dispose",Nt),Me(P)}function Me(v){Xe(v),At.remove(v)}function Xe(v){const P=At.get(v).programs;P!==void 0&&(P.forEach(function(F){St.releaseProgram(F)}),v.isShaderMaterial&&St.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,F,O,D,J){P===null&&(P=me);const it=D.isMesh&&D.matrixWorld.determinant()<0,ut=Jm(v,P,F,O,D);Tt.setMaterial(O,it);let gt=F.index,Dt=1;if(O.wireframe===!0){if(gt=$.getWireframeAttribute(F),gt===void 0)return;Dt=2}const It=F.drawRange,bt=F.attributes.position;let jt=It.start*Dt,te=(It.start+It.count)*Dt;J!==null&&(jt=Math.max(jt,J.start*Dt),te=Math.min(te,(J.start+J.count)*Dt)),gt!==null?(jt=Math.max(jt,0),te=Math.min(te,gt.count)):bt!=null&&(jt=Math.max(jt,0),te=Math.min(te,bt.count));const Ce=te-jt;if(Ce<0||Ce===1/0)return;le.setup(D,O,ut,F,gt);let Se,$t=mt;if(gt!==null&&(Se=q.get(gt),$t=Wt,$t.setIndex(Se)),D.isMesh)O.wireframe===!0?(Tt.setLineWidth(O.wireframeLinewidth*Te()),$t.setMode(b.LINES)):$t.setMode(b.TRIANGLES);else if(D.isLine){let wt=O.linewidth;wt===void 0&&(wt=1),Tt.setLineWidth(wt*Te()),D.isLineSegments?$t.setMode(b.LINES):D.isLineLoop?$t.setMode(b.LINE_LOOP):$t.setMode(b.LINE_STRIP)}else D.isPoints?$t.setMode(b.POINTS):D.isSprite&&$t.setMode(b.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)$t.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))$t.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const wt=D._multiDrawStarts,Ve=D._multiDrawCounts,ee=D._multiDrawCount,Nn=gt?q.get(gt).bytesPerElement:1,br=At.get(O).currentProgram.getUniforms();for(let ln=0;ln<ee;ln++)br.setValue(b,"_gl_DrawID",ln),$t.render(wt[ln]/Nn,Ve[ln])}else if(D.isInstancedMesh)$t.renderInstances(jt,Ce,D.count);else if(F.isInstancedBufferGeometry){const wt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ve=Math.min(F.instanceCount,wt);$t.renderInstances(jt,Ce,Ve)}else $t.render(jt,Ce)};function ne(v,P,F){v.transparent===!0&&v.side===di&&v.forceSinglePass===!1?(v.side=sn,v.needsUpdate=!0,pa(v,P,F),v.side=Hi,v.needsUpdate=!0,pa(v,P,F),v.side=di):pa(v,P,F)}this.compile=function(v,P,F=null){F===null&&(F=v),h=Yt.get(F),h.init(P),T.push(h),F.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),v!==F&&v.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),h.setupLights();const O=new Set;return v.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const J=D.material;if(J)if(Array.isArray(J))for(let it=0;it<J.length;it++){const ut=J[it];ne(ut,F,D),O.add(ut)}else ne(J,F,D),O.add(J)}),T.pop(),h=null,O},this.compileAsync=function(v,P,F=null){const O=this.compile(v,P,F);return new Promise(D=>{function J(){if(O.forEach(function(it){At.get(it).currentProgram.isReady()&&O.delete(it)}),O.size===0){D(v);return}setTimeout(J,10)}Ht.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Un=null;function ai(v){Un&&Un(v)}function Xu(){Yi.stop()}function qu(){Yi.start()}const Yi=new Bd;Yi.setAnimationLoop(ai),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(v){Un=v,z.setAnimationLoop(v),v===null?Yi.stop():Yi.start()},z.addEventListener("sessionstart",Xu),z.addEventListener("sessionend",qu),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(P),P=z.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,P,U),h=Yt.get(v,T.length),h.init(P),T.push(h),Pt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),W.setFromProjectionMatrix(Pt),xt=this.localClippingEnabled,tt=Q.init(this.clippingPlanes,xt),p=ft.get(v,A.length),p.init(),A.push(p),z.enabled===!0&&z.isPresenting===!0){const J=y.xr.getDepthSensingMesh();J!==null&&Go(J,P,-1/0,y.sortObjects)}Go(v,P,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(rt,ht),qt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,qt&&Ct.addToRenderList(p,v),this.info.render.frame++,tt===!0&&Q.beginShadows();const F=h.state.shadowsArray;pt.render(F,v,P),tt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=p.opaque,D=p.transmissive;if(h.setupLights(),P.isArrayCamera){const J=P.cameras;if(D.length>0)for(let it=0,ut=J.length;it<ut;it++){const gt=J[it];ju(O,D,v,gt)}qt&&Ct.render(v);for(let it=0,ut=J.length;it<ut;it++){const gt=J[it];Yu(p,v,gt,gt.viewport)}}else D.length>0&&ju(O,D,v,P),qt&&Ct.render(v),Yu(p,v,P);U!==null&&(E.updateMultisampleRenderTarget(U),E.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(y,v,P),le.resetDefaultState(),S=-1,M=null,T.pop(),T.length>0?(h=T[T.length-1],tt===!0&&Q.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function Go(v,P,F,O){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||W.intersectsSprite(v)){O&&zt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Pt);const it=H.update(v),ut=v.material;ut.visible&&p.push(v,it,ut,F,zt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||W.intersectsObject(v))){const it=H.update(v),ut=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),zt.copy(v.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),zt.copy(it.boundingSphere.center)),zt.applyMatrix4(v.matrixWorld).applyMatrix4(Pt)),Array.isArray(ut)){const gt=it.groups;for(let Dt=0,It=gt.length;Dt<It;Dt++){const bt=gt[Dt],jt=ut[bt.materialIndex];jt&&jt.visible&&p.push(v,it,jt,F,zt.z,bt)}}else ut.visible&&p.push(v,it,ut,F,zt.z,null)}}const J=v.children;for(let it=0,ut=J.length;it<ut;it++)Go(J[it],P,F,O)}function Yu(v,P,F,O){const D=v.opaque,J=v.transmissive,it=v.transparent;h.setupLightsView(F),tt===!0&&Q.setGlobalState(y.clippingPlanes,F),O&&Tt.viewport(R.copy(O)),D.length>0&&da(D,P,F),J.length>0&&da(J,P,F),it.length>0&&da(it,P,F),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function ju(v,P,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[O.id]===void 0&&(h.state.transmissionRenderTarget[O.id]=new vr(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Qs:Mi,minFilter:or,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const J=h.state.transmissionRenderTarget[O.id],it=O.viewport||R;J.setSize(it.z,it.w);const ut=y.getRenderTarget();y.setRenderTarget(J),y.getClearColor(j),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),qt&&Ct.render(F);const gt=y.toneMapping;y.toneMapping=zi;const Dt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),h.setupLightsView(O),tt===!0&&Q.setGlobalState(y.clippingPlanes,O),da(v,F,O),E.updateMultisampleRenderTarget(J),E.updateRenderTargetMipmap(J),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let bt=0,jt=P.length;bt<jt;bt++){const te=P[bt],Ce=te.object,Se=te.geometry,$t=te.material,wt=te.group;if($t.side===di&&Ce.layers.test(O.layers)){const Ve=$t.side;$t.side=sn,$t.needsUpdate=!0,Ku(Ce,F,O,Se,$t,wt),$t.side=Ve,$t.needsUpdate=!0,It=!0}}It===!0&&(E.updateMultisampleRenderTarget(J),E.updateRenderTargetMipmap(J))}y.setRenderTarget(ut),y.setClearColor(j,K),Dt!==void 0&&(O.viewport=Dt),y.toneMapping=gt}function da(v,P,F){const O=P.isScene===!0?P.overrideMaterial:null;for(let D=0,J=v.length;D<J;D++){const it=v[D],ut=it.object,gt=it.geometry,Dt=O===null?it.material:O,It=it.group;ut.layers.test(F.layers)&&Ku(ut,P,F,gt,Dt,It)}}function Ku(v,P,F,O,D,J){v.onBeforeRender(y,P,F,O,D,J),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),D.onBeforeRender(y,P,F,O,v,J),D.transparent===!0&&D.side===di&&D.forceSinglePass===!1?(D.side=sn,D.needsUpdate=!0,y.renderBufferDirect(F,P,O,D,v,J),D.side=Hi,D.needsUpdate=!0,y.renderBufferDirect(F,P,O,D,v,J),D.side=di):y.renderBufferDirect(F,P,O,D,v,J),v.onAfterRender(y,P,F,O,D,J)}function pa(v,P,F){P.isScene!==!0&&(P=me);const O=At.get(v),D=h.state.lights,J=h.state.shadowsArray,it=D.state.version,ut=St.getParameters(v,D.state,J,P,F),gt=St.getProgramCacheKey(ut);let Dt=O.programs;O.environment=v.isMeshStandardMaterial?P.environment:null,O.fog=P.fog,O.envMap=(v.isMeshStandardMaterial?N:g).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Dt===void 0&&(v.addEventListener("dispose",Nt),Dt=new Map,O.programs=Dt);let It=Dt.get(gt);if(It!==void 0){if(O.currentProgram===It&&O.lightsStateVersion===it)return Zu(v,ut),It}else ut.uniforms=St.getUniforms(v),v.onBeforeCompile(ut,y),It=St.acquireProgram(ut,gt),Dt.set(gt,It),O.uniforms=ut.uniforms;const bt=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(bt.clippingPlanes=Q.uniform),Zu(v,ut),O.needsLights=t0(v),O.lightsStateVersion=it,O.needsLights&&(bt.ambientLightColor.value=D.state.ambient,bt.lightProbe.value=D.state.probe,bt.directionalLights.value=D.state.directional,bt.directionalLightShadows.value=D.state.directionalShadow,bt.spotLights.value=D.state.spot,bt.spotLightShadows.value=D.state.spotShadow,bt.rectAreaLights.value=D.state.rectArea,bt.ltc_1.value=D.state.rectAreaLTC1,bt.ltc_2.value=D.state.rectAreaLTC2,bt.pointLights.value=D.state.point,bt.pointLightShadows.value=D.state.pointShadow,bt.hemisphereLights.value=D.state.hemi,bt.directionalShadowMap.value=D.state.directionalShadowMap,bt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,bt.spotShadowMap.value=D.state.spotShadowMap,bt.spotLightMatrix.value=D.state.spotLightMatrix,bt.spotLightMap.value=D.state.spotLightMap,bt.pointShadowMap.value=D.state.pointShadowMap,bt.pointShadowMatrix.value=D.state.pointShadowMatrix),O.currentProgram=It,O.uniformsList=null,It}function $u(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=Za.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function Zu(v,P){const F=At.get(v);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.batchingColor=P.batchingColor,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.instancingMorph=P.instancingMorph,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function Jm(v,P,F,O,D){P.isScene!==!0&&(P=me),E.resetTextureUnits();const J=P.fog,it=O.isMeshStandardMaterial?P.environment:null,ut=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:as,gt=(O.isMeshStandardMaterial?N:g).get(O.envMap||it),Dt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,It=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),bt=!!F.morphAttributes.position,jt=!!F.morphAttributes.normal,te=!!F.morphAttributes.color;let Ce=zi;O.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ce=y.toneMapping);const Se=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,$t=Se!==void 0?Se.length:0,wt=At.get(O),Ve=h.state.lights;if(tt===!0&&(xt===!0||v!==M)){const Je=v===M&&O.id===S;Q.setState(O,v,Je)}let ee=!1;O.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Ve.state.version||wt.outputColorSpace!==ut||D.isBatchedMesh&&wt.batching===!1||!D.isBatchedMesh&&wt.batching===!0||D.isBatchedMesh&&wt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&wt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&wt.instancing===!1||!D.isInstancedMesh&&wt.instancing===!0||D.isSkinnedMesh&&wt.skinning===!1||!D.isSkinnedMesh&&wt.skinning===!0||D.isInstancedMesh&&wt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&wt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&wt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&wt.instancingMorph===!1&&D.morphTexture!==null||wt.envMap!==gt||O.fog===!0&&wt.fog!==J||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Q.numPlanes||wt.numIntersection!==Q.numIntersection)||wt.vertexAlphas!==Dt||wt.vertexTangents!==It||wt.morphTargets!==bt||wt.morphNormals!==jt||wt.morphColors!==te||wt.toneMapping!==Ce||wt.morphTargetsCount!==$t)&&(ee=!0):(ee=!0,wt.__version=O.version);let Nn=wt.currentProgram;ee===!0&&(Nn=pa(O,P,D));let br=!1,ln=!1,Is=!1;const he=Nn.getUniforms(),Tn=wt.uniforms;if(Tt.useProgram(Nn.program)&&(br=!0,ln=!0,Is=!0),O.id!==S&&(S=O.id,ln=!0),br||M!==v){Tt.buffers.depth.getReversed()?(st.copy(v.projectionMatrix),j0(st),K0(st),he.setValue(b,"projectionMatrix",st)):he.setValue(b,"projectionMatrix",v.projectionMatrix),he.setValue(b,"viewMatrix",v.matrixWorldInverse);const tn=he.map.cameraPosition;tn!==void 0&&tn.setValue(b,Ut.setFromMatrixPosition(v.matrixWorld)),Vt.logarithmicDepthBuffer&&he.setValue(b,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&he.setValue(b,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,ln=!0,Is=!0)}if(D.isSkinnedMesh){he.setOptional(b,D,"bindMatrix"),he.setOptional(b,D,"bindMatrixInverse");const Je=D.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),he.setValue(b,"boneTexture",Je.boneTexture,E))}D.isBatchedMesh&&(he.setOptional(b,D,"batchingTexture"),he.setValue(b,"batchingTexture",D._matricesTexture,E),he.setOptional(b,D,"batchingIdTexture"),he.setValue(b,"batchingIdTexture",D._indirectTexture,E),he.setOptional(b,D,"batchingColorTexture"),D._colorsTexture!==null&&he.setValue(b,"batchingColorTexture",D._colorsTexture,E));const An=F.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&Lt.update(D,F,Nn),(ln||wt.receiveShadow!==D.receiveShadow)&&(wt.receiveShadow=D.receiveShadow,he.setValue(b,"receiveShadow",D.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Tn.envMap.value=gt,Tn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&P.environment!==null&&(Tn.envMapIntensity.value=P.environmentIntensity),ln&&(he.setValue(b,"toneMappingExposure",y.toneMappingExposure),wt.needsLights&&Qm(Tn,Is),J&&O.fog===!0&&at.refreshFogUniforms(Tn,J),at.refreshMaterialUniforms(Tn,O,G,Z,h.state.transmissionRenderTarget[v.id]),Za.upload(b,$u(wt),Tn,E)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Za.upload(b,$u(wt),Tn,E),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&he.setValue(b,"center",D.center),he.setValue(b,"modelViewMatrix",D.modelViewMatrix),he.setValue(b,"normalMatrix",D.normalMatrix),he.setValue(b,"modelMatrix",D.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Je=O.uniformsGroups;for(let tn=0,Ho=Je.length;tn<Ho;tn++){const ji=Je[tn];C.update(ji,Nn),C.bind(ji,Nn)}}return Nn}function Qm(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function t0(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,P,F){At.get(v.texture).__webglTexture=P,At.get(v.depthTexture).__webglTexture=F;const O=At.get(v);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,P){const F=At.get(v);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,F=0){U=v,L=P,w=F;let O=!0,D=null,J=!1,it=!1;if(v){const gt=At.get(v);if(gt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(b.FRAMEBUFFER,null),O=!1;else if(gt.__webglFramebuffer===void 0)E.setupRenderTarget(v);else if(gt.__hasExternalTextures)E.rebindTextures(v,At.get(v.texture).__webglTexture,At.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const bt=v.depthTexture;if(gt.__boundDepthTexture!==bt){if(bt!==null&&At.has(bt)&&(v.width!==bt.image.width||v.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(v)}}const Dt=v.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(it=!0);const It=At.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(It[P])?D=It[P][F]:D=It[P],J=!0):v.samples>0&&E.useMultisampledRTT(v)===!1?D=At.get(v).__webglMultisampledFramebuffer:Array.isArray(It)?D=It[F]:D=It,R.copy(v.viewport),V.copy(v.scissor),k=v.scissorTest}else R.copy(yt).multiplyScalar(G).floor(),V.copy(kt).multiplyScalar(G).floor(),k=ae;if(Tt.bindFramebuffer(b.FRAMEBUFFER,D)&&O&&Tt.drawBuffers(v,D),Tt.viewport(R),Tt.scissor(V),Tt.setScissorTest(k),J){const gt=At.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+P,gt.__webglTexture,F)}else if(it){const gt=At.get(v.texture),Dt=P||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,gt.__webglTexture,F||0,Dt)}S=-1},this.readRenderTargetPixels=function(v,P,F,O,D,J,it){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=At.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&it!==void 0&&(ut=ut[it]),ut){Tt.bindFramebuffer(b.FRAMEBUFFER,ut);try{const gt=v.texture,Dt=gt.format,It=gt.type;if(!Vt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-O&&F>=0&&F<=v.height-D&&b.readPixels(P,F,O,D,Ot.convert(Dt),Ot.convert(It),J)}finally{const gt=U!==null?At.get(U).__webglFramebuffer:null;Tt.bindFramebuffer(b.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(v,P,F,O,D,J,it){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=At.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&it!==void 0&&(ut=ut[it]),ut){const gt=v.texture,Dt=gt.format,It=gt.type;if(!Vt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=v.width-O&&F>=0&&F<=v.height-D){Tt.bindFramebuffer(b.FRAMEBUFFER,ut);const bt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,bt),b.bufferData(b.PIXEL_PACK_BUFFER,J.byteLength,b.STREAM_READ),b.readPixels(P,F,O,D,Ot.convert(Dt),Ot.convert(It),0);const jt=U!==null?At.get(U).__webglFramebuffer:null;Tt.bindFramebuffer(b.FRAMEBUFFER,jt);const te=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Y0(b,te,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,bt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,J),b.deleteBuffer(bt),b.deleteSync(te),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,P=null,F=0){v.isTexture!==!0&&(Xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,v=arguments[1]);const O=Math.pow(2,-F),D=Math.floor(v.image.width*O),J=Math.floor(v.image.height*O),it=P!==null?P.x:0,ut=P!==null?P.y:0;E.setTexture2D(v,0),b.copyTexSubImage2D(b.TEXTURE_2D,F,0,0,it,ut,D,J),Tt.unbindTexture()};const e0=b.createFramebuffer(),n0=b.createFramebuffer();this.copyTextureToTexture=function(v,P,F=null,O=null,D=0,J=null){v.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,v=arguments[1],P=arguments[2],J=arguments[3]||0,F=null),J===null&&(D!==0?(Xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=D,D=0):J=0);let it,ut,gt,Dt,It,bt,jt,te,Ce;const Se=v.isCompressedTexture?v.mipmaps[J]:v.image;if(F!==null)it=F.max.x-F.min.x,ut=F.max.y-F.min.y,gt=F.isBox3?F.max.z-F.min.z:1,Dt=F.min.x,It=F.min.y,bt=F.isBox3?F.min.z:0;else{const An=Math.pow(2,-D);it=Math.floor(Se.width*An),ut=Math.floor(Se.height*An),v.isDataArrayTexture?gt=Se.depth:v.isData3DTexture?gt=Math.floor(Se.depth*An):gt=1,Dt=0,It=0,bt=0}O!==null?(jt=O.x,te=O.y,Ce=O.z):(jt=0,te=0,Ce=0);const $t=Ot.convert(P.format),wt=Ot.convert(P.type);let Ve;P.isData3DTexture?(E.setTexture3D(P,0),Ve=b.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(E.setTexture2DArray(P,0),Ve=b.TEXTURE_2D_ARRAY):(E.setTexture2D(P,0),Ve=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,P.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,P.unpackAlignment);const ee=b.getParameter(b.UNPACK_ROW_LENGTH),Nn=b.getParameter(b.UNPACK_IMAGE_HEIGHT),br=b.getParameter(b.UNPACK_SKIP_PIXELS),ln=b.getParameter(b.UNPACK_SKIP_ROWS),Is=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Se.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Se.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Dt),b.pixelStorei(b.UNPACK_SKIP_ROWS,It),b.pixelStorei(b.UNPACK_SKIP_IMAGES,bt);const he=v.isDataArrayTexture||v.isData3DTexture,Tn=P.isDataArrayTexture||P.isData3DTexture;if(v.isDepthTexture){const An=At.get(v),Je=At.get(P),tn=At.get(An.__renderTarget),Ho=At.get(Je.__renderTarget);Tt.bindFramebuffer(b.READ_FRAMEBUFFER,tn.__webglFramebuffer),Tt.bindFramebuffer(b.DRAW_FRAMEBUFFER,Ho.__webglFramebuffer);for(let ji=0;ji<gt;ji++)he&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,At.get(v).__webglTexture,D,bt+ji),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,At.get(P).__webglTexture,J,Ce+ji)),b.blitFramebuffer(Dt,It,it,ut,jt,te,it,ut,b.DEPTH_BUFFER_BIT,b.NEAREST);Tt.bindFramebuffer(b.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(D!==0||v.isRenderTargetTexture||At.has(v)){const An=At.get(v),Je=At.get(P);Tt.bindFramebuffer(b.READ_FRAMEBUFFER,e0),Tt.bindFramebuffer(b.DRAW_FRAMEBUFFER,n0);for(let tn=0;tn<gt;tn++)he?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,An.__webglTexture,D,bt+tn):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,An.__webglTexture,D),Tn?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Je.__webglTexture,J,Ce+tn):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Je.__webglTexture,J),D!==0?b.blitFramebuffer(Dt,It,it,ut,jt,te,it,ut,b.COLOR_BUFFER_BIT,b.NEAREST):Tn?b.copyTexSubImage3D(Ve,J,jt,te,Ce+tn,Dt,It,it,ut):b.copyTexSubImage2D(Ve,J,jt,te,Dt,It,it,ut);Tt.bindFramebuffer(b.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Tn?v.isDataTexture||v.isData3DTexture?b.texSubImage3D(Ve,J,jt,te,Ce,it,ut,gt,$t,wt,Se.data):P.isCompressedArrayTexture?b.compressedTexSubImage3D(Ve,J,jt,te,Ce,it,ut,gt,$t,Se.data):b.texSubImage3D(Ve,J,jt,te,Ce,it,ut,gt,$t,wt,Se):v.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,J,jt,te,it,ut,$t,wt,Se.data):v.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,J,jt,te,Se.width,Se.height,$t,Se.data):b.texSubImage2D(b.TEXTURE_2D,J,jt,te,it,ut,$t,wt,Se);b.pixelStorei(b.UNPACK_ROW_LENGTH,ee),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Nn),b.pixelStorei(b.UNPACK_SKIP_PIXELS,br),b.pixelStorei(b.UNPACK_SKIP_ROWS,ln),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Is),J===0&&P.generateMipmaps&&b.generateMipmap(Ve),Tt.unbindTexture()},this.copyTextureToTexture3D=function(v,P,F=null,O=null,D=0){return v.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,v=arguments[2],P=arguments[3],D=arguments[4]||0),Xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,P,F,O,D)},this.initRenderTarget=function(v){At.get(v).__webglFramebuffer===void 0&&E.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?E.setTextureCube(v,0):v.isData3DTexture?E.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?E.setTexture2DArray(v,0):E.setTexture2D(v,0),Tt.unbindTexture()},this.resetState=function(){L=0,w=0,U=null,Tt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Zt._getUnpackColorSpace()}}const lt={time:0,delta:0,fps:60,mouseNormX:0,mouseNormY:0,isPointerDown:!1,explosion:0,particleCount:3e4,trackMode:"loading",trackError:"",hand:{detected:!1,palmX:0,palmY:0,openness:.5,velocity:0,attractRadius:.5,lostFrames:0},rotationX:0,rotationY:0,rotationZ:0,spread:1,hueOffset:0,modelIndex:0},Ja=[{name:"Nebula",nameCN:"星云",hueRange:[220,320],saturation:.8,lightnessRange:[.4,.8],sizeMul:1.2,glowIntensity:1,formationIndex:0,springStrength:.08,formationScale:.9,hueRotateSpeed:.3},{name:"Firework",nameCN:"烟花",hueRange:[0,360],saturation:.9,lightnessRange:[.5,.9],sizeMul:.9,glowIntensity:1.4,formationIndex:1,springStrength:.06,formationScale:.85,hueRotateSpeed:.8},{name:"Saturn",nameCN:"土星",hueRange:[30,60],saturation:.7,lightnessRange:[.4,.7],sizeMul:1,glowIntensity:.8,formationIndex:2,springStrength:.07,formationScale:.8,hueRotateSpeed:.2},{name:"Flower",nameCN:"花朵",hueRange:[280,360],saturation:.85,lightnessRange:[.5,.8],sizeMul:1.3,glowIntensity:1.1,formationIndex:3,springStrength:.09,formationScale:.75,hueRotateSpeed:.5},{name:"Galaxy",nameCN:"银河",hueRange:[180,280],saturation:.7,lightnessRange:[.3,.7],sizeMul:1.1,glowIntensity:.9,formationIndex:4,springStrength:.07,formationScale:.95,hueRotateSpeed:.4},{name:"Stardust",nameCN:"星尘",hueRange:[0,360],saturation:.4,lightnessRange:[.6,1],sizeMul:.7,glowIntensity:.6,formationIndex:5,springStrength:.05,formationScale:1,hueRotateSpeed:.6}];function Ws(){let e=0,t=0;for(;e===0;)e=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)}function o3(e){const t=new Float32Array(e*3),n=3,i=Math.floor(e*.7),r=e-i;let s=0;for(let a=0;a<r;a++){const o=Math.cbrt(Math.random())*.25,c=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);t[s*3]=o*Math.sin(l)*Math.cos(c),t[s*3+1]=o*Math.sin(l)*Math.sin(c),t[s*3+2]=o*Math.cos(l)*.4,s++}for(let a=0;a<i;a++){const c=a%n/n*Math.PI*2,l=Math.sqrt(Math.random()),u=.2+l*.8,f=c+l*Math.PI*3+(Math.random()-.5)*.4,d=.04+l*.12,m=u*Math.cos(f)+Ws()*d,_=u*Math.sin(f)+Ws()*d,x=(Math.random()-.5)*.15*(1-l*.5);t[s*3]=m,t[s*3+1]=_,t[s*3+2]=x,s++}return t}function c3(e){const t=new Float32Array(e*3),n=16,i=Math.floor(e*.1),r=e-i;let s=0;for(let o=0;o<i;o++){const c=Math.random()*.08,l=Math.random()*Math.PI*2,u=Math.acos(2*Math.random()-1);t[s*3]=c*Math.sin(u)*Math.cos(l),t[s*3+1]=c*Math.sin(u)*Math.sin(l),t[s*3+2]=c*Math.cos(u),s++}const a=Math.floor(r/n);for(let o=0;o<n;o++){const c=o/n*Math.PI*2,l=Math.acos(2*(o/n)-1+(Math.random()-.5)*.3);for(let u=0;u<a&&s<e;u++){const f=u/a,d=.05+f*.95,m=f*f*.25,_=c+(Math.random()-.5)*m,x=l+(Math.random()-.5)*m*.6,p=Math.random()<.3?d+(Math.random()-.5)*.1:d;t[s*3]=p*Math.sin(x)*Math.cos(_),t[s*3+1]=p*Math.sin(x)*Math.sin(_),t[s*3+2]=p*Math.cos(x),s++}}return t}function l3(e){const t=new Float32Array(e*3),n=Math.floor(e*.3),i=e-n;let r=0;for(let s=0;s<n;s++){const a=Math.cbrt(Math.random())*.3,o=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1);t[r*3]=a*Math.sin(c)*Math.cos(o),t[r*3+1]=a*Math.sin(c)*Math.sin(o),t[r*3+2]=a*Math.cos(c),r++}for(let s=0;s<i;s++){const a=Math.floor(Math.random()*3),o=.35+Math.random()*.55,c=Math.random()*Math.PI*2,l=.25+a*.08,u=(Math.random()-.5)*.015*(1+a*.5),f=o*Math.cos(c),d=o*Math.sin(c)*Math.cos(l),m=o*Math.sin(c)*Math.sin(l)+u;t[r*3]=f,t[r*3+1]=d,t[r*3+2]=m*.3,r++}return t}function u3(e){const t=new Float32Array(e*3),n=8,i=4;let r=0;const s=Math.floor(e/i);for(let a=0;a<i;a++){const o=(a/(i-1)-.5)*.6,c=.5+a/i*.6,l=a<i-1?s:e-r,f=Math.floor(l*.3);for(let d=0;d<f&&r<e;d++){const m=d/f*Math.PI*2,p=(.3+Math.abs(Math.cos(n*m*.5))*.6)*c,h=(Math.random()-.5)*.02;t[r*3]=Math.cos(m)*p+h,t[r*3+1]=Math.sin(m)*p+h,t[r*3+2]=o+(Math.random()-.5)*.04,r++}for(;r<e&&(r%s<l||a===i-1);){const d=Math.random()*Math.PI*2,m=.3+Math.abs(Math.cos(n*d*.5))*.6,x=Math.sqrt(Math.random())*m*.92*c;if(t[r*3]=Math.cos(d)*x,t[r*3+1]=Math.sin(d)*x,t[r*3+2]=o+(Math.random()-.5)*.04,r++,r>=e)break}}return t}function h3(e){const t=new Float32Array(e*3),n=Math.floor(e*.15),i=e-n;let r=0;for(let a=0;a<n;a++){const o=Math.cbrt(Math.random())*.15,c=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);t[r*3]=o*Math.sin(l)*Math.cos(c),t[r*3+1]=o*Math.sin(l)*Math.sin(c),t[r*3+2]=o*Math.cos(l)*.8,r++}const s=4;for(let a=0;a<i;a++){const c=a%s/s*Math.PI*2,l=Math.pow(Math.random(),1.5),u=.12+l*.88,f=c+l*Math.PI*2+(Math.random()-.5)*.3,d=(Math.random()-.5)*.04*(1-l*.3);t[r*3]=u*Math.cos(f),t[r*3+1]=u*Math.sin(f),t[r*3+2]=d,r++}return t}function f3(e){const t=new Float32Array(e*3),n=Math.floor(e/30),i=Math.floor(e*.6),r=e-i,s=[];let a=0;for(let o=0;o<n;o++)s.push({x:(Math.random()-.5)*1.6,y:(Math.random()-.5)*1.6,z:(Math.random()-.5)*.5});for(let o=0;o<i&&a<e;o++){const c=s[o%s.length];t[a*3]=c.x+Ws()*.06,t[a*3+1]=c.y+Ws()*.06,t[a*3+2]=c.z+Ws()*.03,a++}for(let o=0;o<r&&a<e;o++)t[a*3]=(Math.random()-.5)*1.8,t[a*3+1]=(Math.random()-.5)*1.8,t[a*3+2]=(Math.random()-.5)*.6,a++;return t}const Kh=[o3,c3,l3,u3,h3,f3];function xc(e,t){const n=Kh[e%Kh.length];return n(t)}function Vd(e,t,n){const i=t*Math.min(n,1-n),r=s=>{const a=(s+e/30)%12;return n-i*Math.max(Math.min(a-3,9-a,1),-1)};return[r(0),r(8),r(4)]}function d3(e,t,n,i,r,s,a,o,c){const l=Math.cos(i),u=Math.sin(i),f=Math.cos(r),d=Math.sin(r),m=Math.cos(s),_=Math.sin(s);for(let x=0;x<n;x++){let p=t[x*3],h=t[x*3+1],A=t[x*3+2];p*=a,h*=a,A*=a;let T=p;p=p*f-A*d,A=T*d+A*f,T=h,h=h*l-A*u,A=T*u+A*l,T=p,p=p*m-h*_,h=T*_+h*m,e[x*3]=p+o,e[x*3+1]=h+c,e[x*3+2]=A}}function p3(e){const t=new Float32Array(e*3);for(let n=0;n<e;n++){const i=n*3;t[i]=(Math.random()-.5)*3.5,t[i+1]=(Math.random()-.5)*3.5,t[i+2]=-.5-Math.random()*.5}return t}function m3(e){const t=new Float32Array(e*3);for(let n=0;n<e;n++){const i=n*3,r=.2+Math.random()*.4,s=.6+Math.random()*.3,[a,o,c]=Vd(s*360,.3,r);t[i]=a,t[i+1]=o,t[i+2]=c}return t}const g3=`
uniform float uPixelRatio;
uniform float uTime;
uniform float uGlowIntensity;

attribute float aSize;
attribute vec3 aColor;
attribute float aAlpha;

varying vec3 vColor;
varying float vAlpha;

void main() {
  vec3 pos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  float size = aSize * uPixelRatio * 2.0;
  gl_PointSize = size;

  vColor = aColor;
  vAlpha = aAlpha;
}
`,_3=`
uniform float uTime;
uniform float uGlowIntensity;
uniform float uHueShift;

varying vec3 vColor;
varying float vAlpha;

// 简单的色相旋转
vec3 hueShift(vec3 color, float shift) {
  vec3 k = vec3(0.57735, 0.57735, 0.57735);
  float cosA = cos(shift);
  float sinA = sin(shift);
  return color * cosA + cross(k, color) * sinA + k * dot(k, color) * (1.0 - cosA);
}

void main() {
  vec2 center = gl_PointCoord - 0.5;
  float dist = length(center);

  // 核心圆
  float core = 1.0 - smoothstep(0.0, 0.35, dist);
  // 外层辉光
  float glow = exp(-dist * 5.0) * 0.5;
  // 内层强辉光（五彩核心）
  float innerGlow = exp(-dist * 12.0) * 0.6;

  float alpha = core + glow * uGlowIntensity + innerGlow;
  alpha *= vAlpha;
  alpha = clamp(alpha, 0.0, 1.0);

  if (alpha < 0.01) discard;

  // 核心偏白，外层带颜色
  vec3 col = mix(vColor, vec3(1.0), core * 0.6);
  // 内层辉光加色
  col += vColor * innerGlow * 0.8;

  // 色相偏移
  col = hueShift(col, uHueShift);

  // 边缘更亮
  float edge = smoothstep(0.3, 0.5, dist);
  col = mix(col, col * 1.4, edge * 0.5);

  gl_FragColor = vec4(col, alpha);
}
`;class v3{geometry;material;points;positions;targets;velocities;colors;sizes;alphas;capacity;style;bgGeometry;bgMaterial;bgPoints;constructor(){this.capacity=lt.particleCount,this.style=Ja[0],this.positions=new Float32Array(this.capacity*3),this.velocities=new Float32Array(this.capacity*3),this.colors=new Float32Array(this.capacity*3),this.sizes=new Float32Array(this.capacity),this.alphas=new Float32Array(this.capacity);for(let s=0;s<this.capacity;s++){const a=s*3;this.positions[a]=(Math.random()-.5)*2,this.positions[a+1]=(Math.random()-.5)*2,this.positions[a+2]=(Math.random()-.5)*.5,this.velocities[a]=(Math.random()-.5)*.001,this.velocities[a+1]=(Math.random()-.5)*.001,this.velocities[a+2]=(Math.random()-.5)*5e-4,this.sizes[s]=.5+Math.random()*1,this.alphas[s]=.3+Math.random()*.5}this.targets=xc(this.style.formationIndex,this.capacity),this.applyStyleColors(this.style),this.geometry=new Qn,this.geometry.setAttribute("position",new Ae(this.positions,3)),this.geometry.setAttribute("aColor",new Ae(this.colors,3)),this.geometry.setAttribute("aSize",new Ae(this.sizes,1)),this.geometry.setAttribute("aAlpha",new Ae(this.alphas,1)),this.material=new Ei({uniforms:{uPixelRatio:{value:Math.min(devicePixelRatio,2)},uTime:{value:0},uGlowIntensity:{value:this.style.glowIntensity},uHueShift:{value:0}},vertexShader:g3,fragmentShader:_3,transparent:!0,depthWrite:!1,blending:eo}),this.points=new Eh(this.geometry,this.material);const t=2e3;this.bgGeometry=new Qn;const n=p3(t),i=m3(t),r=new Float32Array(t);for(let s=0;s<t;s++)r[s]=.3+Math.random()*.8;this.bgGeometry.setAttribute("position",new Ae(n,3)),this.bgGeometry.setAttribute("color",new Ae(i,3)),this.bgGeometry.setAttribute("size",new Ae(r,1)),this.bgMaterial=new Nd({size:1.5,vertexColors:!0,transparent:!0,opacity:.6,depthWrite:!1,blending:eo,sizeAttenuation:!1}),this.bgPoints=new Eh(this.bgGeometry,this.bgMaterial)}applyStyleColors(t){const n=t.hueRange[0],i=t.hueRange[1],r=t.saturation,s=t.lightnessRange[0],a=t.lightnessRange[1];for(let o=0;o<this.capacity;o++){const c=o*3,l=n+Math.random()*(i-n),[u,f,d]=Vd(l,r,s+Math.random()*(a-s));this.colors[c]=u,this.colors[c+1]=f,this.colors[c+2]=d}this.geometry&&(this.geometry.attributes.aColor.needsUpdate=!0)}setStyle(t){const n=Ja[t%Ja.length];return this.style=n,this.targets=xc(n.formationIndex,this.capacity),this.applyStyleColors(n),this.material.uniforms.uGlowIntensity.value=n.glowIntensity,n.name}getStyleName(){return this.style.name}getStyleCN(){return this.style.nameCN}rebuild(t){this.capacity=t,this.positions=new Float32Array(t*3),this.velocities=new Float32Array(t*3),this.colors=new Float32Array(t*3),this.sizes=new Float32Array(t),this.alphas=new Float32Array(t);for(let n=0;n<t;n++){const i=n*3;this.positions[i]=(Math.random()-.5)*2,this.positions[i+1]=(Math.random()-.5)*2,this.positions[i+2]=(Math.random()-.5)*.5,this.velocities[i]=(Math.random()-.5)*.001,this.velocities[i+1]=(Math.random()-.5)*.001,this.velocities[i+2]=(Math.random()-.5)*5e-4,this.sizes[n]=.5+Math.random()*1,this.alphas[n]=.3+Math.random()*.5}this.targets=xc(this.style.formationIndex,t),this.applyStyleColors(this.style),this.geometry.setAttribute("position",new Ae(this.positions,3)),this.geometry.setAttribute("aColor",new Ae(this.colors,3)),this.geometry.setAttribute("aSize",new Ae(this.sizes,1)),this.geometry.setAttribute("aAlpha",new Ae(this.alphas,1))}update(){const t=lt.mouseNormX,n=lt.mouseNormY,i=lt.hand.detected,r=lt.hand.palmX,s=lt.hand.palmY,a=lt.hand.openness;let o=0;i?o=.7:lt.hand.lostFrames>0&&(o=.7*Math.max(0,1-lt.hand.lostFrames/45));const c=o>.3?r:t,l=o>.3?s:n,u=o>.3?3:1,f=(o>.3?s:n)*u,d=(o>.3?r:t)*u,m=lt.time*.05;lt.rotationX+=(f-lt.rotationX)*(o>0?.08:.03),lt.rotationY+=(d-lt.rotationY)*(o>0?.08:.03),lt.rotationZ=m;const _=i?.3+a*1.5:1;lt.spread+=(_-lt.spread)*.06,lt.hueOffset=lt.rotationY*this.style.hueRotateSpeed,d3(this.positions,this.targets,this.capacity,lt.rotationX,lt.rotationY,lt.rotationZ,lt.spread,c,l),this.material.uniforms.uTime.value=lt.time,this.material.uniforms.uHueShift.value=lt.hueOffset,this.geometry.attributes.position.needsUpdate=!0,this.bgPoints.rotation.y=lt.time*.01,this.bgPoints.rotation.x=Math.sin(lt.time*.005)*.05}addToScene(t){t.add(this.bgPoints),t.add(this.points)}resize(){this.material.uniforms.uPixelRatio.value=Math.min(devicePixelRatio,2)}dispose(){this.geometry.dispose(),this.material.dispose(),this.bgGeometry.dispose(),this.bgMaterial.dispose()}}var cs=typeof self<"u"?self:{};function Wd(e,t){t:{for(var n=["CLOSURE_FLAGS"],i=cs,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break t}n=i}return(e=n&&n[e])!=null?e:t}function er(){throw Error("Invalid UTF8")}function $h(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}let ka,Mc;const x3=typeof TextDecoder<"u";let M3;const S3=typeof TextEncoder<"u";function Xd(e){if(S3)e=(M3||=new TextEncoder).encode(e);else{let n=0;const i=new Uint8Array(3*e.length);for(let r=0;r<e.length;r++){var t=e.charCodeAt(r);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&r<e.length){const s=e.charCodeAt(++r);if(s>=56320&&s<=57343){t=1024*(t-55296)+s-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}r--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}function qd(e){cs.setTimeout((()=>{throw e}),0)}var Ml,E3=Wd(610401301,!1),Zh=Wd(748402147,!0);function Jh(){var e=cs.navigator;return e&&(e=e.userAgent)?e:""}const Qh=cs.navigator;function vo(e){return vo[" "](e),e}Ml=Qh&&Qh.userAgentData||null,vo[" "]=function(){};const Yd={};let Hs=null;function y3(e){const t=e.length;let n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return(function(s,a){function o(l){for(;c<s.length;){const u=s.charAt(c++),f=Hs[u];if(f!=null)return f;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return l}jd();let c=0;for(;;){const l=o(-1),u=o(0),f=o(64),d=o(64);if(d===64&&l===-1)break;a(l<<2|u>>4),f!=64&&(a(u<<4&240|f>>2),d!=64&&a(f<<6&192|d))}})(e,(function(s){i[r++]=s})),r!==n?i.subarray(0,r):i}function jd(){if(!Hs){Hs={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=e.concat(t[n].split(""));Yd[n]=i;for(let r=0;r<i.length;r++){const s=i[r];Hs[s]===void 0&&(Hs[s]=r)}}}}var T3=typeof Uint8Array<"u",Kd=!(!(E3&&Ml&&Ml.brands.length>0)&&(Jh().indexOf("Trident")!=-1||Jh().indexOf("MSIE")!=-1))&&typeof btoa=="function";const tf=/[-_.]/g,A3={"-":"+",_:"/",".":"="};function b3(e){return A3[e]||""}function $d(e){if(!Kd)return y3(e);e=tf.test(e)?e.replace(tf,b3):e,e=atob(e);const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function jl(e){return T3&&e!=null&&e instanceof Uint8Array}var ls={};function xr(){return w3||=new Jn(null,ls)}function Kl(e){Zd(ls);var t=e.g;return(t=t==null||jl(t)?t:typeof t=="string"?$d(t):null)==null?t:e.g=t}var Jn=class{h(){return new Uint8Array(Kl(this)||0)}constructor(e,t){if(Zd(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}};let w3,R3;function Zd(e){if(e!==ls)throw Error("illegal external caller")}function Jd(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function Sl(e){return Jd(e=Error(e),"warning"),e}function us(e,t){if(e!=null){var n=R3??={},i=n[e]||0;i>=t||(n[e]=i+1,Jd(e=Error(),"incident"),qd(e))}}function Ss(){return typeof BigInt=="function"}var Es=typeof Symbol=="function"&&typeof Symbol()=="symbol";function ei(e,t,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t}var C3=ei("jas",void 0,!0),ef=ei(void 0,"0di"),ks=ei(void 0,"1oa"),gn=ei(void 0,Symbol()),P3=ei(void 0,"0ub"),L3=ei(void 0,"0ubs"),El=ei(void 0,"0ubsb"),D3=ei(void 0,"0actk"),hs=ei("m_m","Pa",!0),nf=ei();const Qd={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},tp=Object.defineProperties,_t=Es?C3:"Ga";var yr;const rf=[];function sa(e,t){Es||_t in e||tp(e,Qd),e[_t]|=t}function ke(e,t){Es||_t in e||tp(e,Qd),e[_t]=t}function aa(e){return sa(e,34),e}function Ks(e){return sa(e,8192),e}ke(rf,7),yr=Object.freeze(rf);var fs={};function vn(e,t){return t===void 0?e.h!==Mr&&!!(2&(0|e.v[_t])):!!(2&t)&&e.h!==Mr}const Mr={};function $l(e,t){if(e!=null){if(typeof e=="string")e=e?new Jn(e,ls):xr();else if(e.constructor!==Jn)if(jl(e))e=e.length?new Jn(new Uint8Array(e),ls):xr();else{if(!t)throw Error();e=void 0}}return e}class sf{constructor(t,n,i){this.g=t,this.h=n,this.l=i}next(){const t=this.g.next();return t.done||(t.value=this.h.call(this.l,t.value)),t}[Symbol.iterator](){return this}}var I3=Object.freeze({});function ep(e,t,n){const i=128&t?0:-1,r=e.length;var s;(s=!!r)&&(s=(s=e[r-1])!=null&&typeof s=="object"&&s.constructor===Object);const a=r+(s?-1:0);for(t=128&t?1:0;t<a;t++)n(t-i,e[t]);if(s){e=e[r-1];for(const o in e)!isNaN(o)&&n(+o,e[o])}}var np={};function ys(e){return 128&e?np:void 0}function xo(e){return e.Na=!0,e}var U3=xo((e=>typeof e=="number")),af=xo((e=>typeof e=="string")),N3=xo((e=>typeof e=="boolean")),Mo=typeof cs.BigInt=="function"&&typeof cs.BigInt(0)=="bigint";function _n(e){var t=e;if(af(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(U3(t)&&!Number.isSafeInteger(t))throw Error(String(t));return Mo?BigInt(e):e=N3(e)?e?"1":"0":af(e)?e.trim()||"0":String(e)}var yl=xo((e=>Mo?e>=O3&&e<=k3:e[0]==="-"?of(e,F3):of(e,B3)));const F3=Number.MIN_SAFE_INTEGER.toString(),O3=Mo?BigInt(Number.MIN_SAFE_INTEGER):void 0,B3=Number.MAX_SAFE_INTEGER.toString(),k3=Mo?BigInt(Number.MAX_SAFE_INTEGER):void 0;function of(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){const i=e[n],r=t[n];if(i>r)return!1;if(i<r)return!0}}const z3=typeof Uint8Array.prototype.slice=="function";let G3,ge=0,Le=0;function cf(e){const t=e>>>0;ge=t,Le=(e-t)/4294967296>>>0}function ds(e){if(e<0){cf(-e);const[t,n]=Ql(ge,Le);ge=t>>>0,Le=n>>>0}else cf(e)}function Zl(e){const t=G3||=new DataView(new ArrayBuffer(8));t.setFloat32(0,+e,!0),Le=0,ge=t.getUint32(0,!0)}function ip(e,t){const n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:$s(e,t)}function H3(e,t){return _n(Ss()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(e>>>0)):$s(e,t))}function rp(e,t){return Ss()?_n(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(e)))):_n(Jl(e,t))}function $s(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else Ss()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+lf(n)+lf(e));return n}function lf(e){return e=String(e),"0000000".slice(e.length)+e}function Jl(e,t){if(2147483648&t)if(Ss())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{const[n,i]=Ql(e,t);e="-"+$s(n,i)}else e=$s(e,t);return e}function So(e){if(e.length<16)ds(Number(e));else if(Ss())e=BigInt(e),ge=Number(e&BigInt(4294967295))>>>0,Le=Number(e>>BigInt(32)&BigInt(4294967295));else{const t=+(e[0]==="-");Le=ge=0;const n=e.length;for(let i=t,r=(n-t)%6+t;r<=n;i=r,r+=6){const s=Number(e.slice(i,r));Le*=1e6,ge=1e6*ge+s,ge>=4294967296&&(Le+=Math.trunc(ge/4294967296),Le>>>=0,ge>>>=0)}if(t){const[i,r]=Ql(ge,Le);ge=i,Le=r}}}function Ql(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function Vn(e){return Array.prototype.slice.call(e)}const oa=typeof BigInt=="function"?BigInt.asIntN:void 0,V3=typeof BigInt=="function"?BigInt.asUintN:void 0,Sr=Number.isSafeInteger,Eo=Number.isFinite,ps=Math.trunc,W3=_n(0);function Vs(e){if(e!=null&&typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);return e}function Zn(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function Zs(e){if(e!=null&&typeof e!="boolean"){var t=typeof e;throw Error(`Expected boolean but got ${t!="object"?t:e?Array.isArray(e)?"array":t:"null"}: ${e}`)}return e}function sp(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}const X3=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ca(e){switch(typeof e){case"bigint":return!0;case"number":return Eo(e);case"string":return X3.test(e);default:return!1}}function Ts(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Eo(e)?0|e:void 0}function ap(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Eo(e)?e>>>0:void 0}function op(e){const t=e.length;return(e[0]==="-"?t<20||t===20&&e<="-9223372036854775808":t<19||t===19&&e<="9223372036854775807")?e:(So(e),Jl(ge,Le))}function tu(e){if(e=ps(e),!Sr(e)){ds(e);var t=ge,n=Le;(e=2147483648&n)&&(n=~n>>>0,(t=1+~t>>>0)==0&&(n=n+1>>>0)),e=typeof(t=ip(t,n))=="number"?e?-t:t:e?"-"+t:t}return e}function cp(e){var t=ps(Number(e));return Sr(t)?String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),op(e))}function lp(e){var t=ps(Number(e));return Sr(t)?_n(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Ss()?_n(oa(64,BigInt(e))):_n(op(e)))}function up(e){return Sr(e)?e=_n(tu(e)):(e=ps(e),Sr(e)?e=String(e):(ds(e),e=Jl(ge,Le)),e=_n(e)),e}function so(e){const t=typeof e;return e==null?e:t==="bigint"?_n(oa(64,e)):ca(e)?t==="string"?lp(e):up(e):void 0}function hp(e){if(typeof e!="string")throw Error();return e}function la(e){if(e!=null&&typeof e!="string")throw Error();return e}function We(e){return e==null||typeof e=="string"?e:void 0}function eu(e,t,n,i){return e!=null&&e[hs]===fs?e:Array.isArray(e)?((i=(n=0|e[_t])|32&i|2&i)!==n&&ke(e,i),new t(e)):(n?2&i?((e=t[ef])||(aa((e=new t).v),e=t[ef]=e),t=e):t=new t:t=void 0,t)}function q3(e,t,n){if(t)t:{if(!ca(t=e))throw Sl("int64");switch(typeof t){case"string":t=lp(t);break t;case"bigint":t=_n(oa(64,t));break t;default:t=up(t)}}else t=so(e);return(e=t)==null?n?W3:void 0:e}const Y3={};let j3=(function(){try{return vo(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class Sc{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}}const K3=j3?(Object.setPrototypeOf(Sc.prototype,Map.prototype),Object.defineProperties(Sc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Sc):class extends Map{constructor(){super()}};function uf(e){return e}function Ec(e){if(2&e.J)throw Error("Cannot mutate an immutable Map")}var yi=class extends K3{constructor(e,t,n=uf,i=uf){super(),this.J=0|e[_t],this.K=t,this.S=n,this.fa=this.K?$3:i;for(let r=0;r<e.length;r++){const s=e[r],a=n(s[0],!1,!0);let o=s[1];t?o===void 0&&(o=null):o=i(s[1],!1,!0,void 0,void 0,this.J),super.set(a,o)}}V(e){return Ks(Array.from(super.entries(),e))}clear(){Ec(this),super.clear()}delete(e){return Ec(this),super.delete(this.S(e,!0,!1))}entries(){if(this.K){var e=super.keys();e=new sf(e,Z3,this)}else e=super.entries();return e}values(){if(this.K){var e=super.keys();e=new sf(e,yi.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.K?super.forEach(((n,i,r)=>{e.call(t,r.get(i),i,r)})):super.forEach(e,t)}set(e,t){return Ec(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.fa(t,!0,!0,this.K,!1,this.J))}Ma(e){const t=this.S(e[0],!1,!0);e=e[1],e=this.K?e===void 0?null:e:this.fa(e,!1,!0,void 0,!1,this.J),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);const t=super.get(e);if(t!==void 0){var n=this.K;return n?((n=this.fa(t,!1,!0,n,this.ra,this.J))!==t&&super.set(e,n),n):t}}[Symbol.iterator](){return this.entries()}};function $3(e,t,n,i,r,s){return e=eu(e,i,n,s),r&&(e=iu(e)),e}function Z3(e){return[e,this.get(e)]}let J3;function hf(){return J3||=new yi(aa([]),void 0,void 0,void 0,Y3)}function yo(e){return gn?e[gn]:void 0}function ao(e,t){for(const n in e)!isNaN(n)&&t(e,+n,e[n])}yi.prototype.toJSON=void 0;var Tl=class{};const Q3={Ka:!0};function tx(e,t){t<100||us(L3,1)}function To(e,t,n,i){const r=i!==void 0;i=!!i;var s,a=gn;!r&&Es&&a&&(s=e[a])&&ao(s,tx),a=[];var o=e.length;let c;s=4294967295;let l=!1;const u=!!(64&t),f=u?128&t?0:-1:void 0;1&t||(c=o&&e[o-1],c!=null&&typeof c=="object"&&c.constructor===Object?s=--o:c=void 0,!u||128&t||r||(l=!0,s=s-f+f)),t=void 0;for(var d=0;d<o;d++){let m=e[d];if(m!=null&&(m=n(m,i))!=null)if(u&&d>=s){const _=d-f;(t??={})[_]=m}else a[d]=m}if(c)for(let m in c){if((o=c[m])==null||(o=n(o,i))==null)continue;let _;d=+m,u&&!Number.isNaN(d)&&(_=d+f)<s?a[_]=o:(t??={})[m]=o}return t&&(l?a.push(t):a[s]=t),r&&gn&&(e=yo(e))&&e instanceof Tl&&(a[gn]=(function(m){const _=new Tl;return ao(m,((x,p,h)=>{_[p]=Vn(h)})),_.da=m.da,_})(e)),a}function ex(e){return e[0]=Js(e[0]),e[1]=Js(e[1]),e}function Js(e){switch(typeof e){case"number":return Number.isFinite(e)?e:""+e;case"bigint":return yl(e)?Number(e):""+e;case"boolean":return e?1:0;case"object":if(Array.isArray(e)){var t=0|e[_t];return e.length===0&&1&t?void 0:To(e,t,Js)}if(e!=null&&e[hs]===fs)return fp(e);if(e instanceof Jn){if((t=e.g)==null)e="";else if(typeof t=="string")e=t;else{if(Kd){for(var n="",i=0,r=t.length-10240;i<r;)n+=String.fromCharCode.apply(null,t.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?t.subarray(i):t),t=btoa(n)}else{n===void 0&&(n=0),jd(),n=Yd[n],i=Array(Math.floor(t.length/3)),r=n[64]||"";let l=0,u=0;for(;l<t.length-2;l+=3){var s=t[l],a=t[l+1],o=t[l+2],c=n[s>>2];s=n[(3&s)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[u++]=c+s+a+o}switch(c=0,o=r,t.length-l){case 2:o=n[(15&(c=t[l+1]))<<2]||r;case 1:t=t[l],i[u]=n[t>>2]+n[(3&t)<<4|c>>4]+o+r}t=i.join("")}e=e.g=t}return e}return e instanceof yi?e=e.size!==0?e.V(ex):void 0:void 0}return e}let nx,ix;function fp(e){return To(e=e.v,0|e[_t],Js)}function hr(e,t){return dp(e,t[0],t[1])}function dp(e,t,n,i=0){if(e==null){var r=32;n?(e=[n],r|=128):e=[],t&&(r=-16760833&r|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error("narr");if(r=0|e[_t],Zh&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&(function(){if(Zh)throw Error("carr");us(D3,5)})(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&ke(e,r|i),e;if(n&&(r|=128,n!==e[0]))throw Error("mid");t:{r|=64;var s=(n=e).length;if(s){var a=s-1;const c=n[a];if(c!=null&&typeof c=="object"&&c.constructor===Object){if((a-=t=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var o in c)(s=+o)<a&&(n[s+t]=c[o],delete c[o]);r=-16760833&r|(1023&a)<<14;break t}}if(t){if((o=Math.max(t,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return ke(e,64|r|i),e}function rx(e,t){if(typeof e!="object")return e;if(Array.isArray(e)){var n=0|e[_t];return e.length===0&&1&n?void 0:ff(e,n,t)}if(e!=null&&e[hs]===fs)return df(e);if(e instanceof yi){if(2&(t=e.J))return e;if(!e.size)return;if(n=aa(e.V()),e.K)for(e=0;e<n.length;e++){const i=n[e];let r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[hs]===fs?df(r):Array.isArray(r)?ff(r,0|r[_t],!!(32&t)):void 0,i[1]=r}return n}return e instanceof Jn?e:void 0}function ff(e,t,n){return 2&t||(!n||4096&t||16&t?e=As(e,t,!1,n&&!(16&t)):(sa(e,34),4&t&&Object.freeze(e))),e}function nu(e,t,n){return e=new e.constructor(t),n&&(e.h=Mr),e.m=Mr,e}function df(e){const t=e.v,n=0|t[_t];return vn(e,n)?e:ru(e,t,n)?nu(e,t):As(t,n)}function As(e,t,n,i){return i??=!!(34&t),e=To(e,t,rx,i),i=32,n&&(i|=2),ke(e,t=16769217&t|i),e}function iu(e){const t=e.v,n=0|t[_t];return vn(e,n)?ru(e,t,n)?nu(e,t,!0):new e.constructor(As(t,n,!1)):e}function bs(e){if(e.h!==Mr)return!1;var t=e.v;return sa(t=As(t,0|t[_t]),2048),e.v=t,e.h=void 0,e.m=void 0,!0}function ws(e){if(!bs(e)&&vn(e,0|e.v[_t]))throw Error()}function Tr(e,t){t===void 0&&(t=0|e[_t]),32&t&&!(4096&t)&&ke(e,4096|t)}function ru(e,t,n){return!!(2&n)||!(!(32&n)||4096&n)&&(ke(t,2|n),e.h=Mr,!0)}const pp=_n(0),Ii={};function _e(e,t,n,i,r){if((t=Ti(e.v,t,n,r))!==null||i&&e.m!==Mr)return t}function Ti(e,t,n,i){if(t===-1)return null;const r=t+(n?0:-1),s=e.length-1;let a,o;if(!(s<1+(n?0:-1))){if(r>=s)if(a=e[s],a!=null&&typeof a=="object"&&a.constructor===Object)n=a[t],o=!0;else{if(r!==s)return;n=a}else n=e[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[t]=i:e[r]=i,i}return n}}function se(e,t,n,i){ws(e),Ne(e=e.v,0|e[_t],t,n,i)}function Ne(e,t,n,i,r){const s=n+(r?0:-1);var a=e.length-1;if(a>=1+(r?0:-1)&&s>=a){const o=e[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,t}return s<=a?(e[s]=i,t):(i!==void 0&&(n>=(a=(t??=0|e[_t])>>14&1023||536870912)?i!=null&&(e[a+(r?0:-1)]={[n]:i}):e[s]=i),t)}function cr(){return I3===void 0?2:4}function lr(e,t,n,i,r){let s=e.v,a=0|s[_t];i=vn(e,a)?1:i,r=!!r||i===3,i===2&&bs(e)&&(s=e.v,a=0|s[_t]);let o=(e=su(s,t))===yr?7:0|e[_t],c=au(o,a);var l=!(4&c);if(l){4&c&&(e=Vn(e),o=0,c=dr(c,a),a=Ne(s,a,t,e));let u=0,f=0;for(;u<e.length;u++){const d=n(e[u]);d!=null&&(e[f++]=d)}f<u&&(e.length=f),n=-513&(4|c),c=n&=-1025,c&=-4097}return c!==o&&(ke(e,c),2&c&&Object.freeze(e)),mp(e,c,s,a,t,i,l,r)}function mp(e,t,n,i,r,s,a,o){let c=t;return s===1||s===4&&(2&t||!(16&t)&&32&i)?fr(t)||((t|=!e.length||a&&!(4096&t)||32&i&&!(4096&t||16&t)?2:256)!==c&&ke(e,t),Object.freeze(e)):(s===2&&fr(t)&&(e=Vn(e),c=0,t=dr(t,i),i=Ne(n,i,r,e)),fr(t)||(o||(t|=16),t!==c&&ke(e,t))),2&t||!(4096&t||16&t)||Tr(n,i),e}function su(e,t,n){return e=Ti(e,t,n),Array.isArray(e)?e:yr}function au(e,t){return 2&t&&(e|=2),1|e}function fr(e){return!!(2&e)&&!!(4&e)||!!(256&e)}function gp(e){return $l(e,!0)}function _p(e){e=Vn(e);for(let t=0;t<e.length;t++){const n=e[t]=Vn(e[t]);Array.isArray(n[1])&&(n[1]=aa(n[1]))}return Ks(e)}function Ni(e,t,n,i){ws(e),Ne(e=e.v,0|e[_t],t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Rs(e,t,n){if(2&t)throw Error();const i=ys(t);let r=su(e,n,i),s=r===yr?7:0|r[_t],a=au(s,t);return(2&a||fr(a)||16&a)&&(a===s||fr(a)||ke(r,a),r=Vn(r),s=0,a=dr(a,t),Ne(e,t,n,r,i)),a&=-13,a!==s&&ke(r,a),r}function yc(e,t){var n=cm;return cu(ou(e=e.v),e,void 0,n)===t?t:-1}function ou(e){if(Es)return e[ks]??(e[ks]=new Map);if(ks in e)return e[ks];const t=new Map;return Object.defineProperty(e,ks,{value:t}),t}function vp(e,t,n,i,r){const s=ou(e),a=cu(s,e,t,n,r);return a!==i&&(a&&(t=Ne(e,t,a,void 0,r)),s.set(n,i)),t}function cu(e,t,n,i,r){let s=e.get(i);if(s!=null)return s;s=0;for(let a=0;a<i.length;a++){const o=i[a];Ti(t,o,r)!=null&&(s!==0&&(n=Ne(t,n,s,void 0,r)),s=o)}return e.set(i,s),s}function lu(e,t,n){let i=0|e[_t];const r=ys(i),s=Ti(e,n,r);let a;if(s!=null&&s[hs]===fs){if(!vn(s))return bs(s),s.v;a=s.v}else Array.isArray(s)&&(a=s);if(a){const o=0|a[_t];2&o&&(a=As(a,o))}return a=hr(a,t),a!==s&&Ne(e,i,n,a,r),a}function xp(e,t,n,i,r){let s=!1;if((i=Ti(e,i,r,(a=>{const o=eu(a,n,!1,t);return s=o!==a&&o!=null,o})))!=null)return s&&!vn(i)&&Tr(e,t),i}function Jt(e,t,n,i){let r=e.v,s=0|r[_t];if((t=xp(r,s,t,n,i))==null)return t;if(s=0|r[_t],!vn(e,s)){const a=iu(t);a!==t&&(bs(e)&&(r=e.v,s=0|r[_t]),s=Ne(r,s,n,t=a,i),Tr(r,s))}return t}function Mp(e,t,n,i,r,s,a,o){var c=vn(e,n);s=c?1:s,a=!!a||s===3,c=o&&!c,(s===2||c)&&bs(e)&&(n=0|(t=e.v)[_t]);var l=(e=su(t,r))===yr?7:0|e[_t],u=au(l,n);if(o=!(4&u)){var f=e,d=n;const m=!!(2&u);m&&(d|=2);let _=!m,x=!0,p=0,h=0;for(;p<f.length;p++){const A=eu(f[p],i,!1,d);if(A instanceof i){if(!m){const T=vn(A);_&&=!T,x&&=T}f[h++]=A}}h<p&&(f.length=h),u|=4,u=x?-4097&u:4096|u,u=_?8|u:-9&u}if(u!==l&&(ke(e,u),2&u&&Object.freeze(e)),c&&!(8&u||!e.length&&(s===1||s===4&&(2&u||!(16&u)&&32&n)))){for(fr(u)&&(e=Vn(e),u=dr(u,n),n=Ne(t,n,r,e)),i=e,c=u,l=0;l<i.length;l++)(f=i[l])!==(u=iu(f))&&(i[l]=u);c|=8,ke(e,u=c=i.length?4096|c:-4097&c)}return mp(e,u,t,n,r,s,o,a)}function Ai(e,t,n){const i=e.v;return Mp(e,i,0|i[_t],t,n,cr(),!1,!0)}function Sp(e){return e==null&&(e=void 0),e}function Rt(e,t,n,i,r){return se(e,n,i=Sp(i),r),i&&!vn(i)&&Tr(e.v),e}function Xs(e,t,n,i){t:{var r=i=Sp(i);ws(e);const s=e.v;let a=0|s[_t];if(r==null){const o=ou(s);if(cu(o,s,a,n)!==t)break t;o.set(n,0)}else a=vp(s,a,n,t);Ne(s,a,t,r)}i&&!vn(i)&&Tr(e.v)}function dr(e,t){return-273&(2&t?2|e:-3&e)}function uu(e,t,n,i){var r=i;ws(e),e=Mp(e,i=e.v,0|i[_t],n,t,2,!0),r=r??new n,e.push(r),t=n=e===yr?7:0|e[_t],(r=vn(r))?(n&=-9,e.length===1&&(n&=-4097)):n|=4096,n!==t&&ke(e,n),r||Tr(i)}function Ln(e,t,n){return Ts(_e(e,t,void 0,n))}function be(e,t){return _e(e,t,void 0,void 0,Zn)??0}function bi(e,t,n){if(n!=null){if(typeof n!="number"||!Eo(n))throw Sl("int32");n|=0}se(e,t,n)}function Et(e,t,n){se(e,t,Vs(n))}function xn(e,t,n){Ni(e,t,la(n),"")}function oo(e,t,n){{ws(e);const a=e.v;let o=0|a[_t];if(n==null)Ne(a,o,t);else{var i=e=n===yr?7:0|n[_t],r=fr(e),s=r||Object.isFrozen(n);for(r||(e=0),s||(n=Vn(n),i=0,e=dr(e,o),s=!1),e|=5,e|=(4&e?512&e?512:1024&e?1024:0:void 0)??1024,r=0;r<n.length;r++){const c=n[r],l=hp(c);Object.is(c,l)||(s&&(n=Vn(n),i=0,e=dr(e,o),s=!1),n[r]=l)}e!==i&&(s&&(n=Vn(n),e=dr(e,o)),ke(n,e)),Ne(a,o,t,n)}}}function Ao(e,t,n){ws(e),lr(e,t,We,2,!0).push(hp(n))}var Gr=class{constructor(e,t,n){if(this.buffer=e,n&&!t)throw Error();this.g=t}};function hu(e,t){if(typeof e=="string")return new Gr($d(e),t);if(Array.isArray(e))return new Gr(new Uint8Array(e),t);if(e.constructor===Uint8Array)return new Gr(e,!1);if(e.constructor===ArrayBuffer)return e=new Uint8Array(e),new Gr(e,!1);if(e.constructor===Jn)return t=Kl(e)||new Uint8Array(0),new Gr(t,!0,e);if(e instanceof Uint8Array)return e=e.constructor===Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Gr(e,!1);throw Error()}function fu(e,t){let n,i=0,r=0,s=0;const a=e.h;let o=e.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);if(s>32)for(r|=(127&n)>>4,s=3;s<32&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(pr(e,o),!(128&n))return t(i>>>0,r>>>0);throw Error()}function du(e){let t=0,n=e.g;const i=n+10,r=e.h;for(;n<i;){const s=r[n++];if(t|=s,(128&s)==0)return pr(e,n),!!(127&t)}throw Error()}function Vi(e){const t=e.h;let n=e.g,i=t[n++],r=127&i;if(128&i&&(i=t[n++],r|=(127&i)<<7,128&i&&(i=t[n++],r|=(127&i)<<14,128&i&&(i=t[n++],r|=(127&i)<<21,128&i&&(i=t[n++],r|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Error();return pr(e,n),r}function ti(e){return Vi(e)>>>0}function co(e){var t=e.h;const n=e.g;var i=t[n],r=t[n+1];const s=t[n+2];return t=t[n+3],pr(e,e.g+4),e=2*((r=(i<<0|r<<8|s<<16|t<<24)>>>0)>>31)+1,i=r>>>23&255,r&=8388607,i==255?r?NaN:e*(1/0):i==0?1401298464324817e-60*e*r:e*Math.pow(2,i-150)*(r+8388608)}function sx(e){return Vi(e)}function pr(e,t){if(e.g=t,t>e.l)throw Error()}function Ep(e,t){if(t<0)throw Error();const n=e.g;if((t=n+t)>e.l)throw Error();return e.g=t,n}function yp(e,t){if(t==0)return xr();var n=Ep(e,t);return e.Y&&e.j?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):z3?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?xr():new Jn(n,ls)}var pf=[];function Tp(e,t,n,i){if(lo.length){const r=lo.pop();return r.o(i),r.g.init(e,t,n,i),r}return new ax(e,t,n,i)}function Ap(e){e.g.clear(),e.l=-1,e.h=-1,lo.length<100&&lo.push(e)}function bp(e){var t=e.g;if(t.g==t.l)return!1;e.m=e.g.g;var n=ti(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5)||t<1)throw Error();return e.l=t,e.h=n,!0}function Qa(e){switch(e.h){case 0:e.h!=0?Qa(e):du(e.g);break;case 1:pr(e=e.g,e.g+8);break;case 2:if(e.h!=2)Qa(e);else{var t=ti(e.g);pr(e=e.g,e.g+t)}break;case 5:pr(e=e.g,e.g+4);break;case 3:for(t=e.l;;){if(!bp(e))throw Error();if(e.h==4){if(e.l!=t)throw Error();break}Qa(e)}break;default:throw Error()}}function ua(e,t,n){const i=e.g.l;var r=ti(e.g);let s=(r=e.g.g+r)-i;if(s<=0&&(e.g.l=r,n(t,e,void 0,void 0,void 0),s=r-e.g.g),s)throw Error();return e.g.g=r,e.g.l=i,t}function pu(e){var t=ti(e.g),n=Ep(e=e.g,t);if(e=e.h,x3){var i,r=e;(i=Mc)||(i=Mc=new TextDecoder("utf-8",{fatal:!0})),t=n+t,r=n===0&&t===r.length?r:r.subarray(n,t);try{var s=i.decode(r)}catch(o){if(ka===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),ka=!0}catch{ka=!1}}throw!ka&&(Mc=void 0),o}}else{t=(s=n)+t,n=[];let o,c=null;for(;s<t;){var a=e[s++];a<128?n.push(a):a<224?s>=t?er():(o=e[s++],a<194||(192&o)!=128?(s--,er()):n.push((31&a)<<6|63&o)):a<240?s>=t-1?er():(o=e[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=e[s++]))!=128?(s--,er()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=t-2?er():(o=e[s++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(i=e[s++]))!=128||(192&(r=e[s++]))!=128?(s--,er()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):er(),n.length>=8192&&(c=$h(c,n),n.length=0)}s=$h(c,n)}return s}function wp(e){const t=ti(e.g);return yp(e.g,t)}function bo(e,t,n){var i=ti(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var ax=class{constructor(e,t,n,i){if(pf.length){const r=pf.pop();r.init(e,t,n,i),e=r}else e=new class{constructor(r,s,a,o){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(r,s,a,o)}init(r,s,a,{Y:o=!1,ea:c=!1}={}){this.Y=o,this.ea=c,r&&(r=hu(r,this.ea),this.h=r.buffer,this.j=r.g,this.m=s||0,this.l=a!==void 0?this.m+a:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(e,t,n,i);this.g=e,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:e=!1}={}){this.ha=e}},lo=[];function mf(e){return e?/^\d+$/.test(e)?(So(e),new Al(ge,Le)):null:ox||=new Al(0,0)}var Al=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let ox;function gf(e){return e?/^-?\d+$/.test(e)?(So(e),new bl(ge,Le)):null:cx||=new bl(0,0)}var bl=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let cx;function Jr(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function Cs(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function wo(e,t){if(t>=0)Cs(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function mu(e){var t=ge;e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function ms(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function Dn(e,t,n){Cs(e.g,8*t+n)}function gu(e,t){return Dn(e,t,2),t=e.g.end(),ms(e,t),t.push(e.h),t}function _u(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function Ro(e,t,n){Dn(e,t,2),Cs(e.g,n.length),ms(e,e.g.end()),ms(e,n)}function uo(e,t,n,i){n!=null&&(t=gu(e,t),i(n,e),_u(e,t))}function ni(){const e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var vu=ni(),Rp=ni(),xu=ni(),Mu=ni(),Su=ni(),Cp=ni(),lx=ni(),Co=ni(),Pp=ni(),Lp=ni();function ii(e,t,n){var i=e.v;gn&&gn in i&&(i=i[gn])&&delete i[t.g],t.h?t.j(e,t.h,t.g,n,t.l):t.j(e,t.g,n,t.l)}var vt=class{constructor(e,t){this.v=dp(e,t,void 0,2048)}toJSON(){return fp(this)}j(){var e=Wx,t=this.v,n=e.g,i=gn;if(Es&&i&&t[i]?.[n]!=null&&us(P3,3),t=e.g,nf&&gn&&nf===void 0&&(i=(n=this.v)[gn])&&(i=i.da))try{i(n,t,Q3)}catch(r){qd(r)}return e.h?e.m(this,e.h,e.g,e.l):e.m(this,e.g,e.defaultValue,e.l)}clone(){const e=this.v,t=0|e[_t];return ru(this,e,t)?nu(this,e,!0):new this.constructor(As(e,t,!1))}};vt.prototype[hs]=fs,vt.prototype.toString=function(){return this.v.toString()};var Ps=class{constructor(e,t,n){this.g=e,this.h=t,e=vu,this.l=!!e&&n===e||!1}};function Po(e,t){return new Ps(e,t,vu)}function Dp(e,t,n,i,r){uo(e,n,Fp(t,i),r)}const ux=Po((function(e,t,n,i,r){return e.h===2&&(ua(e,lu(t,i,n),r),!0)}),Dp),hx=Po((function(e,t,n,i,r){return e.h===2&&(ua(e,lu(t,i,n),r),!0)}),Dp);var Lo=Symbol(),Do=Symbol(),wl=Symbol(),_f=Symbol(),vf=Symbol();let Ip,Up;function Ar(e,t,n,i){var r=i[e];if(r)return r;(r={}).qa=i,r.T=(function(f){switch(typeof f){case"boolean":return nx||=[0,void 0,!0];case"number":return f>0?void 0:f===0?ix||=[0,void 0]:[-f,void 0];case"string":return[0,f];case"object":return f}})(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ba=s,typeof(s=i[++a])=="function"&&(r.ma=!0,Ip??=s,Up??=i[a+1],s=i[a+=2]));const o={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var c=0;c<s.length;c++)o[s[c]]=s;s=i[++a]}for(c=1;s!==void 0;){let f;typeof s=="number"&&(c+=s,s=i[++a]);var l=void 0;if(s instanceof Ps?f=s:(f=ux,a--),f?.l){s=i[++a],l=i;var u=a;typeof s=="function"&&(s=s(),l[u]=s),l=s}for(u=c+1,typeof(s=i[++a])=="number"&&s<0&&(u-=s,s=i[++a]);c<u;c++){const d=o[c];l?n(r,c,f,l,d):t(r,c,f,d)}}return i[e]=r}function Np(e){return Array.isArray(e)?e[0]instanceof Ps?e:[hx,e]:[e,void 0]}function Fp(e,t){return e instanceof vt?e.v:Array.isArray(e)?hr(e,t):void 0}function Eu(e,t,n,i){const r=n.g;e[t]=i?(s,a,o)=>r(s,a,o,i):r}function yu(e,t,n,i,r){const s=n.g;let a,o;e[t]=(c,l,u)=>s(c,l,u,o||=Ar(Do,Eu,yu,i).T,a||=Tu(i),r)}function Tu(e){let t=e[wl];if(t!=null)return t;const n=Ar(Do,Eu,yu,e);return t=n.ma?(i,r)=>Ip(i,r,n):(i,r)=>{for(;bp(r)&&r.h!=4;){var s=r.l,a=n[s];if(a==null){var o=n.ba;o&&(o=o[s])&&(o=dx(o))!=null&&(a=n[s]=o)}if(a==null||!a(r,i,s)){if(a=(o=r).m,Qa(o),o.ha)var c=void 0;else c=o.g.g-a,o.g.g=a,c=yp(o.g,c);a=void 0,o=i,c&&((a=o[gn]??(o[gn]=new Tl))[s]??(a[s]=[])).push(c)}}return(i=yo(i))&&(i.da=n.qa[vf]),!0},e[wl]=t,e[vf]=fx.bind(e),t}function fx(e,t,n,i){var r=this[Do];const s=this[wl],a=hr(void 0,r.T),o=yo(e);if(o){var c=!1,l=r.ba;if(l){if(r=(u,f,d)=>{if(d.length!==0)if(l[f])for(const m of d){u=Tp(m);try{c=!0,s(a,u)}finally{Ap(u)}}else i?.(e,f,d)},t==null)ao(o,r);else if(o!=null){const u=o[t];u&&r(o,t,u)}if(c){let u=0|e[_t];if(2&u&&2048&u&&!n?.Ka)throw Error();const f=ys(u),d=(m,_)=>{if(Ti(e,m,f)!=null){if(n?.Qa===1)return;throw Error()}_!=null&&(u=Ne(e,u,m,_,f)),delete o[m]};t==null?ep(a,0|a[_t],((m,_)=>{d(m,_)})):d(t,Ti(a,t,f))}}}}function dx(e){const t=(e=Np(e))[0].g;if(e=e[1]){const n=Tu(e),i=Ar(Do,Eu,yu,e).T;return(r,s,a)=>t(r,s,a,i,n)}return t}function Io(e,t,n){e[t]=n.h}function Uo(e,t,n,i){let r,s;const a=n.h;e[t]=(o,c,l)=>a(o,c,l,s||=Ar(Lo,Io,Uo,i).T,r||=Op(i))}function Op(e){let t=e[_f];if(!t){const n=Ar(Lo,Io,Uo,e);t=(i,r)=>Bp(i,r,n),e[_f]=t}return t}function Bp(e,t,n){ep(e,0|e[_t],((i,r)=>{if(r!=null){var s=(function(a,o){var c=a[o];if(c)return c;if((c=a.ba)&&(c=c[o])){var l=(c=Np(c))[0].h;if(c=c[1]){const u=Op(c),f=Ar(Lo,Io,Uo,c).T;c=a.ma?Up(f,u):(d,m,_)=>l(d,m,_,f,u)}else c=l;return a[o]=c}})(n,i);s?s(t,r,i):i<500||us(El,3)}})),(e=yo(e))&&ao(e,((i,r,s)=>{for(ms(t,t.g.end()),i=0;i<s.length;i++)ms(t,Kl(s[i])||new Uint8Array(0))}))}const px=_n(0);function Ls(e,t){if(Array.isArray(t)){var n=0|t[_t];if(4&n)return t;for(var i=0,r=0;i<t.length;i++){const s=e(t[i]);s!=null&&(t[r++]=s)}return r<i&&(t.length=r),(e=-1537&(5|n))!==n&&ke(t,e),2&e&&Object.freeze(t),t}}function $e(e,t,n){return new Ps(e,t,n)}function Ds(e,t,n){return new Ps(e,t,n)}function Ze(e,t,n){Ne(e,0|e[_t],t,n,ys(0|e[_t]))}var mx=Po((function(e,t,n,i,r){if(e.h!==2)return!1;if(e=Vn(e=ua(e,hr([void 0,void 0],i),r)),r=ys(i=0|t[_t]),2&i)throw Error();let s=Ti(t,n,r);if(s instanceof yi)(2&s.J)!=0?(s=s.V(),s.push(e),Ne(t,i,n,s,r)):s.Ma(e);else if(Array.isArray(s)){var a=0|s[_t];8192&a||ke(s,a|=8192),2&a&&(s=_p(s),Ne(t,i,n,s,r)),s.push(e)}else Ne(t,i,n,Ks([e]),r);return!0}),(function(e,t,n,i,r){if(t instanceof yi)t.forEach(((s,a)=>{uo(e,n,hr([a,s],i),r)}));else if(Array.isArray(t)){for(let s=0;s<t.length;s++){const a=t[s];Array.isArray(a)&&uo(e,n,hr(a,i),r)}Ks(t)}}));function kp(e,t,n){(t=Zn(t))!=null&&(Dn(e,n,5),e=e.g,Zl(t),mu(e))}function zp(e,t,n){if(t=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(oa(64,i));if(ca(i)){if(r==="string")return cp(i);if(r==="number")return tu(i)}})(t),t!=null&&(typeof t=="string"&&gf(t),t!=null))switch(Dn(e,n,0),typeof t){case"number":e=e.g,ds(t),Jr(e,ge,Le);break;case"bigint":n=BigInt.asUintN(64,t),n=new bl(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Jr(e.g,n.h,n.g);break;default:n=gf(t),Jr(e.g,n.h,n.g)}}function Gp(e,t,n){(t=Ts(t))!=null&&t!=null&&(Dn(e,n,0),wo(e.g,t))}function Hp(e,t,n){(t=sp(t))!=null&&(Dn(e,n,0),e.g.g.push(t?1:0))}function Vp(e,t,n){(t=We(t))!=null&&Ro(e,n,Xd(t))}function Wp(e,t,n,i,r){uo(e,n,Fp(t,i),r)}function Xp(e,t,n){(t=t==null||typeof t=="string"||t instanceof Jn?t:void 0)!=null&&Ro(e,n,hu(t,!0).buffer)}function qp(e,t,n){(t=ap(t))!=null&&t!=null&&(Dn(e,n,0),Cs(e.g,t))}function Yp(e,t,n){return(e.h===5||e.h===2)&&(t=Rs(t,0|t[_t],n),e.h==2?bo(e,co,t):t.push(co(e.g)),!0)}var De=$e((function(e,t,n){return e.h===5&&(Ze(t,n,co(e.g)),!0)}),kp,Co),gx=Ds(Yp,(function(e,t,n){if((t=Ls(Zn,t))!=null)for(let a=0;a<t.length;a++){var i=e,r=n,s=t[a];s!=null&&(Dn(i,r,5),i=i.g,Zl(s),mu(i))}}),Co),Au=Ds(Yp,(function(e,t,n){if((t=Ls(Zn,t))!=null&&t.length){Dn(e,n,2),Cs(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,Zl(t[i]),mu(n)}}),Co),_x=$e((function(e,t,n){return e.h===5&&(Ze(t,n,(e=co(e.g))===0?void 0:e),!0)}),kp,Co),Wi=$e((function(e,t,n){return e.h!==0?e=!1:(Ze(t,n,fu(e.g,rp)),e=!0),e}),zp,Cp),Tc=$e((function(e,t,n){return e.h!==0?t=!1:(Ze(t,n,(e=fu(e.g,rp))===px?void 0:e),t=!0),t}),zp,Cp),vx=$e((function(e,t,n){return e.h!==0?e=!1:(Ze(t,n,fu(e.g,H3)),e=!0),e}),(function(e,t,n){if(t=(function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(V3(64,i));if(ca(i)){if(r==="string")return r=ps(Number(i)),Sr(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),(r=i[0]!=="-"&&((r=i.length)<20||r===20&&i<="18446744073709551615"))||(So(i),i=$s(ge,Le))),i;if(r==="number")return(i=ps(i))>=0&&Sr(i)||(ds(i),i=ip(ge,Le)),i}})(t),t!=null&&(typeof t=="string"&&mf(t),t!=null))switch(Dn(e,n,0),typeof t){case"number":e=e.g,ds(t),Jr(e,ge,Le);break;case"bigint":n=BigInt.asUintN(64,t),n=new Al(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Jr(e.g,n.h,n.g);break;default:n=mf(t),Jr(e.g,n.h,n.g)}}),lx),Ue=$e((function(e,t,n){return e.h===0&&(Ze(t,n,Vi(e.g)),!0)}),Gp,Mu),ha=Ds((function(e,t,n){return(e.h===0||e.h===2)&&(t=Rs(t,0|t[_t],n),e.h==2?bo(e,Vi,t):t.push(Vi(e.g)),!0)}),(function(e,t,n){if((t=Ls(Ts,t))!=null&&t.length){n=gu(e,n);for(let i=0;i<t.length;i++)wo(e.g,t[i]);_u(e,n)}}),Mu),jr=$e((function(e,t,n){return e.h===0&&(Ze(t,n,(e=Vi(e.g))===0?void 0:e),!0)}),Gp,Mu),ve=$e((function(e,t,n){return e.h===0&&(Ze(t,n,du(e.g)),!0)}),Hp,Rp),mr=$e((function(e,t,n){return e.h===0&&(Ze(t,n,(e=du(e.g))===!1?void 0:e),!0)}),Hp,Rp),je=Ds((function(e,t,n){return e.h===2&&(e=pu(e),Rs(t,0|t[_t],n).push(e),!0)}),(function(e,t,n){if((t=Ls(We,t))!=null)for(let a=0;a<t.length;a++){var i=e,r=n,s=t[a];s!=null&&Ro(i,r,Xd(s))}}),xu),Oi=$e((function(e,t,n){return e.h===2&&(Ze(t,n,(e=pu(e))===""?void 0:e),!0)}),Vp,xu),oe=$e((function(e,t,n){return e.h===2&&(Ze(t,n,pu(e)),!0)}),Vp,xu),He=(function(e,t,n=vu){return new Ps(e,t,n)})((function(e,t,n,i,r){return e.h===2&&(i=hr(void 0,i),Rs(t,0|t[_t],n).push(i),ua(e,i,r),!0)}),(function(e,t,n,i,r){if(Array.isArray(t)){for(let s=0;s<t.length;s++)Wp(e,t[s],n,i,r);1&(e=0|t[_t])||ke(t,1|e)}})),de=Po((function(e,t,n,i,r,s){if(e.h!==2)return!1;let a=0|t[_t];return vp(t,a,s,n,ys(a)),ua(e,t=lu(t,i,n),r),!0}),Wp),jp=$e((function(e,t,n){return e.h===2&&(Ze(t,n,wp(e)),!0)}),Xp,Pp),xx=Ds((function(e,t,n){return(e.h===0||e.h===2)&&(t=Rs(t,0|t[_t],n),e.h==2?bo(e,ti,t):t.push(ti(e.g)),!0)}),(function(e,t,n){if((t=Ls(ap,t))!=null)for(let a=0;a<t.length;a++){var i=e,r=n,s=t[a];s!=null&&(Dn(i,r,0),Cs(i.g,s))}}),Su),Mx=$e((function(e,t,n){return e.h===0&&(Ze(t,n,(e=ti(e.g))===0?void 0:e),!0)}),qp,Su),Ke=$e((function(e,t,n){return e.h===0&&(Ze(t,n,Vi(e.g)),!0)}),(function(e,t,n){(t=Ts(t))!=null&&(t=parseInt(t,10),Dn(e,n,0),wo(e.g,t))}),Lp);class Sx{constructor(t,n){var i=Sn;this.g=t,this.h=n,this.m=Jt,this.j=Rt,this.defaultValue=void 0,this.l=i.Oa!=null?np:void 0}register(){vo(this)}}function ri(e,t){return new Sx(e,t)}function qi(e,t){return(n,i)=>{{const s={ea:!0};i&&Object.assign(s,i),n=Tp(n,void 0,void 0,s);try{const a=new e,o=a.v;Tu(t)(o,n);var r=a}finally{Ap(n)}}return r}}function No(e){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};Bp(this.v,t,Ar(Lo,Io,Uo,e)),ms(t,t.g.end());const n=new Uint8Array(t.h),i=t.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return t.l=[n],n}}var xf=class extends vt{constructor(e){super(e)}},Mf=[0,Oi,$e((function(e,t,n){return e.h===2&&(Ze(t,n,(e=wp(e))===xr()?void 0:e),!0)}),(function(e,t,n){if(t!=null){if(t instanceof vt){const i=t.Ra;return void(i?(t=i(t),t!=null&&Ro(e,n,hu(t,!0).buffer)):us(El,3))}if(Array.isArray(t))return void us(El,3)}Xp(e,t,n)}),Pp)];let Ac,Sf=globalThis.trustedTypes;function Ef(e){var t;return Ac===void 0&&(Ac=(function(){let n=null;if(!Sf)return n;try{const i=r=>r;n=Sf.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),e=(t=Ac)?t.createScriptURL(e):e,new class{constructor(n){this.g=n}toString(){return this.g+""}}(e)}function za(e,...t){if(t.length===0)return Ef(e[0]);let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return Ef(n)}var Kp=[0,Ue,Ke,ve,-1,ha,Ke,-1,ve],Ex=class extends vt{constructor(e){super(e)}},$p=[0,ve,oe,ve,Ke,-1,Ds((function(e,t,n){return(e.h===0||e.h===2)&&(t=Rs(t,0|t[_t],n),e.h==2?bo(e,sx,t):t.push(Vi(e.g)),!0)}),(function(e,t,n){if((t=Ls(Ts,t))!=null&&t.length){n=gu(e,n);for(let i=0;i<t.length;i++)wo(e.g,t[i]);_u(e,n)}}),Lp),oe,-1,[0,ve,-1],Ke,ve,-1],Zp=[0,3,ve,-1,2,[0,[2],Ue,de,[0,$e((function(e,t,n){return e.h===0&&(Ze(t,n,ti(e.g)),!0)}),qp,Su)]],[0,Ke,ve,Ke,ve,Ke,ve,oe,-1],[0,[3,4],oe,-1,de,[0,Ue],de,[0,Ke]],[0]],Jp=[0,oe,-2],yf=class extends vt{constructor(e){super(e)}},Qp=[0],tm=[0,Ue,ve,1,ve,-4],Sn=class extends vt{constructor(e){super(e,2)}},Fe={};Fe[336783863]=[0,oe,ve,-1,Ue,[0,[1,2,3,4,5,6,7,8,9],de,Qp,de,$p,de,Jp,de,tm,de,Kp,de,[0,oe,-2],de,[0,oe,Ke],de,Zp,de,[0,Ke,-1,ve]],[0,oe],ve,[0,[1,3],[2,4],de,[0,ha],-1,de,[0,je],-1,He,[0,oe,-1]],oe];var Tf=[0,Tc,-1,mr,-3,Tc,ha,Oi,jr,Tc,-1,mr,jr,mr,-2,Oi];function pe(e,t){Ao(e,3,t)}function Xt(e,t){Ao(e,4,t)}var cn=class extends vt{constructor(e){super(e,500)}o(e){return Rt(this,0,7,e)}},qs=[-1,{}],Af=[0,oe,1,qs],bf=[0,oe,je,qs];function In(e,t){uu(e,1,cn,t)}function xe(e,t){Ao(e,10,t)}function Qt(e,t){Ao(e,15,t)}var En=class extends vt{constructor(e){super(e,500)}o(e){return Rt(this,0,1001,e)}},em=[-500,He,[-500,Oi,-1,je,-3,[-2,Fe,ve],He,Mf,jr,-1,Af,bf,He,[0,Oi,mr],Oi,Tf,jr,je,987,je],4,He,[-500,oe,-1,[-1,{}],998,oe],He,[-500,oe,je,-1,[-2,{},ve],997,je,-1],jr,He,[-500,oe,je,qs,998,je],je,jr,Af,bf,He,[0,Oi,-1,qs],je,-2,Tf,Oi,-1,mr,[0,mr,Mx],978,qs,He,Mf];En.prototype.g=No(em);var yx=qi(En,em),Tx=class extends vt{constructor(e){super(e)}},nm=class extends vt{constructor(e){super(e)}g(){return Ai(this,Tx,1)}},im=[0,He,[0,Ue,De,oe,-1]],Fo=qi(nm,im),Ax=class extends vt{constructor(e){super(e)}},bx=class extends vt{constructor(e){super(e)}},bc=class extends vt{constructor(e){super(e)}l(){return Jt(this,Ax,2)}g(){return Ai(this,bx,5)}},rm=qi(class extends vt{constructor(e){super(e)}},[0,je,ha,Au,[0,Ke,[0,Ue,-3],[0,De,-3],[0,Ue,-1,[0,He,[0,Ue,-2]]],He,[0,De,-1,oe,De]],oe,-1,Wi,He,[0,Ue,De],je,Wi]),sm=class extends vt{constructor(e){super(e)}},Qr=qi(class extends vt{constructor(e){super(e)}},[0,He,[0,De,-4]]),am=class extends vt{constructor(e){super(e)}},fa=qi(class extends vt{constructor(e){super(e)}},[0,He,[0,De,-4]]),wx=class extends vt{constructor(e){super(e)}},Rx=[0,Ue,-1,Au,Ke],om=class extends vt{constructor(e){super(e)}};om.prototype.g=No([0,De,-4,Wi]);var Cx=class extends vt{constructor(e){super(e)}},Px=qi(class extends vt{constructor(e){super(e)}},[0,He,[0,1,Ue,oe,im],Wi]),wf=class extends vt{constructor(e){super(e)}},Lx=class extends vt{constructor(e){super(e)}na(){const e=_e(this,1,void 0,void 0,gp);return e??xr()}},Dx=class extends vt{constructor(e){super(e)}},cm=[1,2],Ix=qi(class extends vt{constructor(e){super(e)}},[0,He,[0,cm,de,[0,Au],de,[0,jp],Ue,oe],Wi]),bu=class extends vt{constructor(e){super(e)}},lm=[0,oe,Ue,De,je,-1],Rf=class extends vt{constructor(e){super(e)}},Ux=[0,ve,-1],Cf=class extends vt{constructor(e){super(e)}},to=[1,2,3,4,5,6],ho=class extends vt{constructor(e){super(e)}g(){return _e(this,1,void 0,void 0,gp)!=null}l(){return We(_e(this,2))!=null}},ye=class extends vt{constructor(e){super(e)}g(){return sp(_e(this,2))??!1}},um=[0,jp,oe,[0,Ue,Wi,-1],[0,vx,Wi]],Ie=[0,um,ve,[0,to,de,tm,de,$p,de,Kp,de,Qp,de,Jp,de,Zp],Ke],Oo=class extends vt{constructor(e){super(e)}},wu=[0,Ie,De,-1,Ue],Nx=ri(502141897,Oo);Fe[502141897]=wu;var Fx=qi(class extends vt{constructor(e){super(e)}},[0,[0,Ke,-1,gx,xx],Rx]),hm=class extends vt{constructor(e){super(e)}},fm=class extends vt{constructor(e){super(e)}},Rl=[0,Ie,De,[0,Ie],ve],Ox=ri(508968150,fm);Fe[508968150]=[0,Ie,wu,Rl,De,[0,[0,um]]],Fe[508968149]=Rl;var Hr=class extends vt{constructor(e){super(e)}l(){return Jt(this,bu,2)}g(){se(this,2)}},dm=[0,Ie,lm];Fe[478825465]=dm;var Bx=class extends vt{constructor(e){super(e)}},pm=class extends vt{constructor(e){super(e)}},Ru=class extends vt{constructor(e){super(e)}},Cu=class extends vt{constructor(e){super(e)}},mm=class extends vt{constructor(e){super(e)}},Pf=[0,Ie,[0,Ie],dm,-1],gm=[0,Ie,De,Ue],Pu=[0,Ie,De],_m=[0,Ie,gm,Pu,De],kx=ri(479097054,mm);Fe[479097054]=[0,Ie,_m,Pf],Fe[463370452]=Pf,Fe[464864288]=gm;var zx=ri(462713202,Cu);Fe[462713202]=_m,Fe[474472470]=Pu;var Gx=class extends vt{constructor(e){super(e)}},vm=class extends vt{constructor(e){super(e)}},xm=class extends vt{constructor(e){super(e)}},Mm=class extends vt{constructor(e){super(e)}},Lu=[0,Ie,De,-1,Ue],Cl=[0,Ie,De,ve];Mm.prototype.g=No([0,Ie,Pu,[0,Ie],wu,Rl,Lu,Cl]);var Sm=class extends vt{constructor(e){super(e)}},Hx=ri(456383383,Sm);Fe[456383383]=[0,Ie,lm];var Em=class extends vt{constructor(e){super(e)}},Vx=ri(476348187,Em);Fe[476348187]=[0,Ie,Ux];var ym=class extends vt{constructor(e){super(e)}},Lf=class extends vt{constructor(e){super(e)}},Tm=[0,Ke,-1],Wx=ri(458105876,class extends vt{constructor(e){super(e)}g(){let e;var t=this.v;const n=0|t[_t];return e=vn(this,n),t=(function(i,r,s,a){var o=Lf;!a&&bs(i)&&(s=0|(r=i.v)[_t]);var c=Ti(r,2);if(i=!1,c==null){if(a)return hf();c=[]}else if(c.constructor===yi){if(!(2&c.J)||a)return c;c=c.V()}else Array.isArray(c)?i=!!(2&(0|c[_t])):c=[];if(a){if(!c.length)return hf();i||(i=!0,aa(c))}else i&&(i=!1,Ks(c),c=_p(c));return!i&&32&s&&sa(c,32),s=Ne(r,s,2,a=new yi(c,o,q3,void 0)),i||Tr(r,s),a})(this,t,n,e),!e&&Lf&&(t.ra=!0),t}});Fe[458105876]=[0,Tm,mx,[!0,Wi,[0,oe,-1,je]],[0,ha,ve,Ke]];var Du=class extends vt{constructor(e){super(e)}},Am=ri(458105758,Du);Fe[458105758]=[0,Ie,oe,Tm];var wc=class extends vt{constructor(e){super(e)}},Df=[0,_x,-1,mr],Xx=class extends vt{constructor(e){super(e)}},bm=class extends vt{constructor(e){super(e)}},Pl=[1,2];bm.prototype.g=No([0,Pl,de,Df,de,[0,He,Df]]);var wm=class extends vt{constructor(e){super(e)}},qx=ri(443442058,wm);Fe[443442058]=[0,Ie,oe,Ue,De,je,-1,ve,De],Fe[514774813]=Lu;var Rm=class extends vt{constructor(e){super(e)}},Yx=ri(516587230,Rm);function Ll(e,t){return t=t?t.clone():new bu,e.displayNamesLocale!==void 0?se(t,1,la(e.displayNamesLocale)):e.displayNamesLocale===void 0&&se(t,1),e.maxResults!==void 0?bi(t,2,e.maxResults):"maxResults"in e&&se(t,2),e.scoreThreshold!==void 0?Et(t,3,e.scoreThreshold):"scoreThreshold"in e&&se(t,3),e.categoryAllowlist!==void 0?oo(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&se(t,4),e.categoryDenylist!==void 0?oo(t,5,e.categoryDenylist):"categoryDenylist"in e&&se(t,5),t}function Cm(e){const t=Number(e);return Number.isSafeInteger(t)?t:String(e)}function Iu(e,t=-1,n=""){return{categories:e.map((i=>({index:Ln(i,1)??0??-1,score:be(i,2)??0,categoryName:We(_e(i,3))??""??"",displayName:We(_e(i,4))??""??""}))),headIndex:t,headName:n}}function jx(e){const t={classifications:Ai(e,Cx,1).map((n=>Iu(Jt(n,nm,4)?.g()??[],Ln(n,2)??0,We(_e(n,3))??"")))};return(function(n){return n==null?n:typeof n=="bigint"?(yl(n)?n=Number(n):(n=oa(64,n),n=yl(n)?Number(n):String(n)),n):ca(n)?typeof n=="number"?tu(n):cp(n):void 0})(_e(e,2,void 0,void 0,so))!=null&&(t.timestampMs=Cm(_e(e,2,void 0,void 0,so)??pp)),t}function Pm(e){var t=lr(e,3,Zn,cr()),n=lr(e,2,Ts,cr()),i=lr(e,1,We,cr()),r=lr(e,9,We,cr());const s={categories:[],keypoints:[]};for(let a=0;a<t.length;a++)s.categories.push({score:t[a],index:n[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((t=Jt(e,bc,4)?.l())&&(s.boundingBox={originX:Ln(t,1,Ii)??0,originY:Ln(t,2,Ii)??0,width:Ln(t,3,Ii)??0,height:Ln(t,4,Ii)??0,angle:0}),Jt(e,bc,4)?.g().length)for(const a of Jt(e,bc,4).g())s.keypoints.push({x:_e(a,1,void 0,Ii,Zn)??0,y:_e(a,2,void 0,Ii,Zn)??0,score:_e(a,4,void 0,Ii,Zn)??0,label:We(_e(a,3,void 0,Ii))??""});return s}function Bo(e){const t=[];for(const n of Ai(e,am,1))t.push({x:be(n,1)??0,y:be(n,2)??0,z:be(n,3)??0,visibility:be(n,4)??0});return t}function Ys(e){const t=[];for(const n of Ai(e,sm,1))t.push({x:be(n,1)??0,y:be(n,2)??0,z:be(n,3)??0,visibility:be(n,4)??0});return t}function If(e){return Array.from(e,(t=>t>127?t-256:t))}function Uf(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,r=0;for(let s=0;s<e.length;s++)n+=e[s]*t[s],i+=e[s]*e[s],r+=t[s]*t[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let Ga;Fe[516587230]=[0,Ie,Lu,Cl,De],Fe[518928384]=Cl;const Kx=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Lm(e){if(e)return!0;if(Ga===void 0)try{await WebAssembly.instantiate(Kx),Ga=!0}catch{Ga=!1}return Ga}async function Ha(e,t,n){return{wasmLoaderPath:`${t}/${e}_${n=`wasm${n?"_module":""}${await Lm(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var qr=class{};function Dm(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function Nf(e){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise(((n,i)=>{t.addEventListener("load",(()=>{n()}),!1),t.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(t)}))}try{importScripts(e.toString())}catch(t){if(!(t instanceof TypeError))throw t;{const n=self.import;n?await n(e.toString()):await import(e.toString())}}}function Im(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function Mt(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function Ff(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=Im(t);return!e.l||i===e.i.canvas.width&&r===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=r),[i,r]}function Of(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let r=0;r<t.length;r++)i[r]=e.i.stringToNewUTF8(t[r]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(const r of i)e.i._free(r);e.i._free(t)}function Yn(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function Ui(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}qr.forVisionTasks=function(e,t=!1){return Ha("vision",e??za``,t)},qr.forTextTasks=function(e,t=!1){return Ha("text",e??za``,t)},qr.forGenAiTasks=function(e,t=!1){return Ha("genai",e??za``,t)},qr.forAudioTasks=function(e,t=!1){return Ha("audio",e??za``,t)},qr.isSimdSupported=function(e=!1){return Lm(e)};async function $x(e,t,n,i){return e=await(async(r,s,a,o,c)=>{if(s&&await Nf(s),!self.ModuleFactory||a&&(await Nf(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,o)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await e.o(i),e}function Rc(e,t){const n=Jt(e.baseOptions,ho,1)||new ho;typeof t=="string"?(se(n,2,la(t)),se(n,1)):t instanceof Uint8Array&&(se(n,1,$l(t,!1)),se(n,2)),Rt(e.baseOptions,0,1,n)}function Bf(e){try{const t=e.H.length;if(t===1)throw Error(e.H[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.H.map((n=>n.message)).join(", "))}finally{e.H=[]}}function dt(e,t){e.C=Math.max(e.C,t)}function ko(e,t){e.B=new cn,xn(e.B,2,"PassThroughCalculator"),pe(e.B,"free_memory"),Xt(e.B,"free_memory_unused_out"),xe(t,"free_memory"),In(t,e.B)}function gs(e,t){pe(e.B,t),Xt(e.B,t+"_unused_out")}function zo(e){e.g.addBoolToStream(!0,"free_memory",e.C)}var Dl=class{constructor(e){this.g=e,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){if(t){const n=e.baseOptions||{};if(e.baseOptions?.modelAssetBuffer&&e.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(Jt(this.baseOptions,ho,1)?.g()||Jt(this.baseOptions,ho,1)?.l()||e.baseOptions?.modelAssetBuffer||e.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,r){let s=Jt(i.baseOptions,Cf,3);if(!s){var a=s=new Cf,o=new yf;Xs(a,4,to,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new Ex,Xs(r,2,to,a)):(r=s,a=new yf,Xs(r,4,to,a))),Rt(i.baseOptions,0,3,s)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Rc(this,"/model.dat"),this.m(),this.L()}));if(n.modelAssetBuffer instanceof Uint8Array)Rc(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i})(n.modelAssetBuffer).then((i=>{Rc(this,i),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let e;if(this.g.ca((t=>{e=yx(t)})),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(e,t),this.B=void 0,Bf(this)}finishProcessing(){this.g.finishProcessing(),Bf(this)}close(){this.B=void 0,this.g.closeGraph()}};function Gi(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}Dl.prototype.close=Dl.prototype.close;class Zx{constructor(t,n,i,r){this.g=t,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function kf(e,t,n){const i=e.g;if(n=Gi(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function zf(e,t){const n=e.g,i=Gi(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=Gi(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.O),n.vertexAttribPointer(e.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=Gi(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.L),n.vertexAttribPointer(e.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new Zx(n,i,r,s)}function Uu(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function Jx(e,t,n,i){return Uu(e,t),e.h||(e.m(),e.D()),n?(e.u||(e.u=zf(e,!0)),n=e.u):(e.A||(e.A=zf(e,!1)),n=e.A),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function Um(e,t,n){return Uu(e,t),e=Gi(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function Nm(e,t,n){Uu(e,t),e.B||(e.B=Gi(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.B),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function Qx(e){e.g?.bindFramebuffer(e.g.FRAMEBUFFER,null)}var Fm=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const e=this.g;if(this.h=Gi(e.createProgram(),"Failed to create WebGL program"),this.X=kf(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.W=kf(this,this.H(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.O=e.getAttribLocation(this.h,"aVertex"),this.L=e.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const e=this.g;e.deleteProgram(this.h),e.deleteShader(this.X),e.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function pi(e,t){switch(t){case 0:return e.g.find((n=>n instanceof Uint8Array));case 1:return e.g.find((n=>n instanceof Float32Array));case 2:return e.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function Il(e){var t=pi(e,1);if(!t){if(t=pi(e,0))t=new Float32Array(t).map((i=>i/255));else{t=new Float32Array(e.width*e.height);const i=_s(e);var n=Nu(e);if(Nm(n,i,Om(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<t.length;++r,s+=4)t[r]=n[s]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function Om(e){let t=pi(e,2);if(!t){const n=_s(e);t=km(e);const i=Il(e),r=Bm(e);n.texImage2D(n.TEXTURE_2D,0,r,e.width,e.height,0,n.RED,n.FLOAT,i),Ul(e)}return t}function _s(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=Gi(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function Bm(e){if(e=_s(e),!Va)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))Va=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Va=e.R16F}return Va}function Nu(e){return e.l||(e.l=new Fm),e.l}function km(e){const t=_s(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=pi(e,2);return n||(n=Um(Nu(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Ul(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var Va,Ge=class{constructor(e,t,n,i,r,s,a){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--Gf===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!pi(this,0)}ka(){return!!pi(this,1)}R(){return!!pi(this,2)}ja(){return(t=pi(e=this,0))||(t=Il(e),t=new Uint8Array(t.map((n=>Math.round(255*n)))),e.g.push(t)),t;var e,t}ia(){return Il(this)}N(){return Om(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const i=_s(this),r=Nu(this);i.activeTexture(i.TEXTURE1),n=Um(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=Bm(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Nm(r,i,n),Jx(r,i,!1,(()=>{km(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Ul(this)})),Qx(r),Ul(this)}}e.push(n)}return new Ge(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&_s(this).deleteTexture(pi(this,2)),Gf=-1}};Ge.prototype.close=Ge.prototype.close,Ge.prototype.clone=Ge.prototype.clone,Ge.prototype.getAsWebGLTexture=Ge.prototype.N,Ge.prototype.getAsFloat32Array=Ge.prototype.ia,Ge.prototype.getAsUint8Array=Ge.prototype.ja,Ge.prototype.hasWebGLTexture=Ge.prototype.R,Ge.prototype.hasFloat32Array=Ge.prototype.ka,Ge.prototype.hasUint8Array=Ge.prototype.Fa;var Gf=250;function Wn(...e){return e.map((([t,n])=>({start:t,end:n})))}const tM=(function(e){return class extends e{Ja(){this.i._registerModelResourcesGraphService()}}})((Hf=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:Dm()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){const t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){const n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Mt(this,i||"input_audio",(s=>{Mt(this,r=r||"audio_header",(a=>{this.i._configureAudio(s,a,e,t??0,n)}))}))}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ca(e){Yn(this,"__graph_config__",(t=>{e(t)})),Mt(this,"__graph_config__",(t=>{this.i._getGraphConfig(t,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,r){const s=4*e.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(e,this.g/4),Mt(this,i,(a=>{this.i._addAudioToInputStream(this.g,t,n,a,r)}))}addGpuBufferToStream(e,t,n){Mt(this,t,(i=>{const[r,s]=Ff(this,e,i);this.i._addBoundTextureToStream(i,r,s,n)}))}addBoolToStream(e,t,n){Mt(this,t,(i=>{this.i._addBoolToInputStream(e,i,n)}))}addDoubleToStream(e,t,n){Mt(this,t,(i=>{this.i._addDoubleToInputStream(e,i,n)}))}addFloatToStream(e,t,n){Mt(this,t,(i=>{this.i._addFloatToInputStream(e,i,n)}))}addIntToStream(e,t,n){Mt(this,t,(i=>{this.i._addIntToInputStream(e,i,n)}))}addUintToStream(e,t,n){Mt(this,t,(i=>{this.i._addUintToInputStream(e,i,n)}))}addStringToStream(e,t,n){Mt(this,t,(i=>{Mt(this,e,(r=>{this.i._addStringToInputStream(r,i,n)}))}))}addStringRecordToStream(e,t,n){Mt(this,t,(i=>{Of(this,Object.keys(e),(r=>{Of(this,Object.values(e),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(e).length,i,n)}))}))}))}addProtoToStream(e,t,n,i){Mt(this,n,(r=>{Mt(this,t,(s=>{const a=this.i._malloc(e.length);this.i.HEAPU8.set(e,a),this.i._addProtoToInputStream(a,e.length,s,r,i),this.i._free(a)}))}))}addEmptyPacketToStream(e,t){Mt(this,e,(n=>{this.i._addEmptyPacketToInputStream(n,t)}))}addBoolVectorToStream(e,t,n){Mt(this,t,(i=>{const r=this.i._allocateBoolVector(e.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of e)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)}))}addDoubleVectorToStream(e,t,n){Mt(this,t,(i=>{const r=this.i._allocateDoubleVector(e.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of e)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)}))}addFloatVectorToStream(e,t,n){Mt(this,t,(i=>{const r=this.i._allocateFloatVector(e.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of e)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)}))}addIntVectorToStream(e,t,n){Mt(this,t,(i=>{const r=this.i._allocateIntVector(e.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of e)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)}))}addUintVectorToStream(e,t,n){Mt(this,t,(i=>{const r=this.i._allocateUintVector(e.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of e)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)}))}addStringVectorToStream(e,t,n){Mt(this,t,(i=>{const r=this.i._allocateStringVector(e.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of e)Mt(this,s,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputStream(r,i,n)}))}addBoolToInputSidePacket(e,t){Mt(this,t,(n=>{this.i._addBoolToInputSidePacket(e,n)}))}addDoubleToInputSidePacket(e,t){Mt(this,t,(n=>{this.i._addDoubleToInputSidePacket(e,n)}))}addFloatToInputSidePacket(e,t){Mt(this,t,(n=>{this.i._addFloatToInputSidePacket(e,n)}))}addIntToInputSidePacket(e,t){Mt(this,t,(n=>{this.i._addIntToInputSidePacket(e,n)}))}addUintToInputSidePacket(e,t){Mt(this,t,(n=>{this.i._addUintToInputSidePacket(e,n)}))}addStringToInputSidePacket(e,t){Mt(this,t,(n=>{Mt(this,e,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(e,t,n){Mt(this,n,(i=>{Mt(this,t,(r=>{const s=this.i._malloc(e.length);this.i.HEAPU8.set(e,s),this.i._addProtoToInputSidePacket(s,e.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(e,t){Mt(this,t,(n=>{const i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of e)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(e,t){Mt(this,t,(n=>{const i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of e)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(e,t){Mt(this,t,(n=>{const i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of e)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(e,t){Mt(this,t,(n=>{const i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of e)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(e,t){Mt(this,t,(n=>{const i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of e)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(e,t){Mt(this,t,(n=>{const i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of e)Mt(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(e,t){Yn(this,e,t),Mt(this,e,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(e,t){Ui(this,e,t),Mt(this,e,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(e,t){Yn(this,e,t),Mt(this,e,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(e,t){Ui(this,e,t),Mt(this,e,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(e,t){Yn(this,e,t),Mt(this,e,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(e,t){Ui(this,e,t),Mt(this,e,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(e,t){Yn(this,e,t),Mt(this,e,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(e,t){Ui(this,e,t),Mt(this,e,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(e,t){Yn(this,e,t),Mt(this,e,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(e,t){Ui(this,e,t),Mt(this,e,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(e,t){Yn(this,e,t),Mt(this,e,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(e,t){Ui(this,e,t),Mt(this,e,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(e,t,n){Yn(this,e,t),Mt(this,e,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(e,t,n){Ui(this,e,t),Mt(this,e,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Yn(this,e,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,r)})),Mt(this,e,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Hf{get ga(){return this.i}pa(e,t,n){Mt(this,t,(i=>{const[r,s]=Ff(this,e,i);this.ga._addBoundTextureAsImageToStream(i,r,s,n)}))}Z(e,t){Yn(this,e,t),Mt(this,e,(n=>{this.ga._attachImageListener(n)}))}aa(e,t){Ui(this,e,t),Mt(this,e,(n=>{this.ga._attachImageVectorListener(n)}))}}));var Hf,Xn=class extends tM{};async function Kt(e,t,n){return(async function(i,r,s,a){return $x(i,r,s,a)})(e,n.canvas??(Dm()?void 0:document.createElement("canvas")),t,n)}function zm(e,t,n,i){if(e.U){const s=new om;if(n?.regionOfInterest){if(!e.oa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Et(s,1,(r.left+r.right)/2),Et(s,2,(r.top+r.bottom)/2),Et(s,4,r.right-r.left),Et(s,3,r.bottom-r.top)}else Et(s,1,.5),Et(s,2,.5),Et(s,4,1),Et(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Et(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[a,o]=Im(t);n=be(s,3)*o/a,r=be(s,4)*a/o,Et(s,4,n),Et(s,3,r)}}e.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",e.U,i)}e.g.pa(t,e.X,i??performance.now()),e.finishProcessing()}function qn(e,t,n){if(e.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");zm(e,t,n,e.C+1)}function si(e,t,n,i){if(!e.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");zm(e,t,n,i)}function vs(e,t,n,i){var r=t.data;const s=t.width,a=s*(t=t.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return e=new Ge([r],n,!1,e.g.i.canvas,e.P,s,t),i?e.clone():e}var Mn=class extends Dl{constructor(e,t,n,i){super(e),this.g=e,this.X=t,this.U=n,this.oa=i,this.P=new Fm}l(e,t=!0){if("runningMode"in e&&se(this.baseOptions,2,Zs(!!e.runningMode&&e.runningMode!=="IMAGE")),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.P.close(),super.close()}};Mn.prototype.close=Mn.prototype.close;var wn=class extends Mn{constructor(e,t){super(new Xn(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Rt(e=this.h=new Oo,0,1,t=new ye),Et(this.h,2,.5),Et(this.h,3,.3)}get baseOptions(){return Jt(this.h,ye,1)}set baseOptions(e){Rt(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&Et(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&Et(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}F(e,t){return this.j={detections:[]},qn(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},si(this,e,n,t),this.j}m(){var e=new En;xe(e,"image_in"),xe(e,"norm_rect_in"),Qt(e,"detections");const t=new Sn;ii(t,Nx,this.h);const n=new cn;xn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect_in"),Xt(n,"DETECTIONS:detections"),n.o(t),In(e,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=rm(s),this.j.detections.push(Pm(i));dt(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{dt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};wn.prototype.detectForVideo=wn.prototype.G,wn.prototype.detect=wn.prototype.F,wn.prototype.setOptions=wn.prototype.o,wn.createFromModelPath=async function(e,t){return Kt(wn,e,{baseOptions:{modelAssetPath:t}})},wn.createFromModelBuffer=function(e,t){return Kt(wn,e,{baseOptions:{modelAssetBuffer:t}})},wn.createFromOptions=function(e,t){return Kt(wn,e,t)};var Fu=Wn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Ou=Wn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Bu=Wn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Gm=Wn([474,475],[475,476],[476,477],[477,474]),ku=Wn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),zu=Wn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Hm=Wn([469,470],[470,471],[471,472],[472,469]),Gu=Wn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Vm=[...Fu,...Ou,...Bu,...ku,...zu,...Gu],Wm=Wn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Vf(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Ee=class extends Mn{constructor(e,t){super(new Xn(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Rt(e=this.h=new fm,0,1,t=new ye),this.A=new hm,Rt(this.h,0,3,this.A),this.u=new Oo,Rt(this.h,0,2,this.u),bi(this.u,4,1),Et(this.u,2,.5),Et(this.A,2,.5),Et(this.h,4,.5)}get baseOptions(){return Jt(this.h,ye,1)}set baseOptions(e){Rt(this.h,0,1,e)}o(e){return"numFaces"in e&&bi(this.u,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&Et(this.u,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&Et(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&Et(this.A,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}F(e,t){return Vf(this),qn(this,e,t),this.j}G(e,t,n){return Vf(this),si(this,e,n,t),this.j}m(){var e=new En;xe(e,"image_in"),xe(e,"norm_rect"),Qt(e,"face_landmarks");const t=new Sn;ii(t,Ox,this.h);const n=new cn;xn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),Xt(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),In(e,n),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=fa(s),this.j.faceLandmarks.push(Bo(i));dt(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{dt(this,i)})),this.outputFaceBlendshapes&&(Qt(e,"blendshapes"),Xt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Fo(s),this.j.faceBlendshapes.push(Iu(i.g()??[]));dt(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{dt(this,i)}))),this.outputFacialTransformationMatrixes&&(Qt(e,"face_geometry"),Xt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=Jt(i=Fx(s),wx,2))&&this.j.facialTransformationMatrixes.push({rows:Ln(i,1)??0??0,columns:Ln(i,2)??0??0,data:lr(i,3,Zn,cr()).slice()??[]});dt(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{dt(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ee.prototype.detectForVideo=Ee.prototype.G,Ee.prototype.detect=Ee.prototype.F,Ee.prototype.setOptions=Ee.prototype.o,Ee.createFromModelPath=function(e,t){return Kt(Ee,e,{baseOptions:{modelAssetPath:t}})},Ee.createFromModelBuffer=function(e,t){return Kt(Ee,e,{baseOptions:{modelAssetBuffer:t}})},Ee.createFromOptions=function(e,t){return Kt(Ee,e,t)},Ee.FACE_LANDMARKS_LIPS=Fu,Ee.FACE_LANDMARKS_LEFT_EYE=Ou,Ee.FACE_LANDMARKS_LEFT_EYEBROW=Bu,Ee.FACE_LANDMARKS_LEFT_IRIS=Gm,Ee.FACE_LANDMARKS_RIGHT_EYE=ku,Ee.FACE_LANDMARKS_RIGHT_EYEBROW=zu,Ee.FACE_LANDMARKS_RIGHT_IRIS=Hm,Ee.FACE_LANDMARKS_FACE_OVAL=Gu,Ee.FACE_LANDMARKS_CONTOURS=Vm,Ee.FACE_LANDMARKS_TESSELATION=Wm;var Hu=Wn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Wf(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function Xf(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function qf(e,t=!0){const n=[];for(const r of e){var i=Fo(r);e=[];for(const s of i.g())i=t&&Ln(s,1)!=null?Ln(s,1)??0:-1,e.push({score:be(s,2)??0,index:i,categoryName:We(_e(s,3))??""??"",displayName:We(_e(s,4))??""??""});n.push(e)}return n}var fn=class extends Mn{constructor(e,t){super(new Xn(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Rt(e=this.j=new mm,0,1,t=new ye),this.u=new Cu,Rt(this.j,0,2,this.u),this.D=new Ru,Rt(this.u,0,3,this.D),this.A=new pm,Rt(this.u,0,2,this.A),this.h=new Bx,Rt(this.j,0,3,this.h),Et(this.A,2,.5),Et(this.u,4,.5),Et(this.D,2,.5)}get baseOptions(){return Jt(this.j,ye,1)}set baseOptions(e){Rt(this.j,0,1,e)}o(e){if(bi(this.A,3,e.numHands??1),"minHandDetectionConfidence"in e&&Et(this.A,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Et(this.u,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Et(this.D,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new Hr,n=t,i=Ll(e.cannedGesturesClassifierOptions,Jt(this.h,Hr,3)?.l());Rt(n,0,2,i),Rt(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&Jt(this.h,Hr,3)?.g();return e.customGesturesClassifierOptions?(Rt(n=t=new Hr,0,2,i=Ll(e.customGesturesClassifierOptions,Jt(this.h,Hr,4)?.l())),Rt(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&Jt(this.h,Hr,4)?.g(),this.l(e)}Ha(e,t){return Wf(this),qn(this,e,t),Xf(this)}Ia(e,t,n){return Wf(this),si(this,e,n,t),Xf(this)}m(){var e=new En;xe(e,"image_in"),xe(e,"norm_rect"),Qt(e,"hand_gestures"),Qt(e,"hand_landmarks"),Qt(e,"world_hand_landmarks"),Qt(e,"handedness");const t=new Sn;ii(t,kx,this.j);const n=new cn;xn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),Xt(n,"HAND_GESTURES:hand_gestures"),Xt(n,"LANDMARKS:hand_landmarks"),Xt(n,"WORLD_LANDMARKS:world_hand_landmarks"),Xt(n,"HANDEDNESS:handedness"),n.o(t),In(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=fa(s);const a=[];for(const o of Ai(i,am,1))a.push({x:be(o,1)??0,y:be(o,2)??0,z:be(o,3)??0,visibility:be(o,4)??0});this.landmarks.push(a)}dt(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{dt(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=Qr(s);const a=[];for(const o of Ai(i,sm,1))a.push({x:be(o,1)??0,y:be(o,2)??0,z:be(o,3)??0,visibility:be(o,4)??0});this.worldLandmarks.push(a)}dt(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{dt(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...qf(i,!1)),dt(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{dt(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...qf(i)),dt(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{dt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function Yf(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}fn.prototype.recognizeForVideo=fn.prototype.Ia,fn.prototype.recognize=fn.prototype.Ha,fn.prototype.setOptions=fn.prototype.o,fn.createFromModelPath=function(e,t){return Kt(fn,e,{baseOptions:{modelAssetPath:t}})},fn.createFromModelBuffer=function(e,t){return Kt(fn,e,{baseOptions:{modelAssetBuffer:t}})},fn.createFromOptions=function(e,t){return Kt(fn,e,t)},fn.HAND_CONNECTIONS=Hu;var rn=class extends Mn{constructor(e,t){super(new Xn(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Rt(e=this.h=new Cu,0,1,t=new ye),this.u=new Ru,Rt(this.h,0,3,this.u),this.j=new pm,Rt(this.h,0,2,this.j),bi(this.j,3,1),Et(this.j,2,.5),Et(this.u,2,.5),Et(this.h,4,.5)}get baseOptions(){return Jt(this.h,ye,1)}set baseOptions(e){Rt(this.h,0,1,e)}o(e){return"numHands"in e&&bi(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&Et(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Et(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Et(this.u,2,e.minHandPresenceConfidence??.5),this.l(e)}F(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],qn(this,e,t),Yf(this)}G(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],si(this,e,n,t),Yf(this)}m(){var e=new En;xe(e,"image_in"),xe(e,"norm_rect"),Qt(e,"hand_landmarks"),Qt(e,"world_hand_landmarks"),Qt(e,"handedness");const t=new Sn;ii(t,zx,this.h);const n=new cn;xn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),Xt(n,"LANDMARKS:hand_landmarks"),Xt(n,"WORLD_LANDMARKS:world_hand_landmarks"),Xt(n,"HANDEDNESS:handedness"),n.o(t),In(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=fa(s),this.landmarks.push(Bo(i));dt(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{dt(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=Qr(s),this.worldLandmarks.push(Ys(i));dt(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{dt(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const c of i){i=Fo(c);const l=[];for(const u of i.g())l.push({score:be(u,2)??0,index:Ln(u,1)??0??-1,categoryName:We(_e(u,3))??""??"",displayName:We(_e(u,4))??""??""});o.push(l)}a.call(s,...o),dt(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{dt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};rn.prototype.detectForVideo=rn.prototype.G,rn.prototype.detect=rn.prototype.F,rn.prototype.setOptions=rn.prototype.o,rn.createFromModelPath=function(e,t){return Kt(rn,e,{baseOptions:{modelAssetPath:t}})},rn.createFromModelBuffer=function(e,t){return Kt(rn,e,{baseOptions:{modelAssetBuffer:t}})},rn.createFromOptions=function(e,t){return Kt(rn,e,t)},rn.HAND_CONNECTIONS=Hu;var Xm=Wn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function jf(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Kf(e){try{if(!e.D)return e.h;e.D(e.h)}finally{zo(e)}}function Wa(e,t){e=fa(e),t.push(Bo(e))}var fe=class extends Mn{constructor(e,t){super(new Xn(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Rt(e=this.j=new Mm,0,1,t=new ye),this.I=new Ru,Rt(this.j,0,2,this.I),this.W=new Gx,Rt(this.j,0,3,this.W),this.u=new Oo,Rt(this.j,0,4,this.u),this.O=new hm,Rt(this.j,0,5,this.O),this.A=new vm,Rt(this.j,0,6,this.A),this.M=new xm,Rt(this.j,0,7,this.M),Et(this.u,2,.5),Et(this.u,3,.3),Et(this.O,2,.5),Et(this.A,2,.5),Et(this.A,3,.3),Et(this.M,2,.5),Et(this.I,2,.5)}get baseOptions(){return Jt(this.j,ye,1)}set baseOptions(e){Rt(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&Et(this.u,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&Et(this.u,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&Et(this.O,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&Et(this.A,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&Et(this.A,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&Et(this.M,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&Et(this.I,2,e.minHandLandmarksConfidence??.5),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.D=typeof t=="function"?t:n,jf(this),qn(this,e,i),Kf(this)}G(e,t,n,i){const r=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,jf(this),si(this,e,r,t),Kf(this)}m(){var e=new En;xe(e,"input_frames_image"),Qt(e,"pose_landmarks"),Qt(e,"pose_world_landmarks"),Qt(e,"face_landmarks"),Qt(e,"left_hand_landmarks"),Qt(e,"left_hand_world_landmarks"),Qt(e,"right_hand_landmarks"),Qt(e,"right_hand_world_landmarks");const t=new Sn,n=new xf;xn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(r,s){if(s!=null)if(Array.isArray(s))se(r,2,To(s,0,Js));else{if(!(typeof s=="string"||s instanceof Jn||jl(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Ni(r,2,$l(s,!1),xr())}})(n,this.j.g());const i=new cn;xn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),uu(i,8,xf,n),pe(i,"IMAGE:input_frames_image"),Xt(i,"POSE_LANDMARKS:pose_landmarks"),Xt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Xt(i,"FACE_LANDMARKS:face_landmarks"),Xt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Xt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Xt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Xt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),In(e,i),ko(this,e),this.g.attachProtoListener("pose_landmarks",((r,s)=>{Wa(r,this.h.poseLandmarks),dt(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{dt(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var a=this.h.poseWorldLandmarks;r=Qr(r),a.push(Ys(r)),dt(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{dt(this,r)})),this.outputPoseSegmentationMasks&&(Xt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),gs(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[vs(this,r,!0,!this.D)],dt(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],dt(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{Wa(r,this.h.faceLandmarks),dt(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{dt(this,r)})),this.outputFaceBlendshapes&&(Qt(e,"extra_blendshapes"),Xt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Fo(r),a.push(Iu(r.g()??[]))),dt(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{dt(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{Wa(r,this.h.leftHandLandmarks),dt(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{dt(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var a=this.h.leftHandWorldLandmarks;r=Qr(r),a.push(Ys(r)),dt(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{dt(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{Wa(r,this.h.rightHandLandmarks),dt(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{dt(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var a=this.h.rightHandWorldLandmarks;r=Qr(r),a.push(Ys(r)),dt(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{dt(this,r)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};fe.prototype.detectForVideo=fe.prototype.G,fe.prototype.detect=fe.prototype.F,fe.prototype.setOptions=fe.prototype.o,fe.createFromModelPath=function(e,t){return Kt(fe,e,{baseOptions:{modelAssetPath:t}})},fe.createFromModelBuffer=function(e,t){return Kt(fe,e,{baseOptions:{modelAssetBuffer:t}})},fe.createFromOptions=function(e,t){return Kt(fe,e,t)},fe.HAND_CONNECTIONS=Hu,fe.POSE_CONNECTIONS=Xm,fe.FACE_LANDMARKS_LIPS=Fu,fe.FACE_LANDMARKS_LEFT_EYE=Ou,fe.FACE_LANDMARKS_LEFT_EYEBROW=Bu,fe.FACE_LANDMARKS_LEFT_IRIS=Gm,fe.FACE_LANDMARKS_RIGHT_EYE=ku,fe.FACE_LANDMARKS_RIGHT_EYEBROW=zu,fe.FACE_LANDMARKS_RIGHT_IRIS=Hm,fe.FACE_LANDMARKS_FACE_OVAL=Gu,fe.FACE_LANDMARKS_CONTOURS=Vm,fe.FACE_LANDMARKS_TESSELATION=Wm;var Rn=class extends Mn{constructor(e,t){super(new Xn(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},Rt(e=this.h=new Sm,0,1,t=new ye)}get baseOptions(){return Jt(this.h,ye,1)}set baseOptions(e){Rt(this.h,0,1,e)}o(e){return Rt(this.h,0,2,Ll(e,Jt(this.h,bu,2))),this.l(e)}sa(e,t){return this.j={classifications:[]},qn(this,e,t),this.j}ta(e,t,n){return this.j={classifications:[]},si(this,e,n,t),this.j}m(){var e=new En;xe(e,"input_image"),xe(e,"norm_rect"),Qt(e,"classifications");const t=new Sn;ii(t,Hx,this.h);const n=new cn;xn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),pe(n,"IMAGE:input_image"),pe(n,"NORM_RECT:norm_rect"),Xt(n,"CLASSIFICATIONS:classifications"),n.o(t),In(e,n),this.g.attachProtoListener("classifications",((i,r)=>{this.j=jx(Px(i)),dt(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{dt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Rn.prototype.classifyForVideo=Rn.prototype.ta,Rn.prototype.classify=Rn.prototype.sa,Rn.prototype.setOptions=Rn.prototype.o,Rn.createFromModelPath=function(e,t){return Kt(Rn,e,{baseOptions:{modelAssetPath:t}})},Rn.createFromModelBuffer=function(e,t){return Kt(Rn,e,{baseOptions:{modelAssetBuffer:t}})},Rn.createFromOptions=function(e,t){return Kt(Rn,e,t)};var dn=class extends Mn{constructor(e,t){super(new Xn(e,t),"image_in","norm_rect",!0),this.h=new Em,this.embeddings={embeddings:[]},Rt(e=this.h,0,1,t=new ye)}get baseOptions(){return Jt(this.h,ye,1)}set baseOptions(e){Rt(this.h,0,1,e)}o(e){var t=this.h,n=Jt(this.h,Rf,2);return n=n?n.clone():new Rf,e.l2Normalize!==void 0?se(n,1,Zs(e.l2Normalize)):"l2Normalize"in e&&se(n,1),e.quantize!==void 0?se(n,2,Zs(e.quantize)):"quantize"in e&&se(n,2),Rt(t,0,2,n),this.l(e)}za(e,t){return qn(this,e,t),this.embeddings}Aa(e,t,n){return si(this,e,n,t),this.embeddings}m(){var e=new En;xe(e,"image_in"),xe(e,"norm_rect"),Qt(e,"embeddings_out");const t=new Sn;ii(t,Vx,this.h);const n=new cn;xn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),Xt(n,"EMBEDDINGS:embeddings_out"),n.o(t),In(e,n),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=Ix(i),this.embeddings=(function(s){return{embeddings:Ai(s,Dx,1).map((a=>{const o={headIndex:Ln(a,3)??0??-1,headName:We(_e(a,4))??""??""};var c=a.v;return xp(c,0|c[_t],wf,yc(a,1))!==void 0?(a=lr(a=Jt(a,wf,yc(a,1),void 0),1,Zn,cr()),o.floatEmbedding=a.slice()):(c=new Uint8Array(0),o.quantizedEmbedding=Jt(a,Lx,yc(a,2),void 0)?.na()?.h()??c),o})),timestampMs:Cm(_e(s,2,void 0,void 0,so)??pp)}})(i),dt(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{dt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};dn.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=Uf(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=Uf(If(e.quantizedEmbedding),If(t.quantizedEmbedding))}return e},dn.prototype.embedForVideo=dn.prototype.Aa,dn.prototype.embed=dn.prototype.za,dn.prototype.setOptions=dn.prototype.o,dn.createFromModelPath=function(e,t){return Kt(dn,e,{baseOptions:{modelAssetPath:t}})},dn.createFromModelBuffer=function(e,t){return Kt(dn,e,{baseOptions:{modelAssetBuffer:t}})},dn.createFromOptions=function(e,t){return Kt(dn,e,t)};var Nl=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};function eM(e){const t=(function(n){return Ai(n,cn,1)})(e.ca()).filter((n=>(We(_e(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(e.u=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(Jt(t[0],Sn,7)?.j()?.g()??new Map).forEach(((n,i)=>{e.u[Number(i)]=We(_e(n,1))??""}))}function $f(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function Zf(e){try{const t=new Nl(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{zo(e)}}Nl.prototype.close=Nl.prototype.close;var nn=class extends Mn{constructor(e,t){super(new Xn(e,t),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Du,this.A=new ym,Rt(this.h,0,3,this.A),Rt(e=this.h,0,1,t=new ye)}get baseOptions(){return Jt(this.h,ye,1)}set baseOptions(e){Rt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?se(this.h,2,la(e.displayNamesLocale)):"displayNamesLocale"in e&&se(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}L(){eM(this)}segment(e,t,n){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,$f(this),qn(this,e,i),Zf(this)}La(e,t,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,$f(this),si(this,e,r,t),Zf(this)}Da(){return this.u}m(){var e=new En;xe(e,"image_in"),xe(e,"norm_rect");const t=new Sn;ii(t,Am,this.h);const n=new cn;xn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),n.o(t),In(e,n),ko(this,e),this.outputConfidenceMasks&&(Qt(e,"confidence_masks"),Xt(n,"CONFIDENCE_MASKS:confidence_masks"),gs(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>vs(this,s,!0,!this.j))),dt(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],dt(this,i)}))),this.outputCategoryMask&&(Qt(e,"category_mask"),Xt(n,"CATEGORY_MASK:category_mask"),gs(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=vs(this,i,!1,!this.j),dt(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,dt(this,i)}))),Qt(e,"quality_scores"),Xt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,dt(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,dt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};nn.prototype.getLabels=nn.prototype.Da,nn.prototype.segmentForVideo=nn.prototype.La,nn.prototype.segment=nn.prototype.segment,nn.prototype.setOptions=nn.prototype.o,nn.createFromModelPath=function(e,t){return Kt(nn,e,{baseOptions:{modelAssetPath:t}})},nn.createFromModelBuffer=function(e,t){return Kt(nn,e,{baseOptions:{modelAssetBuffer:t}})},nn.createFromOptions=function(e,t){return Kt(nn,e,t)};var Fl=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};Fl.prototype.close=Fl.prototype.close;var jn=class extends Mn{constructor(e,t){super(new Xn(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Du,this.u=new ym,Rt(this.h,0,3,this.u),Rt(e=this.h,0,1,t=new ye)}get baseOptions(){return Jt(this.h,ye,1)}set baseOptions(e){Rt(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,i){const r=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new bm,t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var s=new wc;Ni(s,3,Zs(!0),!1),Ni(s,1,Vs(t.keypoint.x),0),Ni(s,2,Vs(t.keypoint.y),0),Xs(i,1,Pl,s)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");{const o=new Xx;for(s of t.scribble)Ni(t=new wc,3,Zs(!0),!1),Ni(t,1,Vs(s.x),0),Ni(t,2,Vs(s.y),0),uu(o,1,wc,t);Xs(i,2,Pl,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),qn(this,e,r);t:{try{const o=new Fl(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var a=o;break t}this.j(o)}finally{zo(this)}a=void 0}return a}m(){var e=new En;xe(e,"image_in"),xe(e,"roi_in"),xe(e,"norm_rect_in");const t=new Sn;ii(t,Am,this.h);const n=new cn;xn(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),pe(n,"IMAGE:image_in"),pe(n,"ROI:roi_in"),pe(n,"NORM_RECT:norm_rect_in"),n.o(t),In(e,n),ko(this,e),this.outputConfidenceMasks&&(Qt(e,"confidence_masks"),Xt(n,"CONFIDENCE_MASKS:confidence_masks"),gs(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>vs(this,s,!0,!this.j))),dt(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],dt(this,i)}))),this.outputCategoryMask&&(Qt(e,"category_mask"),Xt(n,"CATEGORY_MASK:category_mask"),gs(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=vs(this,i,!1,!this.j),dt(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,dt(this,i)}))),Qt(e,"quality_scores"),Xt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,dt(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,dt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};jn.prototype.segment=jn.prototype.segment,jn.prototype.setOptions=jn.prototype.o,jn.createFromModelPath=function(e,t){return Kt(jn,e,{baseOptions:{modelAssetPath:t}})},jn.createFromModelBuffer=function(e,t){return Kt(jn,e,{baseOptions:{modelAssetBuffer:t}})},jn.createFromOptions=function(e,t){return Kt(jn,e,t)};var Cn=class extends Mn{constructor(e,t){super(new Xn(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Rt(e=this.h=new wm,0,1,t=new ye)}get baseOptions(){return Jt(this.h,ye,1)}set baseOptions(e){Rt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?se(this.h,2,la(e.displayNamesLocale)):"displayNamesLocale"in e&&se(this.h,2),e.maxResults!==void 0?bi(this.h,3,e.maxResults):"maxResults"in e&&se(this.h,3),e.scoreThreshold!==void 0?Et(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&se(this.h,4),e.categoryAllowlist!==void 0?oo(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&se(this.h,5),e.categoryDenylist!==void 0?oo(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&se(this.h,6),this.l(e)}F(e,t){return this.j={detections:[]},qn(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},si(this,e,n,t),this.j}m(){var e=new En;xe(e,"input_frame_gpu"),xe(e,"norm_rect"),Qt(e,"detections");const t=new Sn;ii(t,qx,this.h);const n=new cn;xn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),pe(n,"IMAGE:input_frame_gpu"),pe(n,"NORM_RECT:norm_rect"),Xt(n,"DETECTIONS:detections"),n.o(t),In(e,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=rm(s),this.j.detections.push(Pm(i));dt(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{dt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Cn.prototype.detectForVideo=Cn.prototype.G,Cn.prototype.detect=Cn.prototype.F,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=async function(e,t){return Kt(Cn,e,{baseOptions:{modelAssetPath:t}})},Cn.createFromModelBuffer=function(e,t){return Kt(Cn,e,{baseOptions:{modelAssetBuffer:t}})},Cn.createFromOptions=function(e,t){return Kt(Cn,e,t)};var Ol=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((e=>{e.close()}))}};function Jf(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function Qf(e){try{const t=new Ol(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.u)return t;e.u(t)}finally{zo(e)}}Ol.prototype.close=Ol.prototype.close;var pn=class extends Mn{constructor(e,t){super(new Xn(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Rt(e=this.h=new Rm,0,1,t=new ye),this.A=new xm,Rt(this.h,0,3,this.A),this.j=new vm,Rt(this.h,0,2,this.j),bi(this.j,4,1),Et(this.j,2,.5),Et(this.A,2,.5),Et(this.h,4,.5)}get baseOptions(){return Jt(this.h,ye,1)}set baseOptions(e){Rt(this.h,0,1,e)}o(e){return"numPoses"in e&&bi(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&Et(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&Et(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&Et(this.A,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:n,Jf(this),qn(this,e,i),Qf(this)}G(e,t,n,i){const r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,Jf(this),si(this,e,r,t),Qf(this)}m(){var e=new En;xe(e,"image_in"),xe(e,"norm_rect"),Qt(e,"normalized_landmarks"),Qt(e,"world_landmarks"),Qt(e,"segmentation_masks");const t=new Sn;ii(t,Yx,this.h);const n=new cn;xn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),Xt(n,"NORM_LANDMARKS:normalized_landmarks"),Xt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),In(e,n),ko(this,e),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=fa(s),this.landmarks.push(Bo(i));dt(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],dt(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=Qr(s),this.worldLandmarks.push(Ys(i));dt(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],dt(this,i)})),this.outputSegmentationMasks&&(Xt(n,"SEGMENTATION_MASK:segmentation_masks"),gs(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>vs(this,s,!0,!this.u))),dt(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],dt(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};pn.prototype.detectForVideo=pn.prototype.G,pn.prototype.detect=pn.prototype.F,pn.prototype.setOptions=pn.prototype.o,pn.createFromModelPath=function(e,t){return Kt(pn,e,{baseOptions:{modelAssetPath:t}})},pn.createFromModelBuffer=function(e,t){return Kt(pn,e,{baseOptions:{modelAssetBuffer:t}})},pn.createFromOptions=function(e,t){return Kt(pn,e,t)},pn.POSE_CONNECTIONS=Xm;const td=[4,8,12,16,20],fo=[0,9,13],Xa=.6,ed=.45,nM=45,nd=2,iM=.6,rM=.8;let id=0,rd=0,Cc=0,Vr=0,Wr=0,zs=.5;function qm(e){return fo.reduce((t,n)=>t+e[n].x,0)/fo.length}function Ym(e){return fo.reduce((t,n)=>t+e[n].y,0)/fo.length}function sM(e){const t=qm(e),n=Ym(e);let i=0;for(const s of td)i+=Math.hypot(e[s].x-t,e[s].y-n);const r=i/td.length;return Math.max(0,Math.min(1,(r-.08)/.22))}function aM(e,t){const n=e.landmarks;if(!n?.length){lt.hand.lostFrames++,lt.hand.lostFrames>nM&&(lt.hand.detected=!1,lt.trackMode="mouse");return}const i=n[0],r=qm(i),s=Ym(i),a=(1-r)*2-1,o=1-s*2;lt.hand.lostFrames>0||!lt.hand.detected?(Vr=a,Wr=o):(Vr=Vr*Xa+a*(1-Xa),Wr=Wr*Xa+o*(1-Xa));const c=sM(i);zs=zs*ed+c*(1-ed);let l=0;if(Cc>0){const u=Math.max((t-Cc)/1e3,.001);l=Math.hypot(Vr-id,Wr-rd)/u}if(id=Vr,rd=Wr,Cc=t,lt.hand.detected=!0,lt.hand.palmX=Vr,lt.hand.palmY=Wr,lt.hand.openness=zs,lt.hand.velocity=l,lt.hand.attractRadius=zs<.15?.2:.35+zs*.5,lt.hand.lostFrames=0,lt.trackMode="hand",l>nd){const u=Math.min((l-nd)*iM,rM);u>lt.explosion&&(lt.explosion=u)}}const oM="./wasm",cM="./models/hand_landmarker.task";let gr=null,mn=null,mi=null,Bi=null,ts=null,Vu=!1,Bl=0;const lM=33;function uM(){const e=document.createElement("video");return e.setAttribute("playsinline",""),e.setAttribute("muted",""),e.id="camera-preview",e.style.cssText="position:fixed;bottom:16px;left:16px;z-index:200;width:160px;height:120px;border-radius:12px;border:2px solid rgba(255,255,255,0.2);object-fit:cover;transform:scaleX(-1);opacity:0.85;pointer-events:none;",document.body.appendChild(e),e}async function hM(){if(gr)return;Bi=document.createElement("canvas"),Bi.width=1,Bi.height=1,Bi.style.display="none",document.body.appendChild(Bi),mn=document.createElement("video"),mn.setAttribute("playsinline",""),mn.setAttribute("muted",""),mn.style.display="none",document.body.appendChild(mn),console.log("[HandTracker] 加载 WASM...");const e=await qr.forVisionTasks(oM);console.log("[HandTracker] WASM 加载完成"),console.log("[HandTracker] 创建 HandLandmarker..."),gr=await rn.createFromOptions(e,{baseOptions:{modelAssetPath:cM,delegate:"CPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.7,minHandPresenceConfidence:.6,minTrackingConfidence:.6}),console.log("[HandTracker] HandLandmarker 创建完成"),console.log("[HandTracker] 请求摄像头..."),ts=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"}}),mn.srcObject=ts,await mn.play(),console.log("[HandTracker] 摄像头已启动"),mi||(mi=uM()),mi.srcObject=ts,mi.style.display="block",await mi.play(),Vu=!0,lt.trackMode="hand",lt.trackError="",Bl=0,console.log("[HandTracker] 初始化完成，手势追踪已启动")}function fM(e){if(!(!gr||!mn||!Vu)&&!(e-Bl<lM)){Bl=e;try{const t=gr.detectForVideo(mn,e);aM(t,e)}catch{}}}function dM(){Vu=!1,ts&&(ts.getTracks().forEach(e=>e.stop()),ts=null),mn&&(mn.srcObject=null,mn.remove(),mn=null),mi&&(mi.srcObject=null,mi.remove(),mi=null),Bi&&(Bi.remove(),Bi=null),gr&&(gr.close(),gr=null),lt.trackMode="mouse"}async function pM(){try{await hM()}catch(e){const t=e instanceof Error?e.message:e&&typeof e=="object"&&"message"in e?String(e.message):"摄像头或模型加载失败";lt.trackError=t,lt.trackMode="error",console.warn("手势追踪初始化失败，切换为鼠标模式:",t),dM()}}const mM=document.getElementById("status"),gM=document.getElementById("loading-overlay"),sd=document.querySelectorAll(".model-btn"),kl=document.getElementById("base-color"),ad=document.getElementById("density-slider"),_M=document.getElementById("density-val"),vM=document.getElementById("fullscreen-btn"),xM=document.getElementById("hint");function Wu(e){mM.textContent=e}function MM(){gM.classList.add("hidden")}const Xi=new a3({antialias:!1,alpha:!1,powerPreference:"high-performance"});Xi.setPixelRatio(Math.min(devicePixelRatio,2));Xi.setSize(window.innerWidth,window.innerHeight);Xi.setClearColor(328976);document.body.prepend(Xi.domElement);Xi.domElement.id="scene";const jm=new vg,Km=new Od(-1,1,1,-1,0,1);Km.position.z=.5;const Er=new v3;Er.addToScene(jm);function $m(e,t){lt.mouseNormX=e/window.innerWidth*2-1,lt.mouseNormY=-(t/window.innerHeight)*2+1}window.addEventListener("pointermove",e=>$m(e.clientX,e.clientY));window.addEventListener("pointerdown",e=>{lt.isPointerDown=!0,$m(e.clientX,e.clientY)});window.addEventListener("pointerup",()=>{lt.isPointerDown=!1});window.addEventListener("resize",()=>{Xi.setSize(window.innerWidth,window.innerHeight),Xi.setPixelRatio(Math.min(devicePixelRatio,2)),Er.resize()});sd.forEach(e=>{e.addEventListener("click",()=>{const t=parseInt(e.getAttribute("data-model"));sd.forEach(s=>s.classList.remove("active")),e.classList.add("active"),Er.setStyle(t),lt.modelIndex=t;const n=Ja[t],i=(n.hueRange[0]+n.hueRange[1])/2,r=SM(i/360,n.saturation,(n.lightnessRange[0]+n.lightnessRange[1])/2);kl.value=r})});kl.addEventListener("input",()=>{const e=kl.value,t=parseInt(e.slice(1,3),16)/255,n=parseInt(e.slice(3,5),16)/255,i=parseInt(e.slice(5,7),16)/255,r=Er.geometry.attributes.aColor,s=r.array;for(let a=0;a<s.length;a+=3)s[a]=s[a]*.3+t*.7,s[a+1]=s[a+1]*.3+n*.7,s[a+2]=s[a+2]*.3+i*.7;r.needsUpdate=!0});ad.addEventListener("input",()=>{const e=parseInt(ad.value);_M.textContent=(e/1e3).toFixed(0)+"k",lt.particleCount=e,Er.rebuild(e)});vM.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()});function SM(e,t,n){const i=t*Math.min(n,1-n),r=a=>{const o=(a+e*12)%12;return n-i*Math.max(Math.min(o-3,9-o,1),-1)},s=a=>Math.round(a*255).toString(16).padStart(2,"0");return"#"+s(r(0))+s(r(8))+s(r(4))}Wu("⏳ 加载粒子系统...");MM();Wu("✅ 运行中 | 粒子: "+lt.particleCount+" | 加载手势模型...");pM();let Pc=0,Lc=performance.now(),od=performance.now();function Zm(e){if(requestAnimationFrame(Zm),lt.delta=Math.min((e-od)/1e3,.05),lt.time+=lt.delta,od=e,document.hidden||(fM(e),lt.explosion*=.88,lt.explosion<.001&&(lt.explosion=0),Er.update(),Xi.render(jm,Km)),Pc++,e-Lc>=1e3){lt.fps=Math.round(Pc/((e-Lc)/1e3)),Pc=0,Lc=e;const t=lt.trackMode==="hand"?"✋ 手势":lt.trackMode==="loading"?"⏳ 加载模型...":lt.trackMode==="error"?"⚠ 手势不可用":"🖱 鼠标";Wu(`${lt.fps} FPS | ${Er.getStyleCN()} | ${(lt.particleCount/1e3).toFixed(0)}k 粒子 | ${t}`)}}requestAnimationFrame(Zm);setTimeout(()=>{xM.style.opacity="0"},4e3);
