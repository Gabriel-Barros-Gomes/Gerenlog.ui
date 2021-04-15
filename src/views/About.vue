<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'About',
  setup() {

    

  },
  created() {
    if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
      router.push({name:'Login'})
    }
  },
  
}
</script>
