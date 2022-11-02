<script setup lang="ts">
const isLogged = true;
</script>

<template>
  <button class="bg-pink-p text-black font-bold md:text-xl px-14 py-2 h-12 md:h-16 ml-auto">
    <p v-if="!isLogged">LOGIN WITH <span class="text-white">OSU</span></p>
    <div v-else class="flex items-center justify-end h-full gap-3">
      <p>WELCOME BACK <span class="text-white">USER</span></p>
      <img 
        src="../assets/artwork.jpg" 
        class="h-full aspect-square object-cover rounded-full shadow shadow-black" 
      />
    </div>
  </button>
</template>
