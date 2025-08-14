<script setup lang="ts">
import { ref, watch } from 'vue'

const client = useSupabaseClient()
const user = useSupabaseUser()
const role = ref('')
const dropdownOpen = ref(false)
const mobileOpen = ref(false)

const links = [
  { label: 'Canlı Gündem', to: '/livebulletins' },
  { label: 'Hakkımızda', to: '/about' },
  { label: 'Podcast', to: '/podcasts' },
  { label: 'İletişim', to: '/contact' },
]

function closeMenu() {
  mobileOpen.value = false
}
const email = ref('')

const subscribe = () => {
  if (!email.value) return
  // Burada API çağrısı veya veri kaydı yapılır
  console.log('Abone oldu:', email.value)
  email.value = ''
}
async function logout() {
  const { error } = await client.auth.signOut()
  if (error) console.error('Çıkış yaparken hata:', error.message)
  else window.location.href = '/'
}

onMounted(() => {
  if (user.value?.id) {
    getUserRole(user.value.id)
  }
})

watch(() => user.value?.id, (newId) => {
  if (newId) {
    getUserRole(newId)
  }
})

async function getUserRole(id: string) {
  const data = await $fetch(`/api/user/${id}`)
  role.value = data.role
}

</script>

<template>
  <UContainer class="py-4 flex items-center justify-between text-black shadow-sm relative">
    <NuxtLink to="/" class="font-bold tracking-tight text-4xl z-20 relative">
      <span class="text-red-600">bey<span class="text-black">news.</span></span>
    </NuxtLink>

    <div class="hidden md:flex md:flex-wrap md:items-center w-full justify-between">
      <nav class="flex flex-wrap gap-6 justify-center flex-1">
        <NuxtLink
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            class="hover:text-gray-600 font-bold transition-colors inline-block relative"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3 flex-shrink-0">
        <template v-if="user">
          <div class="relative">
            <button
                @click="dropdownOpen = !dropdownOpen"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
              {{ user.email }}
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            <div
                v-if="dropdownOpen"
                @click.outside="dropdownOpen = false"
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
            >
              <div class="py-1">
                <NuxtLink
                    v-if="role==='admin'"
                    to="/admin"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Admin Panel
                </NuxtLink>

                <button
                    @click="logout"
                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Çıkış Yap
                </button>
              </div>
            </div>
          </div>

          <UModal>
            <UButton color="error" label="Abone Ol" class=" text-white" />
            <template #content>
              <form @submit.prevent="subscribe">
                <UCard class="p-6 max-w-md mx-auto flex flex-col gap-4">
                  <p class="text-xl text-white text-center mb-10">
                    Sıcak gelişmelerden anında haberdar olmak için...
                  </p>

                  <form @submit.prevent="subscribe" class="flex gap-2">
                    <UInput
                        v-model="email"
                        type="email"
                        color="error"
                        size="lg"
                        placeholder="Email adresinizi girin"
                        required
                        class="flex-1"
                    />
                    <UButton
                        type="submit"
                        class="bg-red-600 hover:bg-red-700 text-white">
                      Abone Ol
                    </UButton>
                  </form>
                </UCard>
              </form>
            </template>
          </UModal>
        </template>

        <template v-else>
          <UButton
              variant="outline"
              color="neutral"
              class="bg-white text-black hover:bg-gray-50 justify-center"
              to="/login">
            Giriş Yap
          </UButton>
          <UModal>
          <UButton color="error" label="Abone Ol" class=" text-white" />
            <template #content>
              <form @submit.prevent="subscribe">
                <UCard class="p-6 max-w-md mx-auto flex flex-col gap-4">
                  <p class="text-xl text-white text-center mb-10">
                    Sıcak gelişmelerden anında haberdar olmak için...
                  </p>

                  <form @submit.prevent="subscribe" class="flex gap-2">
                    <UInput
                        v-model="email"
                        type="email"
                        color="error"
                        size="lg"
                        placeholder="Email adresinizi girin"
                        required
                        class="flex-1"
                    />
                    <UButton
                        type="submit"
                        class="bg-red-600 hover:bg-red-700 text-white">
                      Abone Ol
                    </UButton>
                  </form>
                </UCard>
              </form>
            </template>
          </UModal>
        </template>
      </div>
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
            </NuxtLink>
          </div>

          <div class="flex flex-col gap-3">
            <template v-if="user">
              <div class="relative">
                <button
                    @click="dropdownOpen = !dropdownOpen"
                    class="border border-gray-300 rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-between w-full"
                >
                  {{ user.email }}
                  <svg class="h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>

                <div
                    v-if="dropdownOpen"
                    @click.outside="dropdownOpen = false"
                    class="absolute left-0 mt-2 w-full bg-white rounded-md shadow-lg border border-gray-200 z-50"
                >
                  <div class="py-1">
                    <NuxtLink
                        v-if="role === 'admin'"
                        to="/admin"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        @click="closeMenu"
                    >
                      Admin Panel
                    </NuxtLink>
                    <button
                        @click="logout"
                        class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Çıkış Yap
                    </button>
                  </div>
                </div>
              </div>

              <UModal>
                <UButton color="error" label="Abone Ol" class=" text-white justify-center" />
                <template #content>
                  <form @submit.prevent="subscribe">
                    <UCard class="p-6 max-w-md mx-auto flex flex-col gap-4">
                      <p class="text-xl text-white text-center mb-10">
                        Sıcak gelişmelerden anında haberdar olmak için...
                      </p>

                      <form @submit.prevent="subscribe" class="flex gap-2">
                        <UInput
                            v-model="email"
                            type="email"
                            color="error"
                            size="lg"
                            placeholder="Email adresinizi girin"
                            required
                            class="flex-1"
                        />
                        <UButton
                            type="submit"
                            class="bg-red-600 hover:bg-red-700 text-white justify-center">
                          Abone Ol
                        </UButton>
                      </form>
                    </UCard>
                  </form>
                </template>
              </UModal>
            </template>

            <template v-else>
              <UButton
                  variant="outline"
                  color="neutral"
                  class="border border-gray-400 hover:border-red-500 hover:text-red-600 justify-center"
                  to="/login"
                  @click="closeMenu"
              >
                Giriş Yap
              </UButton>
              <UModal>
                <UButton color="error" label="Abone Ol" class=" text-white justify-center"/>
                <template #content>
                  <form @submit.prevent="subscribe">
                    <UCard class="p-6 max-w-md mx-auto flex flex-col gap-4">
                      <p class="text-xl text-white text-center mb-10">
                        Sıcak gelişmelerden anında haberdar olmak için...
                      </p>

                      <form @submit.prevent="subscribe" class="flex gap-2">
                        <UInput
                            v-model="email"
                            type="email"
                            color="error"
                            size="lg"
                            placeholder="Email adresinizi girin"
                            required
                            class="flex-1"
                        />
                        <UButton
                            type="submit"
                            class="bg-red-600 hover:bg-red-700 text-white justify-center">
                          Abone Ol
                        </UButton>
                      </form>
                    </UCard>
                  </form>
                </template>
              </UModal>
            </template>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
