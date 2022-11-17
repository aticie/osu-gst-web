<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { notify } from "../hooks/useNotify";

import { PlayerlessTeam, Team } from "../Models/Team";
import { CalculatedTeam } from "../Models/Custom";
import { User } from "../Models/User";

import { useUserStore } from "../store";
import { getFileInputElement } from "../utils";
import axios from "axios";

import { Add, Upload, Leave } from "../components/icons";
import TeamVue from "../components/teams/Team.vue";
import TeamCreate from "../components/teams/TeamCreate.vue";
import TeamPlayers from "../components/teams/TeamPlayerInvites.vue";
import AppButton from "../components/ui/AppButton.vue";
import AppSuspense from "../components/AppSuspense.vue";

const userStore = useUserStore();
const teams = ref<CalculatedTeam[]>([]);
const isPlayersOpen = ref(false);
const isUploadLoading = ref(false);
const isLeaveButtonLoading = ref(false);

const getAverageRank = (team: Team) => {
  const averageRank = team.players
    .map(player => player.bws_rank ? player.bws_rank : 0)
    .reduce((prev, curr) => prev + curr) / team.players.length;

  return averageRank;
}

const getTeams = async () => {
  const response = await axios.get<Team[]>("/teams");

  let teamsWithBwsRank: CalculatedTeam[] = response.data.flatMap(team => {
    if (team.players.length < 1) return [];

    return {
      ...team,
      averageBwsRank: getAverageRank(team)
    }
  })

  teamsWithBwsRank.sort((a, b) => {
    return a.averageBwsRank - b.averageBwsRank
  });

  return teamsWithBwsRank;
}

try {
  teams.value = await getTeams();
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
      teams.value = await getTeams();
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
  isLeaveButtonLoading.value = true;

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
  } finally {
    isLeaveButtonLoading.value = false;
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

    isUploadLoading.value = true;
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
      isUploadLoading.value = false;
    }
  })

  inputElement.click();
  isUploadLoading.value = false;
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

            <AppButton 
              :isLoading="isUploadLoading" 
              @click="uploadHandler"
              class="absolute inset-0 bg-opacity-80 hover:bg-opacity-80 disabled:opacity-100"
            >
              <template #icon>
                <Upload />
              </template>
              <p>Upload banner</p>
            </AppButton>
          </template>

          <template v-slot:options>
            <AppButton :isRed="true" :isLoading="isLeaveButtonLoading" @click="leaveTeam">
              <template #icon>
                <Leave class="h-6" />
              </template>

              <p>Leave the team</p>
            </AppButton>

            <AppButton v-if="userTeam.players.length === 1" :isLoading="false" @click="showPlayers">
              <template #icon>
                <Add class="h-6" />
              </template>

              <p>Invite Someone</p>
            </AppButton>

            <template v-if="isPlayersOpen">
              <AppSuspense>
                <TeamPlayers />
              </AppSuspense>
            </template>
          </template>
        </TeamVue>
      </template>

      <template v-else>
        <h1 class="font-bold text-2xl text-center">CREATE A TEAM</h1>
        <TeamCreate />
      </template>
    </div>

    <div class="flex flex-col gap-6 w-full">
      <h1 class="font-bold text-2xl text-center">TEAMS - {{ teams.length }}</h1>

      <div class="flex flex-wrap justify-center gap-4 2xl:gap-6">
        <template v-for="team in teams">
          <TeamVue v-if="team.title != userTeam?.title" :team="team" />
        </template>
      </div>
    </div>
  </div>
</template>
