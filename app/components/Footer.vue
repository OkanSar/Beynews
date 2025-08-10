<template>
  <footer class="bg-gray-50 border-t border-gray-300 font-serif text-black py-16 px-8 max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row md:justify-between gap-12 max-w-6xl mx-auto">

      <div class="flex flex-col space-y-5 min-w-[140px] px-4 mt-8">
        <h4 class="font-semibold text-lg mb-3">Bilgilendirmeler</h4>
        <ul class="space-y-3 text-sm">
          <li><a href="#" class="hover:underline">Hakkımızda</a></li>
          <li><a href="#" class="hover:underline">Etik</a></li>
          <li><a href="#" class="hover:underline">S.S.S.</a></li>
          <li><a href="#" class="hover:underline">Gizlilik Politikası</a></li>
        </ul>
      </div>

      <div class="flex flex-col space-y-8 min-w-[260px] px-4 mt-8">
        <h4 class="font-semibold text-lg mb-3">İletişim</h4>
        <address class="not-italic text-sm space-y-2">
          <p>Email: <a href="mailto:iletisim@example.com" class="hover:underline">iletisim@example.com</a></p>
          <p>Telefon: <a href="tel:+900123456789" class="hover:underline">+90 123 456 78 90</a></p>
          <p>Adres: Örnek Mah. No:10, İstanbul, Türkiye</p>
          <p>
            <form @submit.prevent="subscribe" class="flex gap-3 mb-5">
              <input
                  type="email"
                  id="email"
                  v-model="email"
                  required
                  placeholder="Email adresiniz"
                  class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                  type="submit"
                  class="bg-red-500 text-white px-5 rounded-md hover:bg-red-400 transition"
              >
                Abone Ol
              </button>
            </form>
            <p v-if="message" class="mt-2 text-sm text-green-600">{{ message }}</p>
          </p>
        </address>


      </div>

      <div class="max-w-sm px-4 text-base font-semibold leading-relaxed mt-7">
        <p>
          Bu site, bilgiye kolay ve güvenilir erişimi sağlamak amacıyla kurulmuştur.
          Güncel haberler, tarafsız analizler ve özgün içeriklerle, okuyucularımıza
          kaliteli bir deneyim sunmayı hedefliyoruz. Misyonumuz, herkes için ulaşılabilir
          ve doğru bilgi kaynağı olmaktır.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const message = ref("");

function subscribe() {
  if (email.value) {
    message.value = "Bültene başarıyla abone oldunuz!";
    email.value = "";
  }
}
</script>
