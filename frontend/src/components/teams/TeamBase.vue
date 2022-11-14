<script setup lang="ts">
defineProps<{
  cover?: string
}>();
</script>

<template>
  <div class="flex flex-col relative sm:rounded-lg overflow-hidden p-2 sm:p-4 gap-3 bg-dark max-w-md w-full">
    <div class="flex grow gap-4 items-center font-inter truncate group">
      <slot name="top">
        <!-- <img 
          :src="cover || '/artwork.jpg'" 
          class="aspect-banner object-cover rounded-lg h-32 sm:h-40 w-full" 
        /> -->
      </slot>
    </div>

    <slot name="players">
      
    </slot>
  </div>
</template>
