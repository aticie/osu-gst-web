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

</script>

<template>
  <button class="absolute left-5 top-5 h-10 flex items-center gap-2 z-10" @click="toggleMenu">
    <Burger />

    <div class="relative h-full flex items-center">
      <Transition name="change" tag="div">
        <template v-if="!isMenuOpen">
          <div class="flex items-center gap-2">
            <div class="h-5 w-1 bg-pink-p" />
            <p class="font-bold text-xl">{{ route.name }}</p>
          </div>
        </template>
        <template v-else>
          <GST />
        </template>
      </Transition>
    </div>
  </button>

  <nav class="
      absolute left-0 h-full p-4
      bg-black
      grid grid-rows-3 items-center
      -translate-x-full transition-transform
      max-w-sm w-full
    " :class="{ 'translate-x-0': isMenuOpen }">
    <div class="flex flex-col">
      <RouterLink v-for="route in routes" :to="route.path" class="text-2xl font-bold transition-colors"
        active-class="route-active">
        {{ route.name }}
      </RouterLink>
    </div>

    <div v-if="userStore.user" class="flex flex-col gap-2 self-end">
      <img :src="userStore.user.osu_avatar_url" class="w-8 aspect-square rounded-full" />
      <p class="font-bold text-xl text-pink-s">{{ userStore.user.osu_username }}</p>
    </div>
  </nav>
</template>

<style>
.change-leave-active, .change-enter-active {
  transition: ease-in-out;
  transition-duration: 300ms;
}

.change-leave-to, .change-enter-from {
  transform: translateY(50px);
  position: absolute;
  opacity: 0;
}
</style>
