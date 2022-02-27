import { createRouter, createWebHistory } from 'vue-router';
import Catalog from '../views/Catalog.vue';
import Cart from '../views/Cart.vue';

const routes = [
  { path: '/', component: Catalog },
  { path: '/cart', component: Cart },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
