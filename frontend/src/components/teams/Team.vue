<script setup lang="ts">
import { Team } from '../../Models/Team';
import TeamBase from './TeamBase.vue';
import TeamUser from './TeamUser.vue';

const props = defineProps<{
  team: Team
}>();

const players = props.team.players;
const averageRank = players
  .map(player => player.bws_rank ? player.bws_rank : 0)
  .reduce((prev, curr) => prev + curr) / players.length;
</script>

<template>
  <TeamBase :team="team" :cover="team.avatar_url">
    <template v-slot:top>
      <div class="w-full relative">
        <slot name="cover">
          <img 
            :src="team.avatar_url || '/artwork.jpg'" 
            class="aspect-banner object-cover rounded-lg h-32 sm:h-40 w-full" 
          />
        </slot>
      </div>

      <div class="w-full truncate">
        <p class="text-xl break-words truncate">{{ team.title }}</p>
        <p class="text-sm">Avg. BWS #{{ Math.round(averageRank) }}</p>
      </div>
    </template>

    <template v-slot:players>
      <div class="flex flex-wrap gap-2">
        <TeamUser v-for="player in players" :player="player" />
      </div>

      <slot name="options"></slot>
    </template>
  </TeamBase>
</template>
