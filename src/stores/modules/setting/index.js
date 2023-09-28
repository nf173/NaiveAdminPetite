import { defineStore } from 'pinia';
import { settings } from '@/config';

export const useSettingStore = defineStore('setting', {
  state: () => ({
    locked: false,
    lockPwd: '',

    settingDrawerShow: false,

    ...settings
  }),
  persist: [
    {
      key: 'SCREEN-LOCK',
      paths: ['locked', 'lockPwd']
    },
  ]
});