import { HandLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";
import { state } from "./state";
import { processHandLandmarks } from "./GestureDetector";

const WASM_BASE = "./wasm";
const MODEL_PATH = "./models/hand_landmarker.task";

let handLandmarker: HandLandmarker | null = null;
let videoEl: HTMLVideoElement | null = null;
let previewEl: HTMLVideoElement | null = null;
let gpuCanvas: HTMLCanvasElement | null = null;
let stream: MediaStream | null = null;
let tracking = false;
let lastDetectTime = 0;
const DETECT_INTERVAL = 33; // ~30fps 检测

/** 创建左下角摄像头预览窗口 */
function createPreview(): HTMLVideoElement {
  const v = document.createElement("video");
  v.setAttribute("playsinline", "");
  v.setAttribute("muted", "");
  v.id = "camera-preview";
  v.style.cssText =
    "position:fixed;bottom:16px;left:16px;z-index:200;" +
    "width:160px;height:120px;border-radius:12px;" +
    "border:2px solid rgba(255,255,255,0.2);" +
    "object-fit:cover;transform:scaleX(-1);" +
    "opacity:0.85;pointer-events:none;";
  document.body.appendChild(v);
  return v;
}

/** 初始化 MediaPipe + 摄像头，失败抛错 */
export async function initHandTracker(): Promise<void> {
  if (handLandmarker) return;

  // 1. 创建用作 GPU delegate 的隐藏 canvas（MediaPipe 需要）
  gpuCanvas = document.createElement("canvas");
  gpuCanvas.width = 1;
  gpuCanvas.height = 1;
  gpuCanvas.style.display = "none";
  document.body.appendChild(gpuCanvas);

  // 2. 创建隐藏 video 元素
  videoEl = document.createElement("video");
  videoEl.setAttribute("playsinline", "");
  videoEl.setAttribute("muted", "");
  videoEl.style.display = "none";
  document.body.appendChild(videoEl);

  // 3. 加载 Wasm
  console.log("[HandTracker] 加载 WASM...");
  const wasmFileset = await FilesetResolver.forVisionTasks(WASM_BASE);
  console.log("[HandTracker] WASM 加载完成");

  // 4. 创建 HandLandmarker（优先 GPU，失败回退 CPU）
  console.log("[HandTracker] 创建 HandLandmarker (GPU)...");
  try {
    handLandmarker = await HandLandmarker.createFromOptions(wasmFileset, {
      baseOptions: {
        modelAssetPath: MODEL_PATH,
        delegate: "GPU",
      },
      canvas: gpuCanvas as HTMLCanvasElement,
      runningMode: "VIDEO",
      numHands: 2,
      minHandDetectionConfidence: 0.7,
      minHandPresenceConfidence: 0.6,
      minTrackingConfidence: 0.6,
    });
  } catch (gpuErr) {
    console.warn("[HandTracker] GPU delegate 失败，回退 CPU:", gpuErr);
    handLandmarker = await HandLandmarker.createFromOptions(wasmFileset, {
      baseOptions: {
        modelAssetPath: MODEL_PATH,
        delegate: "CPU",
      },
      runningMode: "VIDEO",
      numHands: 2,
      minHandDetectionConfidence: 0.7,
      minHandPresenceConfidence: 0.6,
      minTrackingConfidence: 0.6,
    });
  }
  console.log("[HandTracker] HandLandmarker 创建完成");

  // 5. 启动摄像头
  console.log("[HandTracker] 请求摄像头...");
  stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 640, height: 480, facingMode: "user" },
  });
  videoEl.srcObject = stream;
  await videoEl.play();
  console.log("[HandTracker] 摄像头已启动");

  // 6. 左下角预览
  if (!previewEl) previewEl = createPreview();
  previewEl.srcObject = stream;
  previewEl.style.display = "block";
  await previewEl.play();

  tracking = true;
  state.trackMode = "hand";
  state.trackError = "";
  lastDetectTime = 0;
  console.log("[HandTracker] 初始化完成，手势追踪已启动");
}

/** 在 render loop 中调用，按需执行检测（不阻塞渲染） */
export function detectHands(now: number): void {
  if (!handLandmarker || !videoEl || !tracking) return;

  // 节流：每 ~33ms 检测一次
  if (now - lastDetectTime < DETECT_INTERVAL) return;
  lastDetectTime = now;

  try {
    const result = handLandmarker.detectForVideo(videoEl, now);
    processHandLandmarks(result, now);
  } catch {
    // 单帧检测失败忽略，使用缓存数据
  }
}

/** 停止追踪，释放所有资源 */
export function stopHandTracker(): void {
  tracking = false;

  if (stream) {
    stream.getTracks().forEach((t) => t.stop());
    stream = null;
  }
  if (videoEl) {
    videoEl.srcObject = null;
    videoEl.remove();
    videoEl = null;
  }
  if (previewEl) {
    previewEl.srcObject = null;
    previewEl.remove();
    previewEl = null;
  }
  if (gpuCanvas) {
    gpuCanvas.remove();
    gpuCanvas = null;
  }
  if (handLandmarker) {
    handLandmarker.close();
    handLandmarker = null;
  }
  state.trackMode = "mouse";
}

/** 尝试初始化，失败时进入 fallback 模式 */
export async function tryInitHandTracker(): Promise<void> {
  try {
    await initHandTracker();
  } catch (e) {
    const msg =
      e instanceof Error
        ? e.message
        : e && typeof e === "object" && "message" in e
        ? String((e as { message: unknown }).message)
        : "摄像头或模型加载失败";
    state.trackError = msg;
    state.trackMode = "error";
    console.warn("手势追踪初始化失败，切换为鼠标模式:", msg);
    // 清理已分配资源
    stopHandTracker();
  }
}
