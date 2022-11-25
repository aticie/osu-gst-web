<script setup lang="ts">
import axios from 'axios';
import { User } from '../models/User';
import { ref } from 'vue';
import AdminPlayerListItem from '../components/admin/AdminPlayerListItem.vue';

const users = ref((await axios.get<User[]>("/users")).data);
</script>

<template>
  <div class="flex flex-col gap-4 pb-4">
    <div class="admin-section">
      <div v-for="(player, index) in users"
        :key="player.osu_id"
        class="flex-center flex-wrap gap-8 gap-y-3
        hover:bg-neutral-700 rounded-lg transition-colors p-2">
        <p class="w-10">{{ index }}</p>
        <AdminPlayerListItem :player="player" />
      </div>
    </div>
  </div>
</template>
