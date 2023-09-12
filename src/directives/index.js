import typewriter from './modules/typewriter/typewriter'

const directives = {
  // ... 在此处添加其他自定义指令
  typewriter
}

/**
 * 批量注册自定义指令函数
 * @param app 
 */
function directivesInstall(app) {
  for (const key in directives) {
    app.directive(key, directives[key])
  }
}

export default directivesInstall
