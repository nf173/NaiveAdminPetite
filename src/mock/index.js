import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

import login from './user/login';
import server from './server/index';
import menu from './menu/index';

// 登录令牌
export const token = 'TOKEN-LITTLE-CUTE';

export function setupProdMockServer() {
  createProdMockServer([...login, ...server, ...menu]);
}

export function verifyToken(clientToken) {
  if(clientToken === token) {
    return true;
  } else {
    return false;
  }
} 