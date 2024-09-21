import { defineStore } from 'pinia';
import { useData } from '@/composables/useData';
import { ref } from 'vue';
import type { DataItem } from '@/types/models';

export const useDataStore = defineStore('dataStore', () => {
  const { data, fetchData } = useData();
  const items = ref<DataItem[]>([]);
  const selectedData = ref<DataItem | null>(null);

  const setSelectedData = (item: DataItem): void => {
    selectedData.value = item;
  };

  return { items, selectedData, fetchData, setSelectedData };
});
