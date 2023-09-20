import Mock from 'mockjs';

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

/* 月访问量 */
const visits = Mock.mock({
  "1月|1-1000": 100,
  "2月|1-1000": 100,
  "3月|1-1000": 100,
  "4月|1-1000": 100,
  "5月|1-1000": 100,
  "6月|1-1000": 100,
  "7月|1-1000": 100,
  "8月|1-1000": 100,
  "9月|1-1000": 100,
  "10月|1-1000": 100,
  "11月|1-1000": 100,
  "12月|1-1000": 100,
});

/* 用户时长排行列表 */
const userList = [];
for(let i=0; i++, i<=5;) {
  userList.push({
    username: Mock.Random.cname(),
    avatar: `https://picsum.photos/100?random=${i}`,
    time: Mock.Random.integer(0, 1000),
    color: Mock.Random.hex()
  });
}

/* 饥荒服务器列表 */
const dstServersList = [];
for(let i=0; i++, i<=100;) {
  const mode = Mock.mock({
    "mode|1": ["轻松", "荒野", "无尽", "生存", "暗无天日"]
  })
  const name = Mock.mock({
    "name|1-10": [
      Mock.Random.ctitle()
    ]
  })
  const module = Mock.mock({
    "module|0-10": [
      { name: Mock.Random.ctitle() },
    ],
  })
  dstServersList.push({
    ...mode,
    name: Mock.Random.csentence(),
    ...module,
    online: `${Mock.Random.integer(0, 16)}/16`,
    ping: Mock.Random.integer(0, 100)
  });
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
  },
  {
    url: '/api/server/visits',
    timeout: 100,
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: '',
        result: visits
      }
    }
  },
  {
    url: '/api/server/rank',
    timeout: 100,
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: '',
        result: userList
      }
    }
  },
  {
    url: '/api/server/dst-severs-list',
    timeout: 100,
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: '',
        result: dstServersList
      }
    }
  }
];