<script setup lang="ts">
import { getTeams } from "../api";
import Team from "../components/teams/Team.vue";

const teams = await getTeams();
</script>

<template>
  <Team v-for="team in teams" :team="team" />
</template>