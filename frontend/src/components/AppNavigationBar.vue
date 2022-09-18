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

        <div v-if="route.children" class="flex flex-col mt-2 border-l-2 border-red-500 transition-colors">
          <router-link v-for="childRoute in route.children" :to="`${route.path}/${childRoute.path}`"
            class="nav-item nav-route-child">
            {{ childRoute.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- <div v-click-outside="closeMenu" class="bg-black p-3 text-white flex flex-col lg:flex-row lg:justify-center lg:items-center">
    <div class="flex items-center justify-between">
      <router-link to="/">
        <img src="../assets/gstlive.png" alt="gstlive icon" class="lg:mr-10 h-6" />
      </router-link>

      <img @click="toggleMenu" class="lg:hidden h-7" src="../assets/menu.svg" alt="menu button" />
    </div>

    <div 
      class="flex flex-col lg:flex-row lg:max-h-96 gap-2 lg:gap-8 text-center overflow-hidden lg:overflow-visible transition-all "
      :class="{ 'max-h-96': isMenuOpen }"
    >
      <div class="mt-2"></div>  

      <div v-for="route in routes" class="relative group">
        <router-link class="nav-item nav-route" :to="route.path">{{ route.name }}</router-link>

        <template v-if="route.children">
          <div class="absolute h-2 w-full group"></div>

          <div class="overflow-hidden lg:visible max-h-0 group-hover:max-h-96 transition-all">
            <div class="py-2 bg-white flex flex-wrap justify-center mt-1 lg:absolute group-visible rounded">
              <router-link class="nav-item nav-route-child rounded lg:rounded-none lg:w-full" v-for="childRoute in route.children"
                :to="`${route.path}/${childRoute.path}`">
                {{ childRoute.name }}
              </router-link>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div> -->
</template>
