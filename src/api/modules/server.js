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