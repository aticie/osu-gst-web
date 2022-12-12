<script setup lang="ts">
import axios from "axios";
import { ref, watch } from "vue";
import { UserMapScore } from "../../models/User";

const props = defineProps<{
  mapId: string
}>();

const playerRankings = ref<UserMapScore[]>();
const getRankings = async () => {
  playerRankings.value = (await axios.get<UserMapScore[]>(props.mapId === 'Overall' ? "/mappool/player_scores" : "/user/scores", {
    params: props.mapId === 'Overall' ? { mappool_type: "QF" } : { map_id: props.mapId }
  })).data;
}

await getRankings();
watch(() => props.mapId, getRankings);
</script>

<template>
  <div class="grid gap-0.5 font-inter">
    <div class="grid grid-cols-2 px-4 my-4">
      <p>Username</p>
      <p class="justify-self-end">Score</p>
    </div>

    <div 
      v-for="(player, index) in playerRankings!"
      :key="player.username"
      class="ranking-row"
    >
      <p>{{ index + 1 }}</p>
      <p>{{ player.username }}</p>
      <p class="justify-self-end">{{ player.score.toFixed() }}</p>
    </div>
  </div>
</template>
