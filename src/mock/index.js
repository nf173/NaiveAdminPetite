import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

import login from './user/login';
import user from './user/user';
import server from './server/index';
import menu from './menu/index';

// 登录令牌
export const token = 'TOKEN-LITTLE-CUTE';

export function setupProdMockServer() {
  createProdMockServer([
    ...login,
    ...user, 
    ...server, 
    ...menu
  ]);
}

/**
 * @method 验证Token
 * @param {*} clientToken 客户端传递的Token
 * @returns 
 */
export function verifyToken(clientToken) {
  if(clientToken === token) {
    return true;
  } else {
    return false;
  }
} 