import React, {useState} from "react";
import logo from '../images/IFP Logo.png'

function NavBar(){
    const [nav,setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }

    }
    window.addEventListener('scroll',changeBackground);

    return (
        <nav className={nav ? "nav active" :"nav"}>
            <a href="/"> <img src={logo} alt=''/>
            </a>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/SpecialOffer">Special Offer</a></li>
                <li><a href="/Location">Location</a></li>
                <li><a href="/Guidelines">Guidelines</a></li>
                <li><a href="/FAQs">FAQs</a></li>
                <li><a href="/Inquire">Inquire</a></li>
            </ul>
        </nav>
    )

}

export default NavBar;