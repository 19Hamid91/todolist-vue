<template>
  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" @click="close">
    <div class="bg-white rounded-lg p-6 w-full max-w-md shadow-lg" @click.stop>
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold">{{ title }}</h3>
        <button @click="close" class="text-gray-500 hover:text-gray-700">✕</button>
      </div>
      <div class="mb-4">
        <slot />
      </div>
      <div class="flex justify-end gap-2">
        <button @click="close" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
        <button @click="$emit('submit')" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  isVisible: Boolean,
});

const emit = defineEmits(["close", "submit"]);

const close = () => {
  emit("close");
};
</script>

<style></style>
