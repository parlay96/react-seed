import 'babel-polyfill' // 引入填充库,解决IE不能显示的问题
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {httpInstance, routerInit } from './config/index'
import { homeModule, userModule } from './components/viewModule/index' // 引入模快
import storesIndex from './stores/index' // 全局store
import {Provider} from "mobx-react";
import {BrowserRouter} from "react-router-dom";
(React as any).http = httpInstance

// 合并模快路由
const routerData = [...homeModule.router, ...userModule.router]
// 合并store
const storeObj = {
  homeModules: homeModule.store,
  userModules: userModule.store,
  storesIndex: storesIndex
}

console.log('author: penglei, 博客站www.plblog.cn， React + TypeScript PC端种子')
// 该项目种子特别注重规范，引入了eslint代码检测，在写法上一定要规范
// eslint代码检测，使用它可以避免低级错误和统一代码的风格

// console.log('整个项目的路由信息: ', routerData)
// console.log('整个项目的store: ', {...storeObj})

ReactDOM.render(
  <Provider {...storeObj}>
    <BrowserRouter>
      <App router={[...routerData, ...routerInit]}/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app'))
