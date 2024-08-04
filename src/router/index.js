import ArticleChannel from '@/views/article/ArticleChannel.vue'
import ArticleManage from '@/views/article/ArticleManage.vue'
import LayoutContainer from '@/views/layout/LayoutContainer.vue'
import LoginPage from '@/views/login/LoginPage.vue'
import UserAvatar from '@/views/user/UserAvatar.vue'
import UserPassword from '@/views/user/UserPassword.vue'
import UserProfile from '@/views/user/UserProfile.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutContainer,
      children: [
        {
          path: '/article/manage',
          component: ArticleManage
        },
        {
          path: '/article/channel',
          component: ArticleChannel
        },
        {
          path: '/user/avatar',
          component: UserAvatar
        },
        {
          path: '/user/password',
          component: UserPassword
        },
        {
          path: '/user/profile',
          component: UserProfile
        }
      ]
    },
    {
      path: '/login',
      component: LoginPage
    }
  ]
})
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (!userStore.token && to.path !== '/login') {
    next('/login')
  }
  next()
})

export default router
