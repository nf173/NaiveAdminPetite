/*
 * @Author: nanfs
 * @Date: 2023-09-04 14:47:47
 * @LastEditTime: 2023-09-06 14:29:11
 * @LastEditors: nanfs
 * @Description: token api
 */

import { service } from '../request';

/**
 * @description: 登录
 * @returns token
 */
export const Login = data => {
  // return service.post('/admin/login', data);
  return service.post('/admin/login', data)
}

/**
 * @description: 获取验证码
 * @return {svg}
 */
export const GetCaptcha = () => {
  return service.get('/captcha');
}