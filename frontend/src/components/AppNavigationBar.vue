<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();
const routes = router.options.routes.filter(route => route.path != "/");
</script>

<template>
  <nav class="flex justify-between xl:gap-20 bg-black h-20 px-4 route-links text-2xl font-bold relative">
    <div class="flex xl:flex-1 items-center justify-center gap-2">
      <div class="h-5 w-5 bg-white xl:hidden" />
  
      <RouterLink to="/" class="h-8 flex items-center xl:mr-14" active-class="route-active">
        <img src="../assets/gstlive.png" class="h-5" />
      </RouterLink>

      <ul class="hidden xl:flex gap-14">
        <RouterLink
          v-for="route in routes"
          :to="route.path"
          active-class="route-active"
        >
          {{ route.name }}
        </RouterLink>
      </ul>
    </div>

    <div class="flex items-center gap-2 xl:absolute xl:right-4 xl:inset-y-0">
      <p class="mt-1 sm:mt-0 xl:hidden">{{ route.name }}</p>
      <div class="bg-pink-accent w-1 h-4 xl:hidden" />

      <button class="osu-login px-2">LOGIN</button>
    </div>
  </nav>
</template>
