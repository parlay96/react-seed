
/*
 * @Author: penglei
 * @Date: 2022-05-25 20:47:23
 * @LastEditors: pl
 * @LastEditTime: 2022-05-30 17:46:24
 * @Description: 本地运行脚本
 */

// 当前环境
process.env.NODE_ENV = 'development'

const chalk = require('chalk')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portFinder = require("portfinder")

const { logStats } = require('./utils')
const config = require('../config')
const rendererConfig = require('./renderer/webapck.dev')

const devServerOptions = {
  client: {
    logging: 'info',
    overlay: true, // 浏览器显示错误
    progress: true, // 浏览器显示进度
  },
  historyApiFallback: true,
  hot: true, // 热更新
  // magicHtml: true,
  open: false, // 自动打开浏览器
  host: config.dev.host,
  port: config.dev.port, // 端口号
  compress: true, // 开启gzip压缩
  static: false, // 静态资源的本地路径
  proxy: config.dev.proxy // 配置代理
}

// 执行渲染进程
function startRenderer() {
  return new Promise((resolve, reject) => {
    rendererConfig.mode = 'development'
    portFinder.basePort = config.dev.port
    // 获取一个可用的端口
    portFinder.getPort((err, port) => {
      if (err) {
        reject("------------portError:" + err)
      } else {
        rendererConfig.plugins.push(new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`Your application is running here: http://localhost:${port}`]
          },
          onErrors: undefined
        }))
        const compiler = webpack(rendererConfig)
        // compilation 创建之后执行。
        compiler.hooks.done.tap('done', stats => {
          logStats('渲染进程正在编译', stats)
        })
        // 创建服务
        const server = new WebpackDevServer(devServerOptions, compiler)
        // 挂载端口,开发环境很重要
        process.env.PORT = port
        // 启动服务
        server.start().then(() => {
          resolve()
        })
      }
    })
  })
}

async function init() {
  console.log(chalk.blue.bgRed(` 准备编译...`))
  try {
    await startRenderer()
  } catch (error) {
    console.error(error)
  }
}

init()
