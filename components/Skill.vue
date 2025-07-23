<template>
    <section id="skills" class="min-h-screen py-20 px-6 bg-neutral-100 dark:bg-neutral-900 text-gray-800 dark:text-gray-200 scroll-mt-20">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-10">Minhas Skills</h2>
  
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          <SkillCard name="JavaScript" level="Avançado" icon="javascript" />
          <SkillCard name="PHP" level="Avançado" icon="php" />
          <SkillCard name="Python" level="Avançado" icon="python" />
          <SkillCard name="Django REST" level="Avançado" icon="djangorest" />
          <SkillCard name="FastAPI" level="Avançado" icon="fastapi" />
          <SkillCard name="Flask" level="Avançado" icon="flask" />
          <SkillCard name="NodeJs" level="Avançado" icon="nodejs" />
          <SkillCard name="Nuxt" level="Avançado" icon="nuxtjs" />
          <SkillCard name="React" level="Avançado" icon="react" />
          <SkillCard name="Next" level="Avançado" icon="nextjs" />
          <SkillCard name="Laravel" level="Avançado" icon="laravel" />
          <SkillCard name="MySQL" level="Avançado" icon="mysql" />
          <SkillCard name="PostgreSQL" level="Avançado" icon="postgresql" />
          <SkillCard name="Oracle DB" level="Avançado" icon="oracle" />
          <SkillCard name="MongoDB" level="Avançado" icon="mongodb" />
          <SkillCard name="DynamoDB" level="Avançado" icon="dynamodb" />
        </div>
      </div>
    </section>
</template>
  
<script setup>
import SkillCard from './SkillCard.vue'
</script>
  