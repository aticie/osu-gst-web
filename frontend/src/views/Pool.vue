<script setup lang="ts">
import { Map } from "../models/Pool";
import AppButton from "../components/ui/AppButton.vue";
import MapVue from "../components/pool/Map.vue";

import { stages } from "../utils";
import { ref, watch } from "vue";
import axios from "axios";

const mapPackUrls: { [key: string]: string } = {
  "Qualifiers": "https://drive.google.com/file/d/1fIaEyRJUJoyPeP-1BMPXxH_lE93NOCu2/view",
}

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
  <div class="p-2 flex flex-col gap-6 mb-2">
    <div class="selection-buttons">
      <AppButton
      v-for="[key, value] in Object.entries(stages)"
      @click="selectedStage = key"
      :class="{ '!bg-pink-p': selectedStage === key }"
      :isLoading="false"
      >
        <p>{{ key }}</p>
      </AppButton>
    </div>

    <div class="flex justify-between">
      <a v-if="mapPackUrls[selectedStage]" :href="mapPackUrls[selectedStage]">
        <AppButton :isLoading="false">
          <p>Download Mappack</p>
        </AppButton>
      </a>
  
      <a href="https://docs.google.com/spreadsheets/d/1uzmEdqztstUAcbD46kZ8qhAp4iLl1KjLVskN_7kLmh0/edit#gid=1601799396">
        <AppButton :isLoading="false">
          <p>Google Sheet</p>
        </AppButton>
      </a>
    </div>
  </div>

  <div class="grid gap-4 md:grid-cols-2 pb-6">
    <MapVue v-for="map in maps" :key="map.set_id" :map="map" />
  </div>
</template>