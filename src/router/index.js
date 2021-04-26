import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

import Login from '../views/auth/Login.vue'
import Sign from '../views/auth/Sign.vue'

import registerProducts from '../views/dashboard/registers/Products.vue'

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
    path: '/dashboard/register-products',
    name: 'Register_Products',
    component: registerProducts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
