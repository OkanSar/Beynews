<script setup lang="ts">
import { ref } from 'vue'

const links = [
  { label: 'Canlı Gündem', to: '/livebulletins' },
  { label: 'Hakkında', to: '/about' },
  { label: 'Podcast', to: '/podcasts' },
]

const mobileOpen = ref(false)

function closeMenu() {
  mobileOpen.value = false
}
</script>

<template>
  <UContainer class="py-4 flex items-center justify-between font-serif text-black shadow-sm relative">
    <NuxtLink to="/" class="font-bold tracking-tight text-4xl z-20 relative">
      <span class="text-red-600">Bey<span class="text-black">news.</span></span>
    </NuxtLink>

    <!-- Desktop Nav -->
    <nav class="hidden md:flex gap-6">
      <NuxtLink
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          class="hover:text-gray-600 font-bold transition-colors"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>

    <div class="hidden md:flex items-center gap-3">
      <UButton
          variant="ghost"
          class="text-black border border-transparent hover:border-black bg-white hover:bg-white"
          to="#"
      >
        Giriş Yap
      </UButton>
      <UButton
          class="text-white border border-transparent hover:border-black bg-red-500 hover:bg-white hover:text-black"
          link-to="#"
      >
        Abone Ol
      </UButton>
    </div>

    <!-- Mobile Hamburger -->
    <UButton
        icon="i-heroicons-bars-3"
        variant="ghost"
        color="secondary"
        class="md:hidden z-20"
        @click="mobileOpen = !mobileOpen"
        aria-label="Mobil menüyü aç/kapat"
    />

    <!-- Mobile Menu -->
    <transition name="fade-slide">
      <div
          v-if="mobileOpen"
          class="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 md:hidden z-10"
      >
        <nav class="flex flex-col p-4 gap-4">
          <NuxtLink
              v-for="(link, i) in links"
              :key="i"
              :to="link.to"
              class="font-semibold text-lg hover:text-red-600"
              @click="closeMenu"
          >
            {{ link.label }}
          </NuxtLink>

          <hr class="my-2 border-gray-300" />

          <UButton
              variant="outline"
              class="w-full text-black border border-gray-400 hover:border-red-500 hover:text-red-600"
              to="#"
              @click="closeMenu"
          >
            Giriş Yap
          </UButton>
          <UButton
              class="w-full mt-2 bg-red-500 text-white hover:bg-red-600"
              to="#"
              @click="closeMenu"
          >
            Abone Ol
          </UButton>
        </nav>
      </div>
    </transition>
  </UContainer>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
