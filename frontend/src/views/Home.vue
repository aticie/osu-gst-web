<script setup lang="ts">
import { useRouter } from "vue-router";
import { getCookie } from "../cookie";
import { useUserStore } from "../store";
import AppCard from "../components/AppCard.vue";
import AppOsuLogin from "../components/AppOsuLogin.vue";

const userStore = useUserStore();
const router = useRouter();
const routes = router.options.routes.filter(route => (
  route.path !== "/"
))

// user is logged in before.
if (getCookie("user_hash")) {
  await userStore.refreshUser();
}
</script>

<template>
  <div class="flex flex-col md:flex-row justify-center items-center h-full gap-4">
    <div class="flex flex-col md:grow justify-center gap-4 p-4">
      <img src="../assets/svgs/gstlive-with-text.svg" alt="gstlive banner" />
      
      <div class="flex flex-wrap">
        <AppCard icon="triangle.svg" title="SIGN UP" description="YOUR TEAM!" />
        <AppCard icon="discord.svg" title="DISCORD" description="FOR MORE INFO!" />
      </div>

      <div class="flex flex-wrap justify-center gap-4">
        <RouterLink
          v-for="route in routes" 
          :to="route.path"
          class="route-link"
        >
          {{ route.name }}
        </RouterLink>
      </div>
    </div>

    <div class="flex flex-col md:w-3/5 gap-2">
      <img class="w-full aspect-video object-cover" src="../assets/artwork.jpg" alt="gstlive artwork" />
      <AppOsuLogin />
    </div>
  </div>
</template>
