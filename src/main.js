import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from "axios";

Vue.config.productionTip = false
// Axios.defaults.baseURL = process.env.VUE_APP_API_URL
//cela permet d'enlever le process.env.VUE_APP_API_URL qui est sur tous les appels axios

Axios.defaults.headers.Authorization = localStorage.getItem('user-token')?"Bearer "+localStorage.getItem('user-token'): undefined

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
