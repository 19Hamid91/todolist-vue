<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import CardNotes from "../components/CardNotes.vue";
import Modal from "../components/Modal.vue";

const isModalVisible = ref(false);
const newTodo = ref({ title: "", description: "", status: "pending" });
const store = useStore();

const openModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
  newTodo.value = { title: "", description: "", status: "pending" };
};

const createTodo = () => {
  if (newTodo.value.title.trim() === "" || newTodo.value.description.trim() === "") {
    alert("Title and Description cannot be empty");
    return;
  }

  store.dispatch("addTodo", {
    id: Date.now(),
    title: newTodo.value.title,
    description: newTodo.value.description,
    status: newTodo.value.status,
  });

  closeModal();
};
</script>
<template>
  <Modal />
  <div class="w-full max-w-7xl mx-auto">
    <div class="mb-3 flex flex-row-reverse">
      <button @click="openModal" class="bg-sky-400 hover:bg-sky-500 flex items-center px-4 py-2 gap-2 rounded transition-all">
        Add
        <span>
          <svg class="w-h h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"><path d="M6 12H18M12 6V18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g>
          </svg>
        </span>
      </button>
    </div>

    <CardNotes />

    <Modal v-if="isModalVisible" title="Create Todo" :isVisible="isModalVisible" @close="closeModal" @submit="createTodo">
      <div>
        <label class="block mb-2 text-sm font-medium">Title</label>
        <input v-model="newTodo.title" type="text" class="w-full p-2 border rounded" placeholder="Enter title" />
      </div>
      <div class="mt-4">
        <label class="block mb-2 text-sm font-medium">Description</label>
        <textarea v-model="newTodo.description" class="w-full p-2 border rounded" placeholder="Enter description"></textarea>
      </div>
    </Modal>
  </div>
</template>
