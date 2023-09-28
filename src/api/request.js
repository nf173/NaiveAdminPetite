import axios from 'axios';
import { useAuthStore } from '@/stores';

export const service = axios.create({
  baseURL: '/api',
  timeout: 2000,
  // 跨域是否需使用凭证
  withCredentials: true,  
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  }
})

// 请求拦截器
service.interceptors.request.use(res => {
  const authStore = useAuthStore();
  if(authStore.token) {
    res.headers.Authorization = authStore.token;
  }
  return res;
}, err => {
  Promise.reject(err);
})

// 响应拦截器
service.interceptors.response.use(res => {
  if(res.status === 200) {
    return Promise.resolve(res.data);
  } else {
    return Promise.reject(res.data);
  }
}, err => {
  return Promise.reject(err.response);
});