<!-- App Counter built with Options API. -->

<script lang="ts">
import { Component, defineProps } from "vue";
const component: Component = {
   name: "AppCounter",
   props: {
      id: Number,
      colors: Array,
   },
   data() {
      return {
         value: 0,
         menuIsOpen: false,
      };
   },
   emits: ["delete"],
   setup(props) {},
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
      toggleOptions() {
         this.menuIsOpen = !this.menuIsOpen;
      },
      resetCounter() {
         this.value = 0;
         this.closeMenu();
      },
      deleteCounter() {
         this.$emit("delete", this.id);
         this.closeMenu();
      },
      closeMenu() {
         this.menuIsOpen = false;
      },
   },
};
export default component;
</script>

<template>
   <div
      class="container"
      :style="{
         background: `linear-gradient(35deg, #5e60cc, #9e94c7)`,
      }"
   >
      <div @click="toggleOptions" class="options-toggle">
         <div></div>
         <div></div>
         <div></div>
      </div>
      <menu class="options" v-if="menuIsOpen">
         <li @click="resetCounter">Reset</li>
         <li>Set To...</li>
         <li>Increment By...</li>
         <li>Decrement By</li>
         <li @click="deleteCounter">Delete</li>
      </menu>
      <output class="value">{{ value }}</output>
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
   transition-duration: 500ms;
}

.container:hover {
   transform: translateY(-3%);
   box-shadow: -5px 10px 2px 0 #2a005b;
}

.options-toggle {
   position: absolute;
   top: 0;
   right: 0;
   margin-right: 2%;
   margin-top: 5%;
   display: grid;
   grid: auto auto auto/ auto;
   place-items: center;
   height: 28px;
   width: 30px;
   cursor: pointer;
}

.options-toggle > div {
   background-color: white;
   height: 4px;
   aspect-ratio: 1;
   border-radius: 50%;
}

.options {
   position: absolute;
   top: 0;
   right: 0;
   margin-top: 13%;
   margin-right: 5%;
   width: 40%;
   background-color: white;
   border-radius: 0.375rem;
   border: 2px solid #4d4d4d;
   overflow: hidden;
}

.options > li {
   padding-left: 1rem;
   padding-block: 0.7rem;
   cursor: pointer;
}

.options > li:hover {
   background-color: #5a5bcc;
   color: white;
}

.value {
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
   width: 100%;
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
