import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (process.client) {
    AOS.init({
      once: true, // anima só 1x por scroll
      duration: 600,
      easing: 'ease-in-out',
    })
  }
})