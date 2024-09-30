import axios from 'axios';

export const cep_api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
  timeout: 8000
});
