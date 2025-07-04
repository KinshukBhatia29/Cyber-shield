import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [involveOpen, setInvolveOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setAboutOpen(false);
        setInvolveOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setAboutOpen(false);
    setInvolveOpen(false);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
    setAboutOpen(false);
    setInvolveOpen(false);
  };

  return (
    <nav ref={navRef} className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <a href="/"><img src="/images/Logo.png" alt="Logo" /></a>
        </div>

        <button className={styles.menuBtn} onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <li><a href="#" onClick={handleNavLinkClick}>The Issue</a></li>

          <li className={styles.dropdown}>
            <span onClick={() => {
              setAboutOpen(!aboutOpen);
              setInvolveOpen(false);
            }}>
              About Us ▾
            </span>
            <ul className={`${styles.dropdownMenu} ${aboutOpen ? styles.show : ""}`}>
              <li><a href="#" onClick={handleNavLinkClick}>Vision</a></li>
              <li><a href="#" onClick={handleNavLinkClick}>Mission</a></li>
              <li><a href="#" onClick={handleNavLinkClick}>Mentors</a></li>
              <li><a href="#" onClick={handleNavLinkClick}>Executive Team</a></li>
            </ul>
          </li>

          <li className={styles.dropdown}>
            <span onClick={() => {
              setInvolveOpen(!involveOpen);
              setAboutOpen(false);
            }}>
              Get Involve ▾
            </span>
            <ul className={`${styles.dropdownMenu} ${involveOpen ? styles.show : ""}`}>
              <li><a href="#" onClick={handleNavLinkClick}>Volunteer</a></li>
              <li><a href="#" onClick={handleNavLinkClick}>Internship</a></li>
              <li><a href="#" onClick={handleNavLinkClick}>Partner</a></li>
              <li><a href="#" onClick={handleNavLinkClick}>Support</a></li>
            </ul>
          </li>

          <li><a href="#" onClick={handleNavLinkClick}>Events</a></li>
          <li><a href="#" onClick={handleNavLinkClick}>Resources</a></li>
          <li><a href="#" onClick={handleNavLinkClick}>Contact Us</a></li>
          <li><a href="#" className={styles.donateBtn} onClick={handleNavLinkClick}>Donate</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
