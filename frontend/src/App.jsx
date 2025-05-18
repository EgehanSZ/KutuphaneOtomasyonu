import React from 'react';
import '@ant-design/v5-patch-for-react-19';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import DashboardLayout from './components/Layout/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import BorrowedBooksPage from './pages/BorrowedBooksPage';
import AdminLayout from './components/Layout/AdminLayout';
import AdminDashboardPage from './pages/Admin/AdminDashboardPage';
import BookManagementPage from './pages/Admin/BookManagementPage';
import UserManagementPage from './pages/Admin/UserManagementPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="borrowed" element={<BorrowedBooksPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="books" element={<BookManagementPage />} />
          <Route path="users" element={<UserManagementPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;