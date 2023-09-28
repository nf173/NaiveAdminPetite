import { createApp } from 'vue';
import { setupRouter } from './router/index';
import { setupPinia } from '@/stores/store';
import { setupProdMockServer } from '../mock/index';
import directivesInstall from './directives';
import App from './App.vue';


setupProdMockServer();  // 生产环境使用Mock

const app = createApp(App);

directivesInstall(app);  // 挂载自定义指令

setupRouter(app);  // 挂载路由

setupPinia(app);

app.mount('#app');