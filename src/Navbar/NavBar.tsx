import React, {useState} from "react";
import logo from '../images/logo.png'
import { Link } from "react-scroll";

function NavBar() {

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

    return(
        <nav className={nav ? "nav active" :"nav"}>
            <Link to='#' className='logo'>
                <img src={logo} alt="" />
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
                <label className='menu icon' htmlFor='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                <a href="/home"> Home </a>
                <li><Link to='#'>About</Link></li>
                <li><Link to='#'>Special Offer</Link></li>
                <li><Link to='#'>Location</Link></li>
                <li><Link to='#'>Guidelines</Link></li>
                <li><Link to='#'>FAQs</Link></li>

                </ul>
        </nav>
    )

}

export default NavBar;