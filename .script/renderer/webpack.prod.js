/*
 * @Author: pl
 * @Date: 2022-05-30 11:05:10
 * @LastEditors: pl
 * @LastEditTime: 2022-05-30 17:41:35
 * @Description: file content
 * @FilePath: \yp-pc\.script\renderer\webpack.prod.js
 */
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const WebpackBar = require('webpackbar')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const utils = require('../utils')
const webpackConfig = require('./webpack.common')

module.exports = merge(webpackConfig, {
  mode: 'production',
  optimization: {
    minimize: true, // 插件压缩
    minimizer: [
      new TerserPlugin({ // 压缩js
        test: /\.js($|\?)/i,
        terserOptions: {
          compress: {
            drop_console: true, // 去掉console
            drop_debugger: true, // 去掉debugger
          },
        },
        parallel:  true,
      }),
    ],
    splitChunks: {
      chunks: "async",
      cacheGroups: {
        vendor: { // 将第三方模块提取出来
          minSize: 30000,
          minChunks: 1,
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 1
        },
        commons: {
          test: /[\\/]src[\\/]utils[\\/]/,
          name: 'commons',
          minSize: 30000,
          minChunks: 3,
          chunks: 'initial',
          priority: -1,
          reuseExistingChunk: true // 这个配置允许我们使用已经存在的代码块
        }
      }
    },
    runtimeChunk: { name: 'runtime' }
  },
  // 不打包的模块过滤
  externals: [],
  plugins: [
    new WebpackBar({
      name: '正在编译，请稍等...',
      color: 'red'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: utils.resolve('static'),
          to: utils.resolve(`dist/web/static`),
          globOptions: {
            ignore: ['.*']
          }
        }
      ]
    })
  ]
})
