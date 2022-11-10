<script setup lang="ts">
import { Team } from '../../Models/Team';

const props = defineProps<{
  team: Team 
}>();

const players = props.team.players;
</script>

<template>
  <div class="flex flex-col rounded-lg overflow-hidden w-full sm:w-96 relative">
    <img :src="team.avatar_url" class="aspect-banner w-full object-cover">
    <div 
      class="absolute bottom-[5.5rem] left-2 gap-1 flex flex-col items-start font-bold text-sm font-inter"
    >
      <p class="blurred-bg">{{ team.title }}</p>
      <p class="blurred-bg">AVG. Rank #12321312</p>
    </div>
    
    <div class="grid grid-cols-2 gap-2 bg-dark p-2">
      <div 
        v-for="(player, index) in players" 
        class="flex-center flex-1 gap-2" 
        :class="{ 'flex-row-reverse': index == 1 }"
      >
        <img 
          :src="player.osu_avatar_url" 
          alt="osu avatar" 
          class="aspect-square object-cover rounded-lg h-16" 
        />
        <div class="flex flex-col gap-2 justify-between overflow-hidden text-sm">
          <p class="font-bold truncate">{{ player.osu_username }}aaaaaaaaaaaaaaaaaaaaaaaa</p>
          <div class="font-inter">
            <p class="-mb-1 font-bold">#{{ player.bws_rank }}</p>
            <p class="text-purple-s">bws rank</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
