<script setup lang="ts">
import { getInvites } from '../../api';
import Close from '../icons/circle/Close.vue';
import Tick from '../icons/circle/Tick.vue';

const invites = await getInvites();

const acceptInvite = () => {

}

const declineInvite = () => {
  
}
</script>

<template>
  <div 
    v-for="invite in invites"
    class="flex-center p-2 bg-translucent gap-4"
  >
    <div class="flex gap-2">
      <p class="text-pink-p">{{ invite.inviter.osu_username }}</p>
      <p>INVITED YOU TO JOIN</p>
      <p class="text-purple-s">{{ invite.team.title }}</p>
    </div>

    <div class="flex-center gap-2">
      <button>
        <Tick class="hover:fill-green-500" />
      </button>
      <button>
        <Close class="hover:fill-red-500" />
      </button>
    </div>
  </div>
</template>
