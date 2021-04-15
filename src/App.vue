<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/auth/login">Login</router-link> |
      <router-link to="/auth/sign">Sign</router-link> |
      <input @click="logout()" type="button" value="Sair">
    </div>
    <div id="canvas">
    <router-view/>
    </div>
  </div>
</template>
<script>
import router from './router'
export default {
  name:'App',
  setup() {
    const logout = async() => {
      localStorage.clear('token')
      router.push({name: "Login"})
    }

    return {
      logout
    }
  }
}
</script>