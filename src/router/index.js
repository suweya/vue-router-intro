import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const Matching = () => import('@/components/Matching/index.vue')
const MultiParams = () => import('@/components/Matching/MultiParams.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      name: 'Matching',
      path: '/matching/:id',
      component: Matching
    },
    {
      name: 'MultiParams',
      path: '/post/:post_id/comment/:comment_id',
      component: MultiParams
    }
  ]
})
