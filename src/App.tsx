/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Book from './pages/Book';
import Admin from './pages/Admin';
import AdminSpaces from './pages/AdminSpaces';
import AdminBookings from './pages/AdminBookings';
import AdminMembers from './pages/AdminMembers';
import AdminReports from './pages/AdminReports';
import AdminSettings from './pages/AdminSettings';
import UserMembership from './pages/UserMembership';
import UserSpaces from './pages/UserSpaces';
import UserMembers from './pages/UserMembers';
import UserInvoices from './pages/UserInvoices';
import UserSettings from './pages/UserSettings';
import { useEffect } from 'react';

function ThemeManager() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  useEffect(() => {
    if (isAdmin) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isAdmin]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ThemeManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/spaces" element={<UserSpaces />} />
          <Route path="/book" element={<Book />} />
          <Route path="/members" element={<UserMembers />} />
          <Route path="/membership" element={<UserMembership />} />
          <Route path="/invoices" element={<UserInvoices />} />
          <Route path="/settings" element={<UserSettings />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/spaces" element={<AdminSpaces />} />
          <Route path="/admin/bookings" element={<AdminBookings />} />
          <Route path="/admin/members" element={<AdminMembers />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}
