// @ts-check
// const { builtinModules } = require('node:module');
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard-with-typescript',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      'boilerplates/vite-react-ts/tsconfig.json',
      'boilerplates/vite-react-ts/tsconfig.node.json',
    ],
  },
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'testing-library'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
});
