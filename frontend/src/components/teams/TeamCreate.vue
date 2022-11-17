<script setup lang="ts">
import { ref } from 'vue';
import { notify } from "../../hooks/useNotify";
import { useUserStore } from '../../store';
import { Team } from '../../Models/Team';
import TeamBase from './TeamBase.vue';
import AppButton from '../ui/AppButton.vue';
import axios from 'axios';

const userStore = useUserStore();
const teamName = ref();
const isLoading= ref(false);

const createTeam = async () => {
  if (!teamName.value) {
    notify({
      title: "Required field",
      message: "Team name is required to create a team."
    })

    return;
  }

  isLoading.value = true;
  try {
    const response = await axios.post<Team>("/team", {
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
  }
}
</script>

<template>
  <TeamBase>
    <template v-slot:players>
      <input placeholder="Team Name" class="input-box border-2 border-neutral-800 rounded flex-1" v-model="teamName" />
      <AppButton :isLoading="isLoading" @click="createTeam">
        <p>Create Team</p>
      </AppButton>
    </template>
  </TeamBase>
</template>
