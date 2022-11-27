<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { useUserStore } from '../store';
import { notify } from '../hooks/useNotify';
import { Lobby as LobbyModel } from "../models/Lobby";
import { User } from '../models/User';

import Lobby from "../components/lobbies/Lobby.vue";
import LobbyBase from "../components/lobbies/LobbyBase.vue";
import AppButton from '../components/ui/AppButton.vue';

const userStore = useUserStore();
const lobbies = ref<LobbyModel[]>([]);

const lobbyName = ref("");
const lobbyDate = ref("");
const lobbyReferee = ref("");
const isLoading = ref(false);

const updateLobbies = async () => {
  const response = await axios.get<LobbyModel[]>("/lobbies");
  lobbies.value = response.data;
}
await updateLobbies();

const createLobby = async () => {
  if (
    !lobbyName.value ||
    !lobbyDate.value
  ) {
    return notify({
      title: "Creating Lobby",
      message: "Missing required fields"
    });
  }

  isLoading.value = true;

  var createParams = {}
  if (lobbyReferee.value) {
   createParams = {
        lobby_time: lobbyDate.value,
        lobby_name: lobbyName.value,
        referee_osu_username: lobbyReferee.value
      }
    }
  else{    
   createParams = {
        lobby_time: lobbyDate.value,
        lobby_name: lobbyName.value,
        referee_osu_username: null
      }
    }

  try {
    const response = await axios.post<LobbyModel>("/lobby/create", {}, {
      params: createParams
    });

    lobbies.value.push(response.data);
  } catch (error) {
    if (!axios.isAxiosError(error)) return;

    return notify({
      title: "Creating lobby",
      message: `Can't create the lobby. ${error.response?.data.detail}`
    })
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div class="flex flex-col gap-10">
    <div class="flex flex-col gap-4">
      <h1 class="page-title">CREATE A LOBBY</h1>
      <LobbyBase class="font-inter mx-auto w-full max-w-md flex-col" v-if="userStore.user?.is_admin">
        <div>
          <p class="field-description">Enter a lobby name</p>
          <input type="text" v-model="lobbyName" placeholder="Lobby name" class="input-box input-border w-full" />
        </div>

        <div>
          <p class="field-description">Lobby date</p>
          <input type="datetime-local" class="color-scheme bg-neutral-900 p-2 w-full" v-model="lobbyDate" />
        </div>

        <div>
          <p class="field-description">Referee osu! username</p>
          <input type="text" class="input-box input-border w-full" placeholder="Referee osu username"
            v-model="lobbyReferee" />
        </div>

        <AppButton :isLoading="isLoading" @click="createLobby">
          <p>Create Lobby</p>
        </AppButton>
      </LobbyBase>
    </div>

    <div class="flex flex-col gap-4">
      <h1 class="page-title">LOBBIES</h1>
      <div class="flex flex-col gap-2">
        <LobbyBase v-for="lobby in lobbies" class="lg:flex-row">
          <Lobby :lobby="lobby" :updateCallback="updateLobbies" />
        </LobbyBase>
      </div>
    </div>
  </div>
</template>
