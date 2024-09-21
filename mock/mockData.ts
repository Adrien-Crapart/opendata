/**
 * @typedef {Object} DataItem
 * @property {string} id - Unique identifier of the data item.
 * @property {string} name - Name of the data item.
 * @property {string} description - Brief description of the data item.
 */
export interface DataItem {
  id: string;
  name: string;
  description: string;
}

/**
 * Mock data for testing and development purposes.
 * @returns {DataItem[]} Array of mock data items.
 */
export const mockData: DataItem[] = [
  {
    id: '1',
    name: 'Public Dataset 1',
    description: 'Description for Public Dataset 1',
  },
  {
    id: '2',
    name: 'Public Dataset 2',
    description: 'Description for Public Dataset 2',
  },
  {
    id: '3',
    name: 'Public Dataset 3',
    description: 'Description for Public Dataset 3',
  },
];
