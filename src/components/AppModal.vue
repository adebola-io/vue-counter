<script lang="ts" setup>
import { computed, ref } from "vue";
import type { Modal } from "../utils";
const props = defineProps<{
      type: Modal["type"];
      name: string | null;
      "initial-value": number;
   }>(),
   emit = defineEmits<{
      (event: "cancel"): void;
      (event: "submit", value: number, type: Modal["type"]): void;
   }>();
const computedName = computed(() =>
   props.name ? `"${props.name}"` : "Counter"
);

const num = ref(props["initial-value"]);

function onCancel() {
   emit("cancel");
}
function onSubmit() {
   emit("submit", num.value, props.type);
}
</script>

<template>
   <div class="modal-container">
      <div class="modal">
         <h1 class="modal-heading">Set New Value for {{ computedName }}</h1>
         <form @submit.prevent="onSubmit">
            <input class="modal-input" v-model="num" type="number" />
            <div class="modal-button-row">
               <button
                  @click="onCancel"
                  class="modal-cancel-button"
                  type="button"
               >
                  Cancel
               </button>
               <button class="modal-done-button" type="submit">Done</button>
            </div>
         </form>
      </div>
   </div>
</template>

<style scoped>
.modal-container {
   position: fixed;
   top: 0;
   left: 0;
   z-index: 99;
   height: 100vh;
   width: 100vw;
   background: gray;
   display: flex;
   justify-content: center;
   align-items: center;
}
.modal {
   height: 40%;
   width: 40%;
   max-width: 650px;
   max-height: 500px;
   min-width: 300px;
   min-height: 200px;
   background-color: white;
   border-radius: 2rem;
}
.modal-heading {
   margin-left: 3%;
   font-size: 1.5rem;
}
.modal-button-row {
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 100%;
}
</style>
