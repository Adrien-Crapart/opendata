<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-2">Data Visualization</h2>
    <div v-if="data" class="bg-gray-100 p-4 rounded">
      <h3 class="text-lg">Dataset: {{ data.name }}</h3>
      <p>{{ data.description }}</p>
      <!-- Visualization logic goes here -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDataStore } from '@/store/dataStore'

const dataStore = useDataStore()
const data = computed(() => dataStore.selectedData)
</script>
