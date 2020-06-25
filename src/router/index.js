import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ondemand',
    name: 'OnDemand',
    component: () => import('../views/OnDemand.vue'),
    meta: {
      title: 'MyJobNow OnDemand - Κάλυψε τις ανάγκες σου',
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
