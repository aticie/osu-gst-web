<script setup lang="ts">
defineProps<{
  users: {
    id: number,
    username: string
  }[]
}>();
</script>

<template>
  <ul class="flex flex-wrap justify-start items-start"> 
    <template v-for="user in users">
      <li class="flex basis-1/4">
        <a 
          :href="`https://osu.ppy.sh/users/${user.id}`"
          class="flex grow gap-2 items-center hover:bg-neutral-800 p-2 rounded-lg"
        >
          <img :src="`https://a.ppy.sh/${user.id}`" class="h-12 rounded-lg" />
          <p>{{ user.username }}</p>
        </a>
      </li>
    </template>
  </ul>
</template>
