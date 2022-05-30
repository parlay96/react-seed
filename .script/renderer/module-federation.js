/*
 * @Author: pl
 * @Date: 2022-05-30 17:00:57
 * @LastEditors: pl
 * @LastEditTime: 2022-05-30 17:44:01
 * @Description: 模块依赖
 * @FilePath: \yp-pc\.script\renderer\module-federation.js
 */
// https://webpack.docschina.org/plugins/module-federation-plugin
const { ModuleFederationPlugin } = require('webpack').container
const deps = require('../../package.json').dependencies

// 模块联邦在这里配置
module.exports = [
  new ModuleFederationPlugin({
    name: 'pc',
    filename: 'remoteEntry.js',
    exposes: {
      './home': './src/pages/home',
    },
    shared: [
      {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    ],
  }),
]
