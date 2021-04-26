<template>
    <div id="dashboard-warehouse" class="columns">
        <div id="products-list" class="column" style="padding-left:2rem">
          <ul v-for="(index, i) in employees" :key="i">

            <li>
            <div class="card" >
              <div class="card-content" >
                <label class="title">{{index.name}} {{index.last_name}}</label><br>
                <label class="subtitle">Id</label> <label class="label">{{index.id}}</label>
                <label class="subtitle">Nome</label> <label class="label">{{index.name}}</label>
                <label class="subtitle">Sobrenome</label> <label class="label">{{index.last_name}} </label>
                <label class="subtitle">Gênero</label> <label class="label">{{index.gender}}</label>
                <label class="subtitle">Cargo</label> <label class="label">{{index.occupation}}</label>
                <label class="subtitle">Email</label> <label class="label">{{index.email}}</label>
                <label class="subtitle">Matrícula do Funcionário</label> <label class="label">{{index.employee_code}}</label>
                <label class="subtitle">Data de Nascimento</label> <label class="label">{{index.birth_date}}</label>
                <label class="subtitle">Registro Geral ( RG )</label> <label class="label">{{index.rg}}</label>
                <label class="subtitle">Cadastro Pessoa Fisica ( CPF )</label> <label class="label">{{index.cpf}}</label>
                <label class="subtitle">Carteira de Trabalho ( CTPS )</label> <label class="label">{{index.ctps}}</label>
                <label class="subtitle">PIS/PASEP</label> <label class="label">{{index.pis_pasep}}</label>
                <label class="subtitle">Salario Inicial</label> <label class="label">{{index.initial_salary}}</label>
                <label class="subtitle">Salario Atual</label> <label class="label">{{index.current_salary}}</label>
                <label class="subtitle">Telefone Fixo</label> <label class="label">{{index.phone_number}}</label>
                <label class="subtitle">Telefone Celular</label> <label class="label">{{index.cellphone_number}}</label>
                <label class="subtitle">CEP</label> <label class="label">{{index.cep}}</label>
                <label class="subtitle">Logradouro</label> <label class="label">{{index.address}}</label>
                <label class="subtitle">Casa</label> <label class="label">{{index.house}}</label>
                <label class="subtitle">Situação</label> <label class="label">{{index.status}}</label>
                <label class="subtitle">Optante Pelo Vale Transporte</label> <label class="label">{{index.opt_transportation_vouchers}}</label>
                <label class="subtitle">Livro de Registro</label> <label class="label">{{index.registry_book}}</label>
                <div class="buttons">
                  <input class="button is-danger" type="button" value="Excluir" @click.prevent="onDelete(index.id)">
                  <input class="button is-warning" type="button" value="Editar" @click.prevent="onEdit(index.id)">
                </div>
              </div>
            </div>
            </li>

          </ul>
        </div>

        <div id="employees-register-form" class="column" style="padding-left:2rem; padding-right:3rem">
           <label v-if="employee.edited === false" class="title" >Cadastre um Novo Funcionário</label>
           <label v-else class="title" >Editar um Funcionário</label>

          <div class="field">
            <label class="label">Nome</label>
              <div class="control">
                <input class="input is-rounded is-success" type="text" placeholder="Nome" v-model="employee.name">
              </div>
          </div>

          <div class="field">
            <label class="label">Sobrenome</label>
              <div class="control">
                <input class="input is-rounded is-success" type="text" placeholder="Sobrenome" v-model="employee.last_name">
              </div>
          </div>

          <div class="field">
            <label class="label">Gênero</label>
              <div class="control">
                <select class="select" v-model="employee.gender">
                  <option value="">Selecione um Gênero</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
          </div>
          
          <div class="field">
            <label class="label">Cargo</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="Cargo" v-model="employee.occupation">
              </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
              <div class="control">
                <input class="input is-rounded" type="email" placeholder="Email" v-model="employee.email">
              </div>
          </div>

          <div class="field">
            <label class="label">Mátricula do Funcionário</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="Mátricula do Funcionário" v-model="employee.employee_code">
              </div>
          </div>

           <div class="field">
            <label class="label">Data de Nascimento</label>
              <div class="control">
                <input class="input is-rounded" type="date" placeholder="Data de Nascimento" v-model="employee.birth_date">
              </div>
          </div>

          <div class="field">
            <label class="label">Registro Geral ( RG )</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="Registro Geral (RG)" v-model="employee.rg">
              </div>
          </div>

          <div class="field">
            <label class="label">Cadastro Pessoa Física ( CPF )</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="Cadastro Pessoa Física (CPF)" v-model="employee.cpf">
              </div>
          </div>

          <div class="field">
            <label class="label">Carteira de Trabalho ( CTPS )</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="Carteira de Trabalho (CTPS)" v-model="employee.ctps">
              </div>
          </div>

          <div class="field">
            <label class="label">PIS/PASEP</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="PIS/PASEP" v-model="employee.pis_pasep">
              </div>
          </div>

          <div class="field">
            <label class="label">Salário Inicial</label>
              <div class="control">
                <input class="input is-rounded" type="number" placeholder="Salário Inicial" v-model="employee.initial_salary">
              </div>
          </div>

          <div class="field">
            <label class="label">Salário Atual</label>
              <div class="control">
                <input class="input is-rounded" type="number" placeholder="Salário Atual" v-model="employee.current_salary">
              </div>
          </div>

          <div class="field">
            <label class="label">Telefone Fixo</label>
              <div class="control">
                <input class="input is-rounded" type="tel" placeholder="Telefone Fixo" v-model="employee.phone_number">
              </div>
          </div>

          <div class="field">
            <label class="label">Telefone Celular</label>
              <div class="control">
                <input class="input is-rounded" type="tel" placeholder="Telefone Celular" v-model="employee.cellphone_number">
              </div>
          </div>

          <div class="field">
            <label class="label">CEP</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="CEP" v-model="employee.cep">
              </div>
          </div>

          <div class="field">
            <label class="label">Logradouro</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="Logradouro" v-model="employee.address">
              </div>
          </div>

          <div class="field">
            <label class="label">Casa</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="Casa" v-model="employee.house">
              </div>
          </div>

          <div class="field">
            <label class="label">Situação</label>
              <div class="control">
                <select class="select" v-model="employee.status">
                  <option value="">Selecione uma Situação</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Demitido">Demitido</option>
                  <option value="Suspenso">Suspenso</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
          </div>

          <div class="field">
            <label class="label">Optante Pelo Vale Transporte</label>
              <div class="control">
                <select class="select" v-model="employee.opt_transportation_vouchers">
                  <option value="">Selecione uma Opção</option>
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </div>
          </div>

          <div class="field">
            <label class="label">Livro de Registros</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="Livro de Registros" v-model="employee.registry_book">
              </div>
          </div>

          <div class="buttons">
            <input v-if="employee.edited === false" class="button is-link is-light is-rounded" type="button" value="Criar" @click.prevent="onSave">
            <input v-else class="button is-link is-light is-rounded" type="button" value="Editar" @click.prevent="onSave">
          </div>

        </div>
    </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import router from '../../../router'
