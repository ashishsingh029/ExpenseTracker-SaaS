import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import Login from "./pages/Auth/Login"
import Signup from "./pages/Auth/Signup"
import Home from "./pages/Dashboard/Home"
import Income from "./pages/Dashboard/Income"
import Expense from "./pages/Dashboard/Expense"
import { getToken } from './utils/helper'
const App = () => {
  return (
    <div className=''>
      <Router>
        <Routes> 
          <Route path='/' exact element={<Root />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Signup />} />
          <Route path='/dashboard' exact element={<Home />} />
          <Route path='/income' exact element={<Income />} />
          <Route path='/expense' exact element={<Expense />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App

const Root = () => {
  const isAuthenticated = getToken()
  return isAuthenticated ? (
    <Navigate to = "/dashboard" />
  ) : (
    <Navigate to = "/login" />
  )
}