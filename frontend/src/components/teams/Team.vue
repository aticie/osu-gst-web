<script setup lang="ts">
import { Team } from "../../api/getTeams";

const props = defineProps<{
  team: Team
}>();

// const players = [props.team.players[0], props.team.players[0]];
</script>

<template>
  <div class="flex gap-4 bg-dark p-4 rounded-lg">
    <img :src="team.avatar_url" alt="team avatar" class="h-28 aspect-video object-cover rounded-lg" />
    
    <div class="p-1">
      <p class="font-bold text-xl">{{ team.title }}</p>
      <div>
        
      </div>
    </div>
  </div>

  <!-- <div class="flex-center gap-4 p-2 bg-pink-s bg-opacity-20 rounded-lg">
    <img :src="team.avatar_url" alt="team avatar" class="h-28 aspect-video object-cover rounded-lg" />

    <div class="flex flex-col gap-2">
      <p class="text-xl font-bold">{{ team.title }}</p>

      <div class="flex">
        <div v-for="player in team.players" class="flex items-center gap-4">
          <img :src="player.osu_avatar_url" alt="osu avatar url" class="rounded h-20" />
          
          <div>
            <p class="text-xl font-bold">{{ player.osu_username }}</p>

            <div class="flex gap-4">
              <div>
                <p>Global Ranking</p>
                <p>#{{ player.osu_global_rank }}</p>
              </div>
              <div>
                <p>pp</p>
                <p>5555</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
