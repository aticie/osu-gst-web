<script setup lang="ts">
import { Spinner } from "./icons";
</script>

<template>
  <Suspense :timeout="0">
    <slot></slot>

    <template #fallback>
      <Spinner />
    </template>
  </Suspense>
</template>
