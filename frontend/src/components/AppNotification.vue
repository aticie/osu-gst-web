<script setup lang="ts">
import { ref } from "vue";
import { events } from "../hooks/useNotify";

interface Notification {
  id: number,
  message: string
}

const notifications = ref<Notification[]>([]);

events.on("info", message => {
  let random = Math.random() * 200;
  notifications.value.push({
    id: random,
    message
  });

  setTimeout(() => {
    let index = notifications.value.findIndex(x => x.id === random);
    notifications.value.splice(index, 1);
  }, 4000);
})
</script>

<template>
  <TransitionGroup 
    tag="div" 
    class="absolute bottom-5 left-5 z-10 flex flex-col gap-2 max-w-md" 
    name="notification"
    appear
  >
    <div
      v-for="notif in notifications"
      :key="notif.id"
      class="bg-dark border border-neutral-900 font-inter rounded"
    >
      <p class="p-2">{{ notif.message }}</p>
    </div>
  </TransitionGroup>
</template>

<style>
.notification-enter-active, .notification-leave-active, .notification-move {
  transition-duration: 350ms;
}

.notification-leave-active {
  position: absolute;
}

.notification-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.notification-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
</style>
