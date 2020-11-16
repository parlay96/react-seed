import {routerInit } from '../config' // 全局基础路由，可以理解为公用部分
import storesIndex from '../stores' // 全局基础store，可以理解为公用部分

// 各个模块的，每个模块负责自身的相关逻辑，不予其他模块相关联！
// 它们应该只有业务上的往来，没有代码上的往来,这样方便维护。
import homeModule from './homeModule'
import userModule from './userModule'

// 合并模快路由
const routerData = [
    ...routerInit, // 可以理解为公用部分
    ...homeModule.router,
    ...userModule.router
 ]
// 合并store 对于这个对象的key是，是非常的关键，它将是你应用中去取mobx的东西的模块名！
const storeObj = {
  storesIndex: storesIndex, // 可以理解为公用部分
  homeModules: homeModule.store,
  userModules: userModule.store
}

// console.log('整个项目的路由信息: ', routerData)
// console.log('整个项目的store: ', {...storeObj})

export {routerData, storeObj}