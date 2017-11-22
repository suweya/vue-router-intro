import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import VueVideoPlayer from 'vue-video-player'

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(ElementUI)
Vue.use(VueVideoPlayer)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log('router beforeEach to from', to, from)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('requiresAuth')
  }
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('router beforeResolve to, from ', to, from)
  next()
})

router.afterEach((to, from) => {
  console.log('router afterEach to, from', to, from)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
