// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Utama from './Layout/Utama.vue'
import Beranda from './Menu/index.vue'
import About from './Menu/about.vue'
import Project from './Menu/project.vue'
import Service from './Menu/service.vue'
import Kontak from './Menu/contact.vue'

const routes = [
  {
    path: '/',
    name: 'Utama',
    component: Utama,
    children: [
      {
        path: '',
        name: 'Beranda',
        component: Beranda,
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      },
      {
        path: 'project',
        name: 'Project',
        component: Project,
      },
      {
        path: 'service',
        name: 'Service',
        component: Service,
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Kontak,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
