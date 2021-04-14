<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/auth/login">Login</router-link> |
      <router-link to="/auth/sign">Sign</router-link> |
    </div>
    <div id="canvas">
    <router-view/>
    </div>
  </div>
</template>
