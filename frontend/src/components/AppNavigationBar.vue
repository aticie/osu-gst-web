<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const routes = router.options.routes.filter(route => route.path != "/");

</script>

<template>
  <nav class="text-white bg-black h-20 relative font-bold">
    <ul class="flex justify-center items-center h-full gap-16 route-links text-2xl">
      <RouterLink to="/" class="h-8 flex items-center" active-class="route-active">
        <img src="../assets/gstlive.png" alt="navigation gstlive icon" class="h-5">
      </RouterLink>

      <RouterLink
        v-for="route in routes" 
        :to="route.path"
        active-class="route-active"
      >
        {{ route.name }}
      </RouterLink>
    </ul>

    <button class="osu-login px-6">OSU! LOGIN</button>
  </nav>
</template>
