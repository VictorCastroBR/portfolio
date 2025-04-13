<template>
  <footer class="w-full py-6 border-t dark:border-gray-700 bg-white dark:bg-gray-900 relative">
    <div class="max-w-4xl mx-auto text-center px-4 flex flex-col gap-2 items-center">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <span class="font-semibold text-primary">Victor de Castro</span> —
        {{ new Date().getFullYear() }}
      </p>

      <div class="flex gap-4 mt-1">
        <a
          href="https://github.com/VictorCastroBR"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-primary transition"
          aria-label="GitHub"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.34-1.76c-1.1-.75.08-.74.08-.74a2.52 2.52 0 011.84 1.24 2.56 2.56 0 003.5 1 2.56 2.56 0 01.76-1.6c-2.67-.3-5.47-1.34-5.47-5.95A4.64 4.64 0 015.34 6.3a4.31 4.31 0 01.12-3.18s1-.32 3.3 1.24a11.42 11.42 0 016 0C16.22 3.4 17.2 3.7 17.2 3.7a4.31 4.31 0 01.12 3.18 4.64 4.64 0 011.23 3.22c0 4.62-2.81 5.64-5.49 5.94a2.86 2.86 0 01.82 2.21v3.27c0 .32.22.69.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"
            />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/victor-castro-930b7b1a4/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-primary transition"
          aria-label="LinkedIn"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20.45 20.45h-3.55v-5.25c0-1.25-.02-2.85-1.73-2.85-1.73 0-2 1.35-2 2.75v5.35H9.6V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.26 2.36 4.26 5.42v6.32zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.13 20.45H3.54V9h3.59v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
            />
          </svg>
        </a>

        <a
          href="victorde.castro@outlook.com"
          class="text-gray-500 hover:text-primary transition"
          aria-label="Email"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.4 2L12 11.25 5.4 6h13.2zM4 18V8l8 6 8-6v10H4z"
            />
          </svg>
        </a>
      </div>
    </div>

    <transition name="fade">
      <button
        v-show="showButton"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg 
               hover:bg-primary/90 cursor-pointer transition transform hover:scale-110 active:scale-95"
        aria-label="Voltar ao topo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </transition>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
