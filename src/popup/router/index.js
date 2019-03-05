import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routeArr = [
  {
    path: '/',
    component: resolve => {
      require(['../views/index.vue'], resolve)
    },
    meta: {
      title: '首页'
    },
    name: 'index'
  },
  {
    path: '/login',
    component: resolve => {
      require(['../views/login.vue'], resolve)
    },
    meta: {
      title: '登陆'
    },
    name: 'login'
  },
  {
    path: '/register',
    component: resolve => {
      require(['../views/register.vue'], resolve)
    },
    meta: {
      title: '注册'
    },
    name: 'register'
  }
]
export default new Router({
  routes: routeArr,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
