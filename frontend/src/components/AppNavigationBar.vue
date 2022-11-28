<script setup lang="ts">
import Burger from './icons/Burger.vue';
import { ref } from 'vue';
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from '../store';
import { GST } from './icons';

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();
const routes = router.options.routes.filter(route => route.path !== "/");

const isMenuOpen = ref(false);

const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
const closeMenu = () => isMenuOpen.value = false;

router.afterEach(() => {
  toggleMenu();
})
</script>

<template>
  <div 
    class="p-6 absolute" 
    v-press-outside="closeMenu"
  >
    <button 
      class="flex-center gap-4" 
      @click="toggleMenu"
    >
      <Burger />

      <div class="relative h-full flex items-center">
        <Transition name="change" tag="div">
          <div v-if="isMenuOpen" class="flex items-center gap-2">
            <div class="h-5 w-1 bg-pink-p" />
            <p class="font-bold text-xl">{{ route.name }}</p>
          </div>
          <RouterLink v-else to="/">
            <GST />
          </RouterLink>
        </Transition>
      </div>
    </button>

    <Teleport to="#app">

    <nav class="
        absolute inset-y-0
        max-w-sm w-full
        bg-black
        grid grid-rows-3 items-center
        -translate-x-full transition-transform
      " :class="{ 'translate-x-0': isMenuOpen }">
      <div class="flex flex-col row-start-2">
        <RouterLink to="/info" 
          class="text-2xl font-bold transition-colors p-2 pl-4 hover:bg-neutral-900"
          active-class="route-active"
        >
          INFO
        </RouterLink>
        <RouterLink to="/teams" 
          class="text-2xl font-bold transition-colors p-2 pl-4 hover:bg-neutral-900"
          active-class="route-active"
        >
          TEAMS
        </RouterLink>
        <RouterLink to="/lobbies" 
          class="text-2xl font-bold transition-colors p-2 pl-4 hover:bg-neutral-900"
          active-class="route-active"
        >
          LOBBIES
        </RouterLink>
        <RouterLink to="/admin"
          v-if="userStore.user?.is_admin"
          class="text-2xl font-bold transition-colors p-2 pl-4 hover:bg-neutral-900"
          active-class="route-active"
        >
          ADMIN
        </RouterLink>
      </div>

      <div v-if="userStore.user" class="flex flex-col p-4 gap-2 self-end row-start-3">
        <img :src="userStore.user.osu_avatar_url" class="w-8 aspect-square rounded-full" />
        <p class="font-bold text-xl text-pink-s">{{ userStore.user.osu_username }}</p>
      </div>
    </nav>
    </Teleport>
  </div>
</template>

<style>
.change-leave-active,
.change-enter-active {
  transition: ease-in-out;
  transition-duration: 300ms;
}

.change-leave-to,
.change-enter-from {
  transform: translateY(50px);
  position: absolute;
  opacity: 0;
}
</style>
