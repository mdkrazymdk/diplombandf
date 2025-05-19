import { useState } from "react";
import * as authApi from "../api/authApi";

function useAuth() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Регистрация
  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      await authApi.register(userData);
      return true;
    } catch (e) {
      setError(e.response?.data || "Registration failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Логин
  const login = async (loginData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await authApi.login(loginData);
      setToken(res.data);
      localStorage.setItem("token", res.data);
      setUser({ username: loginData.username });
      return true;
    } catch (e) {
      setError(e.response?.data || "Login failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Логаут
  const logout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
  };

  return { user, token, loading, error, register, login, logout };
}

export default useAuth;
