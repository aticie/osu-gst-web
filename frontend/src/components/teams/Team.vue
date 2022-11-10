<script setup lang="ts">
import { Team } from "../../api/getTeams";

defineProps<{
  team: Team
}>();
</script>

<template>
  <div class="flex gap-4 bg-dark p-4 rounded-lg">
    <img :src="team.avatar_url" alt="team avatar" class="h-28 aspect-video object-cover rounded-lg" />
    
    <div class="p-1">
      <p class="">{{ team.title }}</p>
      <div>
        
      </div>
    </div>
  </div>
</template>
