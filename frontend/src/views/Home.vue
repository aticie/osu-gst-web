<script setup lang="ts">
import { getRandomArbitrary } from "../utils";
</script>

<template>
  <div class="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
    <div class="z-10 p-16 flex flex-col items-center">
      <img src="../assets/svgs/gstlive-with-text.svg" alt="gstlive center page logo" />

    <div class="mt-10 px-10 flex flex-col xl:flex-row gap-6">
        <img src="../assets/svgs/signup.svg" alt="gstlive center page logo" />
        <img src="../assets/svgs/discord.svg" alt="gstlive center discord logo" />
      </div>
    </div>

    <div 
      v-for="_ in 4"
      class="spinning-square aspect-square animate-spin"
      :style="{
        animationDuration: `${getRandomArbitrary(30, 50)}s`
      }"
    />
  </div>
</template>
