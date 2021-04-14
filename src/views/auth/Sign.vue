<template>
  <div id="dashboard-sign">
      <div id="form-sign">
         <label>Cadastre-se</label>
         {{user}}
          <form>
              <label>Nome: <input name="name" id="name" type="text" placeholder="Nome" v-model="user.name"> </label>
              <label>Sobrenome: <input name="last_name" id="last-name" type="text" placeholder="Sobrenome" v-model="user.last_name"> </label>
              <label>Email: <input name="email" id="email" type="email" placeholder="Email" v-model="user.email"> </label>
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
              <input @click.prevent="onSave()" name="btn_criar" id="btn-criar" type="button" value="Criar">
          </form>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name:"Login",
    setup() {
        const user = ref({
            name:"",
            last_name:"",
            email:"",
            cpf:"",
            service_code:"",
            user_type:"",
            password:"",
            active:true
        })
        
        const onSave = async () => {
            let selectBox  = document.getElementById('user-type')
            let selectValue = selectBox.options[selectBox.selectedIndex].value
            user.value.user_type = selectValue
            console.log(user.value)
            //save user at database
            
        }
    
        return { 
            user,
            onSave
            }
    },

   
}
</script>

<style>

</style>