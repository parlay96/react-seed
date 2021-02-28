// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
// https://eslint.bootcss.com/docs/rules/
module.exports =  {
    parser:  '@typescript-eslint/parser',  // 指定ESLint解析器
    extends:  [
        'plugin:react/recommended',  // 使用来自 @eslint-plugin-react 的推荐规则
        'plugin:@typescript-eslint/recommended',  // 使用来自@typescript-eslint/eslint-plugin的推荐规则
        'prettier/@typescript-eslint',  // 使用 ESLint -config-prettier 禁用来自@typescript-eslint/ ESLint 与 prettier 冲突的 ESLint 规则
        // 'plugin:prettier/recommended',
    ],
    parserOptions:  {
        ecmaVersion:  2018,  // 允许解析最新的 ECMAScript 特性
        sourceType:  'module',  // 允许使用 import
        ecmaFeatures:  {
            jsx:  true,  // 允许对JSX进行解析
        },
    },
    rules:  {
        "no-extra-semi": 0, // 禁止不必要的分号
        "quotes": ['error', 'single'], // 强制使用单引号
        "no-unused-vars": 'off', // 不允许未定义的变量
        'semi': [0],
        "@typescript-eslint/no-explicit-any": ["off"], // 不允许使用任何类型
        "@typescript-eslint/explicit-module-boundary-types": ["off"], // 不允许函数不返回值
        "@typescript-eslint/no-unused-vars": ["off"], // 不允许未定义的变量
        "@typescript-eslint/no-empty-function": ["off"],
        "@typescript-eslint/ban-types": [
            "error",
            {
                "extendDefaults": true,
                "types": {
                    "{}": false
                }
            }
        ]
    },
    settings:  {
        react:  {
            version:  'detect',  // 告诉 eslint-plugin-react 自动检测 React 的版本
        },
    },
};
