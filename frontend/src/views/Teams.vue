<script setup lang="ts">
import { getTeams } from "../api";
import Team from "../components/teams/Team.vue";

console.log("hey")
const teams = await getTeams();
</script>

<template>
  <div class="grid grid-cols-3 gap-2">
    <Team v-for="team in teams" :team="team" />
  </div>
</template>