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
  <div class="absolute h-full left-0 max-w-sm w-full" :class="{'pointer-events-none': !isMenuOpen}" v-press-outside="closeMenu">
    <button class="absolute left-4 top-4 h-6 2xl:left-5 2xl:top-5 flex items-center gap-2 z-10" @click="toggleMenu">
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

    <nav class="
        h-full p-4
        bg-black
        grid grid-rows-3 items-center
        -translate-x-full transition-transform
      " :class="{ 'translate-x-0': isMenuOpen }">
      <div class="flex flex-col row-start-2">
        <RouterLink v-for="route in routes" :to="route.path" class="text-2xl font-bold transition-colors"
          active-class="route-active">
          {{ route.name }}
        </RouterLink>
      </div>

      <div v-if="userStore.user" class="flex flex-col gap-2 self-end row-start-3">
        <img :src="userStore.user.osu_avatar_url" class="w-8 aspect-square rounded-full" />
        <p class="font-bold text-xl text-pink-s">{{ userStore.user.osu_username }}</p>
      </div>
    </nav>
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
