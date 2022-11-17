<script setup lang="ts">
import { Spinner } from "./icons";
</script>

<template>
  <Suspense :timeout="0">
    <slot></slot>

    <template #fallback>
      <Spinner class="h-12" />
    </template>
  </Suspense>
</template>
