<script setup lang="ts">
import { useRouter } from "vue-router";
import { getCookie } from "../cookie";
import { useUserStore } from "../store";
import AppCard from "../components/AppCard.vue";
import AppOsuLogin from "../components/AppOsuLogin.vue";
import TrianglesVue from "../components/icons/Triangles.vue";
import DiscordVue from "../components/icons/Discord.vue";
import GSTLive from "../components/icons/GstLive.vue";

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
  <div class="grow flex flex-col justify-center">
    <div class="flex flex-col-reverse 2xl:flex-col items-end gap-4 2xl:gap-10">
      <AppOsuLogin />
  
      <div class="flex flex-col 2xl:flex-row items-center w-full">
        <div class="flex-center flex-col grow p-4 gap-6">
          <GSTLive />
  
          <div class="flex flex-wrap 2xl:gap-10">
            <AppCard title="SIGN UP" description="YOUR TEAM!">
              <TrianglesVue />
            </AppCard>
            <AppCard title="DISCORD" description="FOR MORE INFO!">
              <DiscordVue />
            </AppCard>
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
  
        <img src="../assets/artwork.png" class="aspect-video object-cover max-h-[600px]" />
      </div>
    </div>
  </div>
</template>
