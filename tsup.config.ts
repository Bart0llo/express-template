import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  format: ["esm"],
  dts: false,
  target: "es2020",
  entry: ["src/index.ts"],
  sourcemap: true,
  splitting: false,
  shims: false,
  minify: true,
});
