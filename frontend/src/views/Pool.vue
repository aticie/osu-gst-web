<script setup lang="ts">
import { Map } from "../models/Pool";
import MapVue from "../components/pool/Map.vue";
import AppButton from "../components/ui/AppButton.vue";
import axios from "axios";

const qualifierMaps = (await axios.get<Map[]>("/mappool", {
  params: {
    mappool_type: "QF"
  }
})).data;

</script>

<template>
  <div class="flex flex-col gap-4 pb-6">
    <div>
      <h1 class="font-bold text-4xl text-center">QUALIFIERS</h1>

      <div class="flex justify-between gap-4">
        <a href="https://drive.google.com/file/d/1fIaEyRJUJoyPeP-1BMPXxH_lE93NOCu2/view">
          <AppButton :isLoading="false">
            <p>Download Mappack</p>
          </AppButton>
        </a>
        <a href="https://docs.google.com/spreadsheets/d/1uzmEdqztstUAcbD46kZ8qhAp4iLl1KjLVskN_7kLmh0">
          <AppButton :isLoading="false">
            <p>Google Sheet</p>
          </AppButton>
        </a>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <MapVue v-for="map in qualifierMaps" :map="map" />
    </div>
  </div>
</template>