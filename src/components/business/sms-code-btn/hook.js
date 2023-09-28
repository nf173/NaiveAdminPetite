import { GetSmsCode } from '@/api';
import { REGEXP_PHONE, formatDate, formatTime } from '@/utils'
import { NButton } from 'naive-ui';
import { message, notification } from '@/hooks';

/**
 * @method 获取短信验证码
 * @param {String} phone - 手机号 
 */
export async function getSmsCode(phone, callback) {
  await GetSmsCode(phone).then(res => {
    const ntf = notification.create({
      title: '系统通知',
      content: `短信验证码: ${res.data.code}`,
      meta: currentDateTime(),
      action: () =>
        h(
          NButton,
          {
            text: true,
            type: 'primary',
            onClick: () => {
              ntf.destroy()
            }
          },
          {
            default: () => '已读'
          }
        ),
    });
    callback();
  });
}

/* 验证手机号输入 */
export function isPhoneValid(phone) {
  let valid = true;
  if (phone === '') {
    message.error('手机号码不能为空！');
    valid = false;
  } else if (!REGEXP_PHONE.test(phone)) {
    message.error('手机号码格式错误！');
    valid = false;
  }
  return valid;
}

/* 获取当前时间 */
function currentDateTime() {
  const date = formatDate(new Date());
  const time = formatTime(new Date(), (h, m) => {
    return `${h}:${m}`;
  });

  return `${date} ${time}`
}