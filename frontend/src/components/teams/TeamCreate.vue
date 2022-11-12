<script setup lang="ts">
import { ref } from 'vue';
import { notify } from "../../hooks/useNotify";
import { Team } from '../../Models/Team';
import { useUserStore } from '../../store';
import TeamBase from './TeamBase.vue';
import axios from 'axios';

const userStore = useUserStore();
const teamName = ref();
const isDisabled = ref(false);

const createTeam = async () => {
  if (!teamName.value) {
    notify({
      title: "Required field",
      message: "Team name is required to create a team."
    })

    return;
  }

  isDisabled.value = true;
  try {
    const response = await axios.post<Team>("/team/create", {
      title: teamName.value
    });

    if (!userStore.user) return;
    userStore.user.team = response.data;
  } catch (error) {
    if (!axios.isAxiosError(error)) return;

    notify({
      title: "Team Creating",
      message:
        error.response?.data.detail[0].msg || error.response?.data.detail
    });
  } finally {
    isDisabled.value = false;
  }
}
</script>

<template>
  <TeamBase>
    <template v-slot:players>
      <input placeholder="Team Name" class="input-box border-2 border-neutral-800 rounded flex-1" v-model="teamName" />
      <button class="input-box rounded bg-neutral-800 hover:bg-pink-p transition-colors
          disabled:opacity-50 disabled:pointer-events-none
        " @click="createTeam" :disabled="isDisabled">
        Create Team
      </button>
    </template>
  </TeamBase>
</template>
