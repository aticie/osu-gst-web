<script setup lang="ts">
import { TeamlessUser } from '../../models/User';

defineProps<{
  player: TeamlessUser
}>();
</script>

<template>
  <div class="flex grow gap-2">
    <a :href="`https://osu.ppy.sh/users/${player.osu_id}`">
      <img :src="player.osu_avatar_url" alt="osu avatar" class="aspect-square object-cover rounded-lg h-16" loading="lazy"/>
    </a>
    <div class="flex flex-col gap-2 overflow-hidden text-sm">
      <a :href="`https://osu.ppy.sh/users/${player.osu_id}`">
        <p class="font-bold truncate">{{ player.osu_username }}</p>
      </a>
      <div class="font-inter">
        <p class="font-bold">#{{ player.bws_rank }}</p>
        <p class="text-purple-s">BWS rank</p>
      </div>
    </div>
  </div>
</template>
