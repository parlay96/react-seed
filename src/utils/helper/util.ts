/*
 * @Date: 2022-06-17 10:52:05
 * @Description: file content
 */

export const isObj = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
