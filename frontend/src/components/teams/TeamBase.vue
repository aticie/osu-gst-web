<script setup lang="ts">
defineProps<{
  cover?: string
}>();
</script>

<template>
  <div class="team">
    <div class="flex grow gap-4 items-center font-inter truncate group">
      <slot name="top"></slot>
    </div>

    <slot name="players">
      
    </slot>
  </div>
</template>
