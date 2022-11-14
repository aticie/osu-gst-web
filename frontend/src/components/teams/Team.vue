<script setup lang="ts">
import { CalculatedTeam } from '../../Models/Custom';
import { useUserStore } from '../../store';
import { Danger } from "../icons";
import TeamBase from './TeamBase.vue';
import TeamUser from './TeamUser.vue';

const userStore = useUserStore();

defineProps<{
  team: CalculatedTeam
}>();
</script>

<template>
  <TeamBase :team="team" :cover="team.avatar_url">
    <template v-slot:top>
      <div class="w-full relative">
        <slot name="cover">
          <img 
            :src="team.avatar_url || '/artwork.jpg'" 
            class="aspect-banner object-cover rounded-lg h-32 sm:h-40 w-full"
            loading="lazy"
          />
        </slot>
      </div>

      <div class="w-full truncate">
        <Danger v-if="team.averageBwsRank < 2000" class="absolute opacity-40 w-4/5 h-4/5 pointer-events-none" />

        <p class="text-xl break-words truncate">{{ team.title }}</p>
        <p class="text-sm">Avg. BWS #{{ Math.round(team.averageBwsRank) }}</p>
      </div>

      <div 
        class="absolute inset-0 bg-dark
          hidden group-hover:flex-center"
        v-if="userStore.user?.team?.team_hash !== team.team_hash"
      >
        Average bws rank is below 2000
      </div>
    </template>

    <template v-slot:players>
      <div class="flex flex-wrap gap-2">
        <TeamUser v-for="player in team.players" :player="player" />
      </div>

      <slot name="options"></slot>
    </template>
  </TeamBase>
</template>
