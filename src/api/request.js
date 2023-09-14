import axios from 'axios';
import { useUserStore } from '@/stores/modules/user';

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
  const userStore = useUserStore();
  if(userStore.token) {
    res.headers.Authorization = userStore.token;
  }
  return res;
}, err => {
  Promise.reject(err);
})

// 响应拦截器
service.interceptors.response.use(res => {
  if(res.status === 200) {
    return Promise.resolve(res);
  } else {
    return Promise.reject(res.data);
  }
}, err => {
  return Promise.reject(err.response);
});