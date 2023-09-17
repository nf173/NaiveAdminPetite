import { service } from '../request';

/**
 * @description: 登录
 * @returns token
 */
export const Login = (data) => {
  return service.post('/user/login', data);
}

/**
 * @description: 获取验证码
 * @return {svg}
 */
export const GetCaptcha = () => {
  return service.get('/captcha');
}

/**
 * @description: 获取用户头像
 * @return {string} 返回头像链接
 */
export const GetAvatar = () => {
  return service.get('/user/avatar');
}