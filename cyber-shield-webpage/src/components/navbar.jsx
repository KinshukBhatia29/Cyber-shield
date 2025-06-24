import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
