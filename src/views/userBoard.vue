<template>
    <div>
      <p> Email :{{ this.user.email}}</p>
      <p> Nom : {{ this.user.name}}</p>
      <OrderDetails v-for="order in listOrders" :key="order.id" :id = "order.id" />
    </div>
</template>

<script>
    import Axios from "axios";
    import OrderDetails from "@/components/OrderDetails";

    export default {
        name: "userBoard",
      components: {OrderDetails},
        data() {
            return {
                user: "",
                listOrders: "",
                listOrder: ""
            }
        },
        methods: {
            async getUser() {
                const response = await Axios.get(process.env.VUE_APP_API_URL+'/api/account')
                this.user = response.data
                console.log(response.data)
            },
          async getOrders() {
              const response = await Axios.get(process.env.VUE_APP_API_URL+'/api/orders')
              this.listOrders = response.data
              console.log (response.data)
          },

        },
        mounted() {
            this.getUser()
            this.getOrders()

        }
    }
</script>

<style scoped>

</style>
