import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [involveOpen, setInvolveOpen] = useState(false);

  const closeAllDropdowns = () => {
    setAboutOpen(false);
    setInvolveOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <a href="/">
            <img src="/logo.png" alt="Logo" />
          </a>
        </div>

        <button className="menu-btn" onClick={() => {
          setMenuOpen(!menuOpen);
          closeAllDropdowns();
        }}>
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#">The Issue</a></li>

          <li className="dropdown">
            <span onClick={() => {
              setAboutOpen(!aboutOpen);
              setInvolveOpen(false);
            }}>About Us ▾</span>
            <ul className={`dropdown-menu ${aboutOpen ? "show" : ""}`}>
              <li><a href="#">Vision</a></li>
              <li><a href="#">Mission</a></li>
              <li><a href="#">Mentors</a></li>
              <li><a href="#">Executive Team</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <span onClick={() => {
              setInvolveOpen(!involveOpen);
              setAboutOpen(false);
            }}>Get Involve ▾</span>
            <ul className={`dropdown-menu ${involveOpen ? "show" : ""}`}>
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">Internship</a></li>
              <li><a href="#">Partner</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </li>

          <li><a href="#">Events</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a className="donate-btn" href="#">Donate</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
