import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/Home.vue";
import Teams from "../views/Teams.vue";
import NotFound from "../views/NotFound.vue";

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
  {
    path: "/:pathMatch(.*)*",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
