import { defineStore } from 'pinia';
import { LoginByPwd, LoginByCode } from '@/api';
import { getToken, getUserInfo } from './helpers';
import { useSettingStore } from '@/stores';
import { message } from '@/hooks';
import router from '@/router';

export const useAuthStore = defineStore('auth', {
  state() {
    return {
      mode: 'pwd',

      isLoginLoading: false,  // 是否登陆请求中
      isRegisterLoading: false,  // 是否注册请求中
      imgCode: '',  // 图片验证码

      token: getToken(),
      userInfo: getUserInfo()
    }
  },
  actions: {
    resetLoadingStatus() {
      this.isLoginLoading = false;
      this.isRegisterLoading = false;
    },

    setUserInfo(userInfo) {
      this.userInfo = { ...userInfo };
    },

    /**
     * @method 密码登录
     * @param {String} username - 用户名
     * @param {String} password - 密码
     */
    async loginByPwd({ username, password }) {
      await LoginByPwd({ username, password }).then(res => {
        if(res.code === 200) {
          this.token = res.data.token;
          this.userInfo = res.data.userInfo;
          const settingStore = useSettingStore();
          router.push(settingStore.baseHome);
        } else {
          message.error(res.message);
        }
      });
    },

    /**
     * @method 验证码登录
     * @param {String} phone - 手机号
     * @param {String} code - 验证码
     */
    async loginByCode(phone, smsCode, imgCode) {
      if(this.imgCode !== imgCode) {
        message.error('图片验证码错误');
      } else {
        this.isLoginLoading = true;
        await LoginByCode({ phone, smsCode }).then(res => {
          if(res.code === 200) {
            this.token = res.data.token;
            this.userInfo = res.data.userInfo;
            this.isLoginLoading = false;
            const settingStore = useSettingStore();
            router.push(settingStore.baseHome);
          } else {
            message.error(res.message);
          }
        });
      }
    },

    /**
     * @method 退出登录
     */
    logout() {
      this.token = null;
      this.userInfo = null;
    }
  },
  persist: [
    {
      storage: localStorage,
      key: 'ACCESS-TOKEN',
      paths: ['token'],
    },
    {
      storage: localStorage,
      key: 'USER-INFO',
      paths: ['userInfo'],
    }
  ]
});

