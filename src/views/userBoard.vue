<template>
    <div>
      <p> Email :{{ this.user.email}}</p>
      <p> Nom : {{ this.user.name}}</p>
      <p> {{this.listCart.status}}</p>
      <p> Total commande :{{this.listCart.total}}</p>
      <li v-for="line in this.listCart.orderLines"> Quantité :{{line.quantity}}, Nom: {{line.product.name}}, Prix unitaire :{{line.product.price}}, Total :{{ line.total}}</li>

    </div>
</template>

<script>
    import Axios from "axios";

    export default {
        name: "userBoard",
        data() {
            return {
                user: "",
                listCart: ""
            }
        },
        methods: {
            async getUser() {
                const response = await Axios.get(process.env.VUE_APP_API_URL+'/api/account')
                this.user = response.data
                console.log(response)
            },
          async getCart() {
              const response = await Axios.get(process.env.VUE_APP_API_URL+'/api/get-cart')
              this.listCart = response.data
              console.log (response)
          }
        },
        mounted() {
            this.getUser()
            this.getCart()
        }
    }
</script>

<style scoped>

</style>
