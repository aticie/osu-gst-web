<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import AppButton from "../ui/AppButton.vue";

const isLoading = ref(false);


</script>

<template>
  <AppButton 
    :isLoading="isLoading"
  >
    <p></p>
  </AppButton>
</template>
