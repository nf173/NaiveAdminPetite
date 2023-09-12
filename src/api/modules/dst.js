/*
 * @Author: nanfs
 * @Date: 2023-09-11 14:58:13
 * @LastEditTime: 2023-09-11 16:16:46
 * @LastEditors: nanfs
 * @Description: 
 */
import { service } from '../request';

export const getHomeServerList = data => {
  return service.post('/api/dst/home/server', {
    page: 1,
    paginate: 10,
    sort_type: 'name',
    sort_way: 1,
    search_type: 1,
  }, {
    baseURL: 'http://124.221.16.194:8082',
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  });
}