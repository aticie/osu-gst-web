<script setup lang="ts">
import axios from "axios";
import { ref, watch } from "vue";
import { UserMapScore } from "../../models/User";

const props = defineProps<{
  mapId: string
}>();

const playerRankings = ref<UserMapScore[]>();
const getRankings = async () => {
  playerRankings.value = (await axios.get<UserMapScore[]>("/user/scores", {
    params: { map_id: props.mapId }
  })).data;
}

await getRankings();
watch(() => props.mapId, getRankings);
</script>

<template>
  <div class="font-inter">
    <div class="grid grid-cols-2 px-4 my-4">
      <p>Username</p>
      <p class="justify-self-end">Score</p>
    </div>

    <div 
      v-for="team in playerRankings" 
      class="border border-neutral-800 p-4 grid grid-cols-2"
    >
      <p>{{ team.username }}</p>
      <p class="justify-self-end">{{ team.score.toFixed() }}</p>
    </div>
  </div>
</template>
