import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  // It looks like this is enough to load env variables.
  // You can use it as `import.meta.env.ENV_VARIABLE`
  loadEnv(mode, process.cwd());

  return {
    plugins: [vue()],
    build: {
      outDir: "../dist"
    }
  }
})
