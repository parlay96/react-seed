/*
 * @Date: 2022-05-27 09:41:32
 * @Description: 网络请求
 */

import axios from 'axios'

function ajax<T> (options): Promise<T> {
  const {
    url,
    method,
    data,
  } = options
  return new Promise((resolve, reject) => {
    // 这里不需要拦截，拦截器单独放在interceptor文件
    axios({
      url,
      method,
      params: method === 'get' ? data : undefined,
      data: method === 'post' ? data : undefined,
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}

const request = new Proxy(
  {},
  {
    get (_, p) {
      return (data, options = {}) => {
        // eslint-disable-next-line no-extra-parens
        const [method, ...urlArr] = (p as string).split('/')
        const url = `/${urlArr.join('/')}`
        // console.log('url----', url, method)
        return ajax({ url, method: method.toLocaleLowerCase(), data, config: options })
      }
    },
  },
) as Record<string, (data?, options?) => any>

export { request }

