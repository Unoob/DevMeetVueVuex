import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
let view = view => {
  return () => import(/* webpackChunkName: "about" */ `./views/${view}.vue`)
}
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/score',
      name: 'score',
      component: view('Score')
    },
    {
      path: '/settings',
      name: 'settings',
      component: view('Settings')
    },
    {
      path: '/vote',
      name: 'how_to_vote',
      component: view('Vote')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name !== 'home') {
    let isAdmin = JSON.parse(localStorage.getItem('isAdmin'))
    if (isAdmin) {
      next()
    } else {
      next({ name: 'home' })
    }
  } else {
    next()
  }
})
export default router
