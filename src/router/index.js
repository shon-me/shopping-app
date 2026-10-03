import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/components/LandingPage.vue'
import Login from '@/components/Login.vue'
import Admin from '@/components/Admin.vue'
import Profile from '@/components/Profile.vue'
import Products from '@/components/Products.vue'
import ViewProducts from '@/components/ViewProducts.vue'
import SignUp from '@/components/SignUp.vue'
import Orders from '@/components/Orders.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage
    },
    {
      path: '/products',
      component: Products
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      name: 'ViewProduct',
      path: '/viewproducts',
      component: ViewProducts,
      props: route => ({ id: Number(route.params.id)})
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/orders',
      component: Orders
    },
  ],
})

export default router
