import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Panier from "@/views/Panier";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/panier',
    name: 'Panier',
    component: Panier
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
