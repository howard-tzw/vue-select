import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Optgroups from './views/Optgroups.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/optgroups',
    name: 'Optgroups',
    component: Optgroups,
  },
  // Fallback route for handling 404s
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('./views/Error404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
