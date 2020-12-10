<template>
<div>
  <div>
    Votre commande est la suivante :
    <span v-for="orderline in cart.orderLines">{{orderline}}</span>
    <span>{{cart.user}}</span>
    <span>{{cart.total}}</span>
  </div>
</div>
</template>

<script>
import Axios from "axios";

export default {
name: "Panier",
  data() {
    return {
      cart: {},
    }
  },
  methods: {
    fetchCart() {
      const response = Axios.get("http://127.0.0.0:8000/api/get-cart")
      this.cart = response.data
    }
  },
  mounted() {
    this.fetchCart()
  }
};
</script>

<style scoped>

</style>
