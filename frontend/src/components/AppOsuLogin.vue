<script setup lang="ts">
import { toOsuAuth } from "../auth";
import { useUserStore } from "../store";

import axios from "axios";
import { User } from "../models/User";

const userStore = useUserStore();

try {
  const response = await axios.get<User>("/users/me");
  userStore.user = response.data;
} catch {
  
}
</script>

<template>
  <div v-if="userStore.user" class="w-full h-full flex flex-col gap-2 2xl:text-xl">
    <div class="h-16 py-2 flex-center gap-2 bg-dark">
      <p>WELCOME BACK
        <span class="text-pink-p">{{ userStore.user.osu_username }}</span>
      </p>

      <img :src="userStore.user.osu_avatar_url" alt="user avatar" class="h-10 rounded-full" />
    </div>
  </div>

  <button v-else @click="toOsuAuth" class="h-14 w-full flex-center gap-4 2xl:text-xl bg-dark">
    <Right />
    <p>LOGIN WITH
      <span class="text-pink-p">OSU!</span>
    </p>
    <Left />
  </button>
</template>
