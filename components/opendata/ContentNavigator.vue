<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-2">Navigate Content</h2>
    <ul>
      <li v-for="item in items" :key="item.id" class="mb-2">
        <button @click="selectItem(item)" class="text-blue-500 hover:underline">
          {{ item.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '@/store/dataStore'
import { computed } from 'vue'
import type { DataItem } from '@/types/models'

const dataStore = useDataStore()
const items = computed(() => dataStore.items)

const selectItem = (item: DataItem) => {
  dataStore.setSelectedData(item)
}
</script>
