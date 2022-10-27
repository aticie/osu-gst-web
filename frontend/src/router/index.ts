import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/Home.vue";

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
    component: () => import("../views/Teams.vue")
  },
  {
    path: "/pool",
    name: "MAPPOOLS",
    component: () => import("../views/Pool.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
