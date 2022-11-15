<script setup lang="ts">
defineProps<{
  info: {
    topTitle: string | number,
    topField: string | number | undefined,
    bottomTitle: string | number,
    bottomField: string | number | undefined,
  }
}>();
</script>

<template>
  <div class="flex-1 truncate">
    <p class="text-xs text-pink-p">{{ info.topTitle }}</p>
    <p>{{ info.topField }}</p>
    <p class="text-xs text-pink-p">{{ info.bottomTitle }}</p>
    <p>{{ info.bottomField }}</p>
  </div>
</template>
