<script setup lang="ts">
import { Map } from "../models/Custom";
import MapVue from "../components/pool/Map.vue";

const maps: Map[] = [
  {
    id: "A4",
    mods: "NM",
    artist: "??shimon",
    title: "NORO",
    difficulty: "[ENVY]",
    sr: 6.3,
    bpm: 130,
    length: "2:11",
    cs: 3.8,
    ar: 9.5,
    od: 8.6,
    mapset: "lxcors",
    mapId: 1893787
  }
]
</script>

<template>
  <div class="grid gap-4 md:grid-cols-2">
    <MapVue v-for="map in maps" :map="map" />
  </div>
</template>