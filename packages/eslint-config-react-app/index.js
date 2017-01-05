/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports = {
  root: true,

  parser: 'babel-eslint',

  plugins: ['import', 'flowtype', 'jsx-a11y', 'react'],

  extends: 'eslint-config-airbnb',

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },

  settings: {
    'import/ignore': [
      'node_modules'
    ],
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    }
  },

  rules: {
    'comma-dangle': [2, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'func-names': 0,
    'indent': [2, 2, { SwitchCase: 0 }],
    'max-len': [2, 120, 2],
    'no-else-return': 0,
    'no-console': 0,
    'quote-props': [2, 'consistent-as-needed'],
    'import/prefer-default-export': 1,
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'import/order': [2, {
      'groups': [['builtin', 'external']],
      'newlines-between': 'always',
    }],
    'react/jsx-curly-spacing': [2, 'always'],
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
  },
};
