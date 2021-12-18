<script setup lang="ts">
import { ref } from 'vue'
import { QBtn } from 'quasar'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h5>{{ msg }}</h5>
  <q-btn id="btn" label="Click me" color="grey"  />
</template>

<style scoped>

</style>
