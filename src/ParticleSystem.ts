import * as THREE from 'three';
import { state } from './state';
import type { ParticleStyle } from './ParticleStyles';
import { STYLES } from './ParticleStyles';
import { generateFormation } from './Formation';

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };
  return [f(0), f(8), f(4)];
}

function applyMatrix3D(
  positions: Float32Array,
  targets: Float32Array,
  count: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  spread: number,
  centerX: number,
  centerY: number,
) {
  const cx = Math.cos(rotX), sx = Math.sin(rotX);
  const cy = Math.cos(rotY), sy = Math.sin(rotY);
  const cz = Math.cos(rotZ), sz = Math.sin(rotZ);

  for (let i = 0; i < count; i++) {
    let x = targets[i * 3];
    let y = targets[i * 3 + 1];
    let z = targets[i * 3 + 2];

    // 扩散
    x *= spread;
    y *= spread;
    z *= spread;

    // Rotate Y
    let t = x;
    x = x * cy - z * sy;
    z = t * sy + z * cy;
    // Rotate X
    t = y;
    y = y * cx - z * sx;
    z = t * sx + z * cx;
    // Rotate Z
    t = x;
    x = x * cz - y * sz;
    y = t * sz + y * cz;

    positions[i * 3] = x + centerX;
    positions[i * 3 + 1] = y + centerY;
    positions[i * 3 + 2] = z;
  }
}

/** 生成背景深空星点位置 */
function generateBackgroundStars(count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    // 分布在更大范围产生纵深感
    arr[i3] = (Math.random() - 0.5) * 3.5;
    arr[i3 + 1] = (Math.random() - 0.5) * 3.5;
    arr[i3 + 2] = -0.5 - Math.random() * 0.5; // z: -0.5 ~ -1.0
  }
  return arr;
}

/** 背景星点颜色（微弱的白/蓝/紫随机） */
function generateBackgroundColors(count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const brightness = 0.2 + Math.random() * 0.4;
    const hue = 0.6 + Math.random() * 0.3; // 蓝-紫范围
    const [r, g, b] = hslToRgb(hue * 360, 0.3, brightness);
    arr[i3] = r;
    arr[i3 + 1] = g;
    arr[i3 + 2] = b;
  }
  return arr;
}

// ========== 自定义着色器 ==========

const VERTEX_SHADER = `
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
`;

const FRAGMENT_SHADER = `
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
`;

export class ParticleSystem {
  geometry: THREE.BufferGeometry;
  material: THREE.ShaderMaterial;
  points: THREE.Points;

  private positions: Float32Array;
  private targets: Float32Array;
  private velocities: Float32Array;
  private colors: Float32Array;
  private sizes: Float32Array;
  private alphas: Float32Array;

  private capacity: number;
  private style: ParticleStyle;

  // 背景星空
  private bgGeometry: THREE.BufferGeometry;
  private bgMaterial: THREE.PointsMaterial;
  private bgPoints: THREE.Points;

