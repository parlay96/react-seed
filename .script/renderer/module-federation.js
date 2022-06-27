/*
 * @Author: pl
 * @Date: 2022-05-30 17:00:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-27 10:28:59
 * @Description: 模块依赖
 * @FilePath: \yp-pc\.script\renderer\module-federation.js
 */
// https://webpack.docschina.org/plugins/module-federation-plugin
const { ModuleFederationPlugin } = require('webpack').container
const deps = require('../../package.json').dependencies

// 模块联邦在这里配置
module.exports = [
  // https://webpack.js.org/concepts/module-federation/#dynamic-public-path
  // new ModuleFederationPlugin({
  //   name: 'pc',
  //   filename: 'remoteEntry.js',
  //   exposes: {
  //     './remoteApp': './src/pages/remoteApp',
  //   },
  //   shared: [
  //     {
  //       ...deps,
  //       react: {
  //         singleton: true,
  //         requiredVersion: deps.react,
  //       },
  //       'react-dom': {
  //         singleton: true,
  //         requiredVersion: deps['react-dom'],
  //       },
  //       'react-redux': {
  //         singleton: true,
  //         requiredVersion: deps['react-redux'],
  //       },
  //     },
  //   ],
  // }),
]
