<script setup lang="ts">
import { ref } from "vue";
import { QBtn } from "quasar";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h5>{{ msg }}</h5>
  <transition
    appear
    enter-active-class="animated bounce"
    leave-active-class="animated fadeOut"
  >
    <q-btn color="secondary" icon="mail" label="Email" />
  </transition>
</template>

<style scoped></style>
