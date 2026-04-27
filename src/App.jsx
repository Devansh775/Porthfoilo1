import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Navbar from './Navbar';
import Todo from './TODO/Todo';
import Currency from './Currency/Curency';

export const App = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#050505] text-slate-50 font-sans selection:bg-blue-500/30">
      <Navbar />
      
      {/* Page Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/currency" element={<Currency />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
