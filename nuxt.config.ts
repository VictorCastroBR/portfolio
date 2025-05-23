import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false }, 
  css: ['~/assets/css/main.css'],
  ssr: true,
  vite: {
    plugins: [
      tailwindcss(),
    ],
    build: {
      sourcemap: false
    }
  }
})
