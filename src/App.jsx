import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Register from './Pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>HOME PAGE</h1>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App