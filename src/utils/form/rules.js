import { 
  REGEXP_PHONE, 
  REGEXP_PWD, 
  REGEXP_CODE_SIX, 
  REGEXP_CODE_FOUR 
} from './regexp';

function createRequiredFormRule(message = '不能为空') {
  return {
    required: true,
    message
  }
}

export function createConfirmPwdRule(pwd) {
  const confirmPwdRule = [
    { required: true, message: '请再次输入密码' },
    {
      validator: (rule, value) => {
        if (value !== pwd.value) {
          return Promise.reject(rule.message);
        }
        return Promise.resolve();
      },
      message: '两次密码输入不一致',
      trigger: 'input'
    }
  ];
  return confirmPwdRule;
}

export const formRules = {
  username: [
    createRequiredFormRule('用户名不能为空'),
  ],
  phone: [
    createRequiredFormRule('手机号不能为空'),
    {
      pattern: REGEXP_PHONE,
      message: '手机号格式错误',
      trigger: 'input'
    }
  ],
  password: [
    createRequiredFormRule('密码不能为空'),
    { 
      pattern: REGEXP_PWD, 
      message: '密码为6-18位数字或符号组合', 
      trigger: 'input' 
    }
  ],
  smsCode: [
    createRequiredFormRule('短信验证码不能为空'),
    { 
      pattern: REGEXP_CODE_SIX, 
      message: '验证码格式错误', 
      trigger: 'input' 
    }
  ],
  imgCode: [
    createRequiredFormRule('图片验证码不能为空'),
    { 
      pattern: REGEXP_CODE_FOUR, 
      message: '验证码格式错误', 
      trigger: 'input'
    }
  ]
}