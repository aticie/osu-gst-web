<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { Spinner } from "./components/icons";
import AppNavigation from "./components/AppNavigation.vue";
import AppNotification from "./components/AppNotification.vue";

const route = useRoute();
const isMainRoute = computed(() => route.path === "/");

</script>

<template>
  <AppNavigation v-if="!isMainRoute" />
  <div class="artwork fixed inset-0" />

  <AppNotification />

  <RouterView v-slot="{ Component }">
    <main 
      class="h-full w-full pt-20 2xl:pt-6"
      :class="{ 'max-w-6xl mx-auto': !isMainRoute }"
    >
      <suspense :timeout="0">
        <component :is="Component" />
  
        <template #fallback>
          <Spinner class="w-10" />
        </template>
      </suspense>
    </main>
  </RouterView>
</template>
