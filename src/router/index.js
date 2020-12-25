import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/index'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    // redirect: '/home',
    redirect: {
      name: 'index'
    } //重定向路由
  },
  {
    path: '/home',
    name: 'index',
    // component: () => import('@/views/index'),
    components: {
      default: Home,
      main: () => import('@/views/Main'),
      sidebar: () => import('@/views/Sidebar')
    }
  }, {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About'),
  },
  {
    // 动态路由匹配
    path: '/user/:id',
    name: 'user',
    // props: true,
    props: (route) => ({
      id: route.params.id,
      title: route.query.title
    }),
    component: () => import('@/views/User'),
    children: [{
        path: 'profile',
        component: () => import('@/views/Profile')
      },
      {
        path: 'posts',
        component: () => import('@/views/Posts')
      }
    ]
  },
  {
    path: '/user-*',
    name: 'match',
    component: () => import('@/views/UserAdmin')
  },
  {
    path: '/page',
    name: 'page',
    alias: '/aaa', //起别名
    component: () => import('@/views/Page')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/notes',
    name: 'notes',
    component: () => import('@/views/Notes'),
    meta: {require: true}
  },{
    path: '/book',
    name: 'book',
    component: () => import('@/views/Book'),
    meta: {require :true}
  },
  {
    path: '/eaditor',
    name: 'eaditor',
    component: ()=> import('@/views/Eaditor')
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('@/views/NotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(val => val.meta.require)){
    if(!localStorage.getItem('user')){
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }else{
      next()
    }
  }else{
    next()
  }
})
// router.beforeEach((to, from, next) => {
//   if (to.name === 'notes' && !localStorage.getItem('user')) next('/login')
//   else next()
// })

export default router