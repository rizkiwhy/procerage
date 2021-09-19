import Vue from 'vue'
import VueRouter from 'vue-router'
import { getItem } from '@/util/localStorage';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/web/Index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/web/Home.vue') ,
      },
      {
        path: '/tentang-kami',
        name: 'TentangKami',
        component: () => import('@/views/web/TentangKami.vue') ,
      },
      {
        path: '/sertifikasi',
        name: 'Sertifikasi',
        component: () => import('@/views/web/Sertifikasi.vue') ,
      },
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/views/web/Blog.vue') ,
      },
      {
        path: '/hubungi-kami',
        name: 'HubungiKami',
        component: () => import('@/views/web/HubungiKami.vue') ,
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/web/Login.vue') ,
      },
    ],
  },
  {
    path: 'admin',
    component: () => import('@/layouts/admin/Index.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/admin/Dashboard.vue') ,
        meta: { requiresAuth: true },
      },
      {
        path: '/expertise',
        name: 'Expertise',
        component: () => import('@/views/admin/Expertise.vue') ,
        meta: { requiresAuth: true },
      },
      {
        path: '/certification',
        name: 'Certification',
        component: () => import('@/views/admin/Certification.vue') ,
        meta: { requiresAuth: true },
      }
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (getItem('token') == null) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
