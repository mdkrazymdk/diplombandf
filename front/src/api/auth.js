// src/api/authApi.js
import api from './axios';

// Регистрация пользователя
export const register = (userData) =>
  api.post('/auth/register', userData);

// Логин пользователя (получить токен)
export const login = (loginData) =>
  api.post('/auth/login', loginData);
