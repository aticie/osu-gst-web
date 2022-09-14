<script setup lang="ts">
  import AppNavigationBar from './components/AppNavigationBar.vue';
</script>

<template>
  <div class="absolute inset-0 bg-black opacity-70 -z-10"></div>
  <img class="absolute w-full h-full object-cover -z-20" src="./assets/bg.jpg" />

  <AppNavigationBar />

  <router-view v-slot="{ Component }">
    <Suspense :timeout="0">
      <template #default>
        <component :is="Component"></component>
      </template>

      <template #fallback>
        <svg class="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-50" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </template>
    </Suspense>
  </router-view>
</template>
