<script setup lang="ts">
import { ref } from 'vue'

const links = [
  { label: 'Canlı Gündem', to: '/livebulletins' },
  { label: 'Hakkımızda', to: '/about' },
  { label: 'Podcast', to: '/podcasts' },
  { label: 'İletişim', to: '/contact' },
]

const mobileOpen = ref(false)

function closeMenu() {
  mobileOpen.value = false
}
</script>

<template>
  <UContainer class="py-4 flex items-center justify-between text-black shadow-sm relative">
    <NuxtLink to="/" class="font-bold tracking-tight text-4xl z-20 relative">
      <span class="text-red-600">bey<span class="text-black">news.</span></span>
    </NuxtLink>

    <!-- Desktop Nav -->
    <nav class="hidden md:flex gap-6">
      <NuxtLink
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          class="hover:text-gray-600 font-bold transition-colors inline-block relative"
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
          <div class="flex flex-col gap-4 mb-6 px-4">
            <NuxtLink
                v-for="(link, i) in links"
                :key="i"
                :to="link.to"
                class="font-semibold text-lg text-gray-800 hover:text-red-500 relative py-2 transition-colors inline-block"
                @click="closeMenu"
            >
              {{ link.label }}
              <span
                  class="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-300"
                  :class="{ 'w-[50px]': $el && $el.matches(':hover') }"
              ></span>
            </NuxtLink>
          </div>



          <div class="flex gap-3 text-center justify-center align-center">
            <UButton
                variant="outline"
                color="neutral"
                class="flex-1 border border-gray-400 hover:border-red-500 hover:text-red-600 justify-center"
                to="#"
                @click="closeMenu"
            >
              Giriş Yap
            </UButton>
            <UButton
                class="flex-1 bg-red-600 text-white hover:bg-red-700 justify-center"
                to="#"
                @click="closeMenu"
            >
              Abone Ol
            </UButton>
          </div>
        </nav>
      </div>
    </transition>
  </UContainer>
</template>


<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-15px);
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
  transform: translateY(-15px);
}

.underline {
  transition: width 0.3s ease;
}
</style>
