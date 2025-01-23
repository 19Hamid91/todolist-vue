<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <div class="min-h-screen p-6 pt-20">
    <router-view />
  </div>
</template>

<style scoped></style>
