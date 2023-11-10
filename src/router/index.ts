import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/PortfolioView.vue')
  },
  {
    path: '/projeto/:id',
    name: 'Projeto',
    component: () => import('../views/ProjectView.vue'),
    props: true,
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/AboutView.vue'),
    props: true,
  },
  {
    path: '/contato',
    name: "Contato",
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
