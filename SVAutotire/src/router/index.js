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
      path: '/product',
      name: 'product',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/product/add',
      name: 'AddProduct',
      component: () => import('../views/AddProductPage.vue')
    },
    {
      path: '/Warehouse',
      name: 'warehouse',
      component: () => import('../views/WarehousePage.vue')
    },
    {
      path: '/warehouse/manage/add',
      name: 'AddWarehouse',
      component: () => import('../views/AddWarehouse.vue')
    },
    {
      path: '/warehouse/manage',
      name: 'ManageWarehouse',
      component: () => import('../views/ManageWarehousePage.vue')
    },
    {
      path: '/warehouse/storage',
      name: 'AddStorage',
      component: () => import('../views/AddStorsgePage.vue')
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('../views/CustomerPage.vue')
    },
    {
      path: '/customer/add',
      name: 'AddCustomer',
      component: () => import('../views/AddCustomerPage.vue')
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
    },
    {
      path: '/order/add',
      name: 'AddOrder',
      component: () => import('../views/AddOrderPage.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/HistoryPage.vue')
    }
  ]
})

export default router
