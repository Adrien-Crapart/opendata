import { ref } from 'vue';

export const useData = () => {
  const data = ref<any>(null);

  const fetchData = async (query: string): Promise<void> => {
    // Replace with actual fetch logic
    data.value = await fetch(`/api/data?search=${query}`).then((res) =>
      res.json(),
    );
  };

  return { data, fetchData };
};
