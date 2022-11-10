<script setup lang="ts">
import { Team } from '../../Models/Team';

const props = defineProps<{
  team: Team 
}>();

const players = props.team.players;
</script>

<template>
  <div class="flex flex-col rounded-lg overflow-hidden max-w-[24rem]">
    <img :src="team.avatar_url" class="aspect-banner w-full" />
    <div class="grid grid-cols-2 gap-2 bg-dark p-2">
      <div v-for="(player, index) in players" class="flex flex-1 gap-2" :class="{ 'flex-row-reverse': index == 1 }">
        <img 
          :src="player.osu_avatar_url" 
          alt="osu avatar" 
          class="aspect-square object-cover rounded-lg h-16" 
        />
        <div class="flex flex-col justify-between overflow-hidden">
          <p class="font-bold text-lg truncate">{{ player.osu_username }}aaaaaaaaaaaaaaaaaaaaaaaa</p>
          <div class="font-inter">
            <p class="-mb-2">#{{ player.bws_rank }}</p>
            <p>bws rank</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="flex gap-4 bg-dark p-4 rounded-lg">
    <img :src="team.avatar_url" alt="team avatar" class="h-28 aspect-video object-cover rounded-lg" />
    
    <div class="p-1">
      <p class="">{{ team.title }}</p>
      <div>
        
      </div>
    </div>
  </div> -->
</template>
