import type { HandLandmarkerResult, NormalizedLandmark } from '@mediapipe/tasks-vision';
import { state } from './state';

const FINGERTIP_INDICES = [4, 8, 12, 16, 20];
const PALM_INDICES = [0, 9, 13];
const SMOOTH_POS = 0.6;
const SMOOTH_OPEN = 0.45;
const MAX_LOST = 45;
const VEL_THRESHOLD = 2.0;
const EXPLOSION_GAIN = 0.6;
const EXPLOSION_CAP = 0.8;

let prevPalmX = 0, prevPalmY = 0, prevTime = 0;
let smPalmX = 0, smPalmY = 0, smOpen = 0.5;

function palmCenterX(lm: NormalizedLandmark[]): number {
  return PALM_INDICES.reduce((s, i) => s + lm[i].x, 0) / PALM_INDICES.length;
}
function palmCenterY(lm: NormalizedLandmark[]): number {
  return PALM_INDICES.reduce((s, i) => s + lm[i].y, 0) / PALM_INDICES.length;
}
function computeOpenness(lm: NormalizedLandmark[]): number {
  const cx = palmCenterX(lm), cy = palmCenterY(lm);
  let sum = 0;
  for (const i of FINGERTIP_INDICES) {
    sum += Math.hypot(lm[i].x - cx, lm[i].y - cy);
  }
  const avg = sum / FINGERTIP_INDICES.length;
  return Math.max(0, Math.min(1, (avg - 0.08) / 0.22));
}

export function processHandLandmarks(result: HandLandmarkerResult, now: number): void {
  const hands = result.landmarks;
  if (!hands?.length) {
    state.hand.lostFrames++;
    if (state.hand.lostFrames > MAX_LOST) {
      state.hand.detected = false;
      state.trackMode = 'mouse';
    }
    return;
  }

  const lm = hands[0];
  const rawX = palmCenterX(lm);
  const rawY = palmCenterY(lm);
  const clipX = (1 - rawX) * 2 - 1;
  const clipY = 1 - rawY * 2;

  if (state.hand.lostFrames > 0 || !state.hand.detected) {
    smPalmX = clipX;
    smPalmY = clipY;
  } else {
    smPalmX = smPalmX * SMOOTH_POS + clipX * (1 - SMOOTH_POS);
    smPalmY = smPalmY * SMOOTH_POS + clipY * (1 - SMOOTH_POS);
  }

  const rawOpen = computeOpenness(lm);
  smOpen = smOpen * SMOOTH_OPEN + rawOpen * (1 - SMOOTH_OPEN);

  let vel = 0;
  if (prevTime > 0) {
    const dt = Math.max((now - prevTime) / 1000, 0.001);
    vel = Math.hypot(smPalmX - prevPalmX, smPalmY - prevPalmY) / dt;
  }
  prevPalmX = smPalmX;
  prevPalmY = smPalmY;
  prevTime = now;

  state.hand.detected = true;
  state.hand.palmX = smPalmX;
  state.hand.palmY = smPalmY;
  state.hand.openness = smOpen;
  state.hand.velocity = vel;
  state.hand.attractRadius = smOpen < 0.15 ? 0.2 : 0.35 + smOpen * 0.5;
  state.hand.lostFrames = 0;
  state.trackMode = 'hand';

  if (vel > VEL_THRESHOLD) {
    const boost = Math.min((vel - VEL_THRESHOLD) * EXPLOSION_GAIN, EXPLOSION_CAP);
    if (boost > state.explosion) state.explosion = boost;
  }
}

export function resetGestureState(): void {
  prevPalmX = 0;
  prevPalmY = 0;
  prevTime = 0;
  smPalmX = 0;
  smPalmY = 0;
  smOpen = 0.5;
  state.hand.detected = false;
  state.hand.lostFrames = 0;
}
