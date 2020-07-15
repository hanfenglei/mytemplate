import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Layout from '@/layout'

const consttantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  }
]

const createRouter = () => new Router({
  routes: consttantRoutes,
  scrollBehavior: () => ({ y: 0 })
})

const router = createRouter();

export function reseRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher()
}

export default router
