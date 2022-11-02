<script setup lang="ts">
import { toOsuAuth } from "../auth/toOsuAuth";
import { useUserStore } from "../store";

const userStore = useUserStore();
</script>

<template>
  <div class="bg-pink-p text-black font-bold md:text-xl px-14 py-2 h-12 md:h-16 ml-auto flex items-center">
    <button v-if="!userStore.user" @click="toOsuAuth">LOGIN WITH <span class="text-white">OSU</span></button>
    <button v-else class="flex items-center justify-end h-full gap-3">
      <p>WELCOME BACK <span class="text-white">{{ userStore.user.osu_username }}</span></p>
      <img 
        src="../assets/artwork.jpg" 
        class="h-full aspect-square object-cover rounded-full shadow shadow-black" 
      />
    </button>
  </div>
</template>
