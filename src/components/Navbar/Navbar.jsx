import React, { useState } from "react";
import { SiFacebook, SiTiktok, SiInstagram } from "react-icons/si";
import { SlMenu, SlClose } from "react-icons/sl";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src="/api/placeholder/100/40" alt="Logo" />
      </div>

      {/* Hamburger Menu Button */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        {isMenuOpen ? <SlClose size={24} /> : <SlMenu size={24} />}
      </div>

      {/* Navigation Links */}
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <a href="#" className="nav-link" onClick={toggleMenu}>
          <span>Home</span>
        </a>
        <a href="#" className="nav-link" onClick={toggleMenu}>
          <span>About</span>
        </a>
        <a href="#" className="nav-link" onClick={toggleMenu}>
          <span>Service</span>
        </a>
        <a href="#" className="nav-link" onClick={toggleMenu}>
          <span>Gallery</span>
        </a>
        <a href="#" className="nav-link" onClick={toggleMenu}>
          <span>Contact</span>
        </a>
      </div>

      {/* Social Icons */}
      <div className={`navbar-social ${isMenuOpen ? "active" : ""}`}>
        <a href="#" className="social-icon">
          <SiFacebook size={24} />
        </a>
        <a href="#" className="social-icon">
          <SiInstagram size={24} />
        </a>
        <a href="#" className="social-icon">
          <SiTiktok size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
