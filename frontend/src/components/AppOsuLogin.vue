<script setup lang="ts">
import { toOsuAuth } from "../auth/toOsuAuth";
import { useUserStore } from "../store";

const userStore = useUserStore();
</script>

<!-- class="bg-pink-p text-black font-bold text-xl 2xl:text-3xl h-14 2xl:h-[4.5rem] p-2 w-full max-w-xl flex-center" -->
<template>
  <div
    class="bg-pink-p text-black text-center font-bold text-xl 2xl:text-4xl h-14 2xl:h-[4.5rem] p-2 w-full 2xl:max-w-screen-md flex-center"
  >
    <button v-if="!userStore.user" @click="toOsuAuth">LOGIN WITH <span class="text-white">OSU</span></button>
    <div v-else class="flex items-center justify-end h-full gap-3">
      <p>WELCOME BACK <span class="text-white">{{ userStore.user.osu_username }}</span></p>
      <img 
        :src="userStore.user.osu_avatar_url"
        class="h-full aspect-square object-cover rounded-full shadow shadow-black" 
      />
    </div>
  </div>
</template>
