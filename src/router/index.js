import { createRouter, createWebHistory } from 'vue-router'


import App from "../App.vue";

const routes = [
  {
    name: 'main',
    path: '/',
    component: App
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        left: 0,
        top: 110,
        behavior: 'smooth'
      }
    }
  }
})
export default router
