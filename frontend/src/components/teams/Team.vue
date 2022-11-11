<script setup lang="ts">
import { Team } from '../../Models/Team';
import TeamBase from './TeamBase.vue';
import TeamUser from './TeamUser.vue';

const props = defineProps<{
  team: Team
}>();

const players = props.team.players;
const averageRank = players
  .map(player => player.osu_global_rank ? player.osu_global_rank : 0)
  .reduce((prev, curr) => prev + curr) / players.length;
</script>

<template>
  <TeamBase :team="team" :cover="team.avatar_url">
    <template v-slot:top>
      <div class="w-full truncate">
        <p class="text-sm">Avg Rank #{{ Math.round(averageRank) }}</p>
        <p class="text-xl break-words truncate">{{ team.title }}</p>
      </div>
    </template>

    <template v-slot:players>
      <div v-for="(player, index) in players" class="flex flex-1 w-full overflow-hidden gap-2">
        <slot name="teamUsers" :player="player">
          <TeamUser :player="player" />
        </slot>
      </div>
    </template>
  </TeamBase>
</template>
