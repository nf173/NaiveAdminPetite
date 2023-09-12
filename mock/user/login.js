const userTemplate = {
  username: 'admin',
  password: '123456',
  nickname: '威尔逊',
  phone: '13093710522',
  email: '1272487263@qq.com'
}

const captcha = 'qwer';

const token = 'TOKEN-LITTLE-CUTE';

export default [
  {
    url: '/api/user/login',
    timeout: 2000,
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
            code: 403,
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