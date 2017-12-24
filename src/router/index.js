import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/loginPage/index'
import manage from '@/page/managePage/index'
import index from '@/page/indexPage/index'
import systemError from '@/page/systemErrorPage/index'
import link from '@/page/linkPage/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: login
    },
    {
      path: '/manage',
      name: '后台管理',
      component: manage,
      children: [
        {
          path: 'index',
          name: '管理首页',
          component: index,
        },
        {
          path: 'systemerror',
          name: '系统错误',
          component: systemError,
        },
        {
          path: 'link',
          name: '调用链路',
          component: link,
        }
      ]
    }
  ]
})
