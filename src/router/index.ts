import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/pages/home/HomeView.vue'
import TeamView from '@/views/pages/Team/TeamView.vue'
import TeamDeatilsView from '@/views/pages/Team/TeamDeatilsView.vue'

import NotFoundView from '@/views/base/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView,
    },
    {
      path: '/team/:id',
      name: 'team-details',
      component: TeamDeatilsView,
    },
    {
      path: "/404",
      name: "error404",
      component: NotFoundView,
    },
    {
      path: "/:patchMatch(.*)*",
      redirect: () => ({ name: "error404" }),
    },
  ],
})

export default router
