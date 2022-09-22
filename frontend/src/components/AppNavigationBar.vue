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

    <img 
      @click="toggleMenu" 
      src="../assets/menu.svg" alt="menu button" 
      class="lg:hidden h-7"
    />

    <div
      class="
        flex flex-col gap-3 inset-y-0
        lg:nav-large absolute bg-black p-4 right-0
        translate-x-full transition-transform
        border-l border-neutral-800 lg:border-none
      "
      :class="{'translate-x-0': isMenuOpen}"
    >
      <div v-for="route in routes" class="relative group">
        <router-link 
          class="nav-item nav-route"
          :to="route.path"
          @click="closeMenu"
        >
          {{ route.name }}
        </router-link>

        <div v-if="route.children" 
          class="flex flex-col mt-2 py-2 transition-colors lg:absolute lg:group-visible top-10 bg-black rounded"
        >
          <div class="absolute -top-5 h-6 w-20"></div>

          <router-link v-for="childRoute in route.children" :to="`${route.path}/${childRoute.path}`" @click="closeMenu"
            class="nav-item nav-route-child">
            {{ childRoute.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
