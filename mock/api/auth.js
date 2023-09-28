import { smsCode, userModel } from '../model/auth';

const apis = [
  // 短信验证码
  {
    url: '/api/smsCode',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: {
          code: smsCode
        }
      }
    }
  },
  // 密码登录
  {
    url: '/api/auth/login-by-pwd',
    method: 'post',
    response: (req) => {
      const res = userModel.filter(item => {
        return item.username === req.body.username && item.password === req.body.password;
      }); 

      if(res && res.length > 0) {
        const {
          token,
          refreshToken,
          userId,
          userRole,
          username,
          nickname
        } = res[0]
        
        return {
          code: 200,
          message: 'ok',
          data: {
            token,
            refreshToken,
            userInfo: {
              userId,
              username,
              userRole,
              nickname
            }
          }
        }
      } else {
        return {
          code: 404,
          message: '用户名不存在或者密码错误',
          data: null
        }
      }
    }
  },
  // 验证码登录
  {
    url: '/api/auth/login-by-code',
    method: 'post',
    response: (req) => {
      if(req.body.phone && req.body.smsCode === smsCode) {
        const {
          token,
          refreshToken,
          userId,
          username,
          userRole,
          nickname
        } = userModel[0];
        return {
          code: 200,
          message: 'ok',
          data: {
            token,
            refreshToken,
            userInfo: {
              userId,
              username,
              userRole,
              nickname,
            },
          }
        }
      } else {
        return {
          code: 406,
          message: '短信验证码错误',
          data: null
        }
      }
    }
  },
  // 修改用户信息
  {
    url: '/api/auth/user',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        result: null
      }
    }
  },
];

export default apis;