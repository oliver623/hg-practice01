import Vue from 'vue'
import VueRouter from 'vue-router'

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
    component: () => import('@/views/index'),
  }, {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About'),
  },
  {
    // 动态路由匹配
    path: '/user/:id',
    name: 'user',
    // props: true, //只能接受params参数
    props:(route) => ({
      id:route.params.id,
      title:route.query.title
    }),//可以接受params参数和query参数
    component: () => import('@/views/User'),
    children: [
      {path: 'profile', component: ()=> import('@/views/Profile')},
      {path: 'posts', component: ()=> import('@/views/Posts')}
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

export default router