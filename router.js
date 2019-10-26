import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Settings from './views/Settings.vue'
import Card from './views/Card.vue'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/card/:name',
    name: 'Card',
    component: Card,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new Router({routes, mode: 'history'})

export default router

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (sessionStorage.getItem('authToken')) {
      next()
    } else {
      next('/login')
    }
  } else {
    if (to.name) {
      if (sessionStorage.getItem('authToken')) {
        next('/')
      } else {
        next()
      }
    } else {
      next('/')
    }
  }
})
