import React from "react";
import './NavBar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <span className="nav-logo">Instax Film Print PH</span>
            <div className="nav-items"></div>
            <a href="/home"> Home </a>
            <a href="/About"> About </a>
            <a href="/SpecialOffers"> Special Offers </a>
            <a href="/Location"> Location </a>
            <a href="/Guidelines"> Guidelines </a>
            <a href="/FAQs"> FAQs </a>
            <div className="nav-toggle">
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar;