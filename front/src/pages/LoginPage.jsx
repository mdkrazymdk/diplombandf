import React from 'react';
import AuthForm from '../components/AuthForm';
import { login } from '../api/auth';

const LoginPage = () => {
  const handleLogin = async (data) => {
    try {
      const token = await login(data);
      localStorage.setItem('token', token);
      window.location.href = '/'; // Перейти на главную
    } catch (e) {
      alert('Ошибка входа');
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      <AuthForm type="login" onSubmit={handleLogin} />
      <p>Нет аккаунта? <a href="/register">Регистрация</a></p>
    </div>
  );
};

export default LoginPage;
