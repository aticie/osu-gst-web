import { RouteRecordRaw } from "vue-router"

// if not home and (if not admin and user is admin)
export const showRoute = (route: RouteRecordRaw, isAdmin: boolean | undefined) => {
  return (route.name) &&
         (route.name !== "HOME") &&
         !(route.name === "ADMIN" && !isAdmin)
}
