<script setup lang="ts">
import AppCard from "../components/AppCard.vue";
import AppOsuLogin from "../components/AppOsuLogin.vue";
import AppSuspense from "../components/AppSuspense.vue";
import { Discord, DreamCore, GSTLive, Twitch } from "../components/icons";
import { useUserStore } from "../store";
import { useRouter } from "vue-router";
import { showRoute } from "../router/showRoute";

const userStore = useUserStore();
const router = useRouter();

</script>

<template>
  <div class="min-h-full grid xl:grid-cols-2 place-items-center">
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
            v-if="showRoute(route, userStore.user?.is_admin)"
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

    <div class="max-w-xl xl:max-w-none">
      <a href="https://www.dreamcore.com.sg/" class="flex items-center gap-2 p-2">
        <DreamCore />
        <p class="font-inter">Powered by Dreamcore</p>
      </a>
      
      <img 
        src="/artwork.jpg" 
        class="aspect-video object-cover"
      />
    </div>
  </div>
</template>
