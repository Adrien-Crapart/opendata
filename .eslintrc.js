module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'eslint:recommended', // ESLint de base
    'plugin:@typescript-eslint/recommended', // TypeScript recommandé
    'plugin:nuxt/recommended', // Spécifique à Nuxt.js
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // Vous pouvez personnaliser vos règles ici
    '@typescript-eslint/no-unused-vars': 'error',
    'nuxt/no-cjs-in-config': 'off', // Désactiver pour Nuxt 3
  },
};
