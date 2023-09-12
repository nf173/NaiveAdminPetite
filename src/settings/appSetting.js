/*
 * @Author: nanfs
 * @Date: 2023-09-05 11:55:36
 * @LastEditTime: 2023-09-10 22:51:42
 * @LastEditors: nanfs
 * @Description: 站点设置
 */
import navSetting from './navSetting';
import menuSetting from './menuSetting';
import animateSetting from './animateSetting';

const appSetting = {
  // 系统主题
  theme: 'light',
  // 是否为移动端
  isMobile: false,
  // 站点语言
  language: 'zh',
  isTabs: true,

  ...navSetting,
  ...menuSetting,
  ...animateSetting,
}

export default appSetting;