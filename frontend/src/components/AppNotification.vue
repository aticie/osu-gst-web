<script setup lang="ts">
import { ref } from "vue";
import { events } from "../hooks/useNotify";

interface Notification {
  id: number,
  message: string
}

const notifications = ref<Notification[]>([]);

const handleBeforeLeave = (element: Element) => {
  const el = element as HTMLElement;
  const { marginLeft, marginTop, width, height } = window.getComputedStyle(el);

  element.setAttribute("style", `
    position: absolute;
    left: ${el.offsetLeft - parseInt(marginLeft)}px;
    top: ${el.offsetTop - parseInt(marginTop)}px;
    width: ${width};
    height: ${height};
  `);
}

events.on("info", message => {
  let random = Math.random() * 200;
  notifications.value.push({
    id: random,
    message
  });

  let currentLength = notifications.value.length;
  setTimeout(() => {
    notifications.value.splice(currentLength - 1, 1);
  }, 7000);
})
</script>

<template>
  <div class="absolute right-5 bottom-5 flex flex-col justify-end gap-2" :style="{ height: `${(notifications.length + 1) * 70}px` }">
    <TransitionGroup name="notification" @before-leave="handleBeforeLeave">
      <div
        v-for="notif in notifications"
        :key="notif.id"
        class="p-2 bg-dark w-52 rounded border border-neutral-800 font-inter"
      >
        <p>{{ notif.message }} -- {{ notif.id }}</p>
      </div>
    </TransitionGroup>
  </div>
</template>

<style>
.notification-enter-active, .notification-leave-active, .notification-move {
  transition-duration: 350ms;
}

.notification-leave-active {
  position: absolute;
}

.notification-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.notification-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
</style>
