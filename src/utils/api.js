import axios from "axios";

const api = axios.create({
  // baseURL: 'http://127.0.0.1:8000',
  // baseURL: 'https://bigbbe.herokuapp.com',
  // baseURL: 'https://34.28.3.109:80',
  // baseURL: "https://web-production-c873.up.railway.app",
  baseURL: "https://bigbbe.onrender.com",
});

api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
