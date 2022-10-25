<template>
   <div class="counters" ref="container">
      <AppCounter
         v-for="counter in counters"
         @delete="deleteCounter"
         :key="counter.id"
         :id="counter.id"
      />
   </div>
   <div class="button-container">
      <button type="button" class="new-button" @click="createNewCounter">
         Add New
      </button>
      <button type="button" class="clear-all-button" @click="clearAll">
         Clear All
      </button>
   </div>

   <AppFooter />
</template>

<script setup lang="ts">
import { ref } from "vue";
import AppCounter from "./components/AppCounter.vue";
import AppFooter from "./components/AppFooter.vue";
import { newNumber } from "./utils";
interface Counter {
   id: number;
}

const counters = ref<Counter[]>([{ id: 0 }]);
const container = ref<HTMLElement | null>(null);
const generator = newNumber();

function createNewCounter() {
   counters.value.push({ id: generator.next().value ?? 0 });
   if (counters.value.length > 3) {
      container.value?.style.setProperty("margin-top", "5%");
   }
}

function deleteCounter(id: number) {
   counters.value = counters.value.filter((i) => i.id !== id);
}

function clearAll() {
   counters.value = [];
}
</script>

<style scoped>
.button-container {
   position: fixed;
   bottom: 0;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 0px;
}
.new-button,
.clear-all-button {
   margin-bottom: 200px;
   margin-inline: 10px;
   padding: 20px 30px;
   border-radius: 17px;
   text-align: center;
   border: 2px solid white;
   background-color: blueviolet;
   color: white;
   opacity: 0.5;
   transition-duration: 500ms;
}
.new-button:hover,
.clear-all-button:hover {
   transform: scale(1.1);
   opacity: 1;
}

.clear-all-button {
   background-color: red;
   color: white;
}

.counters {
   display: grid;
   grid: auto/ auto auto auto;
   place-items: center;
   gap: 10px;
   transition-duration: 500ms;
}
</style>
