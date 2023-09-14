import { service } from '../request';

export const GetMenus = params => {
  return service.get('/menus', {
    params
  });
}