import { service } from '../request';

export const GetRoutes = params => {
  return service.get('/routes', {
    params
  });
};