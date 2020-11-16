'use strict'
const webpack = require('webpack')
const {merge} = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const commonConfig = require('./webpack.common')
const config = require('../config')
const utils = require('./utils')

var webpackConfig = merge(commonConfig, {
  mode: 'production',//模式
  output: {
    path: config.build.assetsRoot,//输出文件夹
    publicPath: config.build.assetsPublicPath,// 发布路径,可以是/ 或者是http://yourdomain/的形式
    filename: utils.assetsPath('js/[name].js?_=[chunkhash]'),//输出文件命名规则
    chunkFilename: utils.assetsPath('js/[id].js?_=[chunkhash]') // 不属于entry出入的文件名
  },
  devtool: config.build.devtool,
  cache: true, // 5.0提升构建速度
  optimization: {
    minimize: true, // 插件压缩
    runtimeChunk: true, // 会为每个只含有 runtime 的入口添加一个额外 chunk。此配置的别名如下：
    emitOnErrors: true, // 允许您避免在出现任何错误时发出资产。默认情况下启用，您可以禁用优化
    // 模块分割的选项，
    splitChunks: {
      chunks: 'all',
      minSize: 30000, //默认只有当模块大小大于30Kb的时候才会启用模块分割，可以通过指定一个极小值强制对所有模块进行分割
    },
    // 允许你通过提供一个或多个定制过的 TerserPlugin 实例
    minimizer: [
      // 对js文件进行压缩,在output之中设置了filename和chunkFilename之后，webpack4的默认压缩就无效了
      // new UglifyJsPlugin({
      //   test: /\.js($|\?)/i,
      //   uglifyOptions: {
      //     sourceMap: config.build.productionSourceMap,
      //     mangle: false // 启用代码混淆
      //   }
      // }),
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
      // 5.0不在推荐使用
      // new OptimizeCSSAssetsPlugin({
      //   cssProcessor: require('cssnano'),
      //   cssProcessorOptions: {
      //     discardComments: {removeAll: true},
      //     // 避免 cssnano 重新计算 z-index
      //     safe: true,
      //     //所以这里选择关闭，使用postcss的autoprefixer功能
      //     autoprefixer: false
      //   },
      //   assetNameRegExp: /\.css\?_=[a-z0-9]*$/g
      // })
      new CssMinimizerPlugin()
    ]
  },
  // 不参与打包项
  externals: {},
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/prod.env'),
      'CONTEXT_PATH': JSON.stringify(config.build.assetsPublicPath)
    }),
    new HtmlWebpackPlugin({
      templateParameters: {
        PUBLIC_URL: config.dev.assetsSubDirectory,
        title: config.projectTitle  
      },
      filename: 'index.html',
      template: utils.resolve('public/index.html'),
      inject: true,
      chunksSortMode: 'auto',
      minify: {
        removeComments: true,//移除注释
        collapseWhitespace: true, //合并多余空格
        removeAttributeQuotes: true//移除分号
        // 更多选项请参见:
        // https://github.com/kangax/html-minifier#options-quick-reference
      }
    })
  ]
})
module.exports = webpackConfig
