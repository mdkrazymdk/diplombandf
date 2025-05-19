// src/pages/main.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Routes, Route, Navigate } from "react-router-dom";
import WorksPage from "./WorksPage";
import CommentsPage from "./CommentsPage";
import HomePage from "./HomePage";
import AdminPage from "./AdminPage";

export default function MainPage({ user, logout, token }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar user={user} logout={logout} />
      <div className="flex flex-col flex-1">
        <Topbar user={user} />
        <main className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/works" element={<WorksPage user={user} token={token} />} />
            <Route path="/comments" element={<CommentsPage user={user} token={token} />} />
            <Route path="/admin" element={<AdminPage user={user} token={token} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
