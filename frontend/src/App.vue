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
        <img src="./assets/spinner.svg" class="animate-spin w-8 h-8" alt="loading spinner" />
      </template>
    </Suspense>
  </router-view>
</template>
