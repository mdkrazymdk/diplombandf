// src/api/commentsApi.js
import api from './axios';

// Получить комментарии по работе
export const fetchComments = (workId) =>
  api.get(`/comments/${workId}`);

// Добавить комментарий
export const addComment = (commentData) =>
  api.post('/comments', commentData);
