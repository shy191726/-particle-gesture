import { defineConfig } from "vite";

export default defineConfig({
  base: "/-particle-gesture/",
  server: {
    host: true,
    https: false,
  },
  build: {
    target: "es2022",
    sourcemap: false,
  },
});
