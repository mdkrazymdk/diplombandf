import React, { useState } from "react";
import Editor from "./Editor";

export default function WorkEditorModal({ open, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  // Файл можно добавить позже

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, type, description });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 space-y-3 w-full max-w-md">
        <h2 className="text-lg font-bold">Додати роботу</h2>
        <input
          className="w-full border p-2 rounded"
          placeholder="Назва"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <select className="w-full border p-2 rounded" value={type} onChange={e => setType(e.target.value)} required>
          <option value="">Оберіть тип</option>
          <option value="research">Дослідження</option>
          <option value="article">Стаття</option>
          <option value="report">Звіт</option>
          <option value="thesis">Дипломна робота</option>
        </select>
        <Editor value={description} onChange={setDescription} placeholder="Опис..." />
        <div className="flex justify-end space-x-2">
          <button type="button" onClick={onClose} className="px-4 py-1 bg-gray-300 rounded">Скасувати</button>
          <button type="submit" className="px-4 py-1 bg-teal-600 text-white rounded">Зберегти</button>
        </div>
      </form>
    </div>
  );
}
