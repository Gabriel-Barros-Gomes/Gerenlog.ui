<template>
    <div id="dashboard-warehouse">
        almoxarifado
    </div>
</template>
<script>
import router from '../../../router'

export default {
  name: 'Warehouse',
  setup() {

    

  },
  created() {
    if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
      router.push({name:'Login'})
    }
  },
  
}
</script>