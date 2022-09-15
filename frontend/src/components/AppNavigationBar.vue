<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const routes = router.options.routes.filter(x => x.name);
</script>

<template>
<div class="bg-black text-white p-3 h-16 flex items-center justify-between lg:justify-center">
    <router-link to="/">
      <img src="../assets/gstlive.png" alt="gstlive icon" class="h-7 mr-16" />
    </router-link>

    <img class="lg:hidden ml-auto" src="../assets/menu.svg" alt="menu button" />

    <div class="hidden lg:flex justify-center max-auto gap-8">
      <div v-for="route in routes" class="relative group">
        <router-link class="nav-item nav-route" :to="route.path">{{ route.name }}</router-link>

        <div class="absolute group-visible w-full h-5"></div>
        <div class="absolute flex flex-col top-10 -left-1/4 py-2 bg-white rounded group-opacity-transition group-visible">
          <template v-for="childRoute in route.children">
            <router-link class="nav-item nav-route-child text-center" :to="`${route.path}/${childRoute.path}`">{{ childRoute.name }}</router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
