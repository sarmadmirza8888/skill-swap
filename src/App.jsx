
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

import Home from './Pages/HomePage/Home'
import Main from './Pages/BrowseSkillPage/Main'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import MyProfile from './Pages/MyProfile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

