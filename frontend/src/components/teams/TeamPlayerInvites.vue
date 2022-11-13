<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { notify } from '../../hooks/useNotify';
import { Invite } from '../../Models/Invite';
import { User } from '../../Models/User';
import { useUserStore } from '../../store';

const userStore = useUserStore();
const userInvited = ref(0);

var [players, invites] = await Promise.all([
  axios.get<User[]>("/users"),
  axios.get<Invite[]>("/team/invites", {
    params: {
      team_hash: userStore.user?.team?.team_hash
    }
  })
]);


const filteredPlayers = ref(players.data.filter(player => {
  return (player.discord_id &&
    userStore.user?.osu_id !== player.osu_id &&
    !player.team
  )
}) || [])

const invitePlayer = async (user: User) => {
  try {
    const response = await axios.post("/team/invite", {}, {
      params: {
        other_user_osu_id: user.osu_id
      }
    });

    notify({
      title: "Team Invite",
      message: `Sent invite to ${response.data.invited.osu_username}`
    });
    invites = await axios.get<Invite[]>("/team/invites", {
      params: {
        team_hash: userStore.user?.team?.team_hash
      }
    })
    userInvited.value += 1;

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
    const response = await axios.post("/team/invite/cancel", {}, {
      params: {
        other_user_osu_id: user.osu_id
      }
    });

    notify({
      title: "Team Invite",
      message: `Canceled invite to ${user.osu_username}`
    });
    invites = await axios.get<Invite[]>("/team/invites", {
      params: {
        team_hash: userStore.user?.team?.team_hash
      }
    })
    userInvited.value += 1;
    } catch (error) {
      if (!axios.isAxiosError(error)) return;

      notify({
        title: "Invitation Cancel Failed",
        message: error.response?.data.detail
      });
  }
}

const isPlayerInvited = (osu_id: number) => {
  return invites.data.find(invite => invite.invited.osu_id === osu_id);
}
</script>

<template>
  <Transition tag="div" name="players" appear>
    <div class="flex flex-col gap-1 max-h-32 overflow-y-auto rounded" v-if="players">
      <template v-for="player in filteredPlayers" :key="userInvited.value">
        <div class="flex items-center gap-2 font-inter hover:bg-neutral-900">
          <img :src="player.osu_avatar_url" class="h-10 aspect-square rounded-lg" />

          <div>
            <p>{{ player.osu_username }}</p>
            <p class="text-xs text-pink-p">Bws Rank - {{ player.bws_rank }}</p>
          </div>


          <div class="ml-auto pl-8">
            <button v-if="!isPlayerInvited(player.osu_id)"
              class="ml-auto bg-neutral-800 hover:bg-pink-p transition-colors p-1 w-24 rounded"
              @click="() => invitePlayer(player)">
              Invite
            </button>
            <button name="cancelButton" v-if="isPlayerInvited(player.osu_id)"
              class="ml-auto bg-red-600 hover:bg-red-500 transition-colors p-1 w-24 rounded"
              @click="() => inviteCancel(player)">
              Cancel
            </button>
          </div>
        </div>
      </template>
    </div>
  </Transition>
</template>

<style>
.players-enter-active,
.players-leave-active {
  transition-duration: 350ms;
}

.players-enter-from,
.players.leave-to {
  height: 0px;
}

.players-enter-to {
  height: 4rem;
}
</style>
