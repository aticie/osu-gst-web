<script setup lang="ts">
import { ref } from 'vue';
import { useRequest } from '../../hooks/useRequest';
import { useNotify } from "../../hooks/useNotify";
import { Team } from '../../Models/Team';
import { useUserStore } from '../../store';
import TeamBase from './TeamBase.vue';

const userStore = useUserStore();
const bannerUrl = ref();
const teamName = ref();
const disabled = ref(false);

const createTeam = async () => {
  if (!teamName.value) {
    useNotify("Team name is required to create a team!")

    return;
  }

  disabled.value = true;
  const resp = await useRequest<Team>({
    url: "/team/create",
    method: "POST",
    data: {
      title: "hey",
      avatar_url: bannerUrl.value,
    }
  });

  if (!userStore.user) return;
  userStore.user.team = resp;

  disabled.value = false;
}
</script>

<template>
  <TeamBase>
    <template v-slot:top>
      <div class="flex-center absolute left-0 w-full h-44 bg-dark bg-opacity-70 backdrop-blur-sm">
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
        class="input-box border-2 border-neutral-800 rounded flex-1"
        v-model="teamName"
      />
      <button 
        class="input-box rounded bg-neutral-800 hover:bg-pink-p transition-colors
          disabled:opacity-50 disabled:pointer-events-none
        "
        @click="createTeam" 
        :disabled="disabled"
      >
        Create Team
      </button>
    </template>
  </TeamBase>
</template>
