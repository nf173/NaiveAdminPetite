/*
 * @Author: nanfs
 * @Date: 2023-09-04 14:47:47
 * @LastEditTime: 2023-09-06 14:35:51
 * @LastEditors: nanfs
 * @Description: 
 */
import 'virtual:svg-icons-register';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { setupRouter } from './router/index';

// 自定义指令
import directivesInstall from './directives';

// pinia 持久化插件
import piniaPersist from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPersist);

import App from './App.vue';

/* 创建 App */
const app = createApp(App);

// 全局注册自定义指令
directivesInstall(app);

/* 全局注册 SvgIcon 组件 */
import svgIcon from './components/SvgIcon/SvgIcon.vue';
app.component('svg-icon', svgIcon);

// 注册 pinia
app.use(pinia);

// 挂载路由
setupRouter(app);

app.mount('#app');
