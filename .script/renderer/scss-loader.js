/*
 * @Author: penglei
 * @Date: 2022-05-26 16:47:30
 * @LastEditors: pl
 * @LastEditTime: 2022-05-30 17:59:01
 * @Description:
 */
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const pathSass = '../../src/assets/styles'

module.exports = [
  {
    //.css.scss文件解析
    test: /\.(css|scss)$/, //匹配到css结尾的文件，加载css-loader，
    //去除.module.css; .module.scss，因为有单独处理
    exclude: [/\.module\.(css|scss)/, /\.global\.scss$/],
    use: [
      {
        loader: 'style-loader',
      },
      {
        //css单独分离文件加载
        loader: MiniCssExtractPlugin.loader,
        options: {
          esModule: false
        }
      },
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.resolve(__dirname, `${pathSass}/mixins.scss`),
            path.resolve(__dirname, `${pathSass}/variable.scss`),
          ]
        }
      }
    ]
  },
  {
    //.module.css; .module.scss文件解析，添加css modules，防止样式感染
    test: /\.module\.(css|scss)/, // 匹配到scss结尾的文件
    use: [
      // {
      //   loader: 'style-loader',
      // },
      {
        //css单独分离文件加载
        loader: MiniCssExtractPlugin.loader,
        options: {
          esModule: false
        }
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: {
            localIdentName: '[local]_[hash:base64:5]'
          }
        }
      },
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.resolve(__dirname, `${pathSass}/mixins.scss`),
            path.resolve(__dirname, `${pathSass}/variable.scss`),
          ]
        }
      }
    ]
  },
  {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, "css-loader"]
  },
]
