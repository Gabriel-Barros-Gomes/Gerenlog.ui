const axios = require('axios')

const httpClient = axios.create({
    baseURL: 'http://localhost:25025/api/',
    timeout: 1000,
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    
  })

  module.exports ={ 
      httpClient 
    }