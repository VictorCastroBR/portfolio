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
    title: 'Suporte HelpDesk',
    description: 'Atendimento técnico, instalação de sistemas, configuração de redes e suporte em ambientes Windows e Linux.',
    techs: ['MySQL', 'Windows', 'Linux'],
    year: '2021',
  },
  {
    title: 'Plataforma de Delivery',
    description: 'Sistema completo para restaurantes com painel administrativo, gerenciamento de pedidos online, carrinho, cardápio digital e integração com formas de pagamento.',
    techs: ['Vue2', 'Django REST', 'MySQL'],
    year: '2022',
  },
  {
    title: 'CRM para Empresa de Energia Fotovoltaica (Instalação e Venda)',
    description: 'Plataforma integrada para gestão de vendas, clientes, contratos, propostas e visitas técnicas. Inclui integração com API externa e painéis gerenciais personalizados.',
    techs: ['Laravel', 'MySQL', 'Vue3'],
    year: '2023',
  },
  {
    title: 'Sistema Comercial para Empresa de Venda de Equipamentos Fotovoltaicos',
    description: 'Sistema focado na gestão de produtos, orçamentos e vendas avulsas. Interface otimizada para representantes comerciais com fluxo ágil de atendimento ao cliente.',
    techs: ['Laravel', 'MySQL', 'Nuxt3'],
    year: '2025',
  },
];
</script>
