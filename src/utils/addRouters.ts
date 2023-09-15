import router from '@/router'
export default function () {
  const routerList = [
    {
      path: '/chat',
      name: 'chat',
      component: () => import('@/views/home/chat/chats.vue')
    },
    {
      path: '/updata',
      name: 'updata',
      component: () => import('@/views/home/updata/updatas.vue')
    }
  ]
  routerList.forEach((item) => {
    router.addRoute('home', item)
  })
}
