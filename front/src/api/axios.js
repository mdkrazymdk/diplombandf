// src/api/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // если у тебя все бэкендовые эндпоинты "/api/..."
  withCredentials: false, // ставь true, если понадобится кука/сессия, но обычно для JWT — false
});

export default api;
