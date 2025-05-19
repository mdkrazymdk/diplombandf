// src/api/worksApi.js
import api from './axios';

// Получить все работы пользователя
export const fetchWorks = () =>
  api.get('/works'); // Проверь правильный путь!

// Добавить новую работу
export const addWork = (formData) =>
  api.post('/works', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

// Получить работу по ID
export const getWorkById = (id) =>
  api.get(`/works/${id}`);

// Удалить работу
export const deleteWork = (id) =>
  api.delete(`/works/${id}`);
