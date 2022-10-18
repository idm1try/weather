module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  globals: {
    JSX: true,
  },
  ignorePatterns: ['.next/*', 'node_modules/*'],
  rules: {
    'prettier/prettier': 'error',
  },
};
