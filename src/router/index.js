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
        name: 'Beranda',
        component: () => import('@/views/web/Home.vue') ,
      },
      {
        path: 'tentang-kami',
        name: 'TentangKami',
        component: () => import('@/views/web/TentangKami.vue') ,
      },
      {
        path: 'sertifikasi',
        name: 'Sertifikasi',
        component: () => import('@/views/web/Sertifikasi.vue') ,
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('@/views/web/Blog.vue') ,
      },
      {
        path: 'hubungi-kami',
        name: 'HubungiKami',
        component: () => import('@/views/web/HubungiKami.vue') ,
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/web/Login.vue') ,
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/admin/Index.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/admin/Dashboard.vue') ,
        meta: { requiresAuth: true },
      },
      {
        path: 'expertise',
        name: 'Expertise',
        component: () => import('@/views/admin/master/Expertise.vue') ,
        meta: { requiresAuth: true },
      },
      {
        path: 'certification',
        name: 'Certification',
        component: () => import('@/views/admin/master/Certification.vue') ,
        meta: { requiresAuth: true },
      },
      {
        path: 'assesor',
        name: 'Assesor',
        component: () => import('@/views/admin/master/Assesor.vue') ,
        meta: { requiresAuth: true },
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/admin/content/Home.vue') ,
        meta: { requiresAuth: true },
      },
      {
        path: 'privilege',
        name: 'Privilege',
        component: () => import('@/views/admin/content/Privilege.vue') ,
        meta: { requiresAuth: true },
      },
      {
        path: 'testimonial',
        name: 'Testimonial',
        component: () => import('@/views/admin/content/Testimonial.vue') ,
        meta: { requiresAuth: true },
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/admin/content/Contact.vue') ,
        meta: { requiresAuth: true },
      },
      {
        path: 'social-media',
        name: 'SocialMedia',
        component: () => import('@/views/admin/content/SocialMedia.vue') ,
        meta: { requiresAuth: true },
      },
      {
        path: 'blog',
        name: 'DataBlog',
        component: () => import('@/views/admin/content/Blog.vue') ,
        meta: { requiresAuth: true },
      },
      {
        path: 'gallery',
        name: 'Gallery',
        component: () => import('@/views/admin/about/Gallery.vue') ,
        meta: { requiresAuth: true },
      },
      {
        path: 'vision',
        name: 'Vision',
        component: () => import('@/views/admin/about/Vision.vue') ,
        meta: { requiresAuth: true },
      },
      {
        path: 'mission',
        name: 'Mission',
        component: () => import('@/views/admin/about/Mission.vue') ,
        meta: { requiresAuth: true },
      },
      {
        path: 'client',
        name: 'Client',
        component: () => import('@/views/admin/about/Client.vue') ,
        meta: { requiresAuth: true },
      },
      {
        path: 'inbox',
        name: 'Inbox',
        component: () => import('@/views/admin/about/Inbox.vue') ,
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
