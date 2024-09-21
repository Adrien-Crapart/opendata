<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-2">Search Data</h2>
    <input v-model="query" @keyup.enter="searchData" type="text" placeholder="Search for datasets..."
      class="border border-gray-300 rounded p-2" />
    <button @click="searchData" class="bg-blue-500 text-white rounded p-2 ml-2">Search</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDataStore } from '@/store/dataStore'

const query: string = ref('') as unknown as string
const dataStore = useDataStore()

const searchData = () => {
  dataStore.fetchData(query)
}
</script>
