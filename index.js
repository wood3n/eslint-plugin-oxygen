module.exports = {
  configs: {
    react: {
      env: {
        browser: true,
        es2022: true,
        node: true,
        worker: true
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        allowReserved: false,
        ecmaFeatures: {
          impliedStrict: true,
          jsx: true
        },
        // @typescript-eslint/parser 特殊配置
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      plugins: ['@typescript-eslint','react', 'html'],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      // eslint-plugin-react setting
      settings: {
        react: {
          version: 'detect'
        }
      },
      rules: {
        quotes: ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-single'],
        'no-multi-spaces': 'error',
        'no-trailing-spaces': 'error',
        indent: 'off',
        // https://github.com/eslint/eslint/issues/13956
        '@typescript-eslint/indent': ['error', 2],
        semi: ['error', 'always'],
        'block-spacing': 'error',
        'space-in-parens': ['error', 'never'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'react/jsx-wrap-multilines': ['error', {
          'declaration': 'parens-new-line',
          'assignment': 'parens-new-line',
          'return': 'parens-new-line',
          'arrow': 'parens-new-line',
          'condition': 'ignore',
          'logical': 'ignore',
          'prop': 'ignore'
        }],
        'react/prop-types': 'off'
      }
    }
  }
}