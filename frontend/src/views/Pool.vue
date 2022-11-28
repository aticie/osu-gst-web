<script setup lang="ts">
import { Map } from "../models/Custom";
import MapVue from "../components/pool/Map.vue";
import AppButton from "../components/ui/AppButton.vue";

const qualifierMaps: Map[] = [
  {
    id: "A1",
    artist: "KISHIDA KYOUDAN & THE AKEBOSHI ROCKETS",
    title: "Fall of Fall",
    difficulty: "Extra",
    sr: 6.5,
    bpm: 196,
    length: "3:12",
    cs: 4.5,
    ar: 9.4,
    od: 9,
    mapset: "Shirahane Suou",
    mapId: 1893908,
    mapsetId: 3902810,
    youtubeLink: "https://www.youtube.com/watch?v=N1-t-RcSwaA"
  },
  {
    id: "A2",
    artist: "BiSH",
    title: "Orchestra (Cut Ver.)",
    difficulty: "Regrets of My Youth",
    sr: 6.6,
    bpm: 180,
    length: "2:11",
    cs: 4,
    ar: 9.2,
    od: 9,
    mapset: "Mrgglock",
    mapId: 1893898,
    mapsetId: 3902777,
    youtubeLink: "https://www.youtube.com/watch?v=3ORdWKEoyaY"
  },
  {
    id: "A3",
    artist: "DUSTCELL",
    title: "Narazumono",
    difficulty: "Outcast",
    sr: 6.8,
    bpm: 220,
    length: "1:47",
    cs: 4.2,
    ar: 9.3,
    od: 9,
    mapset: "Kotoha",
    mapId: 1893881,
    mapsetId: 3902737,
    youtubeLink: "https://www.youtube.com/watch?v=M7QDL5O8vno"
  },
  {
    id: "A4",
    artist: "??shimon",
    title: "NORO",
    difficulty: "ENVY",
    sr: 6.3,
    bpm: 130,
    length: "2:11",
    cs: 3.8,
    ar: 9.5,
    od: 8.6,
    mapset: "lxcors",
    mapId: 1893787,
    mapsetId: 3902536,
    youtubeLink: "https://www.youtube.com/watch?v=ry3wmRxhXkc"
  },
  {
    id: "A5",
    artist: "Hagall x 152Hz",
    title: "In midst of time feat. towatari (Cut Ver.)",
    difficulty: "Exploring the Unknown",
    sr: 5.5,
    bpm: 120,
    length: "2:35",
    cs: 5.8,
    ar: 8,
    od: 8,
    mapset: "sorciere",
    mapId: 1893886,
    mapsetId: 3902759,
    youtubeLink: "https://www.youtube.com/watch?v=y4IsBEYdt7o"
  },
  {
    id: "A6",
    mods: "DT",
    artist: "TJ Davis",
    title: "Can You Feel The Sunshine?",
    difficulty: "Fast",
    sr: 7.0,
    bpm: 237,
    length: "2:57",
    cs: 4,
    ar: 10,
    od: 9.8,
    mapset: "kowari",
    mapId: 1893876,
    mapsetId: 3902731,
    youtubeLink: "https://www.youtube.com/watch?v=PsoFJkTtolU"
  },
  {
    id: "A7",
    artist: "Hataya Naofumi",
    title: "Looting the Louvre",
    difficulty: "Invasion du musee du Louvre",
    sr: 3.8,
    bpm: 320,
    length: "1:24",
    cs: 5,
    ar: 8,
    od: 6,
    mapset: "oneplusone",
    mapId: 1893902,
    mapsetId: 3902785,
    youtubeLink: "https://www.youtube.com/watch?v=VI6w78iPkIk"
  },
  {
    id: "A8",
    mods: "HR",
    artist: "UPLIFT SPICE",
    title: "Oni",
    difficulty: "Extra",
    sr: 6.7,
    bpm: 200,
    length: "2:34",
    cs: 5.7,
    ar: 10,
    od: 10,
    mapset: "Shirahane Suou",
    mapId: 1893909,
    mapsetId: 3902811,
    youtubeLink: "https://www.youtube.com/watch?v=LWvwMJ1mwls"
  },
  {
    id: "A9",
    artist: "Shinonome Natsuhi (CV: Hinami Yuri)",
    title: "Kirisute Gomen ",
    difficulty: "Meikyou Shisui",
    sr: 6.3,
    bpm: 156,
    length: "4:10",
    cs: 3.8,
    ar: 9.5,
    od: 9,
    mapset: "newton-",
    mapId: 1893812,
    mapsetId: 3902589,
    youtubeLink: "https://www.youtube.com/watch?v=7QDu4UMTH7w"
  },
]
</script>

<template>
  <div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-4">
        <h1 class="font-bold text-4xl text-center">QUALIFIERS</h1>
        <a href="https://drive.google.com/file/d/1fIaEyRJUJoyPeP-1BMPXxH_lE93NOCu2/view">
          <AppButton :isLoading="false" class="w-full">
            <p>Download Mappack</p>
          </AppButton>
        </a>
      </div>
  
      <div class="grid gap-4 md:grid-cols-2">
        <MapVue v-for="map in qualifierMaps" :map="map" />
      </div>
    </div>
  </div>
</template>