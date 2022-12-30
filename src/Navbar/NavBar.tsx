import React, { useState } from "react";
import './NavBar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Navbar">
            <span className="nav-logo">DevLHB</span>
            <div className={`nav-items ${isOpen && "Open"}`}></div>
            <a href="/home"> Home </a>
            <a href="/About"> About </a>
            <a href="/SpecialOffers"> Special Offers </a>
            <a href="/Location"> Location </a>
            <a href="/Guidelines"> Guidelines </a>
            <a href="/FAQs"> FAQs </a>
            <div className={`nav-toggle ${isOpen && "Open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar;