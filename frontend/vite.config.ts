import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from "fs";

// https://github.com/sveltejs/kit/issues/3004#issuecomment-1280759553
const vite_env_variables = Object.entries(process.env).filter(variable => variable[0].startsWith("VITE_"));
const vite_env_variable_string = vite_env_variables.map(variable => variable[0] + "=" + variable[1]).join("\n");
fs.writeFileSync(".env.local", vite_env_variable_string, {encoding: "utf-8"});

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "../dist"
  }
})
