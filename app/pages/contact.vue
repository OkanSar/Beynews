<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  if (!name.value || !email.value || !message.value) return

  console.log('Form gönderildi:', { name: name.value, email: email.value, message: message.value })

  name.value = ''
  email.value = ''
  message.value = ''
  alert('Mesajınız başarıyla gönderildi!')
}
</script>

<template>
  <section class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">

        <div class="w-full flex flex-col justify-start">
          <h2 class="text-3xl sm:text-4xl font-bold md:mt-20 mb-4 text-gray-800">İletişim Bilgilerimiz</h2>
          <p class="text-gray-600 mb-8 text-sm sm:text-base">
            Sorularınızı, önerilerinizi veya iş birliği tekliflerinizi bize iletmekten çekinmeyin.
          </p>

          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <i class="i-heroicons-envelope text-red-600 text-xl"></i>
              <span class="text-gray-700 text-sm sm:text-base">destek@beynews.com</span>
            </div>
            <div class="flex items-center gap-3">
              <i class="i-heroicons-phone text-red-600 text-xl"></i>
              <span class="text-gray-700 text-sm sm:text-base">+90 511 111 11 11</span>
            </div>
            <div class="flex items-center gap-3">
              <i class="i-heroicons-map-pin text-red-600 text-xl"></i>
              <span class="text-gray-700 text-sm sm:text-base">İstanbul, Türkiye</span>
            </div>
          </div>
        </div>

        <!-- Form -->
        <UCard class="w-full sm:max-w-xl mx-auto p-2 sm:p-10 bg-white shadow-2xl rounded-2xl border border-gray-100">
          <h3 class="text-2xl font-bold mb-6 text-gray-800 text-center">Bize Ulaşın</h3>
          <form @submit.prevent="submitForm" class="space-y-5">
            <UInput
                v-model="name"
                type="text"
                placeholder="Adınız"
                class="w-full bg-white text-black border border-gray-200 rounded-lg h-14 px-4 placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all"
                required
            />
            <UInput
                v-model="email"
                type="email"
                placeholder="Email adresiniz"
                class="w-full bg-white text-black border border-gray-200 rounded-lg h-14 px-4 placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all"
                required
            />
            <UTextarea
                v-model="message"
                placeholder="Mesajınız"
                rows="5"
                class="w-full bg-white text-black border border-gray-200 rounded-lg px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all"
                required
            />
            <UButton
                type="submit"
                class="justify-center w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Gönder
            </UButton>
          </form>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
:deep(input),
:deep(textarea) {
  background-color: white !important;
  color: black !important;
}

:deep(input:focus),
:deep(textarea:focus) {
  outline: none;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.3);
  border-color: #dc2626;
}
</style>
