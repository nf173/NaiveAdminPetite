/*
 * @Author: nanfs
 * @Date: 2023-09-05 12:06:16
 * @LastEditTime: 2023-09-10 22:51:46
 * @LastEditors: nanfs
 * @Description: 
 */

import { defineStore } from 'pinia';
import appSetting from '@/settings/appSetting';

const {  
  theme,
  navMode,
  navTheme,
  language,
  isMobile,
  menuSetting,
  isToggleAnimation,
  toggleAnimationType,
  isTabs
} = appSetting;

export const useSettingStore = defineStore('setting', {
  state: () => ({
    theme,
    navMode,
    navTheme,
    language,
    isMobile,
    menuSetting,
    isToggleAnimation,  // 是否开启切换动画
    toggleAnimation: toggleAnimationType[1],
    isTabs
  }),
  actions: {
    setNavTheme(value) {
      this.navTheme = value;
    },
    setIsMobile(value) {
      this.isMobile = value;
    },
    setLanguage(value) {
      this.language = value;
    },
    setIsToggleAnimation(value) {
      this.isToggleAnimation = value;
    },
    setToggleAnimation(value) {
      this.toggleAnimation = value;
    },

    setTabs(value) {
      this.isTabs = value;
    }
  }
})
