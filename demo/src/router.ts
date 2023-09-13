import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Test from './views/Test.vue'
import BaseSelect from './views/BaseSelect.vue'
import Optgroups from './views/Optgroups.vue'
import InfiniteScroll from './views/InfiniteScroll.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/base-select',
    name: 'BaseSelect',
    component: BaseSelect,
  },
  {
    path: '/optgroups',
    name: 'Optgroups',
    component: Optgroups,
  },
  {
    path: '/infinite-scroll',
    name: 'InfiniteScroll',
    component: InfiniteScroll,
  },
  {
    path: '/placeholder',
    name: 'Placeholder',
    component: () => import('./views/Placeholder.vue'),
  },
  {
    path: '/preservable',
    name: 'Preservable',
    component: () => import('./views/Preservable.vue'),
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
