import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaBook, FaStar, FaYoutube } from 'react-icons/fa'; 

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/resume">Gift</a>
        </li>
        {/* <li>
          <a href="/contact">Contact</a>
        </li> */}
        <li className="navbar-icons">
          {/* Star icon for MeritPages */}
          <a href="https://meritpages.com/agattu" target="_blank" rel="noopener noreferrer" className="navbar-icon">
            <FaStar size={20} />
          </a>
          {/* GitHub icon */}
          <a href="https://github.com/agattu1" target="_blank" rel="noopener noreferrer" className="navbar-icon">
            <FaGithub size={20} />
          </a>
          {/* LinkedIn icon */}
          <a href="https://www.linkedin.com/in/anig2" target="_blank" rel="noopener noreferrer" className="navbar-icon">
            <FaLinkedin size={20} />
          </a>
          <a href="https://medium.com/@anirudh1" target="_blank" rel="noopener noreferrer" className="navbar-icon">
            <FaBook size={20} />
          </a>
          <a href="https://youtube.com/@anirudh.g" target="_blank" rel="noopener noreferrer" className="navbar-icon">
            <FaYoutube size={20} />
          </a>
          {/* Email icon */}
          <a href="mailto:gattu.a@outlook.com" className="navbar-icon">
            <FaEnvelope size={20} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
