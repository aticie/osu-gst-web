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
    <suspense :timeout="0">
      <template #default>
        <main class="h-full overflow-y-scroll mt-14 pb-16 2xl:mt-0 2xl:p-0 feather 2xl:no-feather">
          <template v-if="isMainRoute">
            <component :is="Component" />
          </template>

          <div v-else class="max-w-4xl mx-auto pt-5">
            <component :is="Component" />
          </div>
        </main>
      </template>

      <template #fallback>
        <Spinner />
      </template>
    </suspense>
  </RouterView>
</template>
