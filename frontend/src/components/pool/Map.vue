<script setup lang="ts">
import Youtube from '../icons/Youtube.vue';

export interface Map {
  id: string,
  mapId: number,
  mapsetId: number,
  mods?: string,
  artist: string,
  title: string,
  difficulty: string,
  sr: number,
  bpm: number,
  length: string,
  cs: number,
  ar: number,
  od: number,
  mapset: string,
  youtubeLink: string
}

defineProps<{
  map: Map
}>();
</script>

<template>
  <a
    :href="`https://osu.ppy.sh/b/${map.mapsetId}`"
    class="
      flex flex-col gap-8 p-2 rounded-md font-bold
      filter grayscale bg-center bg-normal
      hover:grayscale-0 hover:bg-zoom transition-all
    "
    :style="{backgroundImage: `url(https://assets.ppy.sh/beatmaps/${map.mapId}/covers/cover@2x.jpg)`}"
  >
    <div class="flex justify-between items-start">
      <div class="flex gap-4 bg-dark map-blur px-4 py-2">
        <div>
          <p class="text-xs -mb-1">CS</p>
          <p>{{ map.cs }}</p>
        </div>
        <div>
          <p class="text-xs -mb-1">OD</p>
          <p>{{ map.od }}</p>
        </div>
        <div>
          <p class="text-xs -mb-1">AR</p>
          <p>{{ map.ar }}</p>
        </div>
        <div>
          <p class="text-xs -mb-1">LEN</p>
          <p>{{ map.length }}</p>
        </div>
        <div>
          <p class="text-xs -mb-1">BPM</p>
          <p>{{ map.bpm }}</p>
        </div>
      </div>


      <div class="flex-center gap-2">
        <a :href="map.youtubeLink">
          <Youtube />
        </a>
  
        <div class="map-blur py-2 px-4 bg-purple-p">
          <p>{{ map?.mods ? `${map.mods} - ${map.id}` : map.id }}</p>
        </div>
      </div>
    </div>
    <div class="text-shadow">
      <p class="text-xs">Mapset by {{ map.mapset }}</p>
      <p class="text-lg">{{ map.title }}</p>
      <p class="text-xs">{{ map.artist }}</p>
    </div>
  </a>
</template>
