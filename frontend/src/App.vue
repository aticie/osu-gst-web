<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import AppNavigationBar from './components/AppNavigationBar.vue';

const route = useRoute();
const isMenuOpen = ref(true);
</script>

<template>
  <AppNavigationBar v-if="route.path !== '/'" v-model="isMenuOpen" />

  <router-view v-slot="{ Component }">
    <img src="./assets/bg.png" class="h-full w-full absolute object-cover -z-20" />

    <main class="mx-auto h-full" :class="{ 'max-w-2xl': route.path !== '/' }">
      <Suspense :timeout="0">
        <template #default>
          <component :is="Component"></component>
        </template>
        
        <template #fallback>
          <img src="./assets/svgs/spinner.svg" class="animate-spin w-8 h-8 absolute left-1/2 top-1/2" alt="loading spinner" />
        </template>
      </Suspense>
    </main>
  </router-view>
</template>
