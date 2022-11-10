<script setup lang="ts">
import { getInvites } from '../../api';
// import Close from '../icons/circle/Close.vue';
import Tick from '../icons/circle/Tick.vue';

const invites = await getInvites();

const acceptInvite = async (team_hash: string) => {
  const response = await acceptInvite(team_hash);
}
</script>

<template>
  <div 
    v-for="invite in invites"
    class="bg-dark flex-center p-2"
  >
    <div class="flex-center grow gap-2">
      <p class="text-pink-p">{{ invite.inviter.osu_username }}</p>
      <p>INVITED YOU TO JOIN</p>
      <p class="text-purple-s">{{ invite.team.title }}</p>
    </div>

    <button @click="() => acceptInvite(invite.team.team_hash)">
      <Tick class="hover:fill-green-500" />
    </button>
  </div>
</template>
