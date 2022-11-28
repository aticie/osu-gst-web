import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/Home.vue";
import Teams from "../views/Teams.vue";
import Lobbies from "../views/Lobbies.vue";
import NotFound from "../views/NotFound.vue";
import Pool from "../views/Pool.vue";
import { useUserStore } from "../store";

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
    path: "/lobbies",
    name: "LOBBIES",
    component: Lobbies
  },
  {
    path: "/pool",
    name: "MAPPOOL",
    component: Pool
  },
  {
    path: "/admin",
    name: "ADMIN",
    component: () => import("../views/Admin.vue"),
    beforeEnter: () => {
      const userStore = useUserStore();

      if (!userStore.user?.is_admin) return "/";
    }
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
