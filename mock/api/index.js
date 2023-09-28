import routes from './routes';
import auth from './auth';
import server from './server';

export default [...auth, ...routes, ...server];