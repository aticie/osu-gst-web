<script setup lang="ts">
import axios from 'axios';
import { notify } from '../hooks/useNotify';
import { User } from '../Models/User';
import { ref } from 'vue';

const users = ref((await axios.get<User[]>("/users")).data);

const banUser = async (osuId: number) => {
  if (!confirm("Are you sure?")) return;

  try {
    const response = await axios.post<User>("/user/ban", {}, {
      params: {
        user_osu_id: osuId
      }
    });

    let userIndex = users.value.findIndex(user => user.osu_id == response.data.osu_id);
    users.value.splice(userIndex, 1, response.data);

    notify({
      title: "Banned User",
      message: response.data.osu_username
    });
  } catch (error) {
    if (!axios.isAxiosError(error)) return;

    notify({
      title: "Ban User",
      message: error.response?.data.detail
    });
  }
}
</script>

<template>
  <div class="
    flex flex-col border-2 rounded-lg
    border-neutral-800 gap-2 p-2 max-h-96 overflow-y-auto font-inter
  ">
    <div 
    v-for="player in users"
      class="
        flex-center flex-wrap gap-10 gap-y-3
      hover:bg-neutral-700 rounded-lg transition-colors p-2" >
      <img :src="player.osu_avatar_url" class="rounded-lg h-20" />

      <div class="flex flex-wrap grow">
        <div class="flex-1">
          <p class="text-xs text-pink-p">osu username</p>
          <p>{{ player.osu_username }}</p>
          <p class="text-xs text-pink-p">osu id</p>
          <p>{{ player.osu_id }}</p>
        </div>

        <div class="flex-1">
          <p class="text-xs text-pink-p">osu global rank</p>
          <p>{{ player.osu_global_rank }}</p>
          <p class="text-xs text-pink-p">bws Rank</p>
          <p>{{ player.bws_rank }}</p>
        </div>
  
        <div class="flex-1 truncate">
          <p class="text-xs text-pink-p">Team Hash</p>
          <p class="truncate">{{ player.team?.team_hash }}</p>
          <p class="text-xs text-pink-p">Team Title</p>
          <p>{{ player.team?.title }}</p>
        </div>
  
        <div class="flex-1">
          <p class="text-xs text-pink-p">discord_id</p>
          <p>{{ player.discord_id }}</p>
          <p class="text-xs text-pink-p">Discord Tag</p>
          <p>{{ player.discord_tag }}</p>
        </div>
      </div>

      <button 
        class="base-button grow-0 bg-red-500 hover:bg-red-800" 
        @click="banUser(player.osu_id)"
      >Ban Player</button>
    </div>
  </div>
</template>
