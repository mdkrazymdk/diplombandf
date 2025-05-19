// src/components/WorkTable.jsx
import React from "react";

export default function WorkTable({ works, onAdd, onView, onDownload, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Мої роботи</h2>
        <button onClick={onAdd} className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
          <i className="fas fa-plus mr-2" /> Додати роботу
        </button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Назва</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Статус</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Оцінка</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Дії</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {works.map(work => (
            <tr key={work.id}>
              <td className="px-6 py-4 whitespace-nowrap">{work.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`status-badge ${
                  work.status === "APPROVED" ? "status-approved" :
                  work.status === "DRAFT" || work.status === "SUBMITTED" ? "status-pending" : "status-rejected"
                }`}>
                  {work.status === "APPROVED" ? "Схвалено" : work.status === "DRAFT" ? "Чернетка" : work.status === "SUBMITTED" ? "На розгляді" : "Відхилено"}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{work.grade ?? "-"}</td>
              <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                <button onClick={() => onView(work)} title="Переглянути" className="text-indigo-600 hover:text-indigo-900">
                  <i className="fas fa-eye"></i>
                </button>
                <button onClick={() => onDownload(work)} title="Завантажити" className="text-teal-600 hover:text-teal-900">
                  <i className="fas fa-download"></i>
                </button>
                <button onClick={() => onDelete(work)} title="Видалити" className="text-gray-600 hover:text-gray-900">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
