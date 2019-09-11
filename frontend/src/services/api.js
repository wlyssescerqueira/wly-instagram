import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://d2dc5430.ngrok.io' // Ngrok
   baseURL: 'http://localhost:3333' // IOS
  // baseURL: 'http://192.168.15.4:3333', // USB
  // baseURL: 'http://10.0.3.2:3333'// Genymotion

});

export default api;
