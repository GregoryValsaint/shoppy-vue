import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import ProductDetail from "../views/ProductDetail";

import Panier from "@/views/Panier";
import Connexion from "@/views/Connexion";
import Inscription from "@/views/Inscription";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/register',
    name: 'register',
    component: Inscription
  },
  {
    path: '/ProductDetail/:id',
    name: 'ProductDetail',
    component: ProductDetail
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
