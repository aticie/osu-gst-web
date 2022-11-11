<script setup lang="ts">
defineProps<{
  cover?: string
}>();
</script>

<template>
  <div class="flex flex-col relative sm:rounded-lg overflow-hidden p-2 sm:p-4 gap-4 bg-dark max-w-md w-full">
    <div class="flex grow gap-4 items-center font-inter truncate">
      <img 
        :src="cover || 'https://osu.ppy.sh/images/layout/avatar-guest.png'" 
        class="aspect-banner object-cover rounded-lg h-32 sm:h-40" 
      />
      <slot name="top"></slot>
    </div>

    <div class="flex flex-wrap justify-center gap-2">
      <slot name="players">
      </slot>
    </div>
  </div>
</template>
