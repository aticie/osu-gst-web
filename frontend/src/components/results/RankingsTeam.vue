<script setup lang="ts">
import axios from "axios";
import { ref, watch } from "vue";
import { TeamMapScore } from "../../models/Team";

const props = defineProps<{
  mapId: string
}>();

const teamRankings = ref<TeamMapScore[]>([]);
const getRankings = async () => {
  teamRankings.value = (await axios.get<TeamMapScore[]>("/team/scores", {
    params: { map_id: props.mapId }
  })).data;
}

await getRankings();
watch(() => props.mapId, getRankings);
</script>

<template>
  <div class="font-inter">
    <div class="grid grid-cols-2 px-4 my-4">
      <p>Team Name</p>
      <p class="justify-self-end">Score</p>
    </div>

    <div 
      v-for="team in teamRankings" 
      class="border border-neutral-800 p-4 grid grid-cols-2"
    >
      <p>{{ team.teamname }}</p>
      <p class="justify-self-end">{{ team.score.toFixed() }}</p>
    </div>
  </div>
</template>
