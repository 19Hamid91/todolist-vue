<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Card from "../components/Card.vue";

const store = useStore();

const pendingTodos = computed(() => store.getters.pendingTodos || []);
const finishedTodos = computed(() => store.getters.finishedTodos || []);

const totalPending = computed(() => pendingTodos.value.length);
const totalFinished = computed(() => finishedTodos.value.length);
const progress = computed(() => {
  const total = totalPending.value + totalFinished.value;

  if (total === 0) {
    return 0;
  }

  return Math.round((totalFinished.value / total) * 100);
});
</script>
<template>
  <div class="w-full max-w-5xl gap-8 mx-auto sm:flex sm:flex-row">
    <Card class="mb-3" :color="'bg-green-400'" :cardValue="totalFinished" :detail="'Total Finished'" />
    <Card class="mb-3" :color="'bg-orange-400'" :cardValue="totalPending" :detail="'Total Pending'" />
    <Card class="mb-3" :color="'bg-sky-400'" :cardValue="progress + ' %'" :detail="'Progress'" />
  </div>
</template>
