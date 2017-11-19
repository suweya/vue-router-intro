import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const Matching = () => import('@/components/Matching/index.vue')
const MultiParams = () => import('@/components/Matching/MultiParams.vue')

const Nested = () => import('@/components/Nested/index.vue')
const UserProfile = () => import('@/components/Nested/UserProfile.vue')
const UserPosts = () => import('@/components/Nested/UserPosts.vue')
const NestedIndex = () => import('@/components/Nested/Default.vue')

const Named = () => import('@/components/Named/index.vue')

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
    },
    {
      path: '/nested/:uname',
      component: Nested,
      children: [
        {
          path: '',
          component: NestedIndex
        },
        {
          path: 'profile',
          component: UserProfile
        },
        {
          path: 'posts',
          component: UserPosts
        }
      ]
    },
    {
      path: '/named/:id',
      name: 'named',
      component: Named
    }
  ]
})
