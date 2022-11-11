import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/Home.vue";
import Teams from "../views/Teams.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "HOME",
    component: Home
  },
  {
    path: "/info",
    name: "INFO",
    component: () => import("../views/Info.vue")
  },
  {
    path: "/teams",
    name: "TEAMS",
    component: Teams
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
