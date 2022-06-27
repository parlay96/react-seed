/*
 * @Date: 2022-06-09 14:27:45
 * @Description: 请求拦截器
 */

import Qs from 'qs'
import axios from 'axios'
import { message } from 'antd'
import { deleteStore, TOKEN, USERINFO, getStore } from '@/utils'
import { actions, dispatch } from '@/store'
import { REQUEST_URL } from '@/config'

/** 获取请求header信息 */
export const getRequestHeader = (): Record<string, string> => {
  const system_time = `${Math.floor(new Date().getTime() / 1000)}`
  return {
    // requestType: "form",
    // /** 系统时间 */
    // system_time,
    // /** 终端 */
    // system_type: "computer",
    // /** 来源端 1-鱼泡网 */
    // business: "1",
    // /** 版本号 */
    // version: "2.8.5",
  }
}

/* 基础配置 */
axios.defaults.baseURL = '/api' // 不适用代理就直接用这个变量 REQUEST_URL
axios.defaults.timeout = 200000
axios.defaults.headers = { ...axios.defaults.headers, ...getRequestHeader() }

/** 请求拦截 */
axios.interceptors.request.use(async (config: any) => {
  /** 序列化请求参数 */
  config.paramsSerializer = (params: any) => {
    return Qs.stringify(params, { arrayFormat: "indices" })
  }
  /** 如果是客户端直接取，如果是服务端需要token，那么自己在参数里面传递进来 */
  config.headers['Authorization'] = await getStore(TOKEN)
  return config
}, error => {
  return Promise.reject(error)
})

/** 响应拦截 */
axios.interceptors.response.use(response => {
  const { code } = response?.data
  /** ！head解决那种cdn获取的json数据请求，他们没有head参数 */
  if (response.status === 200 && code == 0) {
    return Promise.resolve(response)
  } else {
    errorHandler(response?.data)
    return Promise.reject(response.data)
  }
}, error => {
  errorHandler(error)
  return Promise.reject(error)
})

/** request 服务器请求状态值 */
const codeMessage: Record<number, string> = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  405: "请求方法不被允许。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
}

/** 网络请求 统一的异常处理 */
const errorHandler = (error: any) => {
  const { response, code } = error
  const { pathname } = window.location
  if (code === 401) {
    // 清楚存储用户信息
    // redirectHome()
  }
  if (code === 403) {
    message.error(error.msg)
  }
  /** 获取状态码信息 定位错误原因 */
  if (response && response.status) {
    const { status, statusText } = response
    const errMsg: string = codeMessage[status] || statusText
    message.error(`状态码:${status}${errMsg}`)
  }
  /** 抛出错位 */
  throw error
}

/** @name 登录失效重定向首页 */
export const redirectHome = () => {
  /** 删除用户信息 */
  deleteStore(USERINFO)
  /** 删除token */
  deleteStore(TOKEN)
  // 设置登录状态
  dispatch(actions.userActions.setState({isLogin: false}))
  window.location.href = '/'
}
