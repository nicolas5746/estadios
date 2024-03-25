import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@views/HomeView.vue')
    },
    {
      path: '/estadios',
      name: 'estadios',
      component: () => import('@views/EstadiosView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@views/NotFoundView.vue')
    }
  ]
});

export default router;