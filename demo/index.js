import Vue from 'vue'
import App from './index.vue'
import routes from './route'
import { install as Phone } from '../src/index'
import VueRouter from 'vue-router'

document.addEventListener('DOMContentLoaded', function() {
  if (window.FastClick) window.FastClick.attach(document.body)
}, false)

Vue.use(Phone)
Vue.use(VueRouter)

const router = new VueRouter({
  // base: __dirname,
  routes
})

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router
})
