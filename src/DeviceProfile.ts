import { state } from "./state";

interface DeviceConfig {
  particleCount: number;
  pixelRatio: number;
  targetFPS: number;
}

const HIGH: DeviceConfig = {
  particleCount: 20000,
  pixelRatio: Math.min(devicePixelRatio, 2),
  targetFPS: 60,
};

const MEDIUM: DeviceConfig = {
  particleCount: 10000,
  pixelRatio: Math.min(devicePixelRatio, 1.5),
  targetFPS: 45,
};

export function detectDevice(): void {
  const gpu = getGPUTier();

  if (gpu === "high") {
    state.performanceTier = "high";
    state.particleCount = HIGH.particleCount;
  } else {
    state.performanceTier = "medium";
    state.particleCount = MEDIUM.particleCount;
  }
}

export function getPixelRatioLimit(): number {
  return state.performanceTier === "high" ? HIGH.pixelRatio : MEDIUM.pixelRatio;
}

export function getTargetFPS(): number {
  return state.performanceTier === "high" ? HIGH.targetFPS : MEDIUM.targetFPS;
}

function getGPUTier(): "high" | "medium" {
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
  if (!gl) return "medium";

  const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
  if (!debugInfo) return "medium";

  const renderer = gl
    .getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
    .toLowerCase();

  if (
    renderer.includes("nvidia") ||
    renderer.includes("amd") ||
    renderer.includes("radeon") ||
    renderer.includes("rtx") ||
    renderer.includes("geforce") ||
    renderer.includes("m1") ||
    renderer.includes("m2") ||
    renderer.includes("m3") ||
    renderer.includes("apple") ||
    renderer.includes("intel") // Intel dedicated/iris
  ) {
    return "high";
  }

  return "medium";
}
