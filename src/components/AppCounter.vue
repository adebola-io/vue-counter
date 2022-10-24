<!-- App Counter built with Options API. -->

<script lang="ts">
import { Component } from "vue";
const component: Component = {
   name: "AppCounter",
   data() {
      return {
         value: 0,
      };
   },
   methods: {
      increment() {
         this.value++;
      },
      decrement() {
         this.value--;
      },
      incrementBy(value: number) {
         this.value += value;
      },
      decrementBy(value: number) {
         this.value -= value;
      },
      openOptions() {
         alert(9);
      },
   },
};
export default component;
</script>

<template>
   <div class="container">
      <div @click="openOptions" class="options-toggle">
         <div></div>
         <div></div>
         <div></div>
      </div>
      <output>{{ value }}</output>
      <div class="button-row">
         <button type="button" @click="decrement">-</button>
         <button type="button" @click="increment">+</button>
      </div>
   </div>
</template>

<style scoped>
.container {
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 75vw;
   aspect-ratio: 1;
   max-width: 500px;
   border-radius: 20px;
   border: 2px solid #424242;
   background: linear-gradient(35deg, #5a5bcc, #9e94c7);
   transition-duration: 500ms;
}
.container:hover {
   transform: translateY(-6%);
   box-shadow: -3px 10px 20px 0 #151515;
}
.options-toggle {
   position: absolute;
   top: 0;
   right: 0;
   margin-right: 2%;
   margin-top: 5%;
   display: grid;
   grid: auto auto auto/ auto;
   height: 33px;
   width: 20px;
   cursor: pointer;
}
.options-toggle > div {
   background-color: white;
   height: 5px;
   aspect-ratio: 1;
   border-radius: 50%;
}
output {
   font-size: 70pt;
   font-weight: bold;
   width: 80%;
   height: fit-content;
   text-align: center;
   color: #fff;
}

.button-row {
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 80%;
   height: 40%;
}
.button-row button {
   width: 25%;
   aspect-ratio: 1;
   border-radius: 50%;
   font-size: 3rem;
   border: 4px solid white;
   color: white;
   transition-duration: 400ms;
}

.button-row button:hover {
   transform: scale(1.15);
}
</style>
