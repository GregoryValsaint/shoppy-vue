<template>
<div>
  <div>
    Votre commande est la suivante :

    <div>{{cart}}</div>
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
      const response = await Axios.get('http://127.0.0.0:8000/api/get-cart', {
        headers: {
          'Bearer ': this.$store.token
        }
      });
      this.cart = response.data;
      console.log(response.data);
    }
  },
  mounted() {
    this.fetchCart();

  },
};
</script>

<style scoped>

</style>
