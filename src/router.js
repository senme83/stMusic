import Vue from 'vue'
import Router from 'vue-router'
//懒加载
const found_page = () => import('./views/found/found_page.vue')
const serach_page = () => import('./views/serach/serach_page.vue')
const mine_page = () => import('./views/mine/mine_page.vue')

Vue.use(Router)


export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/found',
      component:found_page
    },
    {
      path:'/found',
      component:found_page
    },
    {
      path:'/serach',
      component:serach_page
    },
    {
      path:'/mine',
      component:mine_page
    }
  ]
})
