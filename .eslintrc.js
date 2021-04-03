module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  ignorePatterns: [
    '**/*.js',
    '/test/**/*',
    '**/__tests__/*',
    'lib',
    '**/generated/*',
    '.eslintrc.js',
  ],
  rules: {
    'object-curly-newline': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'linebreak-style': 'off',
    'arrow-body-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-confusing-arrow': 'off',
    'react/jsx-curly-newline': 'off',
    'function-paren-newline': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      { arrow: true, return: true, declaration: true },
    ],
    'eol-last': 'warn',
    'react/no-array-index-key': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/indent': 'off',
    'react/require-default-props': 'off',
    'react/jsx-closing-tag-location': 'off',
    'operator-linebreak': 'off',
    'quote-props': 'off',
    'react/destructuring-assignment': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    'no-plusplus': 'off',
  },
};
