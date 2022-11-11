import axios from "axios"

const api = axios.create({
  // baseURL: 'http://127.0.0.1:8000',
  // baseURL: 'https://bigbbe.herokuapp.com',
  // baseURL: 'https://34.28.3.109:80',
  baseURL: 'https://bbapi.nivu.me'
});


export default api;