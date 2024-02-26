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
      path: '/employee',
      name: 'employee',
      component: () => import('../views/EmployeePage.vue')
    },
    {
      path: '/employee/add',
      name: 'AddEmployee',
      component: () => import('../views/AddEmployeePage.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderPage.vue')
    }
  ]
})

export default router
