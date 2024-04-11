import React, { useState } from 'react';
import cyberr from "../assests/cyber.png"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={cyberr} alt="Logo" className="logo" />
        <span className="brand-name">
            <span className="title">cyber</span>nest
        </span>

      </div>

      <div className="menu-icon-container" onClick={toggleNavBar}>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`}>
        <span className="long-span"></span>
        <span className="short-span"></span>
        </div>
      </div>
    


      <div className={`nav-links-container ${isOpen ? 'open' : ''}`}>
        
        <div className="menu-items">
          <ul>
            <li>
              <a href="home">Home
                </a></li>
                <li>
              <a href="services">Services
                </a></li>
                <li>
              <a href="work">Work
                </a></li>
                <li>
              <a href="about">About
                </a></li>
                <li>
              <a href="Contact">Contact
                </a></li>
            
          </ul>
        </div>
        <div className="contact-info">
          <p>info@cybernest.com</p>
          <br/>
          <p>Visit Us 2918 Avenue I Unit #5055 Brooklyn NY 11210 United States  +1(347) 744-9694</p>
          <br/>
          <p>345, Block H3 Johar Town 54000 Punjab, Lahore Pakistan 
            +92(423) 218-8653</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
