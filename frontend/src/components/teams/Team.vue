<script setup lang="ts">
import { Team } from '../../Models/Team';

const props = defineProps<{
  team: Team
}>();

const players = props.team.players;
const averageRank = players
  .map(player => player.osu_global_rank ? player.osu_global_rank : 0)
  .reduce((prev, curr) => prev + curr) / players.length;
</script>

<template>
  <div class="flex flex-col sm:rounded-lg overflow-hidden p-4 gap-4 bg-dark max-w-md w-full">
    <div class="flex grow gap-4 items-center font-inter">
      <img :src="team.avatar_url" class="aspect-banner object-cover rounded-lg h-32 sm:h-40" />
      <div class="w-full">
        <p class="text-sm">Avg Rank #{{ Math.round(averageRank) }}</p>
        <p class="text-xl break-words">{{ team.title }}</p>
      </div>
    </div>

    <div class="flex gap-4">
      <div v-for="(player, index) in players" class="flex flex-1 overflow-hidden gap-2">
        <img :src="player.osu_avatar_url" alt="osu avatar" class="aspect-square object-cover rounded-lg h-16"
          :class="{ 'flex-row-reverse': index == 1 }" />
        <div class="flex flex-col gap-2 overflow-hidden text-sm">
          <p class="font-bold truncate">{{ player.osu_username }}</p>
          <div class="font-inter">
            <p class="font-bold">#{{ player.bws_rank }}</p>
            <p class="text-purple-s">BWS rank</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
