import { resolve as pathResolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
// import { ssr } from 'vite-plugin-ssr/plugin' //https://vite-plugin-ssr.com/pre-rendering
// import tsconfigPaths from 'vite-tsconfig-paths'
// import crossOriginIsolation from "vite-plugin-cross-origin-isolation";

const resolve = (path: string) => pathResolve(__dirname, path);

const port: number = parseInt(process.env.WEB_PORT as string) || 5173;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), svgr() /**, ssr({ prerender: true }*/],
    manifest: true,
    build: {
      outDir: './dist',
      emptyOutDir: true,
      rollupOptions: {
        // https://rollupjs.org/configuration-options/
      },
    },
    server: {
      port: {
        port,
      },
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL, // the address that u serve in the backend
          changeOrigin: true,
          secure: false,
        },
      },
      resolve: {
        alias: {
          '~': resolve('src'),
          p: resolve('src/pages'),
          c: resolve('src/components'),
          d: resolve('src/components/dashboard'),
          a: resolve('src/assets'),
          h: resolve('src/hooks'),
        },
      },
    },
  };
});
