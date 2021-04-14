import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

import Login from '../views/auth/Login.vue'
import Sign from '../views/auth/Sign.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/auth/sign',
    name: 'Sign',
    component: Sign
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
  },
  {
    path: '/dashboard/warehouse',
    name: 'Warehouse',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
