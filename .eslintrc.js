module.exports = {
  root: true,

  env: {
    node: true
  },

  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],

  rules: {
    'array-element-newline': ['error', 'consistent'],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'only-multiline'],
    "indent": ["error", 2, {
      "ignoredNodes": ["TemplateLiteral"]
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': 'warn',
    'no-trailing-spaces': ['error'],
    'semi': ["error", 'never'],
    // 'quotes': ["error", 'single'],
    'vue/no-mutating-props': 'warn',
  },

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
