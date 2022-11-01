<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import AppNavigationBar from './components/AppNavigationBar.vue';

const route = useRoute();
const isMenuOpen = ref(true);
</script>

<template>
  <AppNavigationBar v-if="route.path !== '/'" v-model="isMenuOpen" />

  <!-- <div class="h-full w-full relative transition-transform" :class="{ 'translate-x-36 lg:translate-x-0': isMenuOpen }"> -->
    <router-view v-slot="{ Component }">
      <!-- <div class="overflow-y-auto h-full"> -->
        <img src="./assets/bg.png" class="h-full w-full absolute object-cover -z-20" />
  
        <Suspense :timeout="0">
          <template #default>
            <main class="mx-auto h-full" :class="{ 'max-w-2xl': route.path !== '/' }">
              <component :is="Component"></component>
            </main>
          </template>
    
          <template #fallback>
            <img src="./assets/svgs/spinner.svg" class="animate-spin w-8 h-8" alt="loading spinner" />
          </template>
        </Suspense>
      <!-- </div> -->
    </router-view>
  <!-- </div> -->
</template>
