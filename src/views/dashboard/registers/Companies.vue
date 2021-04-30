<template>
    <div id="dashboard-warehouse" class="columns">
        <div id="companies-list" class="column" style="padding-left:2rem">
          <ul v-for="(index, i) in companies" :key="i">

            <li>
            <div class="card" >
              <div class="card-content" >
                <label class="title">{{index.name}}</label><br>
                <label class="subtitle">Id</label> <label class="label">{{index.id}}</label>
                <label class="subtitle">Nome</label> <label class="label">{{index.name}}</label>
                <label class="subtitle">CNPJ</label> <label class="label">{{index.cnpj}} </label>
                <label class="subtitle">Email</label> <label class="label">{{index.email}}</label>
                <label class="subtitle">Site</label> <a :href="index.site" target="_blank" class="label">{{index.site}}</a>
                <label class="subtitle">Codigo da Empresa</label> <label class="label">{{index.company_code}}</label>
                <label class="subtitle">Data de Registro</label> <label class="label">{{index.registration_date}}</label>
                <label class="subtitle">Contato</label> <label class="label">{{index.phone_number}}</label>
                <label class="subtitle">CEP</label> <label class="label">{{index.cep}}</label>
                <label class="subtitle">Endereço</label> <label class="label">{{index.address}}</label>
                <label class="subtitle">Lote</label> <label class="label">{{index.house}}</label>
                <label class="subtitle">Situação</label> <label class="label">{{index.status}}</label>
                <label class="subtitle">Valor da Fatura (Contrato)</label> <label class="label">{{index.invoice}}</label>
                <label class="subtitle">Número do Contrato</label> <label class="label">{{index.contract}}</label>
                <label class="subtitle">Fornecedor</label> <label class="label">{{index.provider}}</label>
                <div class="buttons">
                  <input class="button is-danger" type="button" value="Excluir" @click.prevent="onDelete(index.id)">
                  <input class="button is-warning" type="button" value="Editar" @click.prevent="onEdit(index.id)">
                </div>
              </div>
            </div>
            </li>

          </ul>
        </div>

        <div id="companies-register-form" class="column" style="padding-left:2rem; padding-right:3rem">
           <label v-if="company.edited === false" class="title" >Cadastre uma Nova Empresa</label>
           <label v-else class="title" >Editar uma Empresa</label>

          <div class="field">
            <label class="label">Nome da Empresa</label>
              <div class="control">
                <input class="input is-rounded is-success" type="text" placeholder="Nome" v-model="company.name">
              </div>
          </div>

          <div class="field">
            <label class="label">Cadastro Nacional de Pessoa Júridica ( CNPJ )</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="Cadastro Nacional de Pessoa Júridica ( CNPJ )" v-model="company.cnpj">
              </div>
          </div>
          
          <div class="field">
            <label class="label">Email</label>
              <div class="control">
                <input class="input is-rounded" type="email" placeholder="Email" v-model="company.email">
              </div>
          </div>

          <div class="field">
            <label class="label">Site</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="Site" v-model="company.site">
              </div>
          </div>

          <div class="field">
            <label class="label">Código da Empresa ( Contrato )</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="Código da Empresa ( Contrato )" v-model="company.company_code">
              </div>
          </div>

          <div class="field">
            <label class="label">Data de Registro</label>
              <div class="control">
                <input class="input is-rounded" type="date" placeholder="Data de Registro" v-model="company.registration_date">
              </div>
          </div>

          <div class="field">
            <label class="label">Contato</label>
              <div class="control">
                <input class="input is-rounded" type="tel" placeholder="Contato" v-model="company.phone_number">
              </div>
          </div>

          <div class="field">
            <label class="label">CEP</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="CEP" v-model="company.cep">
              </div>
          </div>

          <div class="field">
            <label class="label">Endereço Comercial</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="Endereço Comercial" v-model="company.address">
              </div>
          </div>

          <div class="field">
            <label class="label">Lote</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="Lote" v-model="company.house">
              </div>
          </div>
          
          <div class="field">
            <label class="label">Situação</label>
              <div class="control">
                <select class="select" v-model="company.status">
                  <option value="">Selecione uma Situação</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Suspenso">Suspenso</option>
                  <option value="Inativo">Inativo</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
          </div>

          <div class="field">
            <label class="label">Valor da Fatura ( Contrato )</label>
              <div class="control">
                <input class="input is-rounded" type="number" placeholder="Valor da Fatura ( Contrato )" v-model="company.invoice">
              </div>
          </div>

          <div class="field">
            <label class="label">Número do Contrato</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="Número do Contrato" v-model="company.contract">
              </div>
          </div>

          <div class="field">
            <label class="label">Fornecedor</label>
              <div class="control">
                <select class="select" v-model="company.provider">
                  <option value="">Selecione uma Opção</option>
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </div>
          </div>

          <div class="buttons">
            <input v-if="company.edited === false" class="button is-link is-light is-rounded" type="button" value="Criar" @click.prevent="onSave">
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
  name: 'Register_Companies',
  setup() {
    const companies = ref([])
    const company = ref({
      name:"",
      cnpj:"",
      site:"",
      email:"",
      company_code:"",
      registration_date:"",
      phone_number:"",
      cep:"",
      address:"",
      house:"",
      status:"",
      invoice:"",
      contract:"",
      provider:"",
      active:true,
      edited:false
    })

    const formatDate = (str) => {
      return str.split('-').reverse().join('-');
    }

    const loadCompanies = async () => {
      try{
        const response = await httpClient.get('/companies/findallactive', {
          headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        })
        companies.value = response.data
        console.log(companies.value)
      }catch(e){
        router.push({name:'Login'})
        console.error(e)
      }
    }

    const onSave = async () => {
      try {
        if(company.value.edited === false){
          console.log(company.value)
          const response = await httpClient.post('/companies/create', company.value, {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
          })
          console.log(response.data)
        }else{
          let company_id = localStorage.getItem('company_id')
          const response = await httpClient.put(`/companies/updatebyid/${company_id}`, company.value, {
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
        const response = await httpClient.delete(`/companies/deletebyid/${ _id }`, {
          headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        })
        console.log(response.data)
      }catch(e){
        console.error(e)
      }
    }

    const onEdit = async ( _id ) => {
      try{
        const response = await httpClient.get(`/companies/findbyid/${ _id }`, {
          headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        })
        console.log(response.data)
        company.value = response.data
        company.value.edited = true
        localStorage.setItem('company_id', response.data.id)
      }catch(e){
        console.error(e)
      }
    }

    onMounted(async ()=>{
      await loadCompanies()
    })

    return {
      companies,
      company,
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