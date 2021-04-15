<template>
  <div id="dashboard-login">
      <div id="form-login" class="column is-half is-offset-one-quarter " style="text-align:center; padding-top:1.5rem" >
          <label class="title" >Entrar</label>
          <form>
              <div class="field">
              <label class="label">Cadastro de Pessoa Física (CPF) </label>
              <div class="control">
                  <input class="input is-success is-rounded" name="cpf" id="cpf" type="text" placeholder="CPF" v-model="user.cpf">
              </div>
              </div>

              <div class="field">
              <label class="label">Código Posto de Serviço</label>
                <div class="control">
                   <input class="input is-rounded" name="service_code" id="service-code" type="text" placeholder="Código Posto de Serviço" v-model="user.service_code"> 
                </div>
              </div>

              <div class="field">
              <label class="label">Tipo de Usuário </label>
                  <div class="control">
                  <select class="select is-rounded" name="user_type" id="user-type">
                      <option value="">Selecione um Tipo</option>
                      <option value="adm">Administrador</option>
                      <option value="enc">Encarregado</option>
                      <option value="aux">Auxiliar</option>
                  </select> 
                  </div>
              </div>

              <div class="field">
              <label class="label">Senha </label>
                <div class="control">
                   <input class="input is-rounded" name="password" id="password" type="password" placeholder="Senha" v-model="user.password"> 
                </div>
              </div>

              <div class="field">
                  <div class="control">
                    <input class="button is-link is-light is-rounded " @click="onLogin()" name="btn_entrar" id="btn-entrar" type="button" value="Entrar">
                  </div>
              </div>
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