<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isMenuOpen = ref(false);
const router = useRouter();
const routes = router.options.routes.filter(x => x.name);

const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
const closeMenu = () => isMenuOpen.value = false;
</script>

<template>
  <div v-click-outside="closeMenu"
    class="bg-black text-white flex items-center justify-between lg:justify-center gap-16 p-3.5">
    <router-link to="/">
      <img src="../assets/gstlive.png" alt="gstlive icon" class="h-6" />
    </router-link>

    <img @click="toggleMenu" src="../assets/menu.svg" alt="menu button" class="lg:hidden h-7" />
    <div
      class="flex flex-col lg:nav-large absolute inset-y-0 bg-black p-6 right-0 translate-x-full gap-3 transition-transform"
      :class="{'translate-x-0': isMenuOpen}">
      <div v-for="route in routes" class="relative group">
        <router-link 
          class="nav-item nav-route"
          :class="{ 'group-hover:bg-red-500 group-hover:text-white': route.children }" 
          :to="route.path"
        >
          {{ route.name }}
        </router-link>

        <div v-if="route.children" 
          class="flex flex-col mt-2 border-l-2 border-red-500 transition-colors lg:absolute lg:group-visible top-10 bg-black p-without-l"
        >
          <div class="absolute -top-5 h-6 w-20"></div>

          <router-link v-for="childRoute in route.children" :to="`${route.path}/${childRoute.path}`"
            class="nav-item nav-route-child">
            {{ childRoute.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
