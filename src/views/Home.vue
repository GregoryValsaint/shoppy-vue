<template>
  <div class="home">
    <h1>Home</h1>

    <li>
      <router-link :key="i" v-for="(product, i) in $store.state.listProducts"
              :to="{name: 'ProductDetail', params: {id: i, name}}">
        {{ product.name }}
      </router-link>
    </li>

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
   await this.$store.dispatch('logToken')
    await this.$store.dispatch('fetchProduct')
  }
}
</script>
