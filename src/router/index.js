import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

/**
 * Router
*/
const RouterIndex = () => import('@/components/Router/index.vue')
const Matching = () => import('@/components/Router/Matching/index.vue')
const MultiParams = () => import('@/components/Router/Matching/MultiParams.vue')
const Nested = () => import(/* webpackChunkName: "group-nested" */ '@/components/Router/Nested/index.vue')
const UserProfile = () => import(/* webpackChunkName: "group-nested" */ '@/components/Router/Nested/UserProfile.vue')
const UserPosts = () => import(/* webpackChunkName: "group-nested" */ '@/components/Router/Nested/UserPosts.vue')
const NestedIndex = () => import(/* webpackChunkName: "group-nested" */ '@/components/Router/Nested/Default.vue')
const Named = () => import('@/components/Router/Named/index.vue')
const Views = () => import('@/components/Router/Views/index.vue')
const Fetching = () => import('@/components/Router/Fetching/index.vue')
const FetchingData = () => import('@/components/Router/Fetching/Data.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/router',
      name: 'VueRouter',
      component: RouterIndex,
      children: [
        {
          name: 'Matching',
          path: 'matching/:id',
          component: Matching,
          meta: {
            requiresAuth: true
          },
          beforeEnter: (to, from, next) => {
            console.log('befroeEnter ', to.params.id)
            if (to.params.id === '111') {
              next()
            } else {
              next(new Error('id error'))
            }
          }
        },
        {
          name: 'MultiParams',
          path: 'post/:post_id/comment/:comment_id',
          component: MultiParams,
          props: true
        },
        {
          path: 'nested/:uname',
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
          path: 'named/:id',
          name: 'named',
          component: Named
        },
        {
          path: 'views',
          component: Views,
          alias: 'vv',
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
          path: 'v',
          redirect: '/router/views'
        },
        {
          name: 'Fetching',
          path: 'fetching/:id',
          component: Fetching
        },
        {
          name: 'FetchingData',
          path: 'data/:id',
          component: FetchingData
        }
      ]
    }
  ]
})
