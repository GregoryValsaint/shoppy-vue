import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        token: localStorage.getItem('user-token') || '',
        status: '',
        listProducts: []
    },
    getters: {
        isConnected(state){
            if(state.token === null){
                return false
            }else{
                return true;
            }
        },
        getProduct(state){
            return function (index) {
                return state.listProducts[index]
            }

        }

        // isAuthenticated: state => !!state.token,
        // authStatus: state => state.status
    },
    mutations: {
        logTokenLoading: (state)=> {
            state.status = 'loading'
        },
        logTokenSuccess: (state, token) => {
            state.status = 'success'
            state.token = token
        },
        logTokenError: (state) => {
            state.status = 'error'
        },

        setProducts(state, productsToDisplay){
            state.listProducts = productsToDisplay
        }
    },
    actions: {
        async logToken({commit}, user) {
          commit('logTokenLoading');
            try {
                const response = await Axios.post('http://127.0.0.1:8000/api/login_check', {
                    "username": "william@codecolliders.com",
                    "password": "password"
                })
                this.token = response.data.token;
                localStorage.setItem('user-token', this.token)
                Axios.defaults.headers.Authorization = "Bearer " + this.token
               commit('logTokenSuccess', this.token)
            } catch {
               commit('logTokenError', error)
                localStorage.removeItem('user-token')
            }
        },
        async fetchProduct(context) {
            const response = await Axios.get("http://127.0.0.1:8000/api/products")
            const listProducts = response.data
            context.commit("setProducts", listProducts)
        },
    },
    modules: {}
})
