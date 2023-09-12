import { service } from '../request';

/**
 * @description: 登录
 * @returns token
 */
export const Login = (data) => {
  return service.post('/user/login', data);
}