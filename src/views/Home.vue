<template>
  <div class="home">
    <h1>Home</h1>
    <ul>
    <li :key="i" v-for="(product, i) in listProducts">{{ product.name }}</li>
    </ul>
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
    async fetchProduct() {
      const response = await Axios.get("http://127.0.0.1:8000/api/products")
      this.listProducts = response.data
    },
    async addProduct() {
      const response = await Axios.get("http://127.0.0.1:8000/api/products", {
        name: this.message
      })
    },
  },
  components: {

  },
  async mounted() {
   await this.$store.dispatch('logToken')
    await this.fetchProduct();
  }
}
</script>
