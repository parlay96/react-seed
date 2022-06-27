/*
 * @Author: penglei
 * @Date: 2022-05-26 00:09:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-31 15:27:01
 * @Description: 关于环境的配置
 */
module.exports = {
  build: {
    assetsSubDirectory: 'static', // 复制静态资源到目录中。地址
  },
  dev: {
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 3000, // 开发环境的端口
    assetsSubDirectory: 'static', // 复制静态资源到目录中。地址
    proxy: {
      '/api': {
        pathRewrite: {'^/api' : ''},
        target: 'http://gcgl.superinyang.com',
        changeOrigin: true, // target是域名的话，需要这个参数，
      }
    }, // 反向代理
  },
}
