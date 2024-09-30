import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pizza-app-api-em8y.onrender.com/',
  timeout: 11000
});
