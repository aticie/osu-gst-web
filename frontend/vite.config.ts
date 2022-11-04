import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import env from "vite-plugin-env-compatible";

// https://vitejs.dev/config/

export default defineConfig(() => {
  return {
    plugins: [vue(), env()],
    build: {
      outDir: "../dist"
    }
  }
})
