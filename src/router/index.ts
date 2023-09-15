import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      redirect: '/home/chat',
      children: [
        {
          path: 'chat',
          name: 'chat',
          component: () => import('@/views/home/chat/chats.vue')
        },
        {
          path: 'updata',
          name: 'updata',
          component: () => import('@/views/home/updata/updatas.vue')
        },
        {
          path: 'bem',
          name: 'bem',
          component: () => import('@/views/home/bem/bem.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login/login.vue')
    }
  ]
})
// 访问的白名单, 可以直接通行
const whiteList = ['/']
router.beforeEach((to, from, next) => {
  // 访问的路径在白名单
  const token = localStorage.getItem('token')
  if (whiteList.includes(to.path.toLowerCase())) {
    next()
  } else {
    if (token) {
      next()
    } else {
      next('/')
    }
  }
})
export default router
