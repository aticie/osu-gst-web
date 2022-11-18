<script setup lang="ts">
import { ref } from "vue";
import { User } from '../../Models/User';
import { notify } from "../../hooks/useNotify";
import AdminPlayerListInfo from "./AdminPlayerListInfo.vue";
import axios from "axios";
import AppButton from "../ui/AppButton.vue";

const props = defineProps<{
  player: User
}>();

const isLoading = ref(false);

const toggleBan = async (osuId: number, isBanned: boolean) => {
  if (!confirm("Are you sure?")) return;

  isLoading.value = true;
  try {
    const response = await axios({
      url: "/user/ban",
      method: isBanned ? "DELETE" : "POST",
      params: {
        user_osu_id: osuId
      }
    });

    props.player.is_banned = !isBanned;

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
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <img :src="player.osu_avatar_url" class="rounded-lg h-20 aspect-square" loading="lazy" />

  <div class="flex flex-wrap grow overflow-x-auto gap-x-4">
    <AdminPlayerListInfo :info="{
      topTitle: 'osu username',
      topField: player.osu_username,
      bottomTitle: 'osu id',
      bottomField: player.osu_id
    }" />

    <AdminPlayerListInfo :info="{
      topTitle: 'osu global rank',
      topField: player.osu_global_rank,
      bottomTitle: 'bws Rank',
      bottomField: player.bws_rank
    }" />

    <AdminPlayerListInfo :info="{
      topTitle: 'Team Hash',
      topField: player.team?.team_hash,
      bottomTitle: 'Team Title',
      bottomField: player.team?.title
    }" />

    <AdminPlayerListInfo :info="{
      topTitle: 'Discord Id',
      topField: player.discord_id,
      bottomTitle: 'Discord Tag',
      bottomField: player.discord_tag
    }" />
  </div>

  <AppButton 
    :isLoading="isLoading" 
    :isRed="true" 
    @click="toggleBan(player.osu_id, player.is_banned)"
  >
    <p>
      {{ player.is_banned ? "Unban User" : "Ban User" }}
    </p>
  </AppButton>
</template>
