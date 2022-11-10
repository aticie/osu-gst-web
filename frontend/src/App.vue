<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { Spinner } from "./components/icons";
import AppNavigationBar from "./components/AppNavigationBar.vue";

const route = useRoute();
const isMainRoute = computed(() => route.path === "/");

</script>

<template>
  <AppNavigationBar v-if="!isMainRoute" />
  <div class="artwork absolute inset-0" />

  <RouterView v-slot="{ Component }">
    <main class="h-full overflow-y-scroll mt-14 pb-16 2xl:mt-0 2xl:p-0 feather 2xl:no-feather">
      <suspense :timeout="0">
        <component v-if="isMainRoute" :is="Component" />

        <div v-else class="max-w-6xl mx-auto pt-5">
          <component :is="Component" />
        </div>

        <template #fallback>
          <div class="flex-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Spinner class="absolute" />
          </div>
        </template>
      </suspense>
    </main>
  </RouterView>
</template>
