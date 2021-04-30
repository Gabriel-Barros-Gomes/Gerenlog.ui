<template>
  <div class="home columns">

    <aside id="selection-menu"  class="menu column is-3 is-offset-0" style="padding-left:1.5rem"> 
      <p class="menu-label">
        Serviços
      </p>
      <ul class="menu-list">
        <li><router-link to="/dashboard/administration">Administração</router-link></li>
        <li><router-link to="/dashboard/financial">Financeiro</router-link></li>
        <li><router-link to="/dashboard/warehouse">Estoque</router-link></li>
        <li><router-link to="/dashboard/time-sheet">Folhas de Ponto</router-link></li>
        <li><router-link to="/dashboard/requests">Pedidos</router-link></li>
        <li><router-link to="/dashboard/reports">Relatórios</router-link></li>
      </ul>

      <p class="menu-label">
        Cadastro
      </p>
      <ul class="menu-list">
        <li><router-link to="/dashboard/register-companies">Cadastro de Empresas</router-link></li>
        <li><router-link to="/dashboard/register-employees">Cadastro de Funcionários</router-link></li>
        <li><router-link to="/dashboard/register-products">Cadastro de Produtos</router-link></li>
      </ul>

      <p class="menu-label">
        Atendimento
      </p>
      <ul class="menu-list">
        <li><router-link to="/dashboard/help-desk">Central de Ajuda</router-link></li>
        <li><router-link to="/dashboard/contacts">Contatos</router-link></li>
      </ul>
    </aside>

    <div id="screen-home" class="column">
      <div class="card"> 

        <div class="card-content">
          <p class="title">
            Gerenlog
          </p>
          <p class="subtitle">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gerenlog é um software simples e limpo, que tem a finalidade de auxiliar no gerenciamento de logística,
            serviços, estoques, folhas de ponto, financeiro, pedidos e muito mais. <br> <br>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gerenlog é baseado em arquiteturas estáveis e com um potencial imenso, bem conhecidas no mercado,
            extensivas, e que possuem a mais completa documentação, tecnologias como Node, Vue e Postgres. <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inteiramente construído no esquema de Single Page Applications (SPA), usadas em grandes players
            de mercado como Netflix, Uber, Instagram e etc. Além de ser um Software totalmente reativo, funcionando tanto no navegador, quanto 
            em dispositivos mobile. <br> <br>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O que nos possibilita expandir para aceitar dados de todos os tipos de produtos e ser um aplicativo funcional em diversas áreas. <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Além da possibilidade de ser usado como uma aplicação Desktop (rodando em uma máquina local), também será possível o uso em rede
            (mais indicado para empresas prestadoras de serviços) que torna possível o acesso na empresa aos dados de todos os postos de serviço.

          </p>
        </div>

        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              Mais Detalhes em <a href="https://github.com/Gabriel-Barros-Gomes">Github</a>
            </span>
          </p>
          <p class="card-footer-item">
            <span>
            <a href="meusitevemaqui">GBG Company</a>
            </span>
          </p>
        </footer>
         
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router'
const { httpClient } = require('../core/application/outside/http_client_config')

export default {
  name: 'Home',
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


