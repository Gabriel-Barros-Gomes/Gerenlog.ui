<template>
  <div id="dashboard-login">
      <div id="form-login">
          <label>Entrar</label>
          {{user}}
          <form>
              <label>CPF: <input name="cpf" id="cpf" type="text" placeholder="CPF" v-model="user.cpf"> </label>
              <label>Código Posto de Serviço: <input name="service_code" id="service-code" type="text" placeholder="Código Posto de Serviço" v-model="user.service_code"> </label>
              <label>Tipo de Usuário: 
                  <select name="user_type" id="user-type">
                      <option value="">Selecione um Tipo</option>
                      <option value="adm">Administrador</option>
                      <option value="enc">Encarregado</option>
                      <option value="aux">Auxiliar</option>
                  </select> 
              </label>
              <label>Senha: <input name="password" id="password" type="password" placeholder="Senha" v-model="user.password"> </label>
              <input @click="onLogin()" name="btn_entrar" id="btn-entrar" type="button" value="Entrar">
          </form>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import router from '../../router'
const { httpClient } = require('../../core/application/outside/http_client_config')
export default {
    name:"Login",
    setup() {
        const user = ref({
            cpf:"",
            service_code:"",
            user_type:"",
            password:"",
            active:true
        })
        
        const onLogin = async () =>{
            let selectBox  = document.getElementById('user-type')
            let selectValue = selectBox.options[selectBox.selectedIndex].value
            user.value.user_type = selectValue
            console.log(user.value)
            try{
                const response = await httpClient.post('/auth/login', user.value)
                console.log(response.data)
                localStorage.setItem('token', response.data.token)
                router.push({name: 'Home'})
            }catch(e){
                console.error(e)
            }
        }
    
        return { 
            user,
            onLogin
            }
    },

   
}
</script>

<style>

</style>