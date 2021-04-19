<template>
    <div id="dashboard-warehouse" class="columns">
        <div id="products-list" class="column" style="padding-left:2rem">
          <ul v-for="(index, i) in products" :key="i">

            <li>
            <div class="card" >
              <div class="card-content" >
                <label class="title">Produto {{i + 1}}</label><br>
                <label class="subtitle">Id</label> <label class="label">{{index.id}}</label>
                <label class="subtitle">Nome</label> <label class="label">{{index.name}}</label>
                <label class="subtitle">Quantidade</label> <label class="label">{{index.quantity}}</label>
                <label class="subtitle">Código do Produto</label> <label class="label">{{index.product_code}}</label>
                <label class="subtitle">Descrição</label> <label class="label">{{index.description}}</label>
                <label class="subtitle">Tipo</label> <label class="label">{{index.type}}</label>
                <label class="subtitle">Categoria</label> <label class="label">{{index.category}}</label>
                <div class="buttons">
                  <input class="button is-danger" type="button" value="Excluir" @click.prevent="onDelete(index.id)">
                  <input class="button is-warning" type="button" value="Editar">
                </div>
              </div>
            </div>
            </li>

          </ul>
        </div>

        <div id="products-register-form" class="column" style="padding-left:2rem; padding-right:3rem">
           <label class="title" >Cadastre um Novo Produto</label>

          <div class="field">
            <label class="label">Nome do Produto</label>
              <div class="control">
                <input class="input is-rounded is-success" type="text" placeholder="Nome" v-model="product.name">
              </div>
          </div>

          <div class="field">
            <label class="label">Quantidade</label>
              <div class="control">
                <input class="input is-rounded" type="number" placeholder="Quantidade" v-model="product.quantity">
              </div>
          </div>

          <div class="field">
            <label class="label">Código do Produto</label>
              <div class="control">
                <input class="input is-rounded" type="text" placeholder="Código" v-model="product.product_code">
              </div>
          </div>
          
          <div class="field">
            <label class="label">Descrição</label>
              <div class="control">
                <textarea class="textarea is-small" placeholder="Descrição" rows="5" v-model="product.description"></textarea>
              </div>
          </div>

          <div class="field">
            <label class="label">Tipo</label>
              <div class="control">
                <select class="select" v-model="product.type">
                  <option value="">Selecione um Tipo</option>
                  <option value="Liquido">Líquido</option>
                  <option value="Solido">Sólido</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Gel">Gel</option>
                </select>
              </div>
          </div>

          <div class="field">
            <label class="label">Categoria</label>
              <div class="control">
                <select class="select" v-model="product.category">
                  <option value="">Selecione uma Categoria</option>
                  <option value="Limpeza">Limpeza</option>
                  <option value="Equipamento">Equipamento</option>
                  <option value="EPI">EPI</option>
                  <option value="Patrimonio">Patrimônio</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
          </div>

          <div class="buttons">
            <input class="button is-link is-light is-rounded" type="button" value="Criar" @click.prevent="onSave">
          </div>

        </div>
    </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import router from '../../../router'
const { httpClient } = require('../../../core/application/outside/http_client_config')

export default {
  name: 'Warehouse',
  setup() {
    const products = ref([])
    const product = ref({
      name:"",
      quantity:0,
      product_code:"",
      description:"",
      type:"",
      category:"",
      active:true
    })

    const loadProducts = async () => {
      try{
        const response = await httpClient.get('/products/findallactive', {
          headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        })
        products.value = response.data
        console.log(products.value)
      }catch(e){

        router.push({name:'Login'})
        console.error(e)
      }
    }

    const onSave = async () => {
      try {
        console.log(product.value)
        const response = await httpClient.post('/products/create', product.value, {
          headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        })
        console.log(response.data)
      } catch (e) {
        console.error(e)
      }
    }

    const onDelete = async ( _id ) => {
      try{
        const response = await httpClient.delete(`/products/deletebyid/${ _id }`, {
          headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        })
        console.log(response.data)
      }catch(e){
        console.error(e)
      }
    }

    onMounted(async ()=>{
      await loadProducts()
    })

    return {
      product,
      products,
      onSave,
      onDelete
    }
  },
  created() {
    if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
      router.push({name:'Login'})
    }
  },
  
}
</script>