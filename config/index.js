/*
 * @Author: penglei
 * @Date: 2022-05-26 00:09:33
 * @LastEditors: pl
 * @LastEditTime: 2022-05-28 16:58:23
 * @Description: 关于环境的配置
 */
module.exports = {
  build: {
    assetsSubDirectory: 'static', // 复制静态资源到目录中。地址
  },
  dev: {
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 3000, // 开发环境的端口
    assetsSubDirectory: 'static', // 复制静态资源到目录中。地址
    proxy: {}, // 反向代理
  },
}
