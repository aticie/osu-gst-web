<script setup lang="ts">
import { ref } from 'vue';
import { User } from '../../Models/User';
import { Invite } from '../../Models/Invite';
import { getInvites } from '../../api';
import { useUserStore } from '../../store';
import { notify } from '../../hooks/useNotify';
import Tick from '../icons/circle/Tick.vue';
import Close from '../icons/circle/Close.vue';
import axios from 'axios';

const invites = ref<Invite[]>(await getInvites());
const userStore = useUserStore();

const inviteAccept = async (team_hash: string) => {
  try {
    const response = await axios.post<User>("/user/team/join", {}, {
      params: {
        team_hash
      }
    });

    if (!response.data) return;
    userStore.user = response.data;
  } catch (error) {
    if (!axios.isAxiosError(error)) return;

    notify({
      title: "Invite Accept Failed.",
      message: error.response?.data.detail
    });
  }
}

const inviteDecline = async (team_hash: string) => {
  try {
    await axios.delete<User>("/user/invite", {
      params: {
        team_hash
      }
    });

  invites.value = await getInvites();
  } catch (error) {
    if (!axios.isAxiosError(error)) return;

    notify({
      title: "Invite Decline Failed.",
      message: error.response?.data.detail
    });
  }
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

    <div class="flex gap-2">
      <button @click="() => inviteAccept(invite.team.team_hash)">
        <Tick class="hover:fill-green-500" />
      </button>
      <button @click="() => inviteDecline(invite.team.team_hash)">
        <Close class="hover:fill-red-500" />
      </button>
    </div>
  </div>
</template>
