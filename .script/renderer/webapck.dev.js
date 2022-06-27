/*
 * @Author: pl
 * @Date: 2022-05-30 10:56:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-02 11:47:03
 * @Description: file content
 * @FilePath: \yp-pc\.script\renderer\webapck.dev.js
 */
const { merge } = require('webpack-merge')
const webpackConfig = require('./webpack.common')

module.exports = merge(webpackConfig, {
  mode: 'development',
  output: {
    publicPath: '/', // 发布路径
    filename: '[name].js' // 输出文件命名规则
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  devtool: 'eval-source-map'
})
