export interface HandState {
  detected: boolean;
  palmX: number;
  palmY: number;
  openness: number;
  velocity: number;
  attractRadius: number;
  lostFrames: number;
}

export interface AppState {
  time: number;
  delta: number;
  fps: number;
  mouseNormX: number;
  mouseNormY: number;
  isPointerDown: boolean;
  explosion: number;
  particleCount: number;
  performanceTier: 'high' | 'medium';
  trackMode: 'loading' | 'hand' | 'mouse' | 'error';
  trackError: string;
  hand: HandState;
  // 3D旋转（由手掌位置控制）
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  // 扩散系数（由手掌开合控制）
  spread: number;
  // 基础色相偏移
  hueOffset: number;
  // 当前模型索引
  modelIndex: number;
  // 粒子密度乘数
  densityMul: number;
}

export const state: AppState = {
  time: 0,
  delta: 0,
  fps: 60,
  mouseNormX: 0,
  mouseNormY: 0,
  isPointerDown: false,
  explosion: 0,
  particleCount: 30000,
  performanceTier: 'high',
  trackMode: 'loading',
  trackError: '',
  hand: {
    detected: false,
    palmX: 0,
    palmY: 0,
    openness: 0.5,
    velocity: 0,
    attractRadius: 0.5,
    lostFrames: 0,
  },
  rotationX: 0,
  rotationY: 0,
  rotationZ: 0,
  spread: 1.0,
  hueOffset: 0,
  modelIndex: 0,
  densityMul: 1.0,
};