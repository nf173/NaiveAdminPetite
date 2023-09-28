import {
  cpu,
  mem,
  disk,
  visits,
  getUserList,
  dstServersList,
} from '../model';

export default [
  {
    url: '/api/server/cpu',
    timeout: 100,
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '',
        data: cpu
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
        message: '',
        data: mem
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
        message: '',
        data: disk
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
        message: '',
        data: visits
      }
    }
  },
  {
    url: '/api/server/rank',
    timeout: 100,
    method: 'get',
    response: (req) => {
      return {
        code: 200,
        message: '',
        data: getUserList(req.query.topNum)
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
        message: '',
        data: dstServersList
      }
    }
  }
];