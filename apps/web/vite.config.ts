import { resolve as pathResolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
// import tsconfigPaths from 'vite-tsconfig-paths'
// import crossOriginIsolation from "vite-plugin-cross-origin-isolation";

const resolve = (path: string) => pathResolve(__dirname, path)

const target: string = (process.env.VITE_API_BASE_URL as string) || 'http://localhost:8000'
const port: number = parseInt(process.env.WEB_PORT as string) || 5173

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  manifest: true,
  server: {
    port: {
      port,
    },
    proxy: {
      '/api': {
        target: target, // the address that u serve in the backend
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    resolve: {
      alias: {
        '~': resolve('src'),
      },
    },
  },
})
