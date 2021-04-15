<template>
  <div class="home">
    <h2>Home</h2>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'Home',
  setup() {

    

  },
  created() {
    if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
      router.push({name:'Login'})
    }
  },
  
}
</script>
