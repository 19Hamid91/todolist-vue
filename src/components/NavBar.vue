<template>
  <nav class="bg-slate-50 flex items-center absolute w-full">
    <div class="m-1 w-full flex gap-12 justify-between p-1">
      <p class="text-xl text-sky-600 ms-2 flex justify-center items-center font-serif font-bold">To Do Vue</p>
      <ul class="flex gap-4 items-center">
        <router-link to="/" class="border-2 hover:border-sky-300 border-stone-400 text-black w-28 flex justify-center items-center rounded px-3 py-2 hover:bg-sky-300 hover:text-black transition-all">Dashboard</router-link>
        <router-link to="/list" class="border-2 hover:border-sky-300 border-stone-400 text-black w-28 flex justify-center items-center rounded px-3 py-2 hover:bg-sky-300 hover:text-black transition-all">To Do List</router-link>
      </ul>
    </div>
  </nav>
</template>

<script setup></script>

<style></style>
