<script setup lang="ts">
import TeamVue from "../components/teams/Team.vue";
import { useRequest } from "../hooks/useRequest";

const teams = await useRequest({
  url: "/teams"
});
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4">

    <template v-for="x in 30">
      <TeamVue v-for="team in teams" :team="team" />
    </template>
  </div>
</template>