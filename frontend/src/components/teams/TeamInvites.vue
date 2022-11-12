<script setup lang="ts">
import { User } from '../../Models/User';
import { getInvites } from '../../api';
import { useUserStore } from '../../store';
import { notify } from '../../hooks/useNotify';
import Tick from '../icons/circle/Tick.vue';
import axios from 'axios';
import Close from '../icons/circle/Close.vue';

const invites = await getInvites();
const userStore = useUserStore();

const inviteHandler = async (team_hash: string) => {
  try {
    const response = await axios.post<User>("/team/join", {}, {
      params: {
        team_hash
      }
    });

    if (!response.data) return;
    userStore.user = response.data;
  } catch (error) {
    if (!axios.isAxiosError(error)) return;

    notify({
      title: "Invite",
      message: error.response?.data.detail
    });
  }
}

const deleteInvite = async (team_hash: string) => {

}
</script>

<template>
  <div 
    v-for="invite in invites"
    class="bg-dark flex-center p-2"
  >
    <div class="flex-center grow flex-wrap gap-x-2">
      <p class="text-pink-p">{{ invite.inviter.osu_username }}</p>
      <p>INVITED YOU TO JOIN</p>
      <p class="text-purple-s">{{ invite.team.title }}</p>
    </div>

    <button @click="() => inviteHandler(invite.team.team_hash)">
      <Tick class="hover:fill-green-500" />
    </button>
    <button @click="() => deleteInvite(invite.team.team_hash)">
      <Close class="hover:bg-red-500" />
    </button>
  </div>
</template>
