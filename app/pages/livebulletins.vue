<template>
  <UContainer class="py-16 max-w-4xl mx-auto font-serif text-black">
    <h2 class="text-center text-4xl font-semibold mb-10">
      Canlı Gündem
    </h2>

    <div class="flex flex-col divide-y divide-gray-300 border border-gray-300 rounded-md overflow-hidden">
      <div
          v-for="item in liveBroadcasts"
          :key="item.id"
          class="flex flex-col p-6 gap-3 bg-white"
      >
        <div class="text-xl font-bold text-red-600">
          {{ item.time }}
        </div>

        <h3 class="text-2xl font-semibold text-black leading-snug">
          {{ item.title }}
        </h3>

        <p class="text-gray-700 mb-3 text-base leading-relaxed">
          {{ item.description || 'Bu canlı bülten ile ilgili detaylı açıklama buraya gelecek.' }}
        </p>

        <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm md:text-base">
          <li v-for="(point, idx) in item.points" :key="idx">
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const liveBroadcasts = [
  {
    id: 1,
    time: "09:00",
    title: "Eylül Tumbar Amcasını Kaybetti",
    description: `Oyuncu Eylül Tumbar, Balıkesir'deki 6,1 büyüklüğündeki depremde amcasının hayatını kaybettiğini açıkladı. Deprem, Balıkesir'in Sındırgı ilçesinde meydana geldi ve ardından 4,6 büyüklüğünde bir artçı sarsıntı yaşandı.`,
    points: [
      "İlk depremin ardından 20 artçı deprem kaydedildi",
      "112 Acil Çağrı merkezlerine 24 hasar ihbarı yapıldı",
      "Balıkesir Belediye Başkanı enkaz altında kalan kaybı duyurdu",
      "Eylül Tumbar sosyal medyada yardım talebinde bulundu",
    ],
  },
  {
    id: 2,
    time: "10:30",
    title: "Ekonomide Kırılgan Denge Sürüyor",
    description: `Döviz kurlarında yaşanan dalgalanmalar piyasalarda tedirginlik yaratıyor. Merkez Bankası'nın önümüzdeki haftaki toplantısı yakından izleniyor.`,
    points: [
      "Dolar ve euro kurlarında sert hareketlilik",
      "Borsa İstanbul'da işlem hacmi arttı",
      "Merkez Bankası faiz kararına odaklanıldı",
      "Yatırımcılar güvenli liman arayışında",
    ],
  },
  {
    id: 3,
    time: "12:00",
    title: "Siyasi Gelişmeler Hız Kesmedi",
    description: `Son günlerde artan siyasi gerilimler gündemi meşgul etmeye devam ediyor. Partiler arasında kritik görüşmeler sürüyor.`,
    points: [
      "Parlamentoda yasa teklifleri tartışılıyor",
      "Muhalefet partileri ortak strateji belirliyor",
      "Uluslararası basın gelişmeleri yakından takip ediyor",
      "Seçim atmosferi giderek ısınıyor",
    ],
  },
  {
    id: 4,
    time: "14:00",
    title: "Spor Dünyasında Transfer Hareketliliği",
    description: `Transfer sezonu hareketli geçiyor. Kulüpler önemli isimleri kadrolarına katmak için görüşmelerini sürdürüyor.`,
    points: [
      "Büyük kulüpler yıldız oyuncularla temas kurdu",
      "Yeni sezon hazırlıkları hızlandı",
      "Teknik direktör değişiklikleri gündemde",
      "Spor camiasında heyecan yükseliyor",
    ],
  },
  {
    id: 5,
    time: "15:30",
    title: "Teknoloji Dünyasında Yeni Atılımlar",
    description: `Yerli teknoloji firmaları uluslararası arenada adından söz ettiriyor. Son ürün lansmanları dikkat çekiyor.`,
    points: [
      "Yapay zeka alanında yeni gelişmeler",
      "Mobil uygulama sektöründe büyüme sürüyor",
      "Startuplar yatırımcıların ilgisini çekiyor",
      "Geleceğin teknolojileri tanıtıldı",
    ],
  },
  {
    id: 6,
    time: "17:00",
    title: "Yeni Eğitim Reformu Tartışmalara Yol Açtı",
    description: `Milli Eğitim Bakanlığı tarafından önerilen yeni eğitim reformu, öğretmenler ve veliler arasında yoğun tartışmalara neden oldu. Eleştiriler ve destekler giderek artıyor.`,
    points: [
      "Reformun kapsamı ve uygulanma şekli mercek altında",
      "Sendikalar görüşlerini açıkladı",
      "Veliler eğitim kalitesine odaklandı",
      "Uzmanlar olası etkileri analiz ediyor",
    ],
  },
  {
    id: 7,
    time: "18:30",
    title: "İklim Değişikliği Raporu Yayınlandı",
    description: `Uluslararası iklim değişikliği raporu, sıcaklık artışlarının hızlandığını ve acil önlemler alınması gerektiğini ortaya koydu. Dünya liderleri toplantıya hazırlanıyor.`,
    points: [
      "Sera gazı emisyonlarında artış kaydedildi",
      "Küresel ısınma etkileri detaylandırıldı",
      "Uluslararası işbirliği çağrıları yapıldı",
      "Halkın bilinçlendirilmesi önem kazandı",
    ],
  },
  {
    id: 8,
    time: "20:00",
    title: "Sağlıkta Dijital Dönüşüm Hızlanıyor",
    description: `Hastanelerde dijital altyapı yatırımları artıyor. Tele-tıp uygulamaları ve yapay zeka destekli teşhis sistemleri sağlık hizmetlerini dönüştürüyor.`,
    points: [
      "Uzaktan muayene oranları yükseldi",
      "Yapay zeka teşhis sistemleri test edildi",
      "Hasta memnuniyetinde olumlu gelişmeler",
      "Teknoloji sağlık çalışanlarının iş yükünü azalttı",
    ],
  },
  {
    id: 9,
    time: "21:30",
    title: "Kültür-Sanat Etkinlikleri Yoğunlaşıyor",
    description: `Sonbahar sezonu ile birlikte kültür-sanat etkinliklerinde artış gözlemleniyor. Festivaller ve sergiler ziyaretçilerini bekliyor.`,
    points: [
      "Uluslararası film festivali başladı",
      "Sanat galerilerinde yeni sergiler açıldı",
      "Müzik festivalleri takvimi açıklandı",
      "Sanatçılar yeni projelerini tanıtıyor",
    ],
  },
  {
    id: 10,
    time: "23:00",
    title: "Gece Gündemi: Önemli Gelişmeler Özetlendi",
    description: `Günün son saatlerinde yaşanan önemli gelişmeler ve analizler, gece gündemi bülteninde özetlendi. Gündemde ekonomi, politika ve spor var.`,
    points: [
      "Piyasalarda kapanış hareketleri",
      "Siyasi partilerden gece açıklamaları",
      "Spor dünyasında son dakika haberleri",
      "Uluslararası gündemde gelişmeler",
    ],
  }
];
</script>

