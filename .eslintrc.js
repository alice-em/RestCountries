module.exports = {
  root: true,
  settings: {
    settings: {
      react: {
        createClass: 'createReactClass', // Regex for Component Factory to use,
        // default to "createReactClass"
        pragma: 'React', // Pragma to use, default to "React"
        version: 'detect', // React version. "detect" automatically picks the version you have installed.
        // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
        // default to latest and warns if missing
        // It will default to "detect" in the future
        flowVersion: '0.53', // Flow version
      },
      propWrapperFunctions: [
        // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
        'forbidExtraProps',
        { property: 'freeze', object: 'Object' },
        { property: 'myFavoriteWrapper' },
      ],
      linkComponents: [
        // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
        'Hyperlink',
        { name: 'Link', linkAttribute: 'to' },
      ],
    },
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    allowImportExportEverywhere: false,
  },
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // enable rules
    'arrow-parens': [2, 'as-needed'],
    'no-confusing-arrow': 2,
    'no-console': 1,
    'react-hooks/rules-of-hooks': 2,
    'react/forbid-prop-types': 1,
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-no-useless-fragment': 2,
    'react/jsx-one-expression-per-line': 2,
    'react/jsx-pascal-case': 1,
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-props-no-spreading': 1,
    'react/jsx-sort-default-props': 1,
    'react/jsx-sort-props': 1,
    'react/no-typos': 1,

    // override default options for rules from base configurations
    eqeqeq: [2, 'smart'],
    'max-len': [2, { code: 120, tabWidth: 2, ignoreUrls: true }],
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 4 }],
    'no-cond-assign': [2, 'except-parens'],
    'no-multi-spaces': [2],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/jsx-fragments': [2, 'element'],

    // disable rules
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 0,
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-nested-ternary': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-boolean-value': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
  },
};
