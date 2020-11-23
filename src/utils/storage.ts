/**
 * 存储localStorage || sessionStorage
 */
export const setStore = (params:any) => {
  const { name, content, type } = params
  const ArrayBoolean = content.constructor === Array
  const objBoolean = content.constructor === Object
  const obj = {
    dataType: ArrayBoolean ? 'Array' : objBoolean ? 'Object' : '',
    content: content,
    type: type
  }
  if (type) window.sessionStorage.setItem(name, JSON.stringify(obj))
  else window.localStorage.setItem(name, JSON.stringify(obj))
}
/**
 * 获取localStorage || sessionStorage
 */
export const getStore = (params:any) => {
  const { name, type } = params
  let obj: any = ''
  if (type === 'session') {
    obj = window.sessionStorage.getItem(name)
    if (obj === null) {
      return null
    } else {
      return JSON.parse(obj).content
    }
  } else {
    obj = window.localStorage.getItem(name)
    if (obj === null) {
      return null
    } else {
      return JSON.parse(obj).content
    }
  }
}
/**
 * 删除localStorage || sessionStorage
 */
export const removeStore = (params:any) => {
  const {
    name
  } = params
  window.localStorage.removeItem(name)
  window.sessionStorage.removeItem(name)
}
