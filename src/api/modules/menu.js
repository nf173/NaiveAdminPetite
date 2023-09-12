/*
 * @Author: nanfs
 * @Date: 2023-09-05 13:39:06
 * @LastEditTime: 2023-09-06 15:30:24
 * @LastEditors: nanfs
 * @Description: menu api
 */

import { service } from '../request';

export const GetMenus = params => {
  return service.get('/menus', {
    params
  });
}