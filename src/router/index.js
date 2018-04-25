import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppLogin from '@/components/AppLogin'
import AdminHome from '@/components/admin/AdminHome'
import AdminAdd from '@/components/admin/AdminAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/admin',
      name: 'AdminHome',
      component: AdminHome
    },
    {
      path: '/admin/add',
      name: 'AdminAdd',
      component: AdminAdd
    }
  ]
})
