// src/components/RegisterForm.jsx
import React, { useState } from "react";

const roles = [
  { value: "STUDENT", label: "Студент" },
  { value: "TEACHER", label: "Викладач" },
];

export default function RegisterForm({ onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const ok = await onRegister({ username, password, role });
    if (!ok) setError("Помилка реєстрації. Спробуйте ще раз.");
  };

  return (
    <form className="max-w-xs mx-auto p-6 bg-white rounded-lg shadow" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Реєстрація</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <div className="mb-3">
        <label className="block text-sm mb-1">Логін</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm mb-1">Пароль</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm mb-1">Роль</label>
        <select
          className="w-full border px-3 py-2 rounded"
          value={role}
          onChange={e => setRole(e.target.value)}
          required
        >
          {roles.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition">Зареєструватися</button>
    </form>
  );
}
