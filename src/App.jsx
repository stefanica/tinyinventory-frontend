import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Front/Home';
import About from './pages/Front/About';
import Contact from './pages/Front/Contact';
import Faq from './pages/Front/Faq';
import Terms from './pages/Front/Terms';
import Privacy from './pages/Front/Privacy';

import Dashboard from './pages/Dashboard/Dashboard';

import Login from './pages/Auth/Login';

import FrontLayout from './layouts/FrontLayout';
import DashboardLayout from './layouts/DashboardLayout';
import AuthLayout from './layouts/AuthLayout';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<FrontLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* Add more routes here if needed */}
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />}/>
          
          {/* Add more routes here if needed */}
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />}/>
          
          {/* Add more routes here if needed */}
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App
