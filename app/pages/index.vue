<script setup lang="ts">
import type {flow} from "~~/types/flow";
import type {liveAgenda} from "~~/types/liveAgenda";

const email = ref('')
const flowPosts = ref<flow[]>()
const sideNews = ref<liveAgenda[]>()

function submitEmail() {
  alert(`Email kaydedildi: ${email.value}`)
  email.value = ''
}
function getFirstWords(text: string, wordCount: number) {
  return text.split(' ').slice(0, wordCount).join(' ')
}
onMounted(async () => {
  try {
    const {data, error} = await useFetch('/api/flow', {
      method: 'GET',
    })
    if(error.value){
    console.error('API hatası:', error.value)
    return error
    }
    flowPosts.value = data.value ?? []
  }
   catch(error) {
    console.error('Fetch hatası:', error)
   }
   try {
     const {data, error} = await useFetch('/api/liveAgenda', {
       method: 'GET',
     })
     if(error.value){
       console.error('API hatası:', error.value)
       return error
     }
     sideNews.value = data.value ? data.value.slice(0, 3) : []
   }
   catch (error) {
    console.error('Fetch hhatası: ',error)
   }
})
</script>

<template>
  <UContainer class="py-10">
    <div class="grid md:grid-cols-4 gap-10 font-serif text-black">
      <div class="md:col-span-3 flex flex-col divide-y divide-gray-200">
        <h2 class="font-semibold text-xs uppercase tracking-wide text-gray-700 mb-6 border-b border-gray-300 pb-2">
          AKIŞ
        </h2>
        <div
            v-for="post in flowPosts"
            :key="post.id"
            class="py-6 flex flex-col md:flex-row gap-4 md:gap-8"
        >
          <img
              :src='`${post.imagePath}`'
              alt="Haber görseli"
              class="w-full h-48 object-cover rounded-md shadow-sm mb-4 md:mb-0 md:w-52 md:h-32 flex-shrink-0 order-1 md:order-2"
          />
          <div class="flex flex-col flex-[1.3] order-2 md:order-1">
            <div class="flex items-center gap-2 text-xs text-gray-500 mb-1">
      <span class="px-2 py-0.5 border rounded text-gray-600 font-semibold select-none">
        {{ post.subject }}
      </span>
            </div>
            <h3 class="text-xl font-serif font-semibold mb-2 hover:text-gray-700 cursor-pointer leading-snug">
              {{ post.title }}
            </h3>
            <p class="text-gray-600 mb-2 leading-relaxed">
              {{ post.description }}
            </p>
            <div class="text-xs text-gray-400 mb-3">
              Okan Sarıoğlu &middot; {{ post.date }}
            </div>
            <div class="flex flex-wrap gap-2">
      <span
          v-for="tag in post.tags"
          :key="tag"
          class="text-xs bg-gray-200 rounded-full px-3 py-1 select-none"
      >
        {{ tag }}
      </span>
            </div>
          </div>
        </div>

      </div>

      <div
          class="space-y-6 text-sm text-gray-800 leading-relaxed sticky top-20 self-start max-h-[calc(100vh-5rem)] overflow-y-auto"
      >
        <div
            v-for="(news, idx) in sideNews"
            :key="idx"
            class="border-b border-gray-300 pb-3 last:border-none"
        >
          <p class="font-semibold mb-1">•{{news.title}}:</p>
          <p class="text-gray-700">
            {{ getFirstWords(news.description,10)}}...
          </p>
        </div>
        <div class="mt-6 p-4 border border-gray-300 rounded bg-gray-50">
          <h3 class="font-semibold mb-2 text-gray-900">Bültene Kaydol</h3>
          <form @submit.prevent="submitEmail">
            <input
                type="email"
                v-model="email"
                placeholder="E-posta adresiniz"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
                type="submit"
                class="w-full bg-red-500 text-white py-2 rounded hover:bg-red-400 transition"
            >
              Kaydol
            </button>
          </form>
        </div>
      </div>
    </div>
  </UContainer>
</template>
