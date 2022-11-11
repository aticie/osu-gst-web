<script setup lang="ts">
import TeamVue from "../components/teams/Team.vue";
import TeamCreate from "../components/teams/TeamCreate.vue";
import { useRequest } from "../hooks/useRequest";
import { Team } from "../Models/Team";
import { useUserStore } from "../store";

const userStore = useUserStore();
const teams = await useRequest<Team[]>({
  url: "/teams"
});

const usersTeam = teams?.find(team => team.team_hash == userStore.user?.team?.team_hash);
</script>

<template>
  <div class="flex flex-col items-center gap-10">
    <div class="flex flex-col items-center w-full gap-4">
      <template v-if="userStore.user?.team && usersTeam">
        <h1 class="font-bold text-2xl text-center">YOUR TEAM</h1>
        <TeamVue :team="usersTeam" />
      </template>
      <template v-else>
        <h1 class="font-bold text-2xl text-center">CREATE A TEAM</h1>
        <TeamCreate />
      </template>
    </div>

    <div v-if="teams" class="flex flex-col gap-6 w-full">
      <h1 class="font-bold text-2xl text-center">TEAMS</h1>
      <div class="flex flex-wrap justify-center gap-4 2xl:gap-6">
        <template v-for="team in teams">
          <TeamVue v-if="team.team_hash != usersTeam?.team_hash" :team="team" />
        </template>
      </div>
    </div>
  </div>
</template>