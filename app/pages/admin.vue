<script setup lang="ts">
import { ref } from 'vue'

const users = ref([
  { id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@example.com', role: 'admin' },
  { id: 2, name: 'Ayşe Demir', email: 'ayse@example.com', role: 'user' },
  { id: 3, name: 'Mehmet Kaya', email: 'mehmet@example.com', role: 'user' },
])

const deleteUser = (id: number) => {
  users.value = users.value.filter(user => user.id !== id)
  console.log(`Kullanıcı ${id} silindi`)
}

const editUser = (id: number) => {
  console.log(`Kullanıcı ${id} düzenleniyor`)
}
</script>

<template>
  <UContainer class="py-6">
    <h1 class="text-2xl font-bold mb-4">Admin Paneli</h1>

    <UCard class="p-4">
      <UTable :data="users" class="w-full">
        <template #header>
          <tr>
            <UTh>ID</UTh>
            <UTh>İsim</UTh>
            <UTh>Email</UTh>
            <UTh>Rol</UTh>
            <UTh>İşlemler</UTh>
          </tr>
        </template>

        <template #body="{ row }">
          <tr>
            <UTd>{{ row.id }}</UTd>
            <UTd>{{ row.name }}</UTd>
            <UTd>{{ row.email }}</UTd>
            <UTd>{{ row.role }}</UTd>
            <UTd class="flex gap-2">
              <UButton size="sm" color="warning" @click="editUser(row.id)">
                Düzenle
              </UButton>
              <UButton size="sm" color="error" @click="deleteUser(row.id)">
                Sil
              </UButton>
            </UTd>
          </tr>
        </template>
      </UTable>
    </UCard>
  </UContainer>
</template>

<style scoped>
</style>
