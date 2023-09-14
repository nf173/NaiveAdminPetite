const asyncRoutes = null;

export default [
  {
    url: '/api/menus',
    timeout: 200,
    method: 'get',
    response: () => {
      return {
          code: 200,
          msg: '',
          result: asyncRoutes
        }
    }
  },
];