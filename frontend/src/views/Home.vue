<script setup lang="ts">
import AppCard from "../components/AppCard.vue";
import AppOsuLogin from "../components/AppOsuLogin.vue";
import AppSuspense from "../components/AppSuspense.vue";
import { Triangles, Discord, GSTLive } from "../components/icons";
import { useUserStore } from "../store";

const userStore = useUserStore();
</script>

<template>
  <div class="2xl:flex-center h-full">
    <div class="w-full flex-center flex-col grow p-4 gap-6 2xl:gap-8">
      <GSTLive />

      <div class="flex flex-wrap justify-center 2xl:gap-10">
        <RouterLink to="/teams">
          <AppCard title="SIGN UP" description="YOUR TEAM!">
            <Triangles />
          </AppCard>
        </RouterLink>
        <a href="https://discord.gg/3YXF2UCEYs">
          <AppCard title="DISCORD" description="FOR MORE INFO!">
            <Discord />
          </AppCard>
        </a>
      </div>

      <div class="flex flex-wrap justify-center gap-4">
        <RouterLink to="/info" class="route-link">
          INFO
        </RouterLink>
        <RouterLink to="/teams" class="route-link">
          TEAMS
        </RouterLink>
        <RouterLink to="/lobbies" class="route-link">
          LOBBIES
        </RouterLink>
        <RouterLink v-if="userStore.user?.is_admin" to="/admin" class="route-link bg-red-500">
          ADMIN
        </RouterLink>
      </div>

      <div class="flex-center font-bold w-full 2xl:max-w-screen-md">
        <AppSuspense>
          <AppOsuLogin />
        </AppSuspense>
      </div>
    </div>

    <img src="/artwork.jpg" class="aspect-video object-cover max-h-[600px] w-full 2xl:w-auto" />
  </div>
</template>
