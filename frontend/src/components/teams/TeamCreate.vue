<script setup lang="ts">
import { ref } from 'vue';
import { useRequest } from '../../hooks/useRequest';
import { TeamCreate } from '../../Models/Team';
import { useUserStore } from '../../store';
import TeamBase from './TeamBase.vue';

const userStore = useUserStore();
const bannerUrl = ref();
const teamName = ref();

const createTeam = async () => {
  if (!teamName.value) return;

  const resp = await useRequest<TeamCreate>({
    url: "/team/create",
    method: "POST",
    data: {
      title: teamName.value,
      avatar_url: bannerUrl.value,
    }
  });

  if (!userStore.user) return;
  userStore.user.team = resp;
}
</script>

<template>
  <TeamBase>
    <template v-slot:top>
      <div class="flex-center absolute left-0 w-full h-20 bg-dark bg-opacity-80 backdrop-blur-sm">
        <input 
          placeholder="Banner URL" 
          class="input-box rounded"
          v-model="bannerUrl"
        />
      </div>
    </template>

    <template v-slot:players>
      <input 
        placeholder="Team Name" 
        class="input-box border-2 border-neutral-800 rounded"
        v-model="teamName"
      />
      <button class="input-box rounded bg-neutral-800 hover:bg-pink-p transition-colors" @click="createTeam">Create Team</button>
    </template>
  </TeamBase>
</template>
