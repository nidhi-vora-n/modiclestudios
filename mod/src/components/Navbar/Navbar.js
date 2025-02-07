import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Create a CSS file for styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { width } from "@fortawesome/free-solid-svg-icons/faBullseye";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [areLinksVisible, setAreLinksVisible] = useState(false);

  const toggleNav = () => {
    if (!isNavOpen) {
      setIsNavOpen(true);
      setTimeout(() => setAreLinksVisible(true), 300); // Delay for link animation
    } else {
      setAreLinksVisible(false);
      setTimeout(() => setIsNavOpen(false), 300); // Delay for closing nav
    }
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="navbar">
      <div className="logo">
      <Link to="/"><img src="../../assets/images/mod-new.png" alt="Logo" /></Link>
      </div>
      <div
        className={`hamburger ${isNavOpen ? "open" : ""}`}
        onClick={toggleNav}
      >
        <span></span>
        <span class="ham"></span>
        <span></span>
      </div>
      <div className={`nav-overlay ${isNavOpen ? "show" : ""}`}>
        <div className="nav-content">
          <div className="nav-links-section">
            <ul
              className={`nav-links ${areLinksVisible ? "animate-links" : ""}`}
            >
              <li style={{ animationDelay: "0.2s" }}>
                <Link to="/" onClick={toggleNav}>Home</Link>
              </li>
              <li className="dropdown" style={{ animationDelay: "0.6s" }}>
                <span onClick={toggleDropdown}>
                  Solutions{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ fontSize: "18px" }}
                  />
                </span>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li style={{ animationDelay: "0.8s" }}>
                    <Link to="/Strategy" onClick={toggleNav}>Strategy</Link>
                    </li>
                    <li style={{ animationDelay: "1.0s" }}>
                    <Link to="/Design" onClick={toggleNav}>Design</Link>
                    </li>
                    <li style={{ animationDelay: "1.2s" }}>
                    <Link to="/Develop" onClick={toggleNav}>Develop</Link>
                    </li>
                    <li style={{ animationDelay: "1.2s" }}>
                    <Link to="/Content" onClick={toggleNav}>Content</Link>
                    </li>
                    <li style={{ animationDelay: "1.2s" }}>
                    <Link to="/Digital" onClick={toggleNav}>Digital</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li style={{ animationDelay: "0.4s" }}>
              <Link to="/work" onClick={toggleNav}>Work</Link>
              </li>
              <li style={{ animationDelay: "0.4s" }}>
              <Link to="/about" onClick={toggleNav}>About</Link>
              </li>
              <li style={{ animationDelay: "1.0s" }}>
              <Link to="/careers" onClick={toggleNav}>Careers</Link>
              </li>
              <li style={{ animationDelay: "0.8s" }}>
                <Link to="/contact" onClick={toggleNav}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="extra-section">
            <div className="location">
              <strong>Location:</strong>
              <br></br>{" "}
              <span>Office No 706, Filix Tower, Bhandup, Mumbai - 400078</span>
            </div>
            <div className="time">
              <strong>Time:</strong>
              <br></br> <span>10:00 AM - 6:00 PM</span>
            </div>
            <div className="social-links">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
