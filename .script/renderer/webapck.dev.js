/*
 * @Author: pl
 * @Date: 2022-05-30 10:56:34
 * @LastEditors: pl
 * @LastEditTime: 2022-05-30 17:40:36
 * @Description: file content
 * @FilePath: \yp-pc\.script\renderer\webapck.dev.js
 */
const { merge } = require('webpack-merge')
const webpackConfig = require('./webpack.common')

module.exports = merge(webpackConfig, {
  mode: 'development',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  devtool: 'eval-source-map'
})
