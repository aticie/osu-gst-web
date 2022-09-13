import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Shop = () => import("../views/Shop.vue");
import Home from "../views/Home.vue";
import { AboutUs, Directions, StaffList } from "../views/Info";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "",
    component: Home
  },
  {
    path: "/info",
    name: "INFO", children: [
      {
        path: "about",
        name: "ABOUT US",
        component: AboutUs
      },
      {
        path: "directions",
        name: "DIRECTIONS",
        component: Directions,
      },
      {
        path: "staff",
        name: "STAFF LIST",
        component: StaffList
      }
    ]
  },
  {
    path: "/shop",
    name: "SHOP",
    component: Shop
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