const { httpClient } = require('../../../core/application/outside/http_client_config')

export default {
  name: 'Register_Employees',
  setup() {
    const employees = ref([])
    const employee = ref({
            name: "",
            last_name: "",
            gender: "",
            occupation:"",
            email:"",
            employee_code: "",
            birth_date: "",
            rg: "",
            cpf: "",
            ctps: "",
            pis_pasep: "",
            initial_salary: null,
            current_salary: null,
            phone_number: "",
            cellphone_number: "",
            cep: "",
            address: "",
            house: "",
            status: "",
            opt_transportation_vouchers: "",
            registry_book: "",
            active: true,
            edited: false
    })

    const loadEmployees = async () => {
      try{
        const response = await httpClient.get('/employees/findallactive', {
          headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        })
        employees.value = response.data
        console.log(employees.value)
      }catch(e){
        router.push({name:'Login'})
        console.error(e)
      }
    }

    const onSave = async () => {
      try {
        if(employee.value.edited === false){
          console.log(employee.value)
          const response = await httpClient.post('/employees/create', employee.value, {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
          })
          console.log(response.data)
        }else{
          let employee_id = localStorage.getItem('employee_id')
          const response = await httpClient.put(`/employees/updatebyid/${employee_id}`, employee.value, {
             headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
          })
          console.log(response.data)
          console.log('edited')
        }
      } catch (e) {
        console.error(e)
      }
    }

    const onDelete = async ( _id ) => {
      try{
        const response = await httpClient.delete(`/employees/deletebyid/${ _id }`, {
          headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        })
        console.log(response.data)
      }catch(e){
        console.error(e)
      }
    }

    const onEdit = async ( _id ) => {
      try{
        const response = await httpClient.get(`/employees/findbyid/${ _id }`, {
          headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        })
        console.log(response.data)
        employee.value = response.data
        employee.value.edited = true
        localStorage.setItem('employee_id', response.data.id)
      }catch(e){
        console.error(e)
      }
    }

    onMounted(async ()=>{
      await loadEmployees()
    })

    return {
      employee,
      employees,
      onSave,
      onDelete,
      onEdit
    }
  },
  created() {
    if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
      router.push({name:'Login'})
    }
  },
  
}
</script>