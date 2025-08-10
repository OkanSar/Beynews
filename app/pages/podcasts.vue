<script setup lang="ts">
import { ref } from "vue";

const podcasts = ref([
  {
    id: 1,
    title: "Teknolojide Yeni Trendler ve Gelecek",
    description:
        "Bu bölümde teknoloji dünyasındaki en yeni gelişmeleri ve geleceğin trendlerini detaylıca ele alıyoruz. Alanında uzman konuklarımızla derin analizler ve çarpıcı öngörüler sizlerle.",
    date: "12 Ağu 2025",
    guest: "Ahmet Demir",
    image: "/images/blog-image-4.jpg",
  },
  {
    id: 2,
    title: "Sağlıklı Yaşamın Püf Noktaları",
    description:
        "Beslenmeden spora, zihinsel sağlığa kadar sağlıklı yaşamın tüm inceliklerini uzmanlarla konuşuyoruz.",
    date: "8 Ağu 2025",
    guest: "Elif Yılmaz",
    image: "/images/blog-image-5.jpg",
  },
  {
    id: 3,
    title: "Ekonomi ve Gelecek Vizyonu",
    description:
        "Ekonomi alanındaki son gelişmeler ve geleceğe dair öngörüler, ekonomistlerle yapılan keyifli sohbetler.",
    date: "5 Ağu 2025",
    guest: "Murat Kaya",
    image: "/images/blog-image-8.jpg",
  },
  {
    id: 4,
    title: "Dijital Pazarlama Stratejileri",
    description:
        "Marka bilinirliği ve satışları artırmak için kullanılan dijital pazarlama yöntemlerini inceliyoruz.",
    date: "2 Ağu 2025",
    guest: "Ayşe Demir",
    image: "/images/blog-image-9.jpg",
  },
  {
    id: 5,
    title: "Sanat ve Yaratıcılık Üzerine",
    description:
        "Sanat dünyasından yaratıcı isimlerle yapılan sohbetler ve ilham veren hikayeler.",
    date: "28 Tem 2025",
    guest: "Can Öztürk",
    image: "/images/coding-brain.jpg",
  },
]);

const popularPodcasts = ref(podcasts.value.slice(0, 3));
</script>

<template>
  <UContainer class="py-10">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 font-serif text-black">
      <div class="md:col-span-3 flex flex-col gap-8">
        <div
            v-for="podcast in podcasts"
            :key="podcast.id"
            class="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden max-w-full h-auto md:h-52"
        >
          <!-- Mobilde üstte resim, altta metin için order -->
          <!-- Resim -->
          <div class="relative w-full md:w-48 h-48 md:h-full flex-shrink-0 order-1 md:order-2">
            <img
                :src="podcast.image"
                alt="Podcast görseli"
                class="w-full h-full object-cover rounded-t-lg md:rounded-t-none md:rounded-r-lg rounded-b-lg md:rounded-bl-none"
            />
            <div
                class="absolute top-3 left-3 bg-black bg-opacity-75 text-white text-xs md:text-sm font-semibold rounded-full px-3 py-1 select-none max-w-[90%] truncate"
            >
              {{ podcast.guest }}
            </div>
          </div>

          <!-- Metin -->
          <div class="flex flex-col justify-between p-6 flex-1 order-2 md:order-1">
            <h3
                class="text-xl md:text-2xl font-serif font-semibold mb-3 hover:text-gray-800 cursor-pointer leading-snug"
            >
              {{ podcast.title }}
            </h3>
            <p
                class="text-gray-700 mb-6 leading-relaxed text-sm md:text-base line-clamp-4"
            >
              {{ podcast.description }}
            </p>
            <div class="text-xs md:text-sm text-gray-400">
              {{ podcast.date }}
            </div>
          </div>
        </div>
      </div>
      <aside
          class="space-y-8 p-4 bg-gray-50 rounded-md shadow-sm md:sticky md:top-10 md:self-start"
      >
        <h2
            class="text-xl font-semibold mb-6 border-b border-gray-300 pb-2 text-center md:text-left"
        >
          Popüler Podcastler
        </h2>

        <div
            v-for="pop in popularPodcasts"
            :key="pop.id"
            class="border-b border-gray-300 pb-4 last:border-none"
        >
          <h3
              class="text-lg font-semibold hover:underline cursor-pointer mb-1 line-clamp-2"
          >
            {{ pop.title }}
          </h3>
          <p class="text-sm text-gray-700 mb-1 line-clamp-2">
            {{ pop.description }}
          </p>
          <div class="flex justify-between text-xs text-gray-400">
            <span>{{ pop.date }}</span>
            <span class="italic truncate max-w-[50%]">{{ pop.guest }}</span>
          </div>
        </div>
      </aside>
    </div>
  </UContainer>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
