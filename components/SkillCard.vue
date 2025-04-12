<template>
    <div
      data-aos="fade-up"
      class="flex flex-col items-center bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300 w-full max-w-[120px]"
    >
      <img
        :src="`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`"
        :alt="name"
        class="w-10 h-10 mb-3"
      />
      <span class="font-bold text-sm">{{ name }}</span>
      <span class="text-xs text-gray-500 dark:text-gray-400">{{ level }}</span>
    </div>
  </template>
  
  
<script setup>
defineProps({
    name: String,
    level: String,
    icon: String,
})
</script>
  