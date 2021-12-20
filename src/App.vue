<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { RouterView } from 'vue-router';

</script>

<template>
  <div id="nav" >
    <RouterLink to="/">Home</RouterLink> | 
    <RouterLink to="/about">About</RouterLink>
  </div>

  <RouterView></RouterView>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
