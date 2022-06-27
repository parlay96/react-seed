/*
 * @Author: penglei
 * @Date: 2022-05-26 16:47:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-06 14:05:34
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
    exclude: [/\.module\.(css|scss)/, /\.global\.scss$/, /node_modules/],
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
            exportLocalsConvention: "camelCase",
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
    test: /\.(css|less)$/,
    use: [
      // 'style-loader', // 不要同时使用 style-loader 与 mini-css-extract-plugin。
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.\w+$/i,
          },
        },
      },
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            // 修改antd主题色
            // modifyVars: {
            //   'primary-color': '#1DA57A',
            //   'link-color': '#1DA57A',
            //   'border-radius-base': '2px',
            // },
            javascriptEnabled: true,
          }
        },
      },
    ]
  }
]
