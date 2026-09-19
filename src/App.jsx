import React from 'react'
import Home from './Pages/HomePage/Home'
import { Route, Routes } from 'react-router'
import Main from './Pages/BrowseSkillPage/Main'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Main/>} />
      </Routes>
    </div>
  )
}

export default App
