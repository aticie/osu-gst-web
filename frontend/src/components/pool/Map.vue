<script setup lang="ts">
export interface Map {
  id: string,
  mapId: number,
  mods: string,
  artist: string,
  title: string,
  difficulty: string,
  sr: number,
  bpm: number,
  length: string,
  cs: number,
  ar: number,
  od: number,
  mapset: string
}

defineProps<{
  map: Map
}>();
</script>

<template>
  <div 
    class="flex flex-col gap-8 p-3 rounded-md bg-cover font-bold"
    :style="{backgroundImage: `url(https://assets.ppy.sh/beatmaps/${map.mapId}/covers/cover@2x.jpg)`}"
  >
    <div class="flex justify-between items-center">
      <div class="flex gap-4 map-blur p-2">
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

      <div class="map-blur p-2">
        <p>{{ map.mods }} - {{ map.id }}</p>
      </div>
    </div>
    <div class="shadow-lg">
      <p class="text-xs">Mapset by {{ map.mapset }}</p>
      <p class="text-lg">{{ map.title }}</p>
      <p class="text-xs">{{ map.artist }}</p>
    </div>
  </div>
</template>
