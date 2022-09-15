<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const routes = router.options.routes.filter(x => x.name);
</script>

<template>
  <div class="flex justify-center items-center gap-8 bg-black text-white p-3">
    <router-link to="/">
      <img src="../assets/gstlive.png" />
    </router-link>

    <template v-for="route in routes">
      <router-link class="nav-item nav-route" v-if="!route.children" :to="route.path">{{ route.name }}</router-link>
      <div v-else class="group relative">
        <p class="nav-item nav-route">{{ route.name }}</p>
        <div class="absolute group-visible w-full h-5"></div>

        <div class="absolute top-10 group-visible flex flex-col rounded py-1 group-opacity-transition bg-white">
          <router-link v-for="childrenRoute in route.children" :key="childrenRoute.path"
            class="nav-item nav-route-child" :to="`${route.path}/${childrenRoute.path}`">
            {{ childrenRoute.name }}
          </router-link>
        </div>
      </div>
    </template>
  </div>
</template>
