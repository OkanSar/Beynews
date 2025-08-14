<script setup lang="ts">
import type {liveAgenda} from "~~/types/liveAgenda";

const liveAgendaPosts = ref<liveAgenda[]>();

try {
  const {data,error} = await useFetch('/api/liveAgenda',{
    method: 'GET',
  })
  if(error.value){
    console.error('API hatası:'+error.value)
  }
  liveAgendaPosts.value = data.value ?? []
}
catch (error) {
  console.error('Fetch hatası:'+error)
}

function formatTime(timeStr: string) {
  return timeStr.split(':').slice(0, 2).join(':')
}
</script>


<template>
  <UContainer class="py-16 max-w-4xl mx-auto font-serif text-black">
    <h2 class="text-center text-4xl font-semibold mb-10">
      Canlı Gündem
    </h2>

    <div class="flex flex-col divide-y divide-gray-300 border border-gray-300 rounded-md overflow-hidden">
      <div
          v-for="item in liveAgendaPosts"
          :key="item.id"
          class="flex flex-col p-6 gap-3 bg-white"
      >
        <div class="text-xl font-bold text-red-600">
          {{ formatTime(item.date) }}
        </div>

        <h3 class="text-2xl font-semibold text-black leading-snug">
          {{ item.title }}
        </h3>

        <p class="text-gray-700 mb-3 text-base leading-relaxed">
          {{ item.description || 'Bu canlı bülten ile ilgili detaylı açıklama buraya gelecek.' }}
        </p>

        <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm md:text-base">
          <li v-for="(point, idx) in item.subDescription" :key="idx">
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  </UContainer>
</template>


