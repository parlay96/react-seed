import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {httpInstance, routerInit } from './config/index'
import { homeModule, userModule } from './viewModule/index' // 引入模快
import storesIndex from './stores/index' // 全局store
import {Provider} from "mobx-react";
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

(React as any).http = httpInstance
// 合并模快路由
const routerData = [...homeModule.router, ...userModule.router]
// 合并store
const storeObj = {
  homeModules: homeModule.store,
  userModules: userModule.store,
  storesIndex: storesIndex
}

console.log('author: penglei, 博客站https://www.cnblogs.com/plBlog/， React + TypeScript PC端种子')
// 该项目种子特别注重规范，引入了eslint代码检测，在写法上一定要规范
// eslint代码检测，使用它可以避免低级错误和统一代码的风格

// console.log('整个项目的路由信息: ', routerData)
// console.log('整个项目的store: ', {...storeObj})

ReactDOM.render(
  <Provider {...storeObj}>
      {/*
      React.StrictMode严格模式, StrictMode目前有助于：
            1.识别具有不安全生命周期的组件
            2.有关旧式字符串ref用法的警告
            3.关于已弃用的findDOMNode用法的警告
            4.检测意外的副作用
            5.检测遗留 context API
      */}
      <BrowserRouter>
          <App router={[...routerData, ...routerInit]}/>
      </BrowserRouter>
  </Provider>
  , document.getElementById('root')
)

// 如果你想开始衡量你的应用程序的性能，传递一个函数
// 记录结果（例如：reportWebVitals(控制台.log))
// 或发送到分析终结点。了解更多：https://bit.ly/CRA-vitals
reportWebVitals(console.log);
