<script setup lang="ts">
import axios from 'axios';
import { ref, computed } from "vue";
import { useUserStore } from '../../store';

import { User } from "../../Models/User";
import { Invite } from '../../Models/Invite';
import { notify } from '../../hooks/useNotify';

const userStore = useUserStore();

// overengineering
const usersPromise = axios.get<User[]>("/users");
const invitePromise = userStore.user?.team?.team_hash ? axios.get<Invite[]>("/team/invites", {
  params: {
    team_hash: userStore.user.team.team_hash
  }
}) : Promise.resolve({ data: [] as Invite[] });

const players = ref((await usersPromise).data);
const invites = ref((await invitePromise).data);

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
  <div class="flex flex-col gap-1 max-h-32 overflow-y-auto rounded" v-if="players">
    <template v-for="player in filteredPlayers">
      <div class="flex items-center gap-2 font-inter hover:bg-neutral-900">
        <img :src="player.osu_avatar_url" class="h-10 aspect-square rounded-lg" />

        <div>
          <p>{{ player.osu_username }}</p>
          <p class="text-xs text-pink-p">Bws Rank - {{ player.bws_rank }}</p>
        </div>

        <div class="ml-auto">
          <button v-if="!isPlayerInvited(player.osu_id)" class="base-button bg-neutral-800 hover:bg-pink-p"
            @click="invitePlayer(player.osu_id)">
            Send Invite
          </button>

          <button v-else class="base-button bg-red-500 hover:bg-red-800" @click="inviteCancel(player)">
            Cancel Invite
          </button>
        </div>
      </div>
    </template>
  </div>
</template>
