<script lang="ts" setup>
import { ref } from "vue";
import type { Modal } from "../utils";
const props = defineProps<{
      type: Modal["type"];
      name: string | null;
      initValue: number;
   }>(),
   emit = defineEmits<{
      (event: "cancel"): void;
      (event: "submit", value: number, type: Modal["type"]): void;
   }>();

const computedName = props.name ? `"${props.name}"` : "Counter";

const headings: { [key in Modal["type"]]: string } = {
   "set-to": `Set new value for ${computedName}`,
   "increment-by": `Increase ${computedName} by value`,
   "decrement-by": `Decrease ${computedName} by value`,
};

const num = ref(props.type === "set-to" ? props.initValue : 0);

function onCancel() {
   emit("cancel");
}
function onSubmit() {
   emit("submit", num.value, props.type);
}
</script>

<template>
   <div class="modal-container">
      <form class="modal" @submit.prevent="onSubmit">
         <h1 class="modal-heading">{{ headings[type] }}</h1>
         <input
            title="Enter Value"
            class="modal-input"
            v-model="num"
            type="number"
         />
         <div class="modal-button-row">
            <button @click="onCancel" class="modal-cancel-button" type="button">
               Cancel
            </button>
            <button class="modal-done-button" type="submit">Done</button>
         </div>
      </form>
   </div>
</template>

<style scoped>
.modal-container {
   position: fixed;
   top: 0;
   left: 0;
   z-index: 8;
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
}
.modal-container::before {
   position: absolute;
   display: block;
   content: "";
   top: 0;
   width: 100%;
   height: 100%;
   background-color: black;
   opacity: 0.4;
}
.modal {
   z-index: 1;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: 40%;
   width: 40%;
   max-width: 650px;
   max-height: 500px;
   min-width: 300px;
   min-height: 200px;
   padding: 2%;
   background-color: white;
   border-radius: 2rem;
   animation: modal 400ms;
}

.modal-heading {
   font-size: 1.5rem;
   margin-bottom: 7%;
   text-align: center;
}
.modal-input {
   height: 50px;
   width: 80%;
   max-width: 400px;
   border-radius: 0.7rem;
   border: 2px solid #756dc3;
   padding-left: 2%;
   font-size: 16pt;
}
.modal-button-row {
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 70%;
   margin-top: 7%;
}
.modal-button-row button {
   padding: 15px 30px;
   border-radius: 1rem;
   transition-duration: 400ms;
   margin-right: 4%;
}
.modal-cancel-button {
   color: #ff2a2a;
   border: 2px solid #ff2a2a;
}
.modal-cancel-button:hover {
   color: white;
   background-color: #ff2a2a;
}
.modal-done-button {
   background-color: #756dc3;
   color: white;
   border: 2px solid #756dc3;
}
</style>
