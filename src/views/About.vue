<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import router from '../router'
const { httpClient } = require('../core/application/outside/http_client_config')

export default {
  name: 'About',
  setup() {

    

  },
  async created() {
    if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
          router.push({name:'Login'})
        }
        try{
          const response = await httpClient.get('/helpers/verify-token', {
              headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
            })
            if(response === null || response === undefined){
              router.push({name:'Login'})
            }
            console.log(response)
        }catch(e){
          console.error(e, "token invalid")
          router.push({name:'Login'})
        }
  },
  
}
</script>
