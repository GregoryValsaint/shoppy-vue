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
            if(state.token === ""){
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
    // this.$commit sur les autres components dans la vue permet d'appeler les mutations.
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
        logout: (state) => {
           state.token = ""
            localStorage.removeItem('user-token')
            Axios.defaults.headers.Authorization = ""
        },

        setProducts(state, productsToDisplay){
            state.listProducts = productsToDisplay
        }
    },
    // this.$dispatch sur les autres components dans la vue permet d'appeler les actions
    actions: {
        async logToken({commit}, user) {
          commit('logTokenLoading');
            try {
                const response = await Axios.post(process.env.VUE_APP_API_URL+'/api/login_check', {
                    "username": user.email,
                    "password": user.password
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
            const response = await Axios.get(process.env.VUE_APP_API_URL+"/api/products")
            const listProducts = response.data
            context.commit("setProducts", listProducts)
        },
    },
    modules: {}
})
