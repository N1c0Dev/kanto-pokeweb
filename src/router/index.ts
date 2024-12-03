import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/pages/home/HomeView.vue"
import TeamView from "@/views/pages/Team/TeamView.vue"
import TeamDeatilsView from "@/views/pages/Team/TeamDeatilsView.vue"

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
  ],
})

export default router
