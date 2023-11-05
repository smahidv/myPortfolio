import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from '../../images/1a.png';

import "./navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
    document.body.style.overflowY = isOpen ? "visible" : "hidden";
    document.body.style.height = isOpen ? "auto" : "100vh";
  }

  function closeMenu() {
    setIsOpen(false);
    document.body.style.overflowY = "visible";
    document.body.style.height = "auto";
  }

  useEffect(() => {
    const navIcon = document.getElementById("nav-icon");

    const handleClick = () => {
      navIcon.classList.toggle("open");
    };

    navIcon.addEventListener("click", handleClick);

    return () => {
      navIcon.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <header>
      <nav className="nav-container grid ">
        <Link to="#home">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div
          className="humburger-menu"
          onClick={toggleMenu}
        >
          <div id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`nav-options  absolute ${isOpen ? 'open' :''}`}>
          <ul className="nav-options-list">
            <li>
              <Link to="#home" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="#about" onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link to="#projects" onClick={closeMenu}>Projects</Link>
            </li>
            <li className="shared-style-red-botton">
              <Link to="#contact" onClick={closeMenu}>Let's Talk</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
