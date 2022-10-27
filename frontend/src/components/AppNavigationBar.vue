<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const route = useRoute();
const router = useRouter();
const routes = router.options.routes.filter(route => route.path != "/");

const openMenu = () => emit("update:modelValue", true);
const closeMenu = () => emit("update:modelValue", false);
const toggleMenu = () => emit("update:modelValue", !props.modelValue);
</script>

<template>
  <nav
    class="
      bg-black h-20
      flex items-center justify-between px-2 xl:px-4
      xl:grid xl:grid-cols-3 xl:justify-items-center

      text-xl xl:text-2xl font-bold route-links
    "
    v-click-outside="closeMenu"
  >
    <button class="w-6 xl:hidden" @click="toggleMenu">
      <img src="../assets/svgs/burger.svg" alt="burger icon" />
    </button>

    <RouterLink to="/" class="ml-2 xl:hidden" active-class="route-active">
      <img src="../assets/svgs/gstlive.svg" alt="gstlive icon" class="h-4 xl:h-5" />
    </RouterLink>

    <!-- This is the sidepanel -->
    <div 
      class="
        absolute xl:static
        bottom-0 left-0 top-20
        bg-black w-36 xl:w-auto xl:z-0

        flex flex-col xl:flex-row gap-4 xl:gap-14 xl:col-start-2
      "
      :class="{ '-z-20': !props.modelValue }"
    >
      <RouterLink to="/" class="hidden xl:flex items-center" active-class="route-active">
        <img src="../assets/svgs/gstlive.svg" alt="gstlive icon" class="h-4 xl:h-5" />
      </RouterLink>

      <RouterLink
        v-for="route in routes"
        :to="route.path"
        class="text-center transition-colors"
        active-class="route-active bg-neutral-900 xl:bg-transparent"
      >
        {{ route.name }}
      </RouterLink>
    </div>
    <!-- Sidepanel end -->

    <div class="flex items-center gap-2 ml-auto">
      <p class="route-links xl:hidden">{{ route.name }}</p>
      <div class="bg-pink-accent w-1 h-4 xl:hidden" />

      <button class="osu-login px-2">LOGIN</button>
    </div>
  </nav>
</template>
