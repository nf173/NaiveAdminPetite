import { service } from '../request';

/**
 * @method 获取短信验证码
 * @returns smsCode
 */
export const GetSmsCode = () => {
  return service.get('/smsCode');
}

/**
 * @method 密码登录
 * @returns {String} - Token
 * @returns {Object} - 用户信息 
 */
export const LoginByPwd = (data) => {
  return service.post('/auth/login-by-pwd', data);
}

/**
 * @method 验证码登录
 * @returns {String} - Token
 * @returns {Object} - 用户信息
 */
export const LoginByCode = (data) => {
  return service.post('/auth/login-by-code', data);
}
