/*
 * @Author: penglei
 * @Date: 2022-05-25 20:47:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-21 11:03:49
 * @Description: 渲染进程配置
 */
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const moduleFederation = require('./module-federation')
const scssLoader = require('./scss-loader')
const utils = require('../utils')

let rendererConfig = {
  infrastructureLogging: { level: 'warn' },
  entry: {
    renderer: utils.resolve('src/index.tsx')
  },
  resolve: {
    alias: {
      '@': utils.resolve('src'),
    },
    extensions: ['.tsx', ".js", '.ts', '.json', '.scss', '.css']
  },
  optimization: {
    runtimeChunk: process.env.DEV_MODE == 'single' ? 'single' : 'multiple'
  },
  externals: [],
  module: {
    rules: [
      ...scssLoader,
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: utils.assetsPath('imgs/[name]--[hash].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: utils.assetsPath('media/[name]--[hash].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: utils.assetsPath('fonts/[name]--[hash].[ext]')
        }
      },
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          'thread-loader',
          { loader: 'babel-loader', options: { cacheDirectory: true } }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css',
      chunkFilename: utils.assetsPath('css/[id].[chunkhash:8].css')
    }),
    ...moduleFederation,
    new webpack.DefinePlugin({
      process: {
        env: {
          YP_ENV: JSON.stringify(process.env.YP_ENV),
        }
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: utils.resolve('src/index.html'),
      minify: {
        removeComments: true,//移除注释
        collapseWhitespace: true, //合并多余空格
        removeAttributeQuotes: true//移除分号
      }
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = rendererConfig
