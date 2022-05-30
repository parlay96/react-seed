/*
 * @Author: penglei
 * @Date: 2022-05-25 20:47:23
 * @LastEditors: pl
 * @LastEditTime: 2022-05-30 17:45:42
 * @Description: 打包脚本
 */
// 当前环境
process.env.NODE_ENV = 'production'

const del = require('del')
const webpack = require('webpack')
const chalk = require('chalk')

const { greeting } = require('./utils')
const rendererConfig = require('./renderer/webpack.prod')

// 删除文件
async function clean() {
   // 删除web目录
  del.sync(['dist/web'])
}

// 打包
async function build() {
  await greeting()
  await clean()
  webpack(rendererConfig, (err, stats) => {
    if (err || stats.hasErrors()) console.log(err)
    console.log(stats.toString({
      chunks: false,
      colors: true
    }))
    console.log(`${chalk.yellow.bgRed('---------------打包完成---------------')}\n`)
    process.exit()
  })
}


build()
