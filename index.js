module.exports = {
  configs: {
    react: {
      env: {
        browser: true,
        es2022: true,
        node: true
      },
      // js 文件走默认 parser
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['react', 'html'],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime'
      ],
      // eslint-plugin-react setting
      settings: {
        react: {
          version: 'detect'
        }
      },
      overrides: [
        {
          files: ['*.ts', '*.tsx'],
          parser: '@typescript-eslint/parser',
          plugins: ['@typescript-eslint'],
          extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
          parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            allowReserved: false,
            ecmaFeatures: {
              impliedStrict: true,
              jsx: true
            },
            // @typescript-eslint/parser 特殊配置
            project: ['./tsconfig.json', './tsconfig.node.json'],
          },
        }
      ],
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