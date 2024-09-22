import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { useRuntimeConfig, defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  // Initialize Firebase
  const app = initializeApp({
    apiKey: config.public.FIREBASE_API_KEY as string,
    authDomain: config.public.FIREBASE_AUTH_DOMAIN as string,
    projectId: config.public.FIREBASE_PROJECT_ID as string,
    storageBucket: config.public.FIREBASE_STORAGE_BUCKET as string,
    messagingSenderId: config.public.FIREBASE_MESSAGING_SENDER_ID as string,
    appId: config.public.FIREBASE_APP_ID as string,
    measurementId: config.public.FIREBASE_MEASUREMENT_ID as string,
  });

  // Initialize Firestore
  const db = getFirestore(app);

  return {
    provide: {
      db,
    },
  };
});
