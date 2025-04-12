<template>
    <section id="skills" class="min-h-screen py-20 px-6 bg-neutral-100 dark:bg-neutral-900 text-gray-800 dark:text-gray-200 scroll-mt-20">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-10">Minhas Skills</h2>
  
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          <SkillCard name="JavaScript" level="Avançado" icon="javascript" />
          <SkillCard name="PHP" level="Avançado" icon="php" />
          <SkillCard name="Python" level="Avançado" icon="python" />
          <SkillCard name="Django REST" level="Avançado" icon="djangorest" />
          <SkillCard name="FastAPI" level="Intermediário" icon="fastapi" />
          <SkillCard name="Flask" level="Intermediário" icon="flask" />
          <SkillCard name="Nuxt" level="Avançado" icon="nuxtjs" />
          <SkillCard name="Laravel" level="Avançado" icon="laravel" />
          <SkillCard name="MySQL" level="Avançado" icon="mysql" />
          <SkillCard name="PostgreSQL" level="Intermediário" icon="postgresql" />
          <SkillCard name="Oracle DB" level="Intermediário" icon="oracle" />
        </div>
      </div>
    </section>
</template>
  
<script setup>
import SkillCard from './SkillCard.vue'
</script>
  