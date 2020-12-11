<template>
  <div>
    <h1>Connexion</h1>
    <p>
      <label>Email</label>
      <input ref="myInput" type="text" v-model="currentUser.email">
    </p>
    <p>
      <label>Password</label>
      <input ref="myInput" type="text" v-model="currentUser.password">
    </p>
    <p>
      <input type="submit"  @click="loginUser">
    </p>
  </div>
</template>

<script>
import Axios from "axios";

export default {
name: "LoginForm",
  data() {
    return {
      currentUser: {
        email:"",
        password:"",

      }
    }
  },
  methods: {
    async loginUser() {
      await this.$store.dispatch('logToken', this.currentUser)
      this.$refs.myInput.focus()
      await this.$router.push({
        name: 'Home'
      })
    },
  },
}
</script>

<style scoped>

</style>