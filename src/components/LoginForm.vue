<template>
  <div>
    <h1>Connexion</h1>
    <p>
      <label>Email</label>
      <input ref="myInput" type="text" v-model="currentEmail">
    </p>
    <p>
      <label>Password</label>
      <input ref="myInput" type="text" v-model="currentPassword">
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
      currentUser: [],
      currentEmail: "",
      currentPassword: ""
    }
  },
  methods: {
    async loginUser() {
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDc2NzU2MzIsImV4cCI6MTYwODAzNTYzMiwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6IndpbGxpYW1AY29kZWNvbGxpZGVycy5jb20ifQ.v2RAWJmBlqBhJA_o40c_tM-oBh0gGS5hUW_RwnGXUVZ2wpr552V2P8rH5iM-3qS95MXVhWTfxZi9J5nIxIGV3zZFanpPdfvFKJcsGx1G6mDzyjgg0LWLfJcYNJoVOcIb0gTencjgR1MmglNv3acQ8j-FCVIF1OmoYQQAY_alI3qvLjJ4Csmi3ixEhRHZGxh1a3DB7co_y57p18cmeaIaIMmREt3teIdgfd7Ofn9iF-aHDHzh6HzfyZ29RVHlyesKAs4TpL46b_9x7tJoq6IGhJ1EX0-V_aGdIgm1Antgi4QSjfb9J173bnI3YOe-TejWVRX0zcKsAoZzZb8xmIxfwXNSVSSK4BVh3ipEtaR_jbYkuM5bQE6b1i0IEOkD6EnCeDI7lg0o59cfSevfyagQ0s-UCz2Qzd54axbzn8vomLs1TxRxYhvg2y6NiWqpM9MS3-qk8i7drowg82DE8hZjUdK9jcTuM30VSPOMwEZcrOp1f7482CoHOHWnDhq76UE8rWSaKVFT69WpyhcByyeefJkj-RwC2Hucavd-MeNz7f2CYIlcMpQl7Q_I0Mp0SreogxLqrkNIFKMaCxj6Muour1KCtHR-f-4NMEk6S8KsdqtLjJ4YQcZdKhnD2YjFbWx_Dm51nXCcJdSHYOUwmkXbQNMG3YAc0x819poHvV06TlE"
      const response = await Axios.post("https://127.0.0.1:8000/login",{
        username: this.currentEmail,
        password: this.currentPassword
      })
      Axios.defaults.headers.Authorization = "Bearer " + token
      this.currentUser.push(response.data)
      this.$refs.myInput.focus()
    },
  },
}
</script>

<style scoped>

</style>