import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

const consttantRoutes = [
]

const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: consttantRoutes,
  scrollBehavior: () => ({ y: 0 })
})

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher()
}

export default router
