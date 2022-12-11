<script setup lang="ts">
import { ref } from 'vue';
import RankingTeams from "../components/results/RankingsTeam.vue";
import RankingPlayer from "../components/results/RankingsPlayer.vue";
import AppButton from '../components/ui/AppButton.vue';

const rankingTabs: {
  [key: string]: string
} = {
  "Team Rankings": RankingTeams,
  "Player Rankings": RankingPlayer
}

const selectedRankingTab = ref("Team Rankings");
</script>

<template>
  <div class="p-2">
    <div class="flex gap-2">
      <AppButton 
        :isLoading="false"
        v-for="(_, tab) in rankingTabs"
        @click="selectedRankingTab! = (tab as string)"
      >
        <p>{{ tab }}</p>
      </AppButton>
    </div>

    <component :is="rankingTabs[selectedRankingTab]" />
  </div>
</template>
