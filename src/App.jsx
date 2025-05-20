import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Front/Home';
import About from './pages/Front/About';
import Contact from './pages/Front/Contact';

import Dashboard from './pages/Dashboard/Dashboard';

import FrontLayout from './layouts/FrontLayout';
import DashboardLayout from './layouts/DashboardLayout';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<FrontLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes here if needed */}
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />}/>
          
          {/* Add more routes here if needed */}
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App
