import { service } from '../request';

/**
 * @description: 获取 cpu信息
 * @returns {Object}
 */
export const GetCpu = () => {
  return service.get('/server/cpu');
}

/**
 * @description: 获取内存信息
 * @returns {Object}
 */
export const GetMem = () => {
  return service.get('/server/mem');
}

/**
 * @description: 获取磁盘信息
 * @returns {Object}
 */
export const GetDisk = () => {
  return service.get('/server/disk');
}

/**
 * @description: 获取月访问量
 * @returns {Object}
 */
export const GetVisits = () => {
  return service.get('/server/visits');
}

/**
 * @description: 获取在线时长排行
 * @returns {Object}
 */
export const GetRank = () => {
  return service.get('/server/rank');
}

/**
 * @description: 获取饥荒服务器列表
 * @returns {Array}
 */
export const GetDstServersList = () => {
  return service.get('/server/dst-severs-list');
}