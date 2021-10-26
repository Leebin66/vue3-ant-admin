import { createRouter, createWebHashHistory } from 'vue-router'

// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由

const whiteList = ['/login']

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('views/login/index.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (!sessionStorage.getItem('vue3UserToken')) {
//     if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
//       next()
//     } else {
//       next('/login') // 否则全部重定向到登录页
//     }
//   } else {
//     next()
//   }
// })
 
export default router