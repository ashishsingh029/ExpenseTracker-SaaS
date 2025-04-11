import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedRoute from "./layouts/ProtectedRoute";
import useAuthStore from "./store/authStore";
import { Toaster } from "react-hot-toast"

const App = () => {
  // Initialize Auth store in App start
  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  // if (loading) {
  //   return <div>Loading...</div>; // Show loading until auth is initialized
  // }

  return (
    <>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Protected App Routes */}
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expense" element={<Expense />} />
          </Route>
        </Routes>
      </Router>
      <Toaster 
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px"
          },
        }}
      />
    </>
  );
};
export default App;
