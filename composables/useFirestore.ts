import { useNuxtApp } from 'nuxt/app';
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  Firestore,
} from 'firebase/firestore';
import type { DataItem } from '@/types/models';

export const useFirestore = () => {
  const { $db } = useNuxtApp() as unknown as { $db: Firestore };

  const fetchData = async (): Promise<DataItem[]> => {
    const querySnapshot = await getDocs(collection($db, 'dataItems'));
    const dataItems: DataItem[] = [];
    querySnapshot.forEach((doc) => {
      dataItems.push({ id: doc.id, ...(doc.data() as Omit<DataItem, 'id'>) });
    });
    return dataItems;
  };

  const addData = async (item: Omit<DataItem, 'id'>): Promise<void> => {
    await addDoc(collection($db, 'dataItems'), item);
  };

  const updateData = async (item: DataItem): Promise<void> => {
    const dataRef = doc($db, 'dataItems', item.id);
    await updateDoc(dataRef, { ...item });
  };

  const deleteData = async (id: string): Promise<void> => {
    const dataRef = doc($db, 'dataItems', id);
    await deleteDoc(dataRef);
  };

  return { fetchData, addData, updateData, deleteData };
};
