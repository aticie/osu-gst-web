<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';
import axios from "axios";

import { Lobby } from '../../models/Lobby';
import { useUserStore } from '../../store';

import AppButton from '../ui/AppButton.vue';
import { notify } from '../../hooks/useNotify';
import { Team } from '../../models/Team';

const props = defineProps<{
  lobby: Lobby,
  updateCallback: () => void
}>();

const { lobby } = toRefs(props);
const userStore = useUserStore();
const isLoading = ref(false);
const referee = ref(lobby.value.referee || "-");

if (lobby.value.teams.length > 0) {
  lobby.value.teams = [
    lobby.value.teams[0],
    lobby.value.teams[0],
    lobby.value.teams[0],
    lobby.value.teams[0],
    lobby.value.teams[0],
    lobby.value.teams[0],
  ]
}

let timeout: NodeJS.Timeout;
watch(referee, (newValue, oldValue) => {
  if (newValue === oldValue) return;
  if (timeout) {
    clearTimeout(timeout);
  };

  timeout = setTimeout(updateReferee, 1000);
})

const updateReferee = async () => {
  try {
    const response = await axios.post<Lobby>("/lobby/add_referee", {}, {
      params: {
        referee_osu_username: referee.value,
        lobby_id: lobby.value.id
      }
    });

    lobby.value = response.data;
  } catch (error) {
    if (!axios.isAxiosError(error)) return;

    notify({
      title: "Lobby referee update",
      message: error.response?.data.detail
    });
  }
}

const joinLobby = async () => {
  isLoading.value = true;

  try {
    await axios.post<Team>("/user/lobby/join", {}, {
      params: {
        lobby_id: lobby.value.id
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

    let teamIndex = lobby.value.teams.findIndex(team => team.team_hash === response.data.team_hash);
    lobby.value.teams.splice(teamIndex, 1);
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
  return lobby.value.teams.find(team => {
    return team.team_hash === userStore.user?.team?.team_hash
  })
}
</script>

<template>
  <div class="flex flex-col justify-between gap-6 lg:gap-14 lg:w-1/4 shrink-0">
    <h1 class="text-2xl font-bold text-pink-p">{{ lobby.lobby_name }}</h1>
    <div>
      <h1 class="flex-wrap text-3xl font-bold">{{
        new Date(lobby.date).toLocaleString("en-GB", {
          day: "numeric",
          month: "short",
          hour: "2-digit",
          hourCycle: "h24",
          minute: "2-digit"
        })}}
      </h1>
      <p class="font-inter">{{
        new Date(lobby.date).toLocaleString("en-GB", {
          weekday: "long",
          hour: "2-digit",
          hourCycle: "h12",
          minute: "2-digit"
        })}}</p>
    </div>

    <div class="flex items-end gap-4">
      <div class="font-inter text-sm">
        <p class="field-description">referee</p>
        <input
          v-if="userStore.user?.is_admin"
          v-model="referee"
          class="input-box input-border w-2/3" 
        />
        <p v-else>{{ referee }}</p>
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

  <div class="grid grid-cols-3 grid-rows-2 gap-4 grow">
    <div v-for="team in lobby.teams" class="flex flex-col items-center lg:flex-row gap-2 font-inter">
      <img
        :src="team.avatar_url || '/artwork.jpg'"
        class="aspect-banner rounded-lg object-cover h-28"
      />

      <div class="flex flex-col justify-between lg:h-full py-2 truncate">
        <h1 class="text-xl font-bold">{{ team.title }}</h1>

        <div class="truncate">
          <p 
            v-for="player in team.players"
            class="text-xs lg:text-sm truncate"
          >
          {{ player.osu_username }}</p>
        </div>
      </div>
    </div>
    <p 
      v-for="_ in 6 - lobby.teams.length" 
      class="text-pink-p lg:text-lg font-bold self-center text-center"
    >
      EMPTY SLOT
    </p>
  </div>
</template>
