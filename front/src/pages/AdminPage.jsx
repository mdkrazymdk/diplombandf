// src/pages/AdminPage.jsx
import React from "react";
import useWorks from "../hooks/useWorks";
import useComments from "../hooks/useComments";
import useUsers from "../hooks/useUsers";

export default function AdminPage({ user, token }) {
  const { works } = useWorks();
  const { comments } = useComments();
  const { users } = useUsers();

  if (user.role !== "TEACHER") {
    return <div>Доступ заборонено</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Адмін-панель</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600 mr-4">
              <i className="fas fa-users text-xl"></i>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Користувачі</p>
              <p className="text-2xl font-semibold text-gray-800">{users.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
              <i className="fas fa-file-alt text-xl"></i>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Робіт на перевірці</p>
              <p className="text-2xl font-semibold text-gray-800">{works.filter(w => w.status === "SUBMITTED").length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-teal-100 text-teal-600 mr-4">
              <i className="fas fa-comments text-xl"></i>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Нових коментарів</p>
              <p className="text-2xl font-semibold text-gray-800">{comments.length}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Здесь можно добавить таблицы или действия админа */}
    </div>
  );
}
