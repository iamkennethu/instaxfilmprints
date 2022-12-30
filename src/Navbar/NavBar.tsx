import React, { useState } from "react";
import "./Navbar.css";
import IFPLogo from './images/IFP Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">INSTAX FILM PRINTS</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/service">Special Offers</a>
        <a href="/contact">Location</a>
        <a href="/contact">Guidelines</a>
        <a href="/contact">FAQs</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;