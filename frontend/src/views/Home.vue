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
  <div class="flex flex-col-reverse lg:flex-col grow items-end gap-4 lg:gap-10">
    <AppOsuLogin />

    <div class="flex flex-col lg:flex-row items-center w-full">
      <div class="flex-center flex-col grow p-4 gap-6">
        <img src="../assets/svgs/gstlive-with-text.svg" />

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

      <div>
        <img src="../assets/artwork.jpg" class="aspect-video object-cover max-h-[600px]" />
      </div>
    </div>
  </div>

  <!-- <div class="flex flex-col-reverse xl:flex-col items-end gap-14 w-full">
    <AppOsuLogin />

    <div class="flex flex-col xl:flex-row flex-wrap gap-10 w-full">
      <div class="flex-1 flex-center flex-col gap-8">
        <img src="../assets/svgs/gstlive-with-text.svg" />

        <div class="flex">
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

      <img class="max-w-[1050px] aspect-video object-cover" src="../assets/artwork.jpg" />
    </div>
  </div> -->
</template>
