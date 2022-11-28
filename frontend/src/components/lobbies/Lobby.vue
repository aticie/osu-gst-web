<script setup lang="ts">
import { ref } from 'vue';
import axios from "axios";

import { Lobby } from '../../models/Lobby';
import { useUserStore } from '../../store';

import AppButton from '../ui/AppButton.vue';
import { notify } from '../../hooks/useNotify';
import { Team } from '../../models/Team';

const userStore = useUserStore();
const isLoading = ref(false);

const props = defineProps<{
  lobby: Lobby,
  updateCallback: () => void
}>();

const joinLobby = async () => {
  isLoading.value = true;

  try {
    await axios.post<Team>("/user/lobby/join", {}, {
      params: {
        lobby_id: props.lobby.id
      }
    });

    props.updateCallback();
  } catch (error) {
    if (!axios.isAxiosError(error)) return;

    notify({
      title: "Joining lobby",
      message: error.response?.data.detail
    });
  } finally {
    isLoading.value = false;
  }
}

const leaveLobby = async () => {
  isLoading.value = true;

  try {
    const response = await axios.post<Team>("/user/lobby/leave");

    let teamIndex = props.lobby.teams.findIndex(team => team.team_hash === response.data.team_hash);
    props.lobby.teams.splice(teamIndex, 1);
  } catch (error) {
    if (!axios.isAxiosError(error)) return;

    notify({
      title: "Leaving lobby",
      message: error.response?.data.detail
    });
  } finally {
    isLoading.value = false;
  }
}

const isInLobby = () => {
  return props.lobby.teams.find(team => {
    return team.team_hash === userStore.user?.team?.team_hash
  })
}
</script>

<template>
  <div class="flex flex-col justify-between gap-6 lg:gap-14 lg:w-1/4">
    <h1 class="text-2xl font-bold text-pink-p">{{ lobby.lobby_name }}</h1>
    <div>
      <h1 class="flex-wrap text-2xl font-bold">{{
          new Date(lobby.date).toLocaleString("en-US", {
            day: "2-digit",
            month: "short",
            weekday: "long",
            hour: "2-digit",
            hourCycle: "h24",
            minute: "2-digit",
          })
      }}</h1>
    </div>

    <div class="flex justify-between">
      <div class="font-inter text-sm">
        <p class="field-description">referee</p>
        <p>{{ lobby.referee?.osu_username || '-' }}</p>
      </div>

      <template v-if="userStore.user?.discord_id && userStore.user?.team">
        <AppButton 
          v-if="!isInLobby()" 
          :isLoading="isLoading"
          @click="joinLobby"
        >
          <p>Join Lobby</p>
        </AppButton>

        <AppButton
          v-else
          :isLoading="isLoading"
          @click="leaveLobby"
          class="bg-red-500"
        >
          <p>Leave Lobby</p>
        </AppButton>
      </template>
    </div>
  </div>

  <div class="grid grid-cols-3 grid-rows-2 place-items-center grow">
    <div v-for="team in lobby.teams" class="flex flex-col lg:flex-row gap-2 font-inter">
      <img
        :src="team.avatar_url || '/artwork.jpg'"
        class="rounded-lg object-cover w-48"
      />

      <div class="flex flex-col justify-between">
        <h1 class="text-lg">{{ team.title }}</h1>

        <div>
          <p 
            v-for="player in team.players"
            class="text-sm"
          >
          {{ player.osu_username }}</p>
        </div>
      </div>
    </div>
    <p 
      v-for="_ in 6 - lobby.teams.length" 
      class="text-pink-p lg:text-lg font-bold"
    >
      EMPTY SLOT
    </p>
  </div>
</template>
