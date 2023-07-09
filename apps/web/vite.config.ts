import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// import crossOriginIsolation from "vite-plugin-cross-origin-isolation";

const target: string = process.env.VITE_API_BASE_URL as string || 'http://localhost:8000';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  manifest: true,
  server: {
    proxy: {
      "/api": {
        target: target, // the address that u serve in the backend
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
});
