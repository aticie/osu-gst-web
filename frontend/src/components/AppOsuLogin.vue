<script setup lang="ts">
import { toDiscordAuth, toOsuAuth } from "../auth";
import { useUserStore } from "../store";
import TeamInvites from "./teams/TeamInvites.vue";

import { Right, Left, Danger } from "./icons";

const userStore = useUserStore();

try {
  await userStore.refreshUser();
} catch {

}
</script>

<template>
  <div v-if="userStore.user" class="w-full h-full flex flex-col gap-2 2xl:text-xl">
    <div class="h-14 2xl:h-16 flex-center gap-2 bg-dark">
      <p>WELCOME BACK
        <span class="text-pink-p">{{ userStore.user.osu_username }}</span>
      </p>

      <img :src="userStore.user.osu_avatar_url" alt="user avatar" class="h-10 rounded-full" />
    </div>

    <button v-if="!userStore.user.discord_id" @click="toDiscordAuth"
      class="h-full flex-center flex-col 2xl:flex-row gap-2 p-2 text-yellow-400 bg-dark">
      <Danger />
      <p>PLEASE VERIFY YOUR DISCORD TO PARTICIPATE</p>
    </button>

    <TeamInvites v-if="!userStore.user.team && userStore.user.discord_id" />
  </div>

  <button v-else @click="toOsuAuth" class="h-14 w-full flex-center gap-4 2xl:text-xl bg-dark">
    <Right />
    <p>LOGIN WITH
      <span class="text-pink-p">OSU!</span>
    </p>
    <Left />
  </button>
</template>
