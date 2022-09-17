import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import Router from "./router";

createApp(App)
  .use(Router)
  .directive("click-outside", {
    created: (el, binding) => {
      el.clickOutsideEvent = (event: MouseEvent) => {
        if (!(el.contains(event.target))) {
          binding.value();
        }
      }

      document.body.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted: el => {
      document.body.removeEventListener("click", el.clickOutsideEvent);
    }
  })
  .mount('#app')
