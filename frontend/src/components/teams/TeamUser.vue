<script setup lang="ts">
import { TeamlessUser } from '../../Models/User';

defineProps<{
  player: TeamlessUser
}>();
</script>

<template>
  <div class="flex grow gap-2">
    <img :src="player.osu_avatar_url" alt="osu avatar" class="aspect-square object-cover rounded-lg h-16"/>
    <div class="flex flex-col gap-2 overflow-hidden text-sm">
      <p class="font-bold truncate">{{ player.osu_username }}</p>
      <div class="font-inter">
        <p class="font-bold">#{{ player.bws_rank }}</p>
        <p class="text-purple-s">BWS rank</p>
      </div>
    </div>
  </div>
</template>
