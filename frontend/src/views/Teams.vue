<script setup lang="ts">
import TeamVue from "../components/teams/Team.vue";
import { useRequest } from "../hooks/useRequest";
import { useUserStore } from "../store";

const userStore = useUserStore();
const teams = await useRequest({
  url: "/teams"
});


</script>

<template>
  <div class="flex flex-col items-center gap-10">
    <div v-if="!userStore.user?.team" class="flex flex-col gap-4">
      <h1 class="font-bold text-2xl text-center">CREATE A TEAM</h1>
      <div class="flex gap-2">
        <input placeholder="Team Avatar URL" class="input-box" />
        <input placeholder="Team Name" class="input-box" />
      </div>

      <button class="button">CREATE THE TEAM</button>
    </div>

    <div class="flex flex-col gap-6">
      <h1 class="font-bold text-2xl text-center">TEAMS</h1>
      <div class="flex flex-wrap justify-center gap-4 2xl:gap-6">
        <template v-for="x in 30">
          <TeamVue v-for="team in teams" :team="team" />
        </template>
      </div>
    </div>
  </div>

  <!-- <div class="flex flex-col gap-6">
    <div v-if="!userStore.user?.team" class="flex-center">
      <p>hey</p>
    </div>

    <div>
      <h1>Teams</h1>
      <div class="flex flex-wrap justify-center gap-4 2xl:gap-6">
        <template v-for="x in 30">
          <TeamVue v-for="team in teams" :team="team" />
        </template>
      </div>
    </div>
  </div> -->
</template>