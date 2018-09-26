import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const constantRouterMap = [
  { path: '*', redirect: '/index', hidden: true },
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/index', component: () => import('@/views/index/index'), hidden: true }
]
export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
export const asyncRouterMap = [

]
