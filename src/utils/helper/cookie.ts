/*
 * @Date: 2022-06-13 10:23:20
 * @Description: file content
 */
import cookie, { CookieAttributes } from "js-cookie"

const checkServer = () => typeof window === "undefined"
/**
 * 基于js-cookie插件进行封装
 * Client-Side -> 直接使用js-cookie API进行获取
 * Server-Side -> 使用ctx.req进行获取（req.headers.cookie）
 */
export const getCookie = (key: string, req?: any) => {
  return !checkServer ? getCookieFromBrowser(key) : getCookieFromServer(key, req)
}

/**
 * @description 从浏览器端获取cookie
 */
export const getCookieFromBrowser = (key: string) => {
  if (cookie.get(key) === "undefined") {
    return undefined
  }
  return JSON.parse(cookie.get(key) || "null")
}

/**
 * @description 从服务端获取cookie数据
 */
export const getCookieFromServer = (key: string, req: any) => {
  if (!req || !req.headers.cookie) {
    return undefined
  }
  const rawCookie = req.headers.cookie.split(";").find((c: string) => c.trim().startsWith(`${key}=`))
  if (!rawCookie) {
    return undefined
  }
  if (rawCookie.split("=")[1] == "undefined") {
    return undefined
  }
  const areaInfo = JSON.parse(decodeURIComponent(rawCookie.split("=")[1]) || "null")
  return areaInfo
}

/**
 * @description 设置cookie
 */
export const setCookie = (key: string, value: any, options?: CookieAttributes) => {
  if (!checkServer) {
    cookie.set(key, JSON.stringify(value), options)
  }
}

/**
 * @description 移除cookie
 */
export const removeCookie = (key: string) => {
  if (!checkServer) {
    cookie.remove(key, {
      expires: 1,
    })
  }
}
