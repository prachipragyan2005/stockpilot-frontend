import axios from 'axios';


export const apiClient = axios.create({
  baseURL: 'http://192.168.1.14:4000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});