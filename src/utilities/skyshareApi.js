import axios from 'axios';

const skyshareApi = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://api.skyshareacademy.com'
});

// Optional: Add request/response interceptors here if needed

export default skyshareApi;