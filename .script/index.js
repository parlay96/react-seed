
/*
 * @Author: pl
 * @Date: 2022-05-30 09:55:34
 * @LastEditors: pl
 * @LastEditTime: 2022-05-30 17:50:03
 * @Description: file content
 * @FilePath: \yp-pc\.script\index.js
 */
const { spawn } = require('cross-spawn')
const path = require('path')

const { argv } = process

// 启动dev
if (argv.includes('--dev')) {
  spawn('node', [path.join(__dirname, './dev.js')], {
    stdio: 'inherit',
    env: {
      BUILD_TARGET: 'web',
      BABEL_ENV: 'web',
      NODE_ENV: 'development'
    }
  })
}

// 打包web
if (argv.includes('--build')) {
  spawn('node', [path.join(__dirname, './build.js')], {
    stdio: 'inherit',
    env: {
      BUILD_TARGET: 'web',
      BABEL_ENV: 'web',
      NODE_ENV: 'production'
    }
  })
}
