<script setup lang="ts">
import { ref } from 'vue';
import RankingTeams from "../components/results/RankingsTeam.vue";
import RankingPlayer from "../components/results/RankingsPlayer.vue";
import AppButton from '../components/ui/AppButton.vue';

import axios from 'axios';
import { Map } from '../models/Custom';


const rankingTabs: {
  [key: string]: any
} = {
  "Team Rankings": RankingTeams,
  "Player Rankings": RankingPlayer
}

const pool = (await axios.get<Map[]>("/mappool")).data;

const selectedRankingTab = ref("Team Rankings");
const selectedMapId = ref(pool[0].id);
</script>

<template>
  <div class="p-2">
    <div class="flex gap-2 mb-2">
      <AppButton 
        :isLoading="false"
        v-for="(_, tab) in rankingTabs"
        @click="selectedRankingTab = (tab as string)"
        :class="{ '!bg-pink-p': selectedRankingTab == tab }"
      >
        <p>{{ tab }}</p>
      </AppButton>
    </div>

    <div class="flex flex-wrap gap-2">
      <AppButton
        :isLoading="false"
        v-for="map in pool"
        @click="selectedMapId = map.id"
        :class="{ '!bg-pink-p': selectedMapId === map.id }"
      >
        <p>{{ map.id }}</p>
      </AppButton>
    </div>

    <keep-alive>
      <component :is="rankingTabs[selectedRankingTab]" :mapId="selectedMapId" />
    </keep-alive>
  </div>
</template>
