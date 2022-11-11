<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRequest } from "../hooks/useRequest";
import { Team } from "../Models/Team";
import { useUserStore } from "../store";
import TeamVue from "../components/teams/Team.vue";
import TeamCreate from "../components/teams/TeamCreate.vue";
import TeamUser from "../components/teams/TeamUser.vue";
import { Plus } from "../components/icons";

const userStore = useUserStore();
const teams = ref<Team[]>([]);

teams.value = await useRequest<Team[]>({
  url: "/teams"
}) || [];

watch(
  () => userStore.user?.team,
  async (previous, current) => {
    if (previous?.team_hash === current?.team_hash) return;

    teams.value = await useRequest<Team[]>({
      url: "/teams"
    }) || [];
  }
)

const userTeam = computed(() => (
  teams.value.find(team => team.team_hash == userStore.user?.team?.team_hash)
));
</script>

<template>
  <div class="flex flex-col items-center gap-10">
    <div class="flex flex-col items-center w-full gap-4">
      <template v-if="userStore.user?.team && userTeam">
        <h1 class="font-bold text-2xl text-center">YOUR TEAM</h1>
        <TeamVue :team="userTeam">
          <template v-slot:teamUsers>
            <button 
              v-if="userTeam.players.length === 1" 
              class="flex-center flex-1 gap-4 p-4 font-inter bg-pink-p hover:bg-purple-p transition-colors rounded text-sm"
            >
              <Plus class="h-full aspect-square" />
              <p>Invite Someone!</p>
            </button>
          </template>
        </TeamVue>
      </template>
      <template v-else>
        <h1 class="font-bold text-2xl text-center">CREATE A TEAM</h1>
        <TeamCreate />
      </template>
    </div>

    <div v-if="teams.length" class="flex flex-col gap-6 w-full">
      <h1 class="font-bold text-2xl text-center">TEAMS</h1>
      <div class="flex flex-wrap justify-center gap-4 2xl:gap-6">
        <template v-for="team in teams">
          <TeamVue v-if="team.team_hash != userTeam?.team_hash" :team="team" />
        </template>
      </div>
    </div>
  </div>
</template>