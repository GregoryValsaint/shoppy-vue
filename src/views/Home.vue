<template>
  <div class="home">

      <router-link class="product" :key="i" v-for="(product, i) in $store.state.listProducts"
              :to="{name: 'ProductDetail', params: {id: i, name}}">
        {{ product.name }}
      </router-link>


  </div>
</template>

<script>
  import Axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      listProducts: []
    }
  },
  methods: {
    async addProduct() {
      const response = await Axios.get("http://127.0.0.1:8000/api/products", {
        name: this.message
      })
    },
  },
   async mounted() {
      if (!this.$store.getters.isConnected){
         await this.$router.push({
              name: 'Connexion'
          })
      }else{
          // await this.$store.dispatch('logToken')
          await this.$store.dispatch('fetchProduct')
      }
  }
}
</script>
<style scoped>
  .product{
    display: block;
  }
</style>
