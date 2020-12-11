<template>
  <div>
    <br class="cart">
      Votre commande est la suivante :
    <ul>
      <li v-for="order in cart.orderLines">
        {{order.quantity}} | {{order.product.name}} | Total: {{order.total}}
      </li>
    </ul>
      <p> Total :{{cart.total}}</p>

    <div class="user">
      <p> Nom :{{cart.user.name}}</p>
      <p> Adresse :{{cart.user.address}}</p>
      <p> Email :{{cart.user.email}}</p>
    </div>
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
