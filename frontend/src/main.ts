import { createPinia } from "pinia";
import { createApp } from 'vue'
import piniaPersistState from "pinia-plugin-persistedstate";
import axios from "axios";
import App from './App.vue'
import './index.css'

import Router from "./router";

const pinia = createPinia();
const app = createApp(App);

pinia.use(piniaPersistState);

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true;

app.directive("press-outside", {
  mounted: (element, binding, vnode) => {
    window.document.body.addEventListener("click", event => {
      let targetElement = event.target as HTMLElement;
      if (element.contains(targetElement)) return;

      binding.value();
    })
  }
})

app.use(pinia);
app.use(Router);
app.mount("#app");
