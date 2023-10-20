/// <reference types="vite/client" />
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import viteConfig from './vite.config'

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string | null
  readonly VITE_DEFAULT_LANGUAGE: string | null
  readonly VITE_API_BASE_URL: string | null
  readonly VITE_DEFAULT_CATEGORY: string | null
  readonly VITE_DEFAULT_ROUTE: string | null
  readonly VITE_RAPIDAPI_KEY: string | null
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      exclude: ['packages/template/*'],
    },
  })
)
