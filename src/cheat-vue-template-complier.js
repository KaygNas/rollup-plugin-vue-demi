try {
  const vueTemplateComplierVersion = require('vue-template-compiler/package.json').version
  const Vue = require('vue')
  // cheat vue-template-complier
  Vue.version = vueTemplateComplierVersion
}
catch (err) {}
