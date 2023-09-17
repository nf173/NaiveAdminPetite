import { token } from '../index';
import { userTemplate } from './index';

// 登录验证码
const captcha = 'qwer';

export default [
  {
    // 登录接口
    url: '/api/user/login',
    timeout: 200,
    method: 'post',
    response: (req) => {
      if(req.body.username === userTemplate.username && req.body.password === userTemplate.password) {
        if(req.body.captcha === captcha) {
          return {
            code: 200,
            msg: '登录成功',
            result: {
              token: token,
              user: {
                ...userTemplate
              }
            },
          }
        } else {
          return {
            code: 406,
            msg: '验证码错误',
            result: null,
          }
        }
      } else {
        return {
          code: 403,
          msg: '用户名或密码错误',
          result: null,
        }
      }
    }
  }
]