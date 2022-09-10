<script setup lang="ts">

</script>

<template>
  <div class="flex justify-center items-center gap-8 bg-black text-white p-3">
    <img src="../assets/gstlive.png" />

    <div class="group">
      <p class="nav-item nav-route group-hover:rounded-b-none">INFO</p>

      <div class="absolute group-visible group-opacity-transition flex flex-col rounded-without-tl py-1 bg-white">
        <router-link to="/info/about" class="nav-item nav-route-child">About Us</router-link>
        <router-link to="/info/about" class="nav-item nav-route-child">About Us</router-link>
        <router-link to="/info/about" class="nav-item nav-route-child">About Us</router-link>
      </div>
    </div>
  </div>
</template>