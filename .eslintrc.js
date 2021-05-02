const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: ['airbnb-base', 'plugin:vue/vue3-essential',  'prettier'],
  rules: {
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    quotes: ['error', 'single'],
   'space-before-function-paren': ['error', {
        'anonymous': 'always',
        'named': 'always',
        'asyncArrow': 'always'
    }],
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    semi: [1, 'never'],
    'comma-dangle': ['error', 'never'],
    'linebreak-style': 'off',
    'no-return-assign': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-param-reassign': ['error', { 'props': false }]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src', 'vue-i18n']],
        extensions: ['.js', '.jsx', '.json', '.vue', '.ts']
      }
    }
  }
})
