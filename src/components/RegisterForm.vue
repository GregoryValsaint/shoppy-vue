<template>
  <div>
    <h1>Inscription</h1>
    <p>
      <label>Email</label>
      <input ref="myInput" type="text" v-model="currentEmail">
    </p>
    <p>
      <label>Password</label>
      <input ref="myInput" type="text" v-model="currentPassword">
    </p>
    <p>
      <input type="submit"  @click="addUser">
    </p>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "RegisterForm",
  data() {
    return {
      currentUser: [],
      currentEmail: "",
      currentPassword: ""
    }
  },
  methods: {
    async addUser() {
      const response = await Axios.post("https://127.0.0.1:8000/api/register",{
        email: this.currentEmail,
        password: this.currentPassword
      })
      this.currentUser.push(response.data)
      this.$refs.myInput.focus()
    },
  }
}
</script>

<style scoped>

</style>