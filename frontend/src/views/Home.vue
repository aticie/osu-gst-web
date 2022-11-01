<script setup lang="ts">
import { useRouter } from "vue-router";
import AppCard from "../components/AppCard.vue";
import AppOsuLogin from "../components/AppOsuLogin.vue";

const router = useRouter();
const routes = router.options.routes.filter(route => (
  route.path !== "/"
))
</script>

<template>
  <div class="flex flex-col justify-center h-full gap-4">
    <div class="flex flex-col justify-center gap-4 p-4">
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

    <div class="flex flex-col gap-2">
      <img class="w-full aspect-video object-cover" src="../assets/artwork.jpg" alt="gstlive artwork" />
      <AppOsuLogin />
    </div>
  </div>
</template>
