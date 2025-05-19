// src/pages/HomePage.jsx
import React from "react";
import useWorks from "../hooks/useWorks";
import useComments from "../hooks/useComments";

export default function HomePage({ user }) {
  const { works } = useWorks();
  const { comments } = useComments();

  const approved = works.filter(w => w.status === "APPROVED").length;
  const pending = works.filter(w => w.status === "SUBMITTED").length;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Ласкаво просимо до системи моніторингу наукової діяльності</h1>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Останні події</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-3">
              <i className="fas fa-check"></i>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Ваша робота "{works[0]?.title}" схвалена</p>
              <p className="text-xs text-gray-500">15 хвилин тому</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Мої роботи</h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Всього робіт:</span>
            <span className="font-medium">{works.length}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Схвалено:</span>
            <span className="font-medium text-green-600">{approved}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">На розгляді:</span>
            <span className="font-medium text-yellow-600">{pending}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Коментарі</h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Всього коментарів:</span>
            <span className="font-medium">{comments.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
