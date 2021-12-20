<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';

</script>

<template>
    <img alt="Vue logo" src="../assets/logo.png" />
    <transition
        appear
        enter-active-class="animated bounce"
        leave-active-class="animated fadeOut"
    >
        <h2>About</h2>
    </transition>
    
    <HelloWorld msg="Eheeeej"/>
</template>


<style scoped>


</style>
