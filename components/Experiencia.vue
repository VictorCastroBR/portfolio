<template>
  <section
    id="experiencia"
    class="min-h-screen py-20 px-6 bg-white dark:bg-black text-gray-800 dark:text-gray-200"
  >
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold mb-10 text-center">Linha do Tempo Profissional</h2>

      <div class="relative border-l-4 border-primary ml-4">
        <div
          v-for="(item, index) in timeline"
          :key="index"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          class="mb-10 ml-6 group relative transition-transform duration-300 hover:translate-x-1"
        >
          <span class="absolute w-5 h-5 bg-primary rounded-full -left-3 top-1 border-2 border-white dark:border-black group-hover:scale-110 transition-transform"></span>

          <div class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-xl shadow-md group-hover:shadow-lg transition duration-300">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xl">💼</span>
              <h3 class="text-lg font-semibold">{{ item.title }}</h3>
            </div>

            <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">
              {{ item.description }}
            </p>

            <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">
              <strong>Tecnologias:</strong> {{ item.techs.join(', ') }}
            </p>

            <p class="text-xs text-gray-400 italic">
              {{ item.year }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const timeline = [
  {
    title: 'Plataforma de E-commerce',
    description: 'Sistema completo com painel administrativo, carrinho e checkout.',
    techs: ['Nuxt 3', 'Laravel', 'MySQL'],
    year: '2023',
  },
  {
    title: 'Painel de Monitoramento Solar',
    description: 'Dashboard com dados de geração de energia em tempo real.',
    techs: ['Nuxt 3', 'FastAPI', 'PostgreSQL'],
    year: '2023',
  },
  {
    title: 'Sistema de Gestão Financeira',
    description: 'Controle de fluxo de caixa e relatórios financeiros.',
    techs: ['Django', 'Vue 3', 'OracleDB'],
    year: '2022',
  },
  {
    title: 'Dashboard de Vendas B2B',
    description: 'Painel de performance com filtros, metas e exportações.',
    techs: ['Vue.js', 'Laravel', 'PostgreSQL'],
    year: '2021',
  },
]
</script>
