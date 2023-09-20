/*
 * @Author: nanfs
 * @Date: 2023-09-12 10:18:13
 * @LastEditTime: 2023-09-12 11:19:28
 * @LastEditors: nanfs
 * @Description: 
 */

import { defineStore } from 'pinia';
import { GetCpu, GetMem, GetDisk } from '@/api/modules/server';
export const useServerStore = defineStore('server', () => {
  const cpu = ref(null);
  const mem = ref(null);
  const disk = ref(null);

  /**
   * @description: 获取服务器内存信息
   * @return {Object} 
   */  
  async function getServerMem() {
    return await GetMem();
  };

  /**
   * @description: 获取服务器cpu信息
   * @return {Object} 
   */  
  async function getServerCpu() {
    return await GetCpu();
  };

  /**
   * @description: 获取服务器磁盘信息
   * @return {Object} 
   */  
  async function getServerDisk() {
    return await GetDisk();
  };

  function setServerCpu(value) {
    cpu.value = value
  }

  function setServerMem(value) {
    mem.value = value
  }

  function setServerDisk(value) {
    disk.value = value
  }

  return {
    cpu,
    mem,
    disk,
    getServerCpu,
    getServerMem,
    getServerDisk,
    setServerCpu,
    setServerMem,
    setServerDisk
  }
})