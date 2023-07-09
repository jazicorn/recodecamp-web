import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// import crossOriginIsolation from "vite-plugin-cross-origin-isolation";

//const api = process.env.API;
const browser = process.env.BROWSER;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  manifest: true,
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000/", // the address that u serve in the backend
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
    open: browser,
  },
});
