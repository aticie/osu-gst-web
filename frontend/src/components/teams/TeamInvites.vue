<script setup lang="ts">
import { User } from '../../Models/User';
import { getInvites } from '../../api';
import { useRequest } from '../../hooks/useRequest';
import { useUserStore } from '../../store';
import Tick from '../icons/circle/Tick.vue';

const invites = await getInvites();
const userStore = useUserStore();

const inviteHandler = async (team_hash: string) => {
  const user = await useRequest<User>({
    method: "POST",
    url: "/team/join",
    params: {
      team_hash
    }
  });

  if (!user) return;
  userStore.user = user;
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

    <button @click="() => inviteHandler(invite.team.team_hash)">
      <Tick class="hover:fill-green-500" />
    </button>
  </div>
</template>
