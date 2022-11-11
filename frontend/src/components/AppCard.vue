<script setup lang="ts">
defineProps<{
  title: string,
  description: string
}>();
</script>

<template>
  <div class="flex flex-grow items-center justify-center gap-2 font-bold p-2 group select-none">
    <slot></slot>

    <div>
      <p class="text-2xl group-hover:text-pink-p transition-colors">{{ title }}</p>
      <p class="text-xs ml-1 -mt-1 group-hover:text-pink-p transition-colors">{{ description }}</p>
    </div>
  </div>
</template>
