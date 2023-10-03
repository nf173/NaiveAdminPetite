import { defineStore } from 'pinia';
import { settings } from '@/config';

export const useSettingStore = defineStore('setting', {
  state: () => ({
    locked: JSON.parse(localStorage.getItem('LOCKED')),
    lockPwd: localStorage.getItem('LOCKPWD') || '',

    settingDrawerShow: false,

    ...settings
  }),
  actions: {
    setLocked(value) {
      this.locked = value;
      localStorage.setItem('LOCKED', value);
    },
    setLockPwd(value) {
      this.lockPwd = value;
      localStorage.setItem('LOCKPWD', value);
    }
  }
});