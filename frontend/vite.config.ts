import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  var variables = {};
  for (const [key, value] of Object.entries(env)) {
    variables[key] = value;
  }

  return {
    plugins: [vue()],
    build: {
      outDir: "../dist"
    },
    define: variables
  }
})
