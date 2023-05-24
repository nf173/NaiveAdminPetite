import axios from 'axios'

export const service = axios.create({
  baseURL: 'http://127.0.0.1:4523/m1/2669239-0-default',
  timeout: 50000,
  withCredentials: true,  // 跨域是否需使用凭证
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  }
})

// 请求拦截器
service.interceptors.request.use(res => {
  return res
}, err => {
  Promise.reject(err)
})

// 响应拦截器
service.interceptors.response.use(res=>{
  if(res.status === 200) {
    return Promise.resolve(res.data)
  } else {
    return Promise.reject(res.data)
  }
}, err=>{
  return Promise.reject(err.response)
});