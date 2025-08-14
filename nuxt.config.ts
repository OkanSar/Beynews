export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules:['@nuxt/ui','@nuxtjs/supabase'],
  components: true,
  runtimeConfig: {
    public: {
      supabase: {
        url: 'https://msrhsqakmvurqjjrzdya.supabase.co',
        key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcmhzcWFrbXZ1cnFqanJ6ZHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwMDE1OTMsImV4cCI6MjA3MDU3NzU5M30.wiGQM5IV8OZVntRvlaBa2btIt-Js967NDAcV14Y5xtw'
      }
    }
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/',
      exclude: ['*'],
    }
  },
  ui: {
    colorMode: {
      preference: 'light'
    }
  }
})