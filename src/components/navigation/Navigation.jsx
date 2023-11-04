import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from '../../images/1a.png';

import "./navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu(){
    setIsOpen(!isOpen);
    document.body.style.overflowY = isOpen ? "visible" : "hidden";
    document.body.style.height = isOpen  ? "auto" : "100vh";
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
              <Link to="#home">Home</Link>
            </li>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#projects">Projects</Link>
            </li>
            <li className="shared-style-red-botton">
              <Link to="#contact">Let's Talk</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
