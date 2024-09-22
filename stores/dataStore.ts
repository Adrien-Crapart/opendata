import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useFirestore } from '@/composables/useFirestore';
import type { DataItem } from '@/types/models';

export const useDataStore = defineStore('dataStore', () => {
  const items = ref<DataItem[]>([]);
  const selectedData = ref<DataItem | null>(null);
  const { fetchData, addData, updateData, deleteData } = useFirestore();

  const loadData = async () => {
    items.value = await fetchData();
  };

  const addItem = async (item: Omit<DataItem, 'id'>) => {
    await addData(item);
    await loadData();
  };

  const updateItem = async (item: DataItem) => {
    await updateData(item);
    await loadData();
  };

  const removeItem = async (id: string) => {
    await deleteData(id);
    await loadData();
  };

  const setSelectedData = (item: DataItem): void => {
    selectedData.value = item;
  };

  return {
    items,
    selectedData,
    loadData,
    addItem,
    updateItem,
    removeItem,
    setSelectedData,
  };
});
