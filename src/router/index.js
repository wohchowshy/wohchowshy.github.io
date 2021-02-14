import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/about',
    redirect: '/'    
  },
  {
    path: '/educations',
    name: 'Educations',
    component: () => import(/* webpackChunkName: "about" */ '../views/Educations.vue')
  },
  {
    path: '/experiments',
    name: 'Experiments',
    component: () => import(/* webpackChunkName: "about" */ '../views/Experiments.vue')
  },
  {
    path: '/skills/:skill?',
    name: 'Skills',
    component: () => import(/* webpackChunkName: "about" */ '../views/Skills.vue')
  },
  {
    path: '/projects/:project',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
