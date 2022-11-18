<script setup lang="ts">
import axios from 'axios';
import { notify } from '../hooks/useNotify';
import { User } from '../Models/User';
import { ref } from 'vue';
import AdminPlayerListInfo from "../components/admin/AdminPlayerListInfo.vue"

const users = ref((await axios.get<User[]>("/users")).data);

const toggleBan = async (osuId: number, isBanned: boolean) => {
  if (!confirm("Are you sure?")) return;

  try {
    const response = await axios({
      url: "/user/ban",
      method: isBanned ? "DELETE" : "POST",
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
  <div class="flex flex-col gap-4 pb-4">
    <div class="admin-section">
      <div v-for="(player, index) in users"
        :key="player.osu_id"
        class="flex-center flex-wrap gap-8 gap-y-3
        hover:bg-neutral-700 rounded-lg transition-colors p-2">
        <p>{{ index }}</p>

        <img 
          :src="player.osu_avatar_url" 
          class="rounded-lg h-20 aspect-square" 
          loading="lazy" 
        />

        <div class="flex flex-wrap grow overflow-x-auto gap-x-4">
          <AdminPlayerListInfo 
            :info="{
              topTitle: 'osu username',
              topField: player.osu_username,
              bottomTitle: 'osu id',
              bottomField: player.osu_id
            }"
          />

          <AdminPlayerListInfo 
            :info="{
              topTitle: 'osu global rank',
              topField: player.osu_global_rank,
              bottomTitle: 'bws Rank',
              bottomField: player.bws_rank
            }"
          />

          <AdminPlayerListInfo 
            :info="{
              topTitle: 'Team Hash',
              topField: player.team?.team_hash,
              bottomTitle: 'Team Title',
              bottomField: player.team?.title
            }"
          />

          <AdminPlayerListInfo 
            :info="{
              topTitle: 'Discord Id',
              topField: player.discord_id,
              bottomTitle: 'Discord Tag',
              bottomField: player.discord_tag
            }"
          />
        </div>

        <button
          class="base-button grow-0 px-4 w-32 hover:bg-neutral-800"
          :class="{ 'bg-purple-p': player.is_banned, 'bg-red-500': !player.is_banned }"
          @click="toggleBan(player.osu_id, player.is_banned)"
        >
          {{ player.is_banned ? 'Unban User' : 'Ban User' }}
        </button>
      </div>
    </div>
  </div>
</template>
