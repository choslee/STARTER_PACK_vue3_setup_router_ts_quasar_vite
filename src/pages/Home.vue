<script setup lang="ts">
import {ref} from 'vue'
let isActive = ref(false);

function activate () {
    isActive.value = true;
    setTimeout(function() {
        isActive.value = false;
    }, 500);
}

</script>
<template>
    <img alt="Vue logo" src="../assets/logo.png"/>
    <h2 
    class="animated"
    v-bind:class="{'bounce': isActive}"
    >Home</h2>
        <q-btn
            color="secondary"
            icon="vibration"
            label="Bounce heading title"
            @click="activate"
        />
</template>


<style scoped>
.active {
  background: yellowgreen;
  color: aliceblue;
  padding: 20xp;
  

}


</style>
