import { service } from '../request'

/**
 * 获取 token 令牌
 * @returns token
 */
export async function getToken() {
  return await service.get('/auth/token')
}