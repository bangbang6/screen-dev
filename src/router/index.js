import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Svg from '../views/Svg.vue'

const routes = [
  {
    path: '/svg',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Svg',
    component: Svg
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
