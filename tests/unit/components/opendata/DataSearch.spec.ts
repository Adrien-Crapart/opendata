import { mount } from '@vue/test-utils';
import DataSearch from '@/components/opendata/DataSearch.vue';
import { createPinia, setActivePinia } from 'pinia';
import { useDataStore } from '@/store/dataStore';

describe('DataSearch.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders correctly and triggers search on button click', async () => {
    const wrapper = mount(DataSearch);
    const dataStore = useDataStore();

    jest.spyOn(dataStore, 'fetchData');

    const input = wrapper.find('input');
    await input.setValue('test query');

    const button = wrapper.find('button');
    await button.trigger('click');

    expect(dataStore.fetchData).toHaveBeenCalledWith('test query');
  });
});
