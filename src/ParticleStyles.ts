export interface ParticleStyle {
  name: string;
  nameCN: string;
  /** 色相范围 [min, max]，0-360 */
  hueRange: [number, number];
  /** 饱和度 0-1 */
  saturation: number;
  /** 亮度范围 [min, max] 0-1 */
  lightnessRange: [number, number];
  /** 粒子大小基础倍率 */
  sizeMul: number;
  /** 辉光强度 */
  glowIntensity: number;
  /** 阵型索引 */
  formationIndex: number;
  /** 弹簧刚度 */
  springStrength: number;
  /** 阵型缩放 */
  formationScale: number;
  /** 色相随旋转变化速度 */
  hueRotateSpeed: number;
}

export const STYLES: ParticleStyle[] = [
  {
    name: 'Nebula', nameCN: '星云',
    hueRange: [220, 320], saturation: 0.8, lightnessRange: [0.4, 0.8],
    sizeMul: 1.2, glowIntensity: 1.0, formationIndex: 0,
    springStrength: 0.08, formationScale: 0.9, hueRotateSpeed: 0.3,
  },
  {
    name: 'Firework', nameCN: '烟花',
    hueRange: [0, 360], saturation: 0.9, lightnessRange: [0.5, 0.9],
    sizeMul: 0.9, glowIntensity: 1.4, formationIndex: 1,
    springStrength: 0.06, formationScale: 0.85, hueRotateSpeed: 0.8,
  },
  {
    name: 'Saturn', nameCN: '土星',
    hueRange: [30, 60], saturation: 0.7, lightnessRange: [0.4, 0.7],
    sizeMul: 1.0, glowIntensity: 0.8, formationIndex: 2,
    springStrength: 0.07, formationScale: 0.8, hueRotateSpeed: 0.2,
  },
  {
    name: 'Flower', nameCN: '花朵',
    hueRange: [280, 360], saturation: 0.85, lightnessRange: [0.5, 0.8],
    sizeMul: 1.3, glowIntensity: 1.1, formationIndex: 3,
    springStrength: 0.09, formationScale: 0.75, hueRotateSpeed: 0.5,
  },
  {
    name: 'Galaxy', nameCN: '银河',
    hueRange: [180, 280], saturation: 0.7, lightnessRange: [0.3, 0.7],
    sizeMul: 1.1, glowIntensity: 0.9, formationIndex: 4,
    springStrength: 0.07, formationScale: 0.95, hueRotateSpeed: 0.4,
  },
  {
    name: 'Stardust', nameCN: '星尘',
    hueRange: [0, 360], saturation: 0.4, lightnessRange: [0.6, 1.0],
    sizeMul: 0.7, glowIntensity: 0.6, formationIndex: 5,
    springStrength: 0.05, formationScale: 1.0, hueRotateSpeed: 0.6,
  },
];
