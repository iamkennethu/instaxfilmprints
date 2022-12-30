import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">INSTAX FILM PRINTS</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/Home">Home</a>
        <a href="/About">About</a>
        <a href="/SpecialOffers">Special Offers</a>
        <a href="/Location">Location</a>
        <a href="/Guidelines">Guidelines</a>
        <a href="/FAQs">FAQs</a>
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