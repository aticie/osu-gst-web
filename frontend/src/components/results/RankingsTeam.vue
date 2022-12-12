<script setup lang="ts">
import axios from "axios";
import { ref, watch, computed } from "vue";
import { TeamMapScore } from "../../models/Team";

const props = defineProps<{
  mapId: string
}>();

const isOverall = computed(() => props.mapId === "Overall");
const teamRankings = ref<TeamMapScore[]>([]);

const getRankings = async () => {
  teamRankings.value = (await axios.get<TeamMapScore[]>(isOverall.value ?  "/mappool/team_scores" : "/team/scores", {
    params: isOverall.value ? { mappool_type: "QF" } : { map_id: props.mapId }
  })).data;
}

await getRankings();
watch(() => props.mapId, getRankings);

const bgColor = (index: number) => {
  if (!isOverall.value) return;

  return index < 8 ? 'bg-green-500' : 'bg-red-500'
}
</script>

<template>
  <div class="grid gap-0.5 font-inter">
    <div class="grid grid-cols-2 px-4 my-4">
      <p>Team Name</p>
      <div class="flex gap-10 justify-self-end">
        <p>Score</p>
        <p>zScore</p>
      </div>
    </div>

    <div 
      v-for="(team, index) in teamRankings" 
      class="ranking-row bg-opacity-40"
      :class="bgColor(index)"
    >
      <p>{{ team.teamname }}</p>

      <div class="flex gap-8 justify-self-end">
        <p>{{ team.score.toFixed() }}</p>
        <p class="w-14 text-end">{{ team.zscore.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>
