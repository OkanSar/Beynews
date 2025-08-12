<template>
  <UApp>
    <div class="bg-white min-h-screen web-app">
      <Navbar />
      <NuxtPage />
      <Footer />
    </div>
  </UApp>
</template>
<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap');

.web-app{
  font-family: 'Literata', serif;
}
</style>
