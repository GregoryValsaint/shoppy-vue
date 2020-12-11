<template>
  <div>
    <div class="cart">
      Votre commande est la suivante :
      <span v-for="order in cart.orderLines"> Nom: {{order.product.name}}
        Prix à l'unité: {{order.product.price}}
        Quantité : {{order.quantity}} </span>
      <p> Total :{{cart.total}}</p>
    </div>
    <div class="user">
      <p> Email :{{cart.user.email}}</p>
    </div>
    <div>{{cart}}</div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "Panier",
  data() {
    return {
      cart: null,
    }
  },
  methods: {
    async fetchCart() {
      const response = await Axios.get("http://127.0.0.1:8000/api/get-cart")
      this.cart = response.data
      console.log(response.data);
    }
  },
  async mounted() {
    await this.fetchCart();
  },
};
</script>

<style scoped>

</style>
