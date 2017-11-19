import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const Matching = () => import('@/components/Matching/index.vue')
const MultiParams = () => import('@/components/Matching/MultiParams.vue')

const Nested = () => import(/* webpackChunkName: "group-nested" */ '@/components/Nested/index.vue')
const UserProfile = () => import(/* webpackChunkName: "group-nested" */ '@/components/Nested/UserProfile.vue')
const UserPosts = () => import(/* webpackChunkName: "group-nested" */ '@/components/Nested/UserPosts.vue')
const NestedIndex = () => import(/* webpackChunkName: "group-nested" */ '@/components/Nested/Default.vue')

const Named = () => import('@/components/Named/index.vue')

const Views = () => import('@/components/Views/index.vue')

const Fetching = () => import('@/components/Fetching/index.vue')

const FetchingData = () => import('@/components/Fetching/Data.vue')

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
    },
    {
      name: 'Fetching',
      path: '/fetching/:id',
      component: Fetching
    },
    {
      name: 'FetchingData',
      path: '/data/:id',
      component: FetchingData
    }
  ]
})
