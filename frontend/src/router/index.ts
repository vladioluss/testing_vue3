import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import {useAuthStore} from "@/stores/modules/auth";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'Empty',
      },
      beforeEnter: (to, from, next) => {
        router.push({name: 'orders'})
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        layout: 'Empty',
      },
    },

    // Orders
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/orders/OrdersView.vue'),
      meta: {
        layout: 'Main',
      },
      beforeEnter: (to, from, next) => {
        // Только для авторизированного юзера
        if (!useAuthStore().user) {
          router.push({name: 'login'})
        } else {
          next()
        }
      }
    },
    {
      path: '/add-orders',
      name: 'addOrders',
      component: () => import('../views/orders/AddOrderView.vue'),
      meta: {
        layout: 'Main',
      },
      beforeEnter: (to, from, next) => {
        // Только для авторизированного юзера
        if (!useAuthStore().user) {
          router.push({name: 'login'})
        } else {
          next()
        }
      }
    },
  ]
})

export default router
