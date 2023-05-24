import typewriter from './modules/typewriter/typewriter'

const directives = {
  // ...
  typewriter
}

function directivesInstall(app) {
  for (const key in directives) {
    app.directive(key, directives[key])
  }
} 

export default directivesInstall
