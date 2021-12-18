<script setup lang="ts">
import { reactive, ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
const reactiveVar = reactive({
  name: "Pera"
});

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
  <hr>
  <p>Auto import Vue part ref {{count}} (see: auto-imports.d.ts)</p>
 
  <br>
  <p>Auto import Vue part ref  {{reactiveVar.name}} </p>
  
  </template>

<style scoped></style>
