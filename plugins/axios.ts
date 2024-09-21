import { defineNuxtPlugin } from '#app';
import axios from 'axios';

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL: 'https://api.example.com', // Replace by API
  });

  return {
    provide: {
      axios: instance,
    },
  };
});
