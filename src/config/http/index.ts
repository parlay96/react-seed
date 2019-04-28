import axios from 'axios'
const instance = axios.create()

instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  if (response.status >= 200 && response.status <= 300) {
    // if (response.data.code === '401') {
    // }
    if (response.data) {
      return response
    } else {
      return response
    }
  }
  return Promise.reject(response)
}, error => {
  // let err = '与服务器交互时出现错误，错误码：' + error.response.status
  // console.log(err)
  return Promise.reject(error)
})
export default instance
