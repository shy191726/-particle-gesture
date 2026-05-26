/**
 * 3D 粒子阵型生成器
 * 返回 Float32Array(count * 3) — x, y, z 在 [-1, 1] 范围内
 */

function gaussianRandom(): number {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

type FormationFn = (count: number) => Float32Array;

/** 星云：旋转螺旋星云，中心密集，旋臂向外延伸 */
function nebulaFormation(count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  const arms = 3;
  const armParticles = Math.floor(count * 0.7);
  const coreParticles = count - armParticles;
  let idx = 0;
  // 核心：密集球体
  for (let i = 0; i < coreParticles; i++) {
    const r = Math.cbrt(Math.random()) * 0.25;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[idx * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[idx * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[idx * 3 + 2] = r * Math.cos(phi) * 0.4;
    idx++;
  }
  // 旋臂
  for (let i = 0; i < armParticles; i++) {
    const arm = i % arms;
    const baseAngle = (arm / arms) * Math.PI * 2;
    const t = Math.sqrt(Math.random());
    const r = 0.2 + t * 0.8;
    const angle = baseAngle + t * Math.PI * 3 + (Math.random() - 0.5) * 0.4;
    const spread = 0.04 + t * 0.12;
    const x = r * Math.cos(angle) + gaussianRandom() * spread;
    const y = r * Math.sin(angle) + gaussianRandom() * spread;
    const z = (Math.random() - 0.5) * 0.15 * (1 - t * 0.5);
    arr[idx * 3] = x;
    arr[idx * 3 + 1] = y;
    arr[idx * 3 + 2] = z;
    idx++;
  }
  return arr;
}

/** 烟花：三维放射爆裂，中心亮核 + 多方向射线 + 末端分支 */
function fireworkFormation(count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  const rays = 16;
  const coreCount = Math.floor(count * 0.1);
  const rayCount = count - coreCount;
  let idx = 0;
  // 核心
  for (let i = 0; i < coreCount; i++) {
    const r = Math.random() * 0.08;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[idx * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[idx * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[idx * 3 + 2] = r * Math.cos(phi);
    idx++;
  }
  // 射线
  const perRay = Math.floor(rayCount / rays);
  for (let r = 0; r < rays; r++) {
    const baseTheta = (r / rays) * Math.PI * 2;
    const basePhi = Math.acos(2 * (r / rays) - 1 + (Math.random() - 0.5) * 0.3);
    for (let j = 0; j < perRay && idx < count; j++) {
      const t = j / perRay;
      const dist = 0.05 + t * 0.95;
      const spread = t * t * 0.25;
      const theta = baseTheta + (Math.random() - 0.5) * spread;
      const phi = basePhi + (Math.random() - 0.5) * spread * 0.6;
      const branch = Math.random() < 0.3 ? dist + (Math.random() - 0.5) * 0.1 : dist;
      arr[idx * 3] = branch * Math.sin(phi) * Math.cos(theta);
      arr[idx * 3 + 1] = branch * Math.sin(phi) * Math.sin(theta);
      arr[idx * 3 + 2] = branch * Math.cos(phi);
      idx++;
    }
  }
  return arr;
}

/** 土星：中央球体 + 平面光环系统 */
function saturnFormation(count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  const sphereCount = Math.floor(count * 0.3);
  const ringCount = count - sphereCount;
  let idx = 0;
  // 球体
  for (let i = 0; i < sphereCount; i++) {
    const r = Math.cbrt(Math.random()) * 0.3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[idx * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[idx * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[idx * 3 + 2] = r * Math.cos(phi);
    idx++;
  }
  // 光环（多层环，略微倾斜）
  for (let i = 0; i < ringCount; i++) {
    const layer = Math.floor(Math.random() * 3);
    const r = 0.35 + Math.random() * 0.55;
    const angle = Math.random() * Math.PI * 2;
    const tiltAngle = 0.25 + layer * 0.08;
    const thickness = (Math.random() - 0.5) * 0.015 * (1 + layer * 0.5);
    const x = r * Math.cos(angle);
    const y = r * Math.sin(angle) * Math.cos(tiltAngle);
    const z = r * Math.sin(angle) * Math.sin(tiltAngle) + thickness;
    arr[idx * 3] = x;
    arr[idx * 3 + 1] = y;
    arr[idx * 3 + 2] = z * 0.3;
    idx++;
  }
  return arr;
}

/** 花朵：多层花瓣三维排布 */
function flowerFormation(count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  const petals = 8;
  const layers = 4;
  let idx = 0;
  const perLayer = Math.floor(count / layers);
  for (let layer = 0; layer < layers; layer++) {
    const zOffset = (layer / (layers - 1) - 0.5) * 0.6;
    const petalScale = 0.5 + (layer / layers) * 0.6;
    const layerSize = layer < layers - 1 ? perLayer : count - idx;
    const outlineRatio = 0.3;
    const outlineCount = Math.floor(layerSize * outlineRatio);
    const fillCount = layerSize - outlineCount;
    // 花瓣轮廓
    for (let i = 0; i < outlineCount && idx < count; i++) {
      const theta = (i / outlineCount) * Math.PI * 2;
      const petalR = Math.abs(Math.cos(petals * theta * 0.5));
      const r = 0.3 + petalR * 0.6;
      const rr = r * petalScale;
      const jit = (Math.random() - 0.5) * 0.02;
      arr[idx * 3] = Math.cos(theta) * rr + jit;
      arr[idx * 3 + 1] = Math.sin(theta) * rr + jit;
      arr[idx * 3 + 2] = zOffset + (Math.random() - 0.5) * 0.04;
      idx++;
    }
    // 花瓣内部填充
    while (idx < count && (idx % perLayer < layerSize || layer === layers - 1)) {
      const theta = Math.random() * Math.PI * 2;
      const maxR = 0.3 + Math.abs(Math.cos(petals * theta * 0.5)) * 0.6;
      const r = Math.sqrt(Math.random()) * maxR * 0.92;
      const rr = r * petalScale;
      arr[idx * 3] = Math.cos(theta) * rr;
      arr[idx * 3 + 1] = Math.sin(theta) * rr;
      arr[idx * 3 + 2] = zOffset + (Math.random() - 0.5) * 0.04;
      idx++;
      if (idx >= count) break;
    }
  }
  return arr;
}

/** 银河：螺旋盘状星系，中心凸起 */
function galaxyFormation(count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  const bulgeCount = Math.floor(count * 0.15);
  const diskCount = count - bulgeCount;
  let idx = 0;
  // 中央核球
  for (let i = 0; i < bulgeCount; i++) {
    const r = Math.cbrt(Math.random()) * 0.15;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[idx * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[idx * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[idx * 3 + 2] = r * Math.cos(phi) * 0.8;
    idx++;
  }
  // 盘面 + 旋臂
  const arms = 4;
  for (let i = 0; i < diskCount; i++) {
    const arm = i % arms;
    const baseAngle = (arm / arms) * Math.PI * 2;
    const t = Math.pow(Math.random(), 1.5);
    const r = 0.12 + t * 0.88;
    const angle = baseAngle + t * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
    const thick = (Math.random() - 0.5) * 0.04 * (1 - t * 0.3);
    arr[idx * 3] = r * Math.cos(angle);
    arr[idx * 3 + 1] = r * Math.sin(angle);
    arr[idx * 3 + 2] = thick;
    idx++;
  }
  return arr;
}

/** 星尘：随机散布 + 局部聚簇 */
function dustFormation(count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  const clusterCount = Math.floor(count / 30);
  const clusterParticles = Math.floor(count * 0.6);
  const scattered = count - clusterParticles;
  const clusters: { x: number; y: number; z: number }[] = [];
  let idx = 0;
  for (let c = 0; c < clusterCount; c++) {
    clusters.push({
      x: (Math.random() - 0.5) * 1.6,
      y: (Math.random() - 0.5) * 1.6,
      z: (Math.random() - 0.5) * 0.5,
    });
  }
  for (let i = 0; i < clusterParticles && idx < count; i++) {
    const c = clusters[i % clusters.length];
    arr[idx * 3] = c.x + gaussianRandom() * 0.06;
    arr[idx * 3 + 1] = c.y + gaussianRandom() * 0.06;
    arr[idx * 3 + 2] = c.z + gaussianRandom() * 0.03;
    idx++;
  }
  for (let i = 0; i < scattered && idx < count; i++) {
    arr[idx * 3] = (Math.random() - 0.5) * 1.8;
    arr[idx * 3 + 1] = (Math.random() - 0.5) * 1.8;
    arr[idx * 3 + 2] = (Math.random() - 0.5) * 0.6;
    idx++;
  }
  return arr;
}

const FORMATIONS: FormationFn[] = [
  nebulaFormation,
  fireworkFormation,
  saturnFormation,
  flowerFormation,
  galaxyFormation,
  dustFormation,
];

export function generateFormation(index: number, count: number): Float32Array {
  const fn = FORMATIONS[index % FORMATIONS.length];
  return fn(count);
}
