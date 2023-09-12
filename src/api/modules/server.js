/*
 * @Author: nanfs
 * @Date: 2023-09-04 14:47:47
 * @LastEditTime: 2023-09-12 09:00:45
 * @LastEditors: nanfs
 * @Description: token api
 */

import { service } from '../request';

/**
 * @description: 获取验证码
 * @return {svg}
 */
export const GetMem = () => {
  return service.get('/server/mem');
}