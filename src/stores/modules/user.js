/*
 * @Author: nanfs
 * @Date: 2023-09-04 14:47:47
 * @LastEditTime: 2023-09-10 19:15:17
 * @LastEditors: nanfs
 * @Description: 
 */

import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state() {
    return {
      token: '',
      username: '',
      nickname: '',
      phone: '',
      email: '',
      avatar: '',
      isLock: false,
      lockPwd: ''
    }
  },
  actions: {
    setToken(value) {
      this.token = value;
    },
    setUser(userInfo) {
      this.username = userInfo.username;
      this.nickname = userInfo.nickname;
      this.phone = userInfo.phone;
      this.email = userInfo.email;
    },
    setLockPwd(value) {
      this.lockPwd = value;
    },
    setIsLock(value) {
      this.isLock = value;
    },

    // 退出登录
    logout() {
      this.setToken(null);
      
      this.setUser({
        username: null,
        nickname: null,
        phone: null,
        email: null
      });

      localStorage.removeItem('ACCESS-TOKEN');
      localStorage.removeItem('USER-INFO');
      localStorage.removeItem('TABS-ROUTES');
    }

  },
  // 开启持久化
  persist: [
    {
      key: 'ACCESS-TOKEN',
      paths: ['token'],
    },
    {
      key: 'USER-INFO',
      paths: ['username', 'nickname', 'phone'],
    },
    {
      key: 'SCREEN-LOCK',
      paths: ['isLock', 'lockPwd']
    }
  ]
})
