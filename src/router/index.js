import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/aboutMe.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
  ]
})

export default router


