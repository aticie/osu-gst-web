<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { Spinner } from "./components/icons";

const route = useRoute();
const isMainRoute = computed(() => route.path === "/");

</script>

<template>
  <!-- <AppNavigationBar v-if="route.path !== '/'" v-model="isMenuOpen" /> -->
  <div class="artwork absolute inset-0" />

  <RouterView v-slot="{ Component }">
    <suspense :timeout="0">
      <template #default>
        <main v-if="!isMainRoute" class="max-w-6xl w-full mx-auto h-full">
          <component :is="Component" />
        </main>

        <component v-else :is="Component" />
      </template>

      <template #fallback>
        <Spinner />
      </template>
    </suspense>
  </RouterView>
</template>
