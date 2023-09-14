/* cpu信息 */
const cpu = {
  used: 1,  // 使用核心
  name: '12th Gen Intel(R) Core(TM) i5-12600KF',  // cpu型号
  threadNumber: 16,  // 线程数
}

/* 内存信息 */
const mem = {
  used: '15.79',  // 使用内存
  free: '16.07',  // 空闲内存
  total: '31.86', // 总内存
  usageRate: 49,   // 内存使用率
}

/* 磁盘信息 */
const disk = {
  used: '13.08',  // 使用磁盘容量
  free: '33.91',  // 空闲磁盘容量
  total: '49.09', // 磁盘总容量
  usageRate: 28,   // 磁盘使用率
}

/* 饥荒内存占用 */
const dstMem = {
  used: '200.39',  // 使用磁盘容量
  virtual: '0.00',   // 磁盘使用率
}

export default [
  {
    url: '/api/server/cpu',
    timeout: 100,
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: '',
        result: cpu
      }
    }
  },
  {
    url: '/api/server/mem',
    timeout: 100,
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: '',
        result: mem
      }
    }
  },
  {
    url: '/api/server/disk',
    timeout: 100,
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: '',
        result: disk
      }
    }
  }
];