<template>
  <div class="w-full bg-white rounded-t-lg rounded-b-md">
    <p :class="[color, 'text-3xl flex justify-center items-center h-[80px] rounded-b-sm rounded-t-md']">{{ cardValue }}</p>
    <p class="text-lg px-3 py-1 text-slate-700">{{ detail }}</p>
  </div>
</template>

<script setup>
defineProps({
  color: String,
  cardValue: [String, Number],
  detail: String,
});
</script>

<style></style>
