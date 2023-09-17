import { verifyToken } from '../index';
import { userTemplate } from './index';

export default [
  {
    // 用户头像
    url: '/api/user/avatar',
    timeout: 800,
    method: 'get',
    response: (req) => {
      if(!verifyToken(req.headers.authorization)) {
        return {
          code: 406,
          msg: '验证码错误或已过期',
          result: null
        }
      } else {
        return {
          code: 200,
          msg: '',
          result: {
            avatar: userTemplate.avatar
          }
        }
      }
      
    }
  }
];
