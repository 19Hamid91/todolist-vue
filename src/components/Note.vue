<template>
  <div class="relative bg-yellow-100 w-full border-2 px-2 py-1 overflow-auto no-scrollbar h-[300px] hover:cursor-pointer hover:scale-105 transition-all min-h-[50px] group">
    <p class="text-lg font-bold truncate">{{ title }}</p>
    <p class="text-slate-600 text-opacity-75 text-sm">
      {{ description }}
    </p>
    <div class="absolute top-[45%] left-[35%] p-2 space-x-4 bg-white bg-opacity-70 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity flex flex-row justify-center items-center">
      <button class="hover:bg-yellow-400 rounded" @click="handleEdit">
        <svg class="w-5 h-5 fill-orange-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M15.4998 5.49994L18.3282 8.32837M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </button>
      <button v-if="status != 'finished'" class="hover:bg-green-400 rounded" @click="updateStatus('finished')">
        <svg class="w-5 h-5 fill-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle>
            <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </svg>
      </button>
      <button v-if="status != 'pending'" class="hover:bg-slate-400 rounded" @click="updateStatus('pending')">
        <svg class="w-5 h-5 fill-slate-500" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#000000">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path class="stroke-current text-black" d="M22,6H10C8.3,6,7,4.7,7,3v0h18v0C25,4.7,23.7,6,22,6z"></path>
            <path class="stroke-current text-black" d="M10,26h12c1.7,0,3,1.3,3,3v0H7v0C7,27.3,8.3,26,10,26z"></path>
            <path class="stroke-current text-black" d="M23,26v-4c0-0.6-0.3-1.2-0.8-1.6l-3.7-2.8c-1.1-0.8-1.1-2.4,0-3.2l3.7-2.8c0.5-0.4,0.8-1,0.8-1.6V6"></path>
            <path class="stroke-current text-black" d="M9,6v4c0,0.6,0.3,1.2,0.8,1.6l3.7,2.8c1.1,0.8,1.1,2.4,0,3.2l-3.7,2.8C9.3,20.8,9,21.4,9,22v4"></path>
            <polygon class="stroke-current text-black" points="11,26 16,21 21,26 "></polygon>
            <polygon class="stroke-current text-black" points="16,12 13,10 19,10 "></polygon>
          </g>
        </svg>
      </button>
      <button v-if="status != 'trashed'" class="hover:bg-red-400 rounded" @click="updateStatus('trashed')">
        <svg class="w-5 h-5 fill-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const props = defineProps({
  title: String,
  description: String,
  status: String,
  todoId: Number,
});

const store = useStore();

const emit = defineEmits(["editTodo"]);

const handleEdit = () => {
  emit("editTodo", props.todoId);
};

const updateStatus = (status) => {
  store.dispatch("updateStatus", {
    id: props.todoId,
    status: status,
  });
};
</script>

<style></style>
