<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const isMenuOpen = ref(false);
const route = useRoute();
const router = useRouter();
const routes = router.options.routes.filter(route => route.path != "/");

const openMenu = () => isMenuOpen.value = true;
const closeMenu = () => isMenuOpen.value = false;
</script>

<template>
  <nav 
    class="flex justify-between xl:gap-20 bg-black h-20 px-4 route-links text-lg lg:text-2xl font-bold"
    v-click-outside="closeMenu"
  >
    <div class="hidden xl:block flex-1" />

    <div class="flex xl:flex-grow items-center justify-center gap-2">
      <button class="xl:hidden w-6" @click="openMenu">
        <img src="../assets/svgs/burger.svg" alt="burger menu" />
      </button>
  
      <RouterLink to="/" class="h-8 flex items-center xl:mr-14" active-class="route-active">
        <img src="../assets/svgs/gstlive.svg" class="h-4 lg:h-5" />
      </RouterLink>

      <ul 
        class="absolute xl:static flex flex-col xl:flex-row inset-y-0 left-0 bg-black p-4 -translate-x-full xl:translate-x-0 transition-transform gap-4 xl:gap-14"
        :class="{ 'translate-x-0': isMenuOpen }"
      >
        <RouterLink
          v-for="route in routes"
          :to="route.path"
          class="flex items-center justify-center"
          active-class="route-active"
        >
          <p>{{ route.name }}</p>
        </RouterLink>
      </ul>
    </div>

    <div class="flex flex-1 items-center justify-end gap-2">
      <p class="mt-1 sm:mt-0 xl:hidden">{{ route.name }}</p>
      <div class="bg-pink-accent w-1 h-4 xl:hidden" />

      <button class="osu-login px-2">LOGIN</button>
    </div>
  </nav>
</template>
