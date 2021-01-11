<template>
  <div>

    numéro de commande : {{orderDetail.number}}
    <div v-for="detail in orderDetail.orderLines">
      <p>
        quantité : {{detail.quantity}}
        produit :{{detail.product.name}}
        prix: {{detail.product.price}}
        total : {{detail.total}}
      </p>
    </div>
    <div>

<!--      <p>{{orderDetail.orderLines.product}}</p>-->
    </div>
  </div>

</template>

<script>
import Axios from "axios";

export default {
  name: "orderDetails",
  props: {
    id: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      orderDetail: "",
    }
  },
  methods: {
    async getOrderline() {
     const response =  await Axios.get(process.env.VUE_APP_API_URL + "/api/orders/" + this.id)
      this.orderDetail = response.data
    }
  },
  mounted () {
    this.getOrderline();
  }
}
</script>

<style scoped>

</style>
