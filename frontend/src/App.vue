<script setup lang="ts">
  import AppNavigationBar from './components/AppNavigationBar.vue';
</script>

<template>
  <AppNavigationBar />

  <router-view v-slot="{ Component }">
    <div class="overflow-y-auto h-full">
      <img src="./assets/bg.jpg" class="h-full w-full absolute object-cover -z-20" />

      <Suspense :timeout="0">
        <template #default>
          <main class="max-w-2xl mx-auto">
            <component :is="Component"></component>
          </main>
        </template>
  
        <template #fallback>
          <img src="./assets/svgs/spinner.svg" class="animate-spin w-8 h-8" alt="loading spinner" />
        </template>
      </Suspense>
    </div>
  </router-view>
</template>
