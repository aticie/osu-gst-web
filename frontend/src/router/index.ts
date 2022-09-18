import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Shop = () => import("../views/Shop.vue");
const Mappool = () => import("../views/Mappool.vue");
const Schedule = () => import("../views/Schedule.vue");
const Teams = () => import("../views/Teams.vue");
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
    name: "INFO", 
    redirect: "/info/about",
    children: [
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
  },
  {
    path: "/schedule",
    name: "SCHEDULE",
    component: Schedule 
  },
  {
    path: "/teams",
    name: "TEAMS",
    component: Teams
  },
  {
    path: "/pool",
    name: "MAPPOOL",
    component: Mappool
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
