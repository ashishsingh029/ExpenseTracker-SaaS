import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
import { getToken } from "./utils/helper"
import AuthLayout from "./layouts/AuthLayout";
import ProtectedRoute from "./layouts/ProtectedRoute"
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected App Routes */}
        <Route path="/" element={<ProtectedRoute />} >
          <Route element={<AuthLayout />}>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expense" element={<Expense />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
export default App;

const Root = () => {
  const token = getToken();
  return token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;
};
