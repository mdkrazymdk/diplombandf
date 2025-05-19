// src/components/Topbar.jsx
import React from "react";

export default function Topbar({ user, onToggleSidebar }) {
  return (
    <div className="flex items-center justify-between h-16 px-4 border-b bg-white">
      <div className="flex items-center">
        <button className="md:hidden text-gray-500 mr-2" onClick={onToggleSidebar}>
          <i className="fas fa-bars text-xl" />
        </button>
        <div className="flex items-center">
          <i className="fas fa-flask text-teal-500 text-xl mr-2" />
          <span className="text-gray-800 font-semibold">
            Моніторинг наукової діяльності
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {user && (
          <div className="flex items-center px-3 py-1 rounded-full bg-gray-100">
            <span className="text-xs font-medium text-gray-700">JWT: </span>
            <span className="ml-1 text-xs font-bold text-green-600">Активний</span>
          </div>
        )}
        <div className="relative">
          <img
            className="w-8 h-8 rounded-full"
            src={`https://ui-avatars.com/api/?name=${user?.username || "User"}&background=14b8a6&color=fff`}
            alt="User"
          />
        </div>
      </div>
    </div>
  );
}
