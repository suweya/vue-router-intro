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

const Views = () => import('@/components/Views/index.vue')

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
      component: Matching,
      meta: {
        requiresAuth: true
      },
      beforeEnter: (to, from, next) => {
        console.log('befroeEnter ', to.params.id)
        if (to.params.id === '111') {
          next()
        } else {
          next(new Error())
        }
      }
    },
    {
      name: 'MultiParams',
      path: '/post/:post_id/comment/:comment_id',
      component: MultiParams,
      props: true
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
    },
    {
      path: '/views',
      component: Views,
      alias: '/vv',
      children: [
        {
          path: '',
          components: {
            default: NestedIndex,
            a: UserPosts,
            b: UserProfile
          }
        }
      ]
    },
    {
      path: '/v',
      redirect: '/views'
    }
  ]
})
