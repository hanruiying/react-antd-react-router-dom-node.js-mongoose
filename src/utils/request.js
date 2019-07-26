import axios from 'axios'
import { message } from 'antd'
import config from '../config';
// const baseURL = '';
// 创建axios实例
const service = axios.create({
  // baseURL: baseURL, // api 的 base_url
  timeout: config.timeout // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const code = response.status
    if ((code < 200 || code > 300)) {
      message.error({
        title: response.message
      })
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default service
