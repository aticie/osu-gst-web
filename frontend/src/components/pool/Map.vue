<script setup lang="ts">
import Youtube from '../icons/Youtube.vue';
import { Map as MapModel } from '../../models/Pool';

defineProps<{
  map: MapModel
}>();
</script>

<template>
  <a
    :href="`https://osu.ppy.sh/b/${map.set_id}`"
    class="flex flex-col gap-8 p-2 rounded-md font-bold relative overflow-hidden group h-36"
  >
    <img 
      :src="`https://assets.ppy.sh/beatmaps/${map.set_id}/covers/cover@2x.jpg`" 
      class="object-cover absolute inset-0 -z-10"
    />
    <div class="absolute inset-0 bg-black bg-opacity-50 -z-10" />

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
          <p class="text-xs -mb-1">BPM</p>
          <p>{{ map.bpm }}</p>
        </div>
      </div>

      <div class="flex-center gap-2">
        <a v-if="map.youtube" :href="map.youtube">
          <Youtube />
        </a>
  
        <div class="map-blur py-1 px-2 bg-purple-p">
          <p>{{ map?.mods != "-" ? `${map.mods} - ${map.id}` : map.id }}</p>
        </div>
      </div>
    </div>
    <div class="text-shadow">
      <p class="text-xs">Mapset by {{ map.mapset }}</p>
      <p class="text-lg truncate">{{ map.title }}</p>
      <p class="text-xs">{{ map.artist }}</p>
    </div>
  </a>
</template>
