<script setup lang="ts">
import { Spinner } from "../icons";

defineProps<{
  isLoading: boolean,
  isRed?: boolean
}>();
</script>

<template>
  <button 
    class="
      input-box rounded transition-all
      disabled:opacity-50 disabled:pointer-events-none
      flex-center gap-3 text-sm shrink-0"
    :class="{ 'bg-neutral-800 hover:bg-pink-p': !isRed, 'bg-red-500 hover:bg-red-800': isRed }"
    :disabled="isLoading || false"
  >
    <TransitionGroup name="button" tag="div" class="grid grid-flow-col items-center gap-4">
      <Spinner v-if="isLoading" class="h-5 aspect-square" :key="1" />
      <slot v-else name="icon" :key="2"></slot>
      
      <slot :key="3"></slot>
    </TransitionGroup>
  </button>
</template>

<style>
.button-enter-active,
.button-leave-active,
.button-move {
  transition: all 0.3s ease;
}

.button-enter-from, .button-leave-to {
  scale: 0;
  opacity: 0;
}

.button-leave-active {
  position: absolute;
}
</style>
