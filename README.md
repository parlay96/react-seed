# A React + TypeScript pc seed

> author: penglei

> 这应该是目前 react 生态圈，最新的东西。以及前端 webpack 打包，代码检测，ts 等等都是最新的版本！

> 该种子特别的注重模块化,以及开发项目面临的代码协调问题！

> React 17.0.1

> webpack": "^5.4.0

> babel:7x

> react-router：5x

> typescript: 4x

## 种子的目录描述

> {

        build:  打包配置
        config: 打包配置选项
        public：静态文件地址
        src： { // 项目代码
                apiUrl： api 接口地址
                components： 公用组件
                config：项目的配置文件如 http，基础路由
                permission： 权限
                stores； 公用的 store
                themes: 项目的公用样式
                utils：项目的插件
                view： 页面模块
                reportWebVitals 文件： 性能检测
                index 文件： 项目入口
                App 文件：模板入口
        }
        typings：ts 全局变量集中地

> }

## 新的 webpack 版本

> "webpack": "^5.4.0","webpack-cli": "^4.2.0", "webpack-dev-server": "^3.11.0",

## 旧的 webpack 版本

> "webpack": "^4.44.2","webpack-cli": "^3.3.12","webpack-dev-server": "^3.11.0",

## package.json npm 脚本部分描述

#### start 启动项目

> --inline https://webpack.docschina.org/configuration/dev-server/#devserverinline

> --progress 运行进度输出到控制台

> --config ，特定情况使用不同的配置文件，则可以通过在命令行中使用 --config 修改此配置文件名称

> "start": "webpack serve --inline --progress --config build/webpack.dev.conf.js",

#### lint 检测

> 即会检查 src 目录下的所有 .js,.jsx,.ts,.tsx 后缀的文件的代码规范 https://eslint.bootcss.com/docs/user-guide/command-line-interface#--ext

> "lint": "eslint --ext .js,.jsx,.ts,.tsx src",

#### lint 修复(修复不了某些问题，最好还是人工手动！)

> 即会修复 src 目录下的所有 .js,.jsx,.ts,.tsx 后缀的文件 https://eslint.bootcss.com/docs/user-guide/command-line-interface#--fix

> "lint-fix": "eslint --fix --ext .js,.jsx,.ts,.tsx src",

#### 打包项目

> "build": "webpack --config build/webpack.prod.conf.js"
