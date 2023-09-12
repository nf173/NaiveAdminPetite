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
      email: ''
    }
  },
  actions: {
    setToken(value) {
      this.token = value;
    },
    setUsername(value) {
      this.username = value;
    },
    setNickname(value) {
      this.nickname = value;
    },
    setPhone(value) {
      this.phone = value;
    },
    setEmail(value) {
      this.email = value;
    },

    // 退出登录
    logout() {
      this.setToken(null);
      this.setUsername(null);
      this.setNickname(null);
      this.setPhone(null);

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
    }
  ]
})
