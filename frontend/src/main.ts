import { createPinia } from "pinia";
import { createApp } from 'vue'
import axios from "axios";
import App from './App.vue'
import './index.css'

import Router from "./router";

const pinia = createPinia();
const app = createApp(App);

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true;

app.use(pinia);
app.use(Router);
app.mount("#app");
