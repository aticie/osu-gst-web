<script setup lang="ts">
import { ref } from 'vue';
import { notify } from '../../hooks/useNotify';
import { useRequest } from '../../hooks/useRequest';
import { Invite } from '../../Models/Invite';
import { User } from '../../Models/User';
import { useUserStore } from '../../store';

const userStore = useUserStore();

const [players, invites] = await Promise.all([
  useRequest<User[]>({
    url: "/users"
  }),
  useRequest<Invite[]>({
    url: "/team/invites",
    params: {
      team_hash: userStore.user?.team?.team_hash
    }
  })
]);

const filteredPlayers = ref(players?.filter(player => {
  return (player.discord_id &&
    userStore.user?.osu_id !== player.osu_id &&
    !player.team
  )
}) || [])

const invitePlayer = async (user: User) => {
  const inviteResponse = await useRequest<Invite>({
    method: "POST",
    url: "/team/invite",
    params: {
      other_user_osu_id: user.osu_id
    }
  });

  notify({
    title: "Team Invite",
    message: `Sent invite to ${inviteResponse?.invited.osu_username}`
  });
  let index = filteredPlayers.value.findIndex(pl => pl.osu_id === user.osu_id);
  filteredPlayers.value?.splice(index, 1);
}

const isPlayerInvited = (osu_id: number) => {
  return invites?.find(invite => invite.invited.osu_id === osu_id);
}
</script>

<template>
  <Transition tag="div" name="players" appear>
    <div class="flex flex-col gap-1 max-h-32 h-screen overflow-y-auto rounded" v-if="players">
      <template v-for="player in filteredPlayers">
        <div v-if="!isPlayerInvited(player.osu_id)" class="flex items-center gap-2 font-inter hover:bg-neutral-900">
          <img :src="player.osu_avatar_url" class="h-10 aspect-square rounded-lg" />
          
          <div>
            <p>{{ player.osu_username }}</p>
            <p class="text-xs text-pink-p">Bws Rank - {{ player.bws_rank }}</p>
          </div>

          <button class="ml-auto mr-2 bg-neutral-800 hover:bg-pink-p transition-colors p-1 px-6 rounded"
            @click="() => invitePlayer(player)">
            Invite
          </button>
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
  height: 8rem;
}
</style>