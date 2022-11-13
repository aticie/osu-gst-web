<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { notify } from "../hooks/useNotify";

import { PlayerlessTeam, Team } from "../Models/Team";
import { User } from "../Models/User";

import { useUserStore } from "../store";
import { getFileInputElement } from "../utils";
import axios from "axios";

import { Plus, Upload } from "../components/icons";
import TeamVue from "../components/teams/Team.vue";
import TeamCreate from "../components/teams/TeamCreate.vue";
import TeamPlayers from "../components/teams/TeamPlayerInvites.vue";

const userStore = useUserStore();
const teams = ref<Team[]>([]);
const isPlayersOpen = ref(false);
const isDisabled = ref(false);

// const getAverageRank = (team: Team) => {
//   const averageRank = team.players  
//     .map(player => player.bws_rank ? player.bws_rank : 0)
//     .reduce((prev, curr) => prev + curr) / team.players.length;

//   return averageRank;
// }

try {
  const response = await axios.get<Team[]>("/teams");

  // response.data.sort((a, b) => {
  //   return getAverageRank(a) - getAverageRank(b)
  // });

  teams.value = response.data;
} catch (error) {
  teams.value = [];

  notify({
    title: "Request Error",
    message: "Cannot get team list"
  });
}

watch(
  () => userStore.user?.team,
  async (previous, current) => {
    if (previous?.title === current?.title) return;

    try {
      const response = await axios.get<Team[]>("/teams");
      teams.value = response.data;
    } catch (error) {
      teams.value = [];

      notify({
        title: "Request Error",
        message: "Cannot refresh teams list"
      });
    }
  }
)

const userTeam = computed(() => (
  teams.value.find(team => team.title == userStore.user?.team?.title)
));

const showPlayers = async () => {
  isPlayersOpen.value = !isPlayersOpen.value;
}

const leaveTeam = async () => {
  try {
    const response = await axios.delete<User>("/team");

    teams.value.splice(
      teams.value.findIndex(x => x.team_hash === userStore.user?.team?.team_hash),
      1
    );

    userStore.user = response.data;
  } catch (error) {
    if (!axios.isAxiosError(error)) return;

    notify({
      title: "Team",
      message: error.response?.data.detail
    });
  }
}

const uploadHandler = async () => {
  let inputElement = getFileInputElement();

  inputElement.addEventListener("change", async () => {
    if (!inputElement.files) return;

    let file = inputElement.files[0];
    if (file.size / 1000 > 10_000) {
      notify({
        title: "Banner Upload",
        message: "File size cannot exceed 10MB"
      });

      return;
    }

    isDisabled.value = true;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post<PlayerlessTeam>(
        "/avatar/upload",
        formData
      );

      userStore.user!.team = response.data;
    } catch (error) {
      if (!axios.isAxiosError(error)) return;

      notify({
        title: error.message,
        message: error.response?.data.detail
      });
    } finally {
      isDisabled.value = false;
    }
  })

  inputElement.click();
  isDisabled.value = false;
}
</script>

<template>
  <div class="flex flex-col gap-10">
    <div v-if="userStore.user" class="flex flex-col items-center w-full gap-4">
      <template v-if="userStore.user.team && userTeam">
        <h1 class="font-bold text-2xl text-center">YOUR TEAM</h1>

        <TeamVue :team="userTeam">
          <template v-slot:cover>
            <img :src="userStore.user.team.avatar_url || '/artwork.jpg'"
              class="aspect-banner object-cover rounded-lg h-32 sm:h-40 w-full" />

            <button class="
              absolute h-full w-full inset-0
              bg-dark bg-opacity-80 hover:bg-opacity-60 transition-colors
              flex-center flex-col text-sm
              disabled:pointer-events-none
              " @click="uploadHandler" :disabled="isDisabled">
              <Upload />
              <p>Upload Banner</p>
            </button>
          </template>

          <template v-slot:options>
            <button class="base-button bg-red-500 hover:bg-red-800" @click="leaveTeam">
              Leave The Team
            </button>

            <button v-if="userTeam.players.length === 1" class="base-button bg-pink-p hover:bg-purple-p"
              @click="showPlayers">
              <Plus class="h-3 aspect-square" />
              Invite Someone
            </button>

            <TeamPlayers v-if="isPlayersOpen" />
          </template>
        </TeamVue>
      </template>

      <template v-else>
        <h1 class="font-bold text-2xl text-center">CREATE A TEAM</h1>
        <TeamCreate />
      </template>
    </div>

    <div class="flex flex-col gap-6 w-full">
      <h1 class="font-bold text-2xl text-center">TEAMS</h1>
      <div class="flex flex-wrap justify-center gap-4 2xl:gap-6">
        <template v-for="team in teams">
          <TeamVue v-if="team.title != userTeam?.title" :team="team" />
        </template>
      </div>
    </div>
  </div>
</template>
