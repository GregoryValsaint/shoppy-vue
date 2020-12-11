<template>
    <div>
        <ul>
            <li> {{ productDetail.id }} </li>
            <li> {{ productDetail.name }} </li>
            <li> {{ productDetail.description }} </li>

        </ul>
    </div>
    
</template>


<script>

    export default {
        name: "ProductDetail",
        computed:{
            productDetail(){
                return this.$store.getters.getProduct(this.$route.params.id);
            }
        }
    };
</script>

<style scoped>


</style>