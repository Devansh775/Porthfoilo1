import React from 'react'

import { Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Navbar from './Navbar'
import Rigth from './Pages/Rigth'
import Todo from './TODO/Todo'
export const App = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Navbar rendered once outside Routes so it persists across pages */}
      <div className="mt-4">
        <Navbar />
      </div>
      
      
      {/* Page Content */}
      <div className="flex-1 mt-8 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>

    </div>
  )
}
export default App

