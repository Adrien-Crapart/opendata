import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  // Définit l'environnement
  env: {
    browser: true,
    es2021: true,
  },
  // Indique le langage
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  // Définit les règles
  rules: {
    'no-console': 'warn', // Avertir lors de l'utilisation de console.log
    semi: ['error', 'always'], // Exiger un point-virgule
    '@typescript-eslint/no-unused-vars': 'warn', // Avertir des variables inutilisées
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: { max: 1, allowFirstLine: false },
      },
    ],
  },
  // Extensions et plugins
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  // Plugins
  plugins: ['vue', '@typescript-eslint'],
  // Chemins des fichiers à inclure
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off', // Permet les noms de composants à un mot
      },
    },
  ],
});
