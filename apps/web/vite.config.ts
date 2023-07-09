import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import crossOriginIsolation from "vite-plugin-cross-origin-isolation";

const api = process.env.API;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  manifest: true,
  server: {
    proxy: {
      "/api": {
        target: api
      },
    },
  },
});
