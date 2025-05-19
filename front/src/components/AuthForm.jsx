import React, { useState } from "react";

export default function AuthForm({ onSubmit, isRegister = false }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password, role });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
      <input
        className="w-full border p-2 rounded"
        placeholder="Логін"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        className="w-full border p-2 rounded"
        placeholder="Пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      {isRegister && (
        <select className="w-full border p-2 rounded" value={role} onChange={e => setRole(e.target.value)}>
          <option value="STUDENT">Студент</option>
          <option value="TEACHER">Викладач</option>
        </select>
      )}
      <button className="w-full bg-indigo-600 text-white py-2 rounded" type="submit">
        {isRegister ? "Зареєструватися" : "Увійти"}
      </button>
    </form>
  );
}
