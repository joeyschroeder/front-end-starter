module.exports = {
  env: {
    browser: true,
    'jest/globals': true,
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:prettier/recommended', 'plugin:react/recommended'],
  globals: {
    MyGlobal: true,
  },
  ignorePatterns: ['**/*.snap', '**/coverage/**/*', '**/docs/**/*'],
  parser: '@babel/eslint-parser',
  plugins: ['jest', 'sort-destructure-keys'],
  rules: {
    'consistent-return': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.js', 'jest.config.js', 'jest.setup.js', 'webpack.config.js', 'webpack/**/*.js'],
      },
    ],
    'import/no-unused-modules': ['error', { unusedExports: true }],
    'import/prefer-default-export': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/label-has-for': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'no-import-assign': 0,
    'no-restricted-globals': 0,
    'no-shadow': 0,
    'prettier/prettier': [
      1,
      {
        endOfLine: 'auto',
        printWidth: 120,
        singleQuote: true,
      },
    ],
    quotes: ['error', 'single'],
    radix: 0,
    'react/forbid-prop-types': [2, { forbid: ['any'] }],
    'react/jsx-filename-extension': [0],
    'react/jsx-fragments': [2, 'element'],
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-one-expression-per-line': [0],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-props': [1],
    'react/no-unused-prop-types': 1,
    'react/sort-prop-types': [1],
    'react/static-property-placement': [1, 'static public field'],
    semi: ['error', 'always'],
    'sort-destructure-keys/sort-destructure-keys': 1,
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {},
      },
    },
  },
};
