import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LogInPage.vue')
    },
    {
      path: '/Home',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/Warehouse',
      name: 'warehouse',
      component: () => import('../views/WarehousePage.vue')
    },
    {
      path: '/Customer',
      name: 'customer',
      component: () => import('../views/CustomerPage.vue')
    },
    {
      path: '/Employee',
      name: 'employee',
      component: () => import('../views/EmployeePage.vue')
    }
  ]
})

export default router
