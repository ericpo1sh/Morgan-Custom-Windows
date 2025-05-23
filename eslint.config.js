import js from '@eslint/js'
import globals from 'globals'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.js'], // Changed from js,jsx
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
]
