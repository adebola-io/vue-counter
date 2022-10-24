<template>
   <div class="counters" ref="container">
      <AppCounter v-for="counter in counterCount" :key="counter" />
   </div>
   <div class="button-container">
      <button type="button" class="new-button" @click="createNewCounter">
         Add New
      </button>
   </div>

   <AppFooter />
</template>

<script setup lang="ts">
import { ref } from "vue";
import AppCounter from "./components/AppCounter.vue";
import AppFooter from "./components/AppFooter.vue";

const counterCount = ref(1);
const container = ref<HTMLElement | null>(null);

function createNewCounter() {
   counterCount.value++;
   if (counterCount.value > 2) {
      container.value?.style.setProperty("margin-top", "10%");
   }
}
</script>

<style>
.button-container {
   position: fixed;
   bottom: 0;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
}
.new-button {
   margin-bottom: 3%;
   padding: 20px 30px;
   border-radius: 17px;
   text-align: center;
   border: 2px solid white;
   background-color: blueviolet;
   color: white;
   opacity: 0.7;
   transition-duration: 500ms;
}
.new-button:hover {
   transform: scale(1.1);
   opacity: 1;
}

.counters {
   display: grid;
   grid: auto/ auto auto auto;
   place-items: center;
   gap: 10px;
}
</style>
