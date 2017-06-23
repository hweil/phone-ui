import Button from '../packages/button'
import Toast from '../packages/toast'
import More from '../packages/more'

const version = '0.0.1'

const install = function(Vue, config = {}) {
  if (install.installed) return
  Vue.component(Button.name, Button)
  Vue.component(Toast.name, Toast)
  Vue.component(More.name, More)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export  {
  install,
  Button,
  Toast
}
