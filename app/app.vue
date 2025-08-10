<template>
  <UApp>
    <div class="bg-white min-h-screen">
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
