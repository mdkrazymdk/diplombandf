// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import CommentsPage from "./pages/CommentsPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Topbar />
          <div className="flex-1 overflow-auto p-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/works" element={<WorksPage />} />
              <Route path="/comments" element={<CommentsPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
