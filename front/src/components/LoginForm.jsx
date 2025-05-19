// src/components/LoginForm.jsx
import React, { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const ok = await onLogin({ username, password });
    if (!ok) setError("Неправильний логін або пароль");
  };

  return (
    <form className="max-w-xs mx-auto p-6 bg-white rounded-lg shadow" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Вхід</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <div className="mb-3">
        <label className="block text-sm mb-1">Логін</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm mb-1">Пароль</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">Увійти</button>
    </form>
  );
}
