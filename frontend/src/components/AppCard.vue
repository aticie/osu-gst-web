<script setup lang="ts">
const props = defineProps<{
  icon: string,
  title: string,
  description: string
}>();

const getImageUrl = () => {
  // This path must be correct for your file
  return new URL(`../assets/icons/${props.icon}`, import.meta.url).href
}
</script>

<template>
  <div class="flex flex-grow items-center justify-center gap-2 font-bold p-2 group select-none">
    <img :src="getImageUrl()" class="" />
    <div>
      <p class="text-2xl group-hover:text-pink-p transition-colors">{{ title }}</p>
      <p class="text-xs ml-1 -mt-1 group-hover:text-pink-p transition-colors">{{ description }}</p>
    </div>
  </div>
</template>
