<script setup lang="ts">
</script>

<template>
  <div>
    <div class="absolute p-6 inset-0 -z-10 flex items-center justify-center overflow-hidden">
      <div class="z-10">
        <img src="../assets/center-logo.png" alt="gstlive center page logo" />
        <div class="mt-10 flex flex-col xl:flex-row justify-center items-center gap-6">
          <img src="../assets/center-signup.png" alt="gstlive center page logo" />
          <img src="../assets/center-discord.png" alt="gstlive center page logo" />
        </div>
      </div>

      <div class="spinning-square animate-spin-25" style="width: 500px; height: 500px; animation-delay: -15s;" />
      <div class="spinning-square animate-spin-50" style="width: 550px; height: 550px; animation-delay: -20s;" />
      <div class="spinning-square animate-spin-75" style="width: 500px; height: 500px; animation-delay: -25s;" />
      <div class="spinning-square animate-spin-100" style="width: 550px; height: 550px; animation-delay: -30s;" />
    </div>
  </div>
</template>
