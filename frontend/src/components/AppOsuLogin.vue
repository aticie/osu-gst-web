<script setup lang="ts">
import { toDiscordAuth, toOsuAuth } from "../auth";
import { getCookie } from "../cookie";
import { useUserStore } from "../store";

import { Right, Left, Danger } from "./icons";

const userStore = useUserStore();

if (getCookie("user_hash")) {
  await userStore.refreshUser();
}
</script>

<template>
  <div class="h-full w-full text-xl 2xl:text-2xl"> 
    <div class="flex-center bg-dark h-14 2xl:h-16 w-full p-2.5">
      <button v-if="!userStore.user" @click="toOsuAuth" class="flex items-center gap-4">
        <Right />
        <p>LOGIN WITH <span class="text-pink-p">OSU!</span></p>
        <Left />
      </button>

      <div v-else class="flex-center h-full gap-3">
        <p>WELCOME BACK <span class="text-pink-p">{{ userStore.user.osu_username }}</span> </p>
        <img :src="userStore.user.osu_avatar_url"
          class="h-full aspect-square rounded-full object-cover shadow shadow-black" />
      </div>
    </div>

    <button v-if="!userStore.user?.discord_id" @click="toDiscordAuth"
      class="flex-center flex-col 2xl:flex-row gap-2 w-full p-2 bg-dark bg-opacity-30 text-yellow-400 text-base">
      <Danger />
      <p>PLEASE VERIFY YOUR DISCORD TO PARTICIPATE</p>
    </button>
  </div>
</template>
