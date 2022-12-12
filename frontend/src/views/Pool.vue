<script setup lang="ts">
import { Map } from "../models/Pool";
import AppButton from "../components/ui/AppButton.vue";
import MapVue from "../components/pool/Map.vue";

import { stages } from "../utils";
import { ref, watch } from "vue";
import axios from "axios";

const getPoolMaps = async () => {
  const response = await axios.get<Map[]>("/mappool", {
    params: {
      mappool_type: stages[selectedStage.value]
    }
  });

  return response.data
}

const selectedStage = ref("Quarterfinals");
const maps = ref<Map[]>(await getPoolMaps());

watch(selectedStage, async () => {
  maps.value = await getPoolMaps();
})
</script>

<template>
  <div class="selection-buttons mb-4">
    <AppButton
      v-for="[key, value] in Object.entries(stages)"
      @click="selectedStage = key"
      :class="{ '!bg-pink-p': selectedStage === key }"
      :isLoading="false"
    >
      <p>{{ key }}</p>
    </AppButton>
  </div>

  <div class="grid gap-4 md:grid-cols-2">
    <MapVue v-for="map in maps" :key="map.set_id" :map="map" />
  </div>
</template>