import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import MyProfile from './Pages/MyProfile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>HOME PAGE</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App