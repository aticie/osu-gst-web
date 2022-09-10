import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/Home.vue";
import { AboutUs, Directions, StaffList } from "../views/Info";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/info",
    children: [
      {
        path: "about",
        component: AboutUs
      },
      {
        path: "directions",
        component: Directions,
      },
      {
        path: "staff",
        component: StaffList
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
