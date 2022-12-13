<script setup lang="ts">
import Burger from './icons/Burger.vue';
import { ref } from 'vue';
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from '../store';
import { GST } from './icons';
import { showRoute } from '../router/showRoute';

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();

const isMenuOpen = ref(false);

const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
const closeMenu = () => isMenuOpen.value = false;

router.afterEach(() => {
  toggleMenu();
})
</script>

<template>
  <div class="fixed w-full lg:w-fit p-6 z-10 black-feather lg:bg-none"
    v-press-outside="closeMenu"
  >
    <button class="flex-center gap-4" @click="toggleMenu">
      <Burger class="z-10" />

      <div class="relative h-full flex items-center z-10">
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
        fixed inset-y-0 left-0
        max-w-xs w-full -translate-x-full transition-transform
        grid grid-rows-3
        bg-black"
      :class="{ 'translate-x-0': isMenuOpen }"
    >
      <div class="grid row-start-2 gap-4 place-content-center">
        <template v-for="route in router.options.routes">
          <RouterLink v-if="showRoute(route, userStore.user?.is_admin)" :to="route.path" class="route-link"
            active-class="route-active">
            {{ route.name }}
          </RouterLink>
        </template>
      </div>

      <div v-if="userStore.user" class="flex flex-col p-4 gap-2 self-end row-start-3">
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
