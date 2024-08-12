import React, { useState } from 'react';
import './Header.css'
import tuf from './Assets/tuf.jpg'

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={tuf} alt="Logo" />
      </div>
      <div className="title-container">
        <h1>Take U Forward</h1>
      </div>
      <div className="contact-container">
        <button onClick={toggleDropdown}>Contact</button>
        {showDropdown && (
          <ul className="dropdown-menu">
            <li><a href="mailto:dalekishore002@gmail.com">Email</a></li>
            <li><a href="tel:+91 7845318136">Phone</a></li>
            <li><a href="www.linkedin.com/in/kishore-r-ba3a56200" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/Kisore06" target="_blank" rel="noopener noreferrer">Github</a></li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
