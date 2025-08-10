<script setup lang="ts">
const email = ref('')

function submitEmail() {
  alert(`Email kaydedildi: ${email.value}`)
  email.value = ''
}
const mainPosts = [
  {
    id: 1,
    category: "Finans",
    title: "Uzun yaşamın sırrı belki de bu şenliklerde saklı: İkarya panagiri'leri",
    excerpt: "İkarya’daki panagiri’lerin en dikkat çekici yanlarından biri şenliklerde yaş, cinsiyet ve statü farkının neredeyse hiç olmaması. Dedeler de, altı yaşındaki çocuklar da, gençler, dünyanın farklı köşelerinden gelmiş turistler ve adanın kendi sakinleriyle...",
    author: "İrem Çağıl",
    date: "10 Ağu 2025",
    tags: ["Türkiye", "Samos", "Sakız", "Bodrum", "Leros"],
  },
  {
    id: 2,
    category: "Siyaset",
    title: "Her şey dahil tatillerin yükselişi: 90’lara dönüş mü, yepyeni bir tatil anlayışı mı?",
    excerpt: "2025 yazında her şey dahil tatiller popülerliğini artırıyor. Tatilciler hem bütçelerine hem de yeni deneyimlere önem veriyor...",
    author: "Deniz Yılmaz",
    date: "8 Ağu 2025",
    tags: ["Tatil", "Yaz", "Rezervasyon"],
  },
  {
    id: 3,
    category: "Siyaset",
    title: "Her şey dahil tatillerin yükselişi: 90’lara dönüş mü, yepyeni bir tatil anlayışı mı?",
    excerpt: "2025 yazında her şey dahil tatiller popülerliğini artırıyor. Tatilciler hem bütçelerine hem de yeni deneyimlere önem veriyor...",
    author: "Deniz Yılmaz",
    date: "8 Ağu 2025",
    tags: ["Tatil", "Yaz", "Rezervasyon"],
  },
  {
    id: 4,
    category: "Siyaset",
    title: "Her şey dahil tatillerin yükselişi: 90’lara dönüş mü, yepyeni bir tatil anlayışı mı?",
    excerpt: "2025 yazında her şey dahil tatiller popülerliğini artırıyor. Tatilciler hem bütçelerine hem de yeni deneyimlere önem veriyor...",
    author: "Deniz Yılmaz",
    date: "8 Ağu 2025",
    tags: ["Tatil", "Yaz", "Rezervasyon"],
  },
  {
    id: 5,
    category: "Siyaset",
    title: "Her şey dahil tatillerin yükselişi: 90’lara dönüş mü, yepyeni bir tatil anlayışı mı?",
    excerpt: "2025 yazında her şey dahil tatiller popülerliğini artırıyor. Tatilciler hem bütçelerine hem de yeni deneyimlere önem veriyor...",
    author: "Deniz Yılmaz",
    date: "8 Ağu 2025",
    tags: ["Tatil", "Yaz", "Rezervasyon"],
  },
  {
    id: 6,
    category: "Siyaset",
    title: "Her şey dahil tatillerin yükselişi: 90’lara dönüş mü, yepyeni bir tatil anlayışı mı?",
    excerpt: "2025 yazında her şey dahil tatiller popülerliğini artırıyor. Tatilciler hem bütçelerine hem de yeni deneyimlere önem veriyor...",
    author: "Deniz Yılmaz",
    date: "8 Ağu 2025",
    tags: ["Tatil", "Yaz", "Rezervasyon"],
  },
  {
    id: 7,
    category: "Siyaset",
    title: "Her şey dahil tatillerin yükselişi: 90’lara dönüş mü, yepyeni bir tatil anlayışı mı?",
    excerpt: "2025 yazında her şey dahil tatiller popülerliğini artırıyor. Tatilciler hem bütçelerine hem de yeni deneyimlere önem veriyor...",
    author: "Deniz Yılmaz",
    date: "8 Ağu 2025",
    tags: ["Tatil", "Yaz", "Rezervasyon"],
  },
]
const sideNews = [
  "Balıkesir depreminde iletişim kesildi: Balıkesir'de 10 Ağustos 2025 tarihinde meydana gelen 6,1 büyüklüğündeki depremin ardından cep telefonları çalışmadı ve GSM hatları kilitlendi.",
  "Balıkesir'de artçı depremler: Balıkesir'de meydana gelen 6,1 büyüklüğündeki depremin ardından 4 tane 4'ten büyük artçı deprem kaydedildi.",
  "Deprem uzmanları uyardı: Deprem uzmanları, 10 Ağustos'ta Balıkesir'de meydana gelen 6,1 ve 4,0 büyüklüğündeki depremler sonrası Kuzey Ege ve Güney Marmara'daki tehlikeleri vurguladı.",
]
</script>

<template>
  <UContainer class="py-10">
    <div class="grid md:grid-cols-4 gap-10 font-serif text-black">

      <div class="md:col-span-3 flex flex-col divide-y divide-gray-200">
        <h2 class="font-semibold text-xs uppercase tracking-wide text-gray-700 mb-6 border-b border-gray-300 pb-2">
          Bültenler
        </h2>

        <div
            v-for="post in mainPosts"
            :key="post.id"
            class="py-6 flex flex-col md:flex-row gap-4 md:gap-8"
        >
          <!-- Resim önce mobilde, sonra masaüstünde -->
          <img
              src="/images/blog-image-3.jpg"
              alt="Haber görseli"
              class="w-full h-48 object-cover rounded-md shadow-sm mb-4 md:mb-0 md:w-52 md:h-32 flex-shrink-0 order-1 md:order-2"
          />

          <!-- Metin -->
          <div class="flex flex-col flex-[1.3] order-2 md:order-1">
            <div class="flex items-center gap-2 text-xs text-gray-500 mb-1">
      <span class="px-2 py-0.5 border rounded text-gray-600 font-semibold select-none">
        {{ post.category }}
      </span>
            </div>
            <h3 class="text-xl font-serif font-semibold mb-2 hover:text-gray-700 cursor-pointer leading-snug">
              {{ post.title }}
            </h3>
            <p class="text-gray-600 mb-2 leading-relaxed">
              {{ post.excerpt }}
            </p>
            <div class="text-xs text-gray-400 mb-3">
              {{ post.author }} &middot; {{ post.date }}
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
          <p class="font-semibold mb-1">• {{ news.split(':')[0] }}:</p>
          <p class="text-gray-700">
            {{ news.split(':').slice(1).join(':').trim() }}
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
