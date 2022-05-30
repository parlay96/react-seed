/*
 * @Author: penglei
 * @Date: 2022-05-26 16:21:27
 * @LastEditors: penglei
 * @LastEditTime: 2022-05-27 11:42:50
 * @Description:
 */
// https://www.npmjs.com/package/cfonts
const { say } = require('cfonts')
const chalk = require('chalk')
const path = require('path')
const config = require('../config')
/**
 * 解析静态文件路径
 * @param _path
 */
exports.assetsPath = (_path) => {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
 }

exports.resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

exports.greeting = async () => {
  say('yu-pao', {
    colors: ['yellow'],
    font: 'simple3d',
    space: false
  })
}

exports.logStats = (proc, data) => {
  let log = ''

  log += chalk.yellow.bold(`┏ ${proc} ${new Array((19 - proc.length) + 1).join('-')}`)
  log += '\n\n'

  if (typeof data === 'object') {
    data.toString({
      colors: true,
      chunks: false
    }).split(/\r?\n/).forEach(line => {
      log += '  ' + line + '\n'
    })
  } else if(data) {
    log += `  ${data}\n`
  }

  log += '\n' + chalk.yellow.bold(`┗ ${new Array(28 + 1).join('-')}`) + '\n'
  console.log(log)
}
