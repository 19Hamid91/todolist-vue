<template>
  <div class="bg-slate-50 w-full rounded-lg mb-4">
    <div class="mb-2 px-2 py-1 bg-sky-200 rounded-t-lg flex justify-between items-center">
      <p class="my-2 font-bold">Pending</p>
      <p class="text-sky-600 text-2xl me-3">{{ pendingTodos.length }}</p>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4 px-2 mx-3">
      <Note v-for="pendingTodo in pendingTodos" :key="pendingTodo.id" :todoId="pendingTodo.id" :status="pendingTodo.status" :title="pendingTodo.title" :description="pendingTodo.description" @editTodo="openModal(pendingTodo.id)" />
    </div>
  </div>
  <div class="bg-slate-50 w-full rounded-lg mb-4">
    <div class="mb-2 px-2 py-1 bg-green-200 rounded-t-lg flex justify-between items-center">
      <p class="my-2 font-bold">Finished</p>
      <p class="text-green-600 text-2xl me-3">{{ finishedTodos.length }}</p>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4 px-2 mx-3">
      <Note v-for="finishedTodo in finishedTodos" :key="finishedTodo.id" :todoId="finishedTodo.id" :status="finishedTodo.status" :title="finishedTodo.title" :description="finishedTodo.description" @editTodo="openModal(finishedTodo.id)" />
    </div>
  </div>
  <div class="bg-slate-50 w-full rounded-lg mb-4">
    <div class="mb-2 px-2 py-1 bg-red-200 rounded-t-lg flex justify-between items-center">
      <p class="my-2 font-bold">Trash</p>
      <p class="text-red-600 text-2xl me-3">{{ trashedTodos.length }}</p>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4 px-2 mx-3">
      <Note v-for="trashedTodo in trashedTodos" :key="trashedTodo.id" :todoId="trashedTodo.id" :status="trashedTodo.status" :title="trashedTodo.title" :description="trashedTodo.description" @editTodo="openModal(trashedTodo.id)" />
    </div>
  </div>

  <Modal v-if="isModalVisible" title="Edit Todo" :isVisible="isModalVisible" @close="closeModal" @submit="updateTodo">
    <div>
      <label class="block mb-2 text-sm font-medium">Title</label>
      <input v-model="todo.title" type="text" class="w-full p-2 border rounded" placeholder="Enter title" />
    </div>
    <div class="mt-4">
      <label class="block mb-2 text-sm font-medium">Description</label>
      <textarea v-model="todo.description" class="w-full p-2 border rounded" placeholder="Enter description"></textarea>
    </div>
  </Modal>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import Note from "./Note.vue";
import Modal from "../components/Modal.vue";

const store = useStore();

const pendingTodos = computed(() => store.getters.pendingTodos || []);
const finishedTodos = computed(() => store.getters.finishedTodos || []);
const trashedTodos = computed(() => store.getters.trashedTodos || []);

const isModalVisible = ref(false);
const todo = ref({ title: "", description: "", status: "pending" });

const openModal = (id) => {
  todo.value = { ...store.getters.getTodoById(id) };
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
  todo.value = { title: "", description: "" };
};

const updateTodo = () => {
  if (todo.value.title.trim() === "" || todo.value.description.trim() === "") {
    alert("Title and Description cannot be empty");
    return;
  }

  store.dispatch("editTodo", {
    id: todo.value.id,
    title: todo.value.title,
    description: todo.value.description,
    status: todo.value.status,
  });

  closeModal();
};
</script>

<style></style>
