import React from 'react';

const Header = ({ onNavigate }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
        <h1>Mi Sitio Web</h1>
      </div>
      <nav>
        <button onClick={() => onNavigate('home')}>Home</button>
        <button onClick={() => onNavigate('about')}>About</button>
        <button onClick={() => onNavigate('contact')}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;