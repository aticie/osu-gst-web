<script setup lang="ts">
import { Spinner } from "./icons";
</script>

<template>
  <suspense :timeout="0">
    <slot></slot>

    <template #fallback>
      <Spinner class="h-12" />
    </template>
  </suspense>
</template>
