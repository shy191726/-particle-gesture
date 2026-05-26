import * as THREE from 'three';
import { state } from './state';
import { ParticleSystem } from './ParticleSystem';
import { STYLES } from './ParticleStyles';
import { tryInitHandTracker, detectHands } from './HandTracker';

// ======== UI 元素 ========
const statusEl = document.getElementById('status')!;
const loadingOverlay = document.getElementById('loading-overlay')!;
const modelBtns = document.querySelectorAll('.model-btn');
const colorPicker = document.getElementById('base-color') as HTMLInputElement;
const densitySlider = document.getElementById('density-slider') as HTMLInputElement;
const densityVal = document.getElementById('density-val')!;
const fullscreenBtn = document.getElementById('fullscreen-btn')!;
const hintEl = document.getElementById('hint')!;

function setStatus(msg: string): void {
  statusEl.textContent = msg;
}

function hideLoading(): void {
  loadingOverlay.classList.add('hidden');
}

// ======== 场景初始化 ========
const renderer = new THREE.WebGLRenderer({
  antialias: false,
  alpha: false,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x050510);
document.body.prepend(renderer.domElement);
renderer.domElement.id = 'scene';

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

// 相机稍微后拉一点以容纳3D效果
camera.position.z = 0.5;

const particles = new ParticleSystem();
particles.addToScene(scene);

// ======== 输入控制 ========
function updatePointer(clientX: number, clientY: number): void {
  state.mouseNormX = (clientX / window.innerWidth) * 2 - 1;
  state.mouseNormY = -(clientY / window.innerHeight) * 2 + 1;
}
window.addEventListener('pointermove', (e) => updatePointer(e.clientX, e.clientY));
window.addEventListener('pointerdown', (e) => { state.isPointerDown = true; updatePointer(e.clientX, e.clientY); });
window.addEventListener('pointerup', () => { state.isPointerDown = false; });

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  particles.resize();
});

// ======== UI 交互 ========
// 模型选择
modelBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const idx = parseInt(btn.getAttribute('data-model')!);
    modelBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    particles.setStyle(idx);
    state.modelIndex = idx;
    // 更新颜色选择器为模型主色调
    const style = STYLES[idx];
    const midHue = (style.hueRange[0] + style.hueRange[1]) / 2;
    const rgb = hslToHex(midHue / 360, style.saturation, (style.lightnessRange[0] + style.lightnessRange[1]) / 2);
    colorPicker.value = rgb;
  });
});

// 颜色选择器
colorPicker.addEventListener('input', () => {
  // 将 hex 色应用到粒子基础色
  const hex = colorPicker.value;
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  // 混合到现有颜色
  const colAttr = particles.geometry.attributes.aColor as THREE.BufferAttribute;
  const cols = colAttr.array as Float32Array;
  for (let i = 0; i < cols.length; i += 3) {
    cols[i] = cols[i] * 0.3 + r * 0.7;
    cols[i + 1] = cols[i + 1] * 0.3 + g * 0.7;
    cols[i + 2] = cols[i + 2] * 0.3 + b * 0.7;
  }
  colAttr.needsUpdate = true;
});

// 密度滑块
densitySlider.addEventListener('input', () => {
  const val = parseInt(densitySlider.value);
  densityVal.textContent = (val / 1000).toFixed(0) + 'k';
  state.particleCount = val;
  particles.rebuild(val);
});

// 全屏
fullscreenBtn.addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
});

// ======== 工具函数 ========
function hslToHex(h: number, s: number, l: number): string {
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h * 12) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };
  const toHex = (x: number) => Math.round(x * 255).toString(16).padStart(2, '0');
  return '#' + toHex(f(0)) + toHex(f(8)) + toHex(f(4));
}

// ======== 加载手势追踪 ========
setStatus('⏳ 加载粒子系统...');
hideLoading();
setStatus('✅ 运行中 | 粒子: ' + state.particleCount + ' | 加载手势模型...');
tryInitHandTracker();

// ======== 渲染循环 ========
let frameCount = 0;
let lastFpsTime = performance.now();
let lastTime = performance.now();

function animate(timestamp: number): void {
  requestAnimationFrame(animate);

  state.delta = Math.min((timestamp - lastTime) / 1000, 0.05);
  state.time += state.delta;
  lastTime = timestamp;

  if (!document.hidden) {
    detectHands(timestamp);

    state.explosion *= 0.88;
    if (state.explosion < 0.001) state.explosion = 0;

    particles.update();
    renderer.render(scene, camera);
  }

  // FPS
  frameCount++;
  if (timestamp - lastFpsTime >= 1000) {
    state.fps = Math.round(frameCount / ((timestamp - lastFpsTime) / 1000));
    frameCount = 0;
    lastFpsTime = timestamp;

    const trackInfo =
      state.trackMode === 'hand' ? '✋ 手势' :
      state.trackMode === 'loading' ? '⏳ 加载模型...' :
      state.trackMode === 'error' ? '⚠ 手势不可用' :
      '🖱 鼠标';

    setStatus(
      `${state.fps} FPS | ${particles.getStyleCN()} | ${(state.particleCount / 1000).toFixed(0)}k 粒子 | ${trackInfo}`
    );
  }
}

requestAnimationFrame(animate);

// 3秒后隐藏提示
setTimeout(() => {
  hintEl.style.opacity = '0';
}, 4000);

export {};
