/*
 * @Author: penglei
 * @Date: 2022-05-26 12:03:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-30 17:58:42
 * @Description:
 */
declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare const process : {
  env: {
    [key: string]: string
  }
}
