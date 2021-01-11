<template>
    <div>
        <ul>
            <li> {{ productDetail.id }} </li>
            <li> {{ productDetail.name }} </li>
            <li> {{ productDetail.description }} </li>
        </ul>
        <div>
            <label for="quantity">Quantité </label>
        <select name="quantité" id="quantity" v-model="quantity">
            <option v-for="i in productDetail.stock" :value="i">{{i}}</option>
        </select>
        </div>
        <div>

      <button @click="addCart">Ajouter au Panier</button>
        </div>
    </div>

</template>


<script>

    import Axios from "axios";

    export default {
        name: "ProductDetail",
        data() {
            return {
                quantity: 1
            }
        },
        computed:{
            productDetail(){
                return this.$store.getters.getProduct(this.$route.params.id);
            }
        },
        methods: {
           async addCart() {
               await Axios.put(process.env.VUE_APP_API_URL+"/api/add-to-cart", {
                    product: this.productDetail.id,
                    quantity: this.quantity
                })
                   this.$router.push({name: 'Panier'})
            }
        },
    };
</script>

<style scoped>


</style>
