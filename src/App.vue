<template xmlns="http://www.w3.org/1999/html">
  <div id="app">
    <div>
      <button type="submit" @click="logoutUser">Déconnexion</button>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">Inscription</router-link> |
      <router-link :to="{name: 'Panier'}">Panier</router-link> |
      <router-link to="/userBoard"> Mon Compte </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App",
  methods: {
    async logoutUser(){
      await this.$store.commit('logout')
      await this.$router.push({
        name: 'Home'
      })
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
