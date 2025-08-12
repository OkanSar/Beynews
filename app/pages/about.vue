<template>
  <section class="max-w-6xl mx-auto px-6 py-24 font-serif text-gray-900">
    <h1
        class="text-center text-4xl md:text-5xl font-extrabold mb-14 tracking-wider "
    >
      Hakkımızda
      <span
          class="block h-1 w-24 bg-red-600 mx-auto mt-3 rounded-full opacity-90"
      ></span>
    </h1>

    <div class="flex flex-col md:flex-row items-center md:items-start gap-16 mb-24">
      <div
          class="w-full max-w-md rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
      >
        <img
            src="/images/blog-image-6.jpg"
            alt="Hakkımızda görseli"
            class="w-full h-72 object-cover"
            loading="lazy"
        />
      </div>
      <div class="md:flex-1 space-y-7 text-lg leading-relaxed max-w-4xl text-gray-800">
        <p>
          Biz, bilgiye değer veren ve özgün içerik üretmeyi kendine misyon edinmiş tutkulu bir ekibiz. Okuyucularımızla samimi bir bağ kurarak, en güncel ve doğru bilgileri sade ve anlaşılır biçimde sunmayı amaçlıyoruz.
        </p>
        <p>
          Güncel gelişmeleri titizlikle takip ediyor, analizlerimizi objektif ve tarafsız bir yaklaşımla hazırlıyoruz. Sadece haber vermekle kalmayıp, ilham veren hikayelerle de hayatınıza dokunmak istiyoruz. Sizlere bilgiyle dolu, güvenilir bir rehber olmayı hedefliyoruz.
        </p>
      </div>
    </div>

    <div
        class="max-w-5xl mx-auto text-center text-lg leading-relaxed mb-28 px-4 md:px-0 text-gray-700"
    >
      <p>
        Kurulduğumuz günden itibaren, misyonumuz her bireyin bilgiye kolayca erişmesini sağlamak oldu. Tarafsızlık ve doğruluk ilkelerinden asla taviz vermeden, geniş yelpazede konuları ele alıyoruz. Teknolojiden sanata, kültürden bilime kadar pek çok alanda derinlemesine içerikler sunuyor, okuyucularımıza güncel ve kaliteli içerikler sağlamak için durmadan çalışıyoruz. Okuyucu odaklı yaklaşımımız sayesinde, her zaman onların beklentilerini karşılamayı ve güvenlerini kazanmayı öncelikli tutuyoruz.
      </p>
    </div>

    <!-- Neden Biz Kartları -->
    <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto"
    >
      <div
          v-for="(item, idx) in cards"
          :key="idx"
          class="p-8 bg-white rounded-3xl shadow-lg cursor-default transform transition duration-300 hover:shadow-2xl hover:scale-105 flex flex-col items-center text-center gap-5"
      >
        <h3 class="font-semibold text-2xl text-gray-900">
          {{ item.title }}
        </h3>
        <p class="text-base leading-relaxed text-gray-600">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


const cards = [
  {
    title: 'Uzman Kadro',
    desc: 'Alanında deneyimli, tutkulu ve güvenilir yazarlarımızla kaliteli içerik.',
  },
  {
    title: 'Tarafsızlık',
    desc: 'Haberlerimizi ve analizlerimizi her zaman objektif bir bakış açısıyla sunarız.',
  },
  {
    title: 'Zengin İçerik',
    desc: 'Gündemden kültüre, teknolojiden yaşama kadar geniş ve çeşitli içerikler.',
  },
  {
    title: 'Okuyucu Odaklı',
    desc: 'Okuyucularımızın ihtiyaçlarını ön planda tutan, samimi ve erişilebilir içerik.',
  },
]
</script>

<style scoped>
/* İstersen ek animasyonlar veya ince ayarlar buraya */
</style>