  constructor() {
    this.capacity = state.particleCount;
    this.style = STYLES[0];

    this.positions = new Float32Array(this.capacity * 3);
    this.velocities = new Float32Array(this.capacity * 3);
    this.colors = new Float32Array(this.capacity * 3);
    this.sizes = new Float32Array(this.capacity);
    this.alphas = new Float32Array(this.capacity);

    // 初始化物理数据
    for (let i = 0; i < this.capacity; i++) {
      const i3 = i * 3;
      this.positions[i3] = (Math.random() - 0.5) * 2;
      this.positions[i3 + 1] = (Math.random() - 0.5) * 2;
      this.positions[i3 + 2] = (Math.random() - 0.5) * 0.5;
      this.velocities[i3] = (Math.random() - 0.5) * 0.001;
      this.velocities[i3 + 1] = (Math.random() - 0.5) * 0.001;
      this.velocities[i3 + 2] = (Math.random() - 0.5) * 0.0005;
      this.sizes[i] = 0.5 + Math.random() * 1.0;
      this.alphas[i] = 0.3 + Math.random() * 0.5;
    }

    // 阵型目标
    this.targets = generateFormation(this.style.formationIndex, this.capacity);

    // 初始化颜色
    this.applyStyleColors(this.style);

    // 主粒子几何
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('aColor', new THREE.BufferAttribute(this.colors, 3));
    this.geometry.setAttribute('aSize', new THREE.BufferAttribute(this.sizes, 1));
    this.geometry.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphas, 1));

    // 自定义着色器材质
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uPixelRatio: { value: Math.min(devicePixelRatio, 2) },
        uTime: { value: 0 },
        uGlowIntensity: { value: this.style.glowIntensity },
        uHueShift: { value: 0 },
      },
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.points = new THREE.Points(this.geometry, this.material);

    // === 背景星空 ===
    const bgCount = 2000;
    this.bgGeometry = new THREE.BufferGeometry();
    const bgPos = generateBackgroundStars(bgCount);
    const bgCol = generateBackgroundColors(bgCount);
    const bgSizes = new Float32Array(bgCount);
    for (let i = 0; i < bgCount; i++) {
      bgSizes[i] = 0.3 + Math.random() * 0.8;
    }
    this.bgGeometry.setAttribute('position', new THREE.BufferAttribute(bgPos, 3));
    this.bgGeometry.setAttribute('color', new THREE.BufferAttribute(bgCol, 3));
    this.bgGeometry.setAttribute('size', new THREE.BufferAttribute(bgSizes, 1));

    this.bgMaterial = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: false,
    });
    this.bgPoints = new THREE.Points(this.bgGeometry, this.bgMaterial);
  }

  private applyStyleColors(style: ParticleStyle): void {
    const hMin = style.hueRange[0];
    const hMax = style.hueRange[1];
    const s = style.saturation;
    const lMin = style.lightnessRange[0];
    const lMax = style.lightnessRange[1];
    for (let i = 0; i < this.capacity; i++) {
      const i3 = i * 3;
      const hue = hMin + Math.random() * (hMax - hMin);
      const [r, g, b] = hslToRgb(hue, s, lMin + Math.random() * (lMax - lMin));
      this.colors[i3] = r;
      this.colors[i3 + 1] = g;
      this.colors[i3 + 2] = b;
    }
    if (this.geometry) {
      (this.geometry.attributes.aColor as THREE.BufferAttribute).needsUpdate = true;
    }
  }

  /** 切换模型 */
  setStyle(index: number): string {
    const s = STYLES[index % STYLES.length];
    this.style = s;
    this.targets = generateFormation(s.formationIndex, this.capacity);
    this.applyStyleColors(s);
    this.material.uniforms.uGlowIntensity.value = s.glowIntensity;
    return s.name;
  }

  getStyleName(): string {
    return this.style.name;
  }

  getStyleCN(): string {
    return this.style.nameCN;
  }

  /** 重建粒子系统（密度变化时） */
  rebuild(newCount: number): void {
    this.capacity = newCount;
    this.positions = new Float32Array(newCount * 3);
    this.velocities = new Float32Array(newCount * 3);
    this.colors = new Float32Array(newCount * 3);
    this.sizes = new Float32Array(newCount);
    this.alphas = new Float32Array(newCount);

    for (let i = 0; i < newCount; i++) {
      const i3 = i * 3;
      this.positions[i3] = (Math.random() - 0.5) * 2;
      this.positions[i3 + 1] = (Math.random() - 0.5) * 2;
      this.positions[i3 + 2] = (Math.random() - 0.5) * 0.5;
      this.velocities[i3] = (Math.random() - 0.5) * 0.001;
      this.velocities[i3 + 1] = (Math.random() - 0.5) * 0.001;
      this.velocities[i3 + 2] = (Math.random() - 0.5) * 0.0005;
      this.sizes[i] = 0.5 + Math.random() * 1.0;
      this.alphas[i] = 0.3 + Math.random() * 0.5;
    }

    this.targets = generateFormation(this.style.formationIndex, newCount);
    this.applyStyleColors(this.style);

    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('aColor', new THREE.BufferAttribute(this.colors, 3));
    this.geometry.setAttribute('aSize', new THREE.BufferAttribute(this.sizes, 1));
    this.geometry.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphas, 1));
  }

  update(): void {
    const mx = state.mouseNormX;
    const my = state.mouseNormY;
    const hDetected = state.hand.detected;
    const hx = state.hand.palmX;
    const hy = state.hand.palmY;
    const hOpen = state.hand.openness;
    const hVel = state.hand.velocity;

    // 手/鼠标权重
    let handW = 0;
    if (hDetected) {
      handW = 0.7;
    } else if (state.hand.lostFrames > 0) {
      handW = 0.7 * Math.max(0, 1 - state.hand.lostFrames / 45);
    }
    const mouseW = 1 - handW;

    // 中心位置（手掌或鼠标）
    const cx = handW > 0.3 ? hx : mx;
    const cy = handW > 0.3 ? hy : my;

    // 旋转：手水平位置 → rotationY，垂直位置 → rotationX
    // 在手掌模式下更灵敏
    const rotSensitivity = handW > 0.3 ? 3.0 : 1.0;
    const targetRotX = (handW > 0.3 ? hy : my) * rotSensitivity;
    const targetRotY = (handW > 0.3 ? hx : mx) * rotSensitivity;
    // Z轴旋转随随时间缓慢变化
    const targetRotZ = state.time * 0.05;

    state.rotationX += (targetRotX - state.rotationX) * (handW > 0 ? 0.08 : 0.03);
    state.rotationY += (targetRotY - state.rotationY) * (handW > 0 ? 0.08 : 0.03);
    state.rotationZ = targetRotZ;

    // 扩散：手掌开合度控制 [0.3, 1.8]
    const targetSpread = hDetected ? 0.3 + hOpen * 1.5 : 1.0;
    state.spread += (targetSpread - state.spread) * 0.06;

    // 色相偏移：随 rotationY 变化
    state.hueOffset = state.rotationY * this.style.hueRotateSpeed;

    // 应用旋转 + 扩散到阵型目标
    applyMatrix3D(
      this.positions,
      this.targets,
      this.capacity,
      state.rotationX,
      state.rotationY,
      state.rotationZ,
      state.spread,
      cx,
      cy,
    );

    // 更新 uniforms
    this.material.uniforms.uTime.value = state.time;
    this.material.uniforms.uHueShift.value = state.hueOffset;

    (this.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

    // 背景星空缓慢旋转
    this.bgPoints.rotation.y = state.time * 0.01;
    this.bgPoints.rotation.x = Math.sin(state.time * 0.005) * 0.05;
  }

  /** 把粒子系统加入场景（含背景星点） */
  addToScene(scene: THREE.Scene): void {
    scene.add(this.bgPoints);
    scene.add(this.points);
  }

  resize(): void {
    this.material.uniforms.uPixelRatio.value = Math.min(devicePixelRatio, 2);
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
    this.bgGeometry.dispose();
    this.bgMaterial.dispose();
  }
}
