<script setup lang="ts">
import AppCard from "../components/AppCard.vue";
import AppOsuLogin from "../components/AppOsuLogin.vue";
import AppSuspense from "../components/AppSuspense.vue";
import { Discord, GSTLive, Twitch } from "../components/icons";
import { RouteRecordRaw, useRouter } from "vue-router";
import { useUserStore } from "../store";

const userStore = useUserStore();
const router = useRouter();

// if not home and (if not admin and user is admin)
const shouldDisplayRoute = (routeName: RouteRecordRaw) => {
  return (routeName.name) &&
         (routeName.name !== "HOME") &&
         !(routeName.name === "ADMIN" && !userStore.user?.is_admin)
}
</script>

<template>
  <div class="min-h-full grid gap-6 2xl:grid-cols-2 place-items-center">
    <div class="grid gap-6 2xl:gap-8 justify-items-center">
      <GSTLive />

      <div class="flex flex-wrap justify-center 2xl:gap-10">
        <a href="https://twitch.tv/osusg">
          <AppCard title="WATCH" description="LIVESTREAMS!">
            <Twitch />
          </AppCard>
        </a>

        <a href="https://discord.gg/3YXF2UCEYs">
          <AppCard title="DISCORD" description="FOR MORE INFO!">
            <Discord />
          </AppCard>
        </a>
      </div>

      <div class="flex flex-wrap justify-center gap-4">
        <template v-for="route in router.options.routes">
          <RouterLink
            v-if="shouldDisplayRoute(route)"
            :to="route.path"
            class="route-link"
          >
            {{ route.name }}
          </RouterLink>
        </template>
      </div>

      <div class="flex-center font-bold w-full 2xl:max-w-screen-md">
        <AppSuspense>
          <AppOsuLogin />
        </AppSuspense>
      </div>
    </div>

    <img 
      src="/artwork.jpg" 
      class="aspect-video object-cover"
    />
  </div>
</template>
