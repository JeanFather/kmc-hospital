import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import kmcLogo from "../assets/site-images/kmc-custom-logo.png";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="global-header">
      <Link to="/" className="nav-brand" onClick={closeMenu}>
        <div className="brand-logo"><img src={kmcLogo} alt="KMC Logo" className="logo-image" /></div>
        <div className="brand-text">
          Kubwa Muslim <br /> Community Hospital
        </div>
      </Link>
      
      <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle navigation">
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-links">
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
          <Link to="/departments" className="nav-link" onClick={closeMenu}>Departments</Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}