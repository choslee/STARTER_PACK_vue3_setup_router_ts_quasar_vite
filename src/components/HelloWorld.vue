<script setup lang="ts">
import { reactive, ref } from "vue";

defineProps<{ msg: string }>();

const refTest = ref("Test ref value");

</script>

<template>
  <p>Some text send as props: "{{msg}}"</p>
  <br>
  <p>Testing auto import ref {{refTest}} (see: auto-imports.d.ts)</p>
   
  </template>

<style scoped>
  tamplate {
    background-color: aquamarine;
  }
</style>
