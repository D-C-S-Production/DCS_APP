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
    path: '/kaiteki',
    name: 'Kaiteki',
    component: () => import(/* webpackChunkName: "about" */ '../views/Kaiteki.vue')
  },
  {
    path: '/ooyosokaiteki',
    name: 'OoyosoKaiteki',
    component: () => import(/* webpackChunkName: "about" */ '../views/OoyosoKaiteki.vue')
  },
  {
    path: '/yayakonzatsu',
    name: 'YayaKonzatsu',
    component: () => import(/* webpackChunkName: "about" */ '../views/YayaKonzatsu.vue')
  },
  {
    path: '/konzatsu',
    name: 'Konzatsu',
    component: () => import(/* webpackChunkName: "about" */ '../views/Konzatsu.vue')
  },
  {
    path: '/totemokonzatsu',
    name: 'TotemoKonzatsu',
    component: () => import(/* webpackChunkName: "about" */ '../views/TotemoKonzatsu.vue')
  }
  // {
  //   path: '/example',
  //   name: 'Example',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  // }
]

const router = new VueRouter({
  routes
})

export default router
