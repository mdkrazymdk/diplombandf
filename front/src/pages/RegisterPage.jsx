import React from 'react';
import AuthForm from '../components/AuthForm';
import { register } from '../api/auth';

const RegisterPage = () => {
  const handleRegister = async (data) => {
    try {
      await register(data);
      alert('Регистрация успешна! Теперь войдите.');
      window.location.href = '/login';
    } catch (e) {
      alert('Ошибка регистрации');
    }
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <AuthForm type="register" onSubmit={handleRegister} />
      <p>Есть аккаунт? <a href="/login">Войти</a></p>
    </div>
  );
};

export default RegisterPage;
