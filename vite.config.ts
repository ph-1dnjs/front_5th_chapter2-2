import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests.ts",
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.origin.html"),
        advanced: path.resolve(__dirname, "index.refactoring.html"),
      },
    },
  },
});
