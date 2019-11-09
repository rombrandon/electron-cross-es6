module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-curly-spacing': 0,
    'no-return-await': 0,
    'standard/no-callback-literal': 0,
    'camelcase': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
