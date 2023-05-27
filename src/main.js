import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'

/* 创建 App */
const app = createApp(App)

/* 引入指令注册函数并调用 */
import directivesInstall from './directives'
directivesInstall(app)

/* 全局注册 SvgIcon 组件 */
import svgIcon from './components/SvgIcon/SvgIcon.vue'
app.component('svg-icon', svgIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
