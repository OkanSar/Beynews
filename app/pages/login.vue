<template>
  <UContainer class="min-h-screen flex items-center justify-center px-4">
    <UCard variant="solid" class="max-w-sm w-full p-6 border-1 ">
      <template #header>
        <h2 class="text-2xl font-bold text-center">
          {{ isLogin ? 'Giriş Yap' : 'Kayıt Ol' }}
        </h2>
      </template>

      <UForm @submit="onSubmit" :state="form" class="space-y-4 ">
        <UFormField label="" name="email"/>
        <input
              v-model="form.email"
              type="email"
              placeholder="E-posta adresiniz"
              class="w-full mb-3 text-black border-b border-gray-300 focus:outline-none focus:border-black"
              required
          />
        <UFormField label="" name="password" class="space-y-4">
          <input
              v-model="form.password"
              type="password"
              placeholder="Şifreniz"
              class="w-full mb-10 text-black border-b border-gray-300 focus:outline-none focus:border-black"
              required
          />
        </UFormField>

        <UButton
            type="submit"
            color="neutral"
            variant="outline"
            block
            :loading="loading"
        >
          {{ isLogin ? 'Giriş Yap' : 'Kayıt Ol' }}
        </UButton>
      </UForm>

      <template #footer>
        <p class="text-center text-sm mt-4">
          {{ isLogin ? 'Hesabınız yok mu?' : 'Zaten hesabınız var mı?' }}
          <UButton
              variant="link"
              color="error"
              class="p-0 ml-1"
              @click="isLogin = !isLogin"
          >
            {{ isLogin ? 'Kayıt Ol' : 'Giriş Yap' }}
          </UButton>
        </p>
        <div class="mt-6 space-y-2">
          <UButton
              color="neutral"
              variant="outline"
              block
              @click="signInWithGoogle"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
              <path fill="#4285F4" d="M24 9.5c3.54 0 6.27 1.52 7.72 2.8l5.7-5.7C33.02 4.84 28.88 3 24 3 14.84 3 7.28 8.98 4.62 16.9l6.62 5.15C12.33 16.6 17.62 9.5 24 9.5z"/>
              <path fill="#34A853" d="M46.5 24c0-1.59-.15-2.8-.46-4.02H24v7.62h12.73c-.25 1.55-1.6 4.33-5.27 6.55l-.05.34 7.66 5.94.53.05c4.87-4.49 7.8-11.1 7.8-20.48z"/>
              <path fill="#FBBC05" d="M10.24 29.9a14.96 14.96 0 0 1 0-11.81v-.35L3.62 13.4a24 24 0 0 0 0 21.2l6.62-5.14z"/>
              <path fill="#EA4335" d="M24 46.5c6.5 0 11.94-2.14 15.9-5.82l-7.56-5.86c-2.1 1.38-4.83 2.3-8.33 2.3-6.42 0-11.9-4.33-13.85-10.15L4.62 34.6c3.06 6.1 9.79 10.8 19.38 10.8z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            Google ile Giriş
          </UButton>
        </div>

        <p v-if="errorMsg" class="text-red-500 text-sm text-center mt-2">{{ errorMsg }}</p>
        <p v-if="successMsg" class="text-green-500 text-sm text-center mt-2">{{ successMsg }}</p>
      </template>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useSupabaseClient, useSupabaseUser } from '#imports'

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const isLogin = ref(true)
const loading = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

const form = ref({
  email: '',
  password: ''
})

watchEffect(() => {
  if (user.value) {
    navigateTo('/')
  }
})

async function onSubmit() {
  errorMsg.value = ''
  successMsg.value = ''
  loading.value = true

  const { email, password } = form.value

  try {
    if (isLogin.value) {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
    } else {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      successMsg.value = 'Kayıt başarılı! Lütfen e-postanızı doğrulayın.'
    }
  } catch (err: any) {
    errorMsg.value = err.message || 'Bir hata oluştu.'
  } finally {
    loading.value = false
  }
}
async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin
    }
  })
  if (error) errorMsg.value = error.message
}
</script>
