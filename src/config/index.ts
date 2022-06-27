/*
 * @Date: 2022-06-06 15:43:04
 * @Description: file content
 */
// * 全局请求接口域名
export const REQUEST_LIST_NEW: { [key: string]: string } = {
  // * 测试站
  DEV: "1",
  // * 预发布
  PRE: "2",
  // * 正式站
  PRO: "3",
}

// * h5各个环境域名地址
export const M_DOMAIN_LIST: { [key: string]: string } = {
  // * 测试站
  DEV: "1",
  // * 预发布
  PRE: "2",
  // * 正式站
  PRO: "3",
}

export const REQUEST_URL: string = REQUEST_LIST_NEW[process.env.YP_ENV || "DEV"]
export const IFRAME_URL: string = M_DOMAIN_LIST[process.env.YP_ENV] || 'http://127.0.0.1:10086/'

export * from "./menu-path"
export { default as routes } from './routes'
