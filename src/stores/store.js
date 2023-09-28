import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persistedstate';

const pinia = createPinia();

export function setupPinia(app) {
  pinia.use(piniaPersist);  // pinia 持久化插件
  app.use(pinia);
}

export default pinia;