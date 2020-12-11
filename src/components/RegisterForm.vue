<template>
    <div>
        <h1>Inscription</h1>
        <p>
            <label>Email</label>
            <input ref="myInput" type="text" v-model="currentUser.email">
        </p>
        <p>
            <label>Password</label>
            <input ref="myInput" type="text" v-model="currentUser.password">
        </p>
        <p>
            <input type="submit" @click="addUser">
        </p>
    </div>
</template>

<script>
    import Axios from "axios";

    export default {
        name: "RegisterForm",
        data() {
            return {
                currentUser: {
                    email: "",
                    password: "",
                }
            }
        },
        methods:
            {
                async addUser() {
                    await Axios.post("http://127.0.0.1:8000/api/register",
                        this.currentUser
                    )
                    this.$refs.myInput.focus()
                    await this.$store.dispatch('logToken', this.currentUser)
                    await this.$router.push({
                        name: 'Home'
                    })
                }
                ,
            }
    }
</script>

<style scoped>

</style>