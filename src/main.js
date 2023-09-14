import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { setupRouter } from './router/index';
import { setupProdMockServer } from './mock/index';
import directivesInstall from './directives';
import piniaPersist from 'pinia-plugin-persistedstate';
import App from './App.vue';

setupProdMockServer();  // 生产环境使用Mock

const app = createApp(App);

directivesInstall(app);  // 挂载自定义指令

setupRouter(app);  // 挂载路由

const pinia = createPinia();  // 挂载pinia
pinia.use(piniaPersist);  // pinia 持久化插件
app.use(pinia);

app.mount('#app');