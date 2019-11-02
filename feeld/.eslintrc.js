module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier'],
  rules: {
    'no-console': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/class-name-casing': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    "semi": "off",
    "@typescript-eslint/semi": ["error", "never"]
  },
  settings: {
    "react": {
      "version": "16.8.3", // React version.
    },
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.android.js',
          '.ios.js',
          '.jsx',
          '.android.jsx',
          '.ios.jsx',
          '.tsx',
          '.ts',
          '.android.tsx',
          '.android.ts',
          '.ios.tsx',
          '.ios.ts',
        ],
      },
    },
  },
}
