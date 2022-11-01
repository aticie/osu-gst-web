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
  <div class="flex flex-grow items-center justify-center gap-2 font-bold p-2">
    <img :src="getImageUrl()" />
    <div>
      <p class="text-2xl shadow shadow-black">{{ title }}</p>
      <p class="text-xs ml-1 -mt-1 shadow shadow-black">{{ description }}</p>
    </div>
  </div>
</template>
