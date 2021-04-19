<template>
  <div id="app">
    <nav id="nav" class="navbar" role="navigation" aria-label="main navigation" style="padding-top:2rem; padding-right:1rem; padding-left:1rem">
      <div class="navbar-start buttons">
      <a class="button is-dark" href=""><img src="logo.png"></a>
      <router-link class="button is-dark" to="/">Inicio</router-link>
      <router-link class="button is-info" to="/about">Sobre</router-link>
      </div>
      <div class="navbar-end buttons">
      <router-link class="button is-primary" to="/auth/login">Entrar</router-link>
      <router-link class="button is-warning" to="/auth/sign">Cadastrar</router-link>
      <input @click="logout()" class="button is-danger" type="button" value="Sair">
      </div>
    </nav>
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
      console.log('logout')
    }

    return {
      logout
    }
  }
}
</script>