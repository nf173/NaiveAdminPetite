import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import api from './api';

export function setupProdMockServer() {
  createProdMockServer(api);
}

// /**
//  * @method 验证Token
//  * @param {*} clientToken 客户端传递的Token
//  * @returns 
//  */
// export function verifyToken(clientToken) {
//   if(clientToken === token) {
//     return true;
//   } else {
//     return false;
//   }
// } 