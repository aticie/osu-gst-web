<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import AppNavigationBar from './components/AppNavigationBar.vue';

const route = useRoute();
const isMenuOpen = ref(true);
</script>

<template>
  <AppNavigationBar v-if="route.path !== '/'" v-model="isMenuOpen" />
  <div class="artwork absolute inset-0" />

  <RouterView v-slot="{ Component }">
    <Suspense :timeout="0">
      <component :is="Component" />

      <template #fallback>
        <p>Loading..</p>
      </template>
    </Suspense>
  </RouterView>
</template>
