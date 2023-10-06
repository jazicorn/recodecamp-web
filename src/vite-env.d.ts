/// <reference types="vite/client" />
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import viteConfig from './vite.config'

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export default mergeConfig(viteConfig, defineConfig({
  test: {
    exclude: ['packages/template/*'],
  },
}))