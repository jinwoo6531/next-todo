module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    quotes: ['error', 'double'], //더블 쿼터 사용
    '@typescript-eslint/quotes': ['error', 'double'],
    'no-unused-vars': 'off', //사용 안한 변수 경고 중복
    '@typescript-eslint/no-unused-vars': 'warn',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/no-array-index-key': 'off',
    'comma-dangle': 'off',
    'arrow-body-style': 'off',
    'react/prop-types': 'off',
    'object-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-shadow': 'off',
    'spaced-comment': 'off',
    'operator-linebreak': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'global-require': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'import/prefer-default-export': 'off',
    'no-param-ressign': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
};
