'use strict';
const eslintrc = {
    env: {
        browser: true,
        node: true,
        mocha: true,
        jest: true,
        es6: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
            legacyDecorators: true // 允许修饰
        },
    },
    plugins: [
        'react',
        'babel',
    ],
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    rules: {
        'no-multi-spaces': 1,
        'jsx-quotes': 0,
        'quote-props': 0,
        'no-script-url': 0,
        'jsx-a11y/label-has-for': 0,
        'func-names': 0,
        'prefer-const': 2,
        'arrow-body-style': 0,
        'no-param-reassign': 0,
        'no-return-assign': 0,
        'max-len': 0,
        'newline-after-import': 0,
        'consistent-return': 2,
        "no-use-before-define": ["error", {"functions": true, "classes": true}],
        "no-unused-vars": ["error", {"vars": "all", "args": "none", "ignoreRestSiblings": false}],
        "no-var": 2,
        "eqeqeq": 2,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
        'import/newline-after-import': 0,
        "react/jsx-uses-vars": "error",
        'react/sort-comp': 2,
        'react/jsx-first-prop-new-line': 0,
        'react/prefer-stateless-function': 0,
        'react/jsx-uses-react': 2,
        'react/jsx-filename-extension': 0,
        'react/display-name': 0
    },
};
eslintrc.globals = {
    React: true,
    ReactDOM: true,
    mountNode: true,
};
Object.assign(eslintrc.rules, {
    'no-console': 0,
    'eol-last': 0,
    'prefer-rest-params': 0,
    'react/no-multi-comp': 0,
    'react/prefer-es6-class': 0,
});
module.exports = eslintrc;
