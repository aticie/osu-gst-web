<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRequest } from "../hooks/useRequest";
import { useUserStore } from "../store";
import { Team, PlayerlessTeam } from "../Models/Team";
import { User } from "../Models/User";
import { Plus, Upload } from "../components/icons";
import TeamVue from "../components/teams/Team.vue";
import TeamCreate from "../components/teams/TeamCreate.vue";
import TeamPlayers from "../components/teams/TeamPlayerInvites.vue";
import { uploadAvatar } from "../utils";
import { notify } from "../hooks/useNotify";
import axios from "axios";

const userStore = useUserStore();
const teams = ref<Team[]>([]);
const isPlayersOpen = ref(false);
const isDisabled = ref(false);

teams.value = await useRequest<Team[]>({
  url: "/teams"
}) || [];

watch(
  () => userStore.user?.team,
  async (previous, current) => {
    if (previous?.title === current?.title) return;

    teams.value = await useRequest<Team[]>({
      url: "/teams"
    }) || [];
  }
)

const userTeam = computed(() => (
  teams.value.find(team => team.title == userStore.user?.team?.title)
));

const showPlayers = async () => {
  isPlayersOpen.value = !isPlayersOpen.value;
}

const leaveTeam = async () => {
  const response = await useRequest<User>({
    url: "/team/leave",
    method: "POST"
  });

  if (!response) return;

  teams.value.splice(
    teams.value.findIndex(x => x.team_hash === userStore.user?.team?.team_hash),
    1
  )

  userStore.user = response;
}

const uploadHandler = async () => {
  isDisabled.value = true;

  try {
    const response = await uploadAvatar();
    userStore.user!.team = response;
  } catch (error) {
    if (!axios.isAxiosError(error)) return;

    notify({
      title: error.message,
      message: error.response?.data.detail
    });
  }

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
              "
              @click="uploadHandler"
              :disabled="isDisabled"
            >
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