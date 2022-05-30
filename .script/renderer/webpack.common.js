/*
 * @Author: penglei
 * @Date: 2022-05-25 20:47:23
 * @LastEditors: pl
 * @LastEditTime: 2022-05-30 17:52:04
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
  output: {
    path: utils.resolve('/dist/web'), //输出文件夹
    filename: utils.assetsPath('js/[name].[chunkhash:8].js'),//输出文件命名规则
    chunkFilename: utils.assetsPath('js/[id].[chunkhash:8].js'), // 此选项决定了非初始（non-initial）chunk 文件的名称。
  },
  resolve: {
    alias: {
      '@': utils.resolve('src'),
    },
    extensions: ['.tsx', ".js", '.ts', '.json', '.scss', '.css']
  },
  externals: [],
  module: {
    rules: [
      ...scssLoader,
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: 'imgs/[name]--[hash].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: 'media/[name]--[hash].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: 'fonts/[name]--[hash].[ext]'
        }
      },
      {
        test: /\.ts[x]?$/,
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
      filename: utils.assetsPath('css/[name].[chunkhash:8].css'),
      chunkFilename: utils.assetsPath('css/[id].[chunkhash:8].css')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
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
    ...moduleFederation,
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = rendererConfig
