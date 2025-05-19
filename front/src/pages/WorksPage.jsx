// src/pages/WorksPage.jsx
import React, { useState } from "react";
import useWorks from "../hooks/useWorks";
import WorkEditorModal from "../components/WorkEditorModal";

export default function WorksPage({ user, token }) {
  const { works, addWork, removeWork } = useWorks();
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filteredWorks = works.filter(w =>
    w.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Мої роботи</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg flex items-center transition duration-200"
        >
          <i className="fas fa-plus mr-2"></i> Додати роботу
        </button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Пошук робіт..."
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Назва</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Опис</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Статус</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дата</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дії</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredWorks.map(work => (
                <tr key={work.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{work.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{work.description?.slice(0, 80)}...</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`status-badge ${
                      work.status === "APPROVED" ? "status-approved"
                      : work.status === "SUBMITTED" ? "status-pending"
                      : "status-rejected"
                    }`}>
                      {work.status === "APPROVED" ? "Схвалено" :
                        work.status === "SUBMITTED" ? "На розгляді" : "Відхилено"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {work.updatedAt?.slice(0, 10)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      className="text-gray-600 hover:text-gray-900"
                      onClick={() => removeWork(work.id)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
              {!filteredWorks.length && (
                <tr>
                  <td colSpan="5" className="text-center p-4 text-gray-500">Немає робіт</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {showModal && (
        <WorkEditorModal
          onClose={() => setShowModal(false)}
          onSave={addWork}
        />
      )}
    </div>
  );
}
