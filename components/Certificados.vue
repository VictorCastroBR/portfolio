<template>
    <section id="certificados" class="min-h-screen py-20 px-6 bg-neutral-100 dark:bg-neutral-900">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">Certificados</h2>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div
                v-for="(cert, index) in certificados"
                :key="index"
                data-aos="fade-up"
                :data-aos-delay="index * 100"
                class="cursor-pointer overflow-hidden rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105"
                @click="abrirModal(cert.img)"
            >
          
            <img
              :src="cert.img"
              :alt="cert.title"
              class="w-full h-64 object-cover"
            />
            <div class="p-3 bg-white dark:bg-neutral-800 text-center text-sm font-medium">
              {{ cert.title }}
            </div>
          </div>
        </div>

        <div v-if="imagemAberta" class="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div class="relative max-w-3xl w-full mx-4">
            <img :src="imagemAberta" alt="Certificado" class="rounded-xl shadow-lg max-h-[80vh] mx-auto" />
            <button @click="imagemAberta = null" class="absolute top-2 right-2 text-white text-2xl font-bold">&times;</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const imagemAberta = ref(null)
  
  const abrirModal = (img) => {
    imagemAberta.value = img
  }
  
  const certificados = [
    {
      title: 'Fatec Ribeirão Preto - Análise e Desenvolvimento de Sistemas',
      img: '/certificados/ads.png',
    },
    {
      title: 'Certificado Python - Alura',
      img: '/certificados/ads.png',
    },
    {
      title: 'Certificado Vue.js - Rocketseat',
      img: '/certificados/ads.png',
    },
    {
      title: 'Certificado Vue.js - Rocketseat',
      img: '/certificados/ads.png',
    },
  ]
  </script>
  