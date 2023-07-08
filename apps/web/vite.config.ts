import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import crossOriginIsolation from "vite-plugin-cross-origin-isolation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), crossOriginIsolation()],
  manifest: true,
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000/",
        secure: false
      },
    },
  },
});
