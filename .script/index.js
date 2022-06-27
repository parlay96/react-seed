/*
 * @Author: pl
 * @Date: 2022-05-30 09:55:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-21 11:59:59
 * @Description: file content
 * @FilePath: \yp-pc\.script\index.js
 */
const { spawn } = require("cross-spawn")
const path = require("path")

const { argv } = process

if (argv.includes("--dev")) {
  const yp_env = argv.find(item => item.indexOf('env') >= 0)
  spawn("node", [path.join(__dirname, "./dev.js")], {
    stdio: "inherit",
    env: {
      ...process.env,
      NODE_ENV: "development",
      DEV_MODE: "single",
      YP_ENV: yp_env ? yp_env.slice(4) : null
    }
  })
}

// 打包web
if (argv.includes("--build")) {
  const yp_env = argv.find(item => item.indexOf('env') >= 0)
  spawn("node", [path.join(__dirname, "./build.js")], {
    stdio: "inherit",
    env: {
      ...process.env,
      NODE_ENV: 'production',
      YP_ENV: yp_env ? yp_env.slice(4) : null
    }
  });
}
