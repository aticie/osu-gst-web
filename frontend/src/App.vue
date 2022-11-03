<script setup lang="ts">
</script>

<template>
  <!-- <AppNavigationBar v-if="route.path !== '/'" v-model="isMenuOpen" /> -->
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
