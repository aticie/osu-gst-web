<script setup lang="ts">
</script>

<template>
  <div>
    <div class="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
      <div class="z-10 p-16">
        <img src="../assets/svgs/gstlive-with-text.svg" alt="gstlive center page logo" />

        <div class="mt-10 px-10 flex flex-col xl:flex-row justify-center items-center gap-6">
          <img src="../assets/svgs/signup.svg" alt="gstlive center page logo" />
          <img src="../assets/svgs/discord.svg" alt="gstlive center page logo" />
        </div>
      </div>

      <div 
        v-for="num in 4"
        class="spinning-square w-full aspect-square max-w-2xl"
        :class="`animate-spin-${25 * num}`"
        :style="{
          animationDelay: `-${15 + (num * 5)}s`
        }"
      />
    </div>
  </div>
</template>
