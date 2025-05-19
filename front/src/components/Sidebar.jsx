// src/components/Sidebar.jsx
import React from "react";

const navItems = [
  { id: "home", icon: "fa-home", label: "Головна" },
  { id: "works", icon: "fa-file-alt", label: "Мої роботи" },
  { id: "comments", icon: "fa-comments", label: "Коментарі" },
  { id: "admin", icon: "fa-user-shield", label: "Адмін-панель" },
];

export default function Sidebar({ user, currentPage, onNavigate, onLogout }) {
  return (
    <div className="flex flex-col w-64 bg-indigo-800 h-full">
      <div className="flex items-center justify-center h-16 px-4 bg-indigo-900">
        <i className="fas fa-flask text-teal-400 text-2xl mr-2" />
        <span className="text-white font-semibold text-lg">
          Науковий моніторинг
        </span>
      </div>
      <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
        <div className="flex flex-col space-y-1 px-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar-item flex items-center px-4 py-3 text-white rounded-lg ${
                currentPage === item.id ? "active" : ""
              }`}
              onClick={() => onNavigate(item.id)}
            >
              <i className={`fas ${item.icon} mr-3`} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="px-4 py-4 border-t border-indigo-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full"
              src={`https://ui-avatars.com/api/?name=${user?.username || "User"}&background=14b8a6&color=fff`}
              alt="User"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-white">
                {user?.username || "Гість"}
              </p>
              <p className="text-xs font-medium text-indigo-200">
                {user?.email || "no-email"}
              </p>
            </div>
          </div>
          {user && (
            <button
              onClick={onLogout}
              title="Вийти"
              className="ml-2 text-red-300 hover:text-red-500"
            >
              <i className="fas fa-sign-out-alt"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
