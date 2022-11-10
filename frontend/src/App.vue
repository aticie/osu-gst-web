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
        <main class="h-full overflow-y-scroll pt-16 2xl:p-0">
          <div class="max-w-4xl mx-auto">
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
