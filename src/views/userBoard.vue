<template>
    <div>
    {{ this.user.email}}
    </div>
</template>

<script>
    import Axios from "axios";

    export default {
        name: "userBoard",
        data() {
            return {
                user: "",
                listCart: []
            }
        },
        methods: {
            async getUser() {
                const response = await Axios.get(process.env.VUE_APP_API_URL+'/api/account')
                this.user = response.data
                console.log(response)
            }
        },
        mounted() {
            this.getUser()
        }
    }
</script>

<style scoped>

</style>