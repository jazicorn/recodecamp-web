/// <reference types="vite/client" />
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    exclude: ['packages/template/*'],
  },
}))