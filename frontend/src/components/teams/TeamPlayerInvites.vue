<script setup lang="ts">
import axios from 'axios';
import { ref, computed } from "vue";
import { useUserStore } from '../../store';

import { User } from "../../Models/User";
import { Invite } from '../../Models/Invite';
import { notify } from '../../hooks/useNotify';
import AppButton from '../ui/AppButton.vue';

const userStore = useUserStore();

// overengineering
const usersPromise = axios.get<User[]>("/users");
const invitePromise = userStore.user?.team?.team_hash ? axios.get<Invite[]>("/team/invites", {
  params: {
    team_hash: userStore.user.team.team_hash
  }
}) : Promise.resolve({ data: [] as Invite[] });

const playersResponse = await usersPromise;
const invitesResponse = await invitePromise;

const players = ref(playersResponse.data);
const invites = ref(invitesResponse.data);
const isLoading = ref(false);

const filteredPlayers = computed(() => {
  return players.value.filter(player => {
    return player.discord_id &&
      userStore.user?.osu_id !== player.osu_id &&
      !player.team &&
      !player.is_admin
  })
});

const isPlayerInvited = (osuId: number) => {
  return invites.value.find(player => {
    return player.invited.osu_id === osuId
  })
}

const invitePlayer = async (osuId: number) => {
  isLoading.value = true;
  try {
    const response = await axios.post<Invite>("/team/invite", {}, {
      params: {
        other_user_osu_id: osuId
      }
    });

    invites.value.push(response.data);
    notify({
      title: "Team Invite",
      message: `Sent invite to ${response.data.invited.osu_username}`
    });
  } catch (error) {
    if (!axios.isAxiosError(error)) return;

    notify({
      title: "User Invite",
      message: error.response?.data.detail
    });
  } finally {
    isLoading.value = false;
  }
}

const inviteCancel = async (user: User) => {
  try {
    const response = await axios.delete<Invite[]>("/team/invite", {
      params: {
        other_user_osu_id: user.osu_id
      }
    });

    notify({
      title: "Team Invite",
      message: `Canceled invite to ${user.osu_username}`
    });

    invites.value = response.data;
  } catch (error) {
    if (!axios.isAxiosError(error)) return;

    notify({
      title: "Invitation Cancel Failed",
      message: error.response?.data.detail
    });
  }
}
</script>

<template>
  <div class="flex flex-col gap-1 max-h-48 overflow-y-auto rounded">
    <template v-for="player in filteredPlayers" :key="player.osu_id">
      <div class="flex items-center gap-2 font-inter hover:bg-neutral-900">
        <img :src="player.osu_avatar_url" class="h-10 aspect-square rounded-lg" />

        <div>
          <p>{{ player.osu_username }}</p>
          <p class="text-xs text-pink-p">Bws Rank - {{ player.bws_rank }}</p>
        </div>

        <div class="ml-auto">
          <AppButton 
            :isLoading="false"
            :disabled="isLoading"
            v-if="!isPlayerInvited(player.osu_id)"
            @click="invitePlayer(player.osu_id)"
          >
            <p>Send Invite</p>
          </AppButton>

          <AppButton 
            v-else 
            :isLoading="false" 
            :disabled="isLoading"
            @click="inviteCancel(player)"
          >
            <p>Cancel Invite</p>
          </AppButton>
        </div>
      </div>
    </template>
  </div>
</template>
