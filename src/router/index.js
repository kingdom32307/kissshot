import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/access',
    name: 'Access',
    component: () => import(/* webpackChunkName: "about" */ '../views/Access.vue')
  },
  {
    path: '/billiards',
    name: 'Billiards',
    component: () => import(/* webpackChunkName: "about" */ '../views/Billiards.vue')
  },
  {
    path: '/darts',
    name: 'Darts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Darts.vue')
  },
  {
    path: '/foodanddrink',
    name: 'FoodandDrink',
    component: () => import(/* webpackChunkName: "about" */ '../views/FoodAndDrink.vue')
  },
  {
    path: '/events',
    name: 'Event',
    component: () => import(/* webpackChunkName: "about" */ '../views/Events.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
