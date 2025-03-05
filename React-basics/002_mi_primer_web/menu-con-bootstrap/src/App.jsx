import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBarApp } from './components/NavBar';
import {Home} from './components/Home';
import {About} from './components/About';
function App() {
  return (
    <>
      <NavBarApp />
      <Routes>
        {/* Define tus rutas aquí */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </>
  );
}

export default App;
