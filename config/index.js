'use strict'

const path = require('path')
const CONTEXT_PATH = '/'
module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static', // 复制静态资源到目录中。地址
    assetsPublicPath: CONTEXT_PATH, // 项目发布路径，必须以 '/'结尾
    proxyTable: {
      "/reactSeed": {
        target: "http://192.168.0.161:8765",
        pathRewrite: {
          "^/reactSeed": ""
        }
      }
    }, // devServer反向代理列表

    // 各种开发服务器设置
    host: 'localhost', // can be overwritten by process.env.HOST // 你也可以用 你电脑的IP
    port: 80, // 可以被process.env覆盖。端口，如果端口正在使用，将确定一个空闲端口
    autoOpenBrowser: false,
    errorOverlay: true, // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖。默认情况下禁用。如果你只想显示编译错误: true
    notifyOnErrors: true, // 启动dev 跑项目时，是否显示错误信息
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // 使用Eslint?
    useEslint: true,
    // 是否将 eslint  错误覆盖在浏览器中
    showEslintErrorsInOverlay: false,

    // https://webpack.js.org/configuration/devtool/#development
    // 选择一种 source map 格式来增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度。
    devtool: 'source-map',
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: CONTEXT_PATH,
    /**
     * Source Maps
     */
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: false,
  }
}
