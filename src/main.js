import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import directivesInstall from './directives'
import svgIcon from './components/SvgIcon/SvgIcon.vue'
import 'virtual:svg-icons-register'

const app = createApp(App)

directivesInstall(app)  // 全局批量注册指令

app.component('svg-icon', svgIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
