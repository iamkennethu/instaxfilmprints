/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { IconContext } from 'react-icons/lib'
import { CiInstagram } from 'react-icons/ci'
import { IoIosArrowDropupCircle } from 'react-icons/io'
import { RiFacebookBoxFill } from 'react-icons/ri'


function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const button = document.querySelector('.scroll-to-top-button');

    const handleScroll = () => {
      if (!button) return;

      if (window.pageYOffset === 0) {
        button.classList.add('hidden');
      } else {
        button.classList.remove('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div id='Footer'>
    <div className='Footer'>
        <h1> INSTAX FILM PRINTS PH.</h1>
        <p> Instax Film Prints PH. is a full-service of printing, event planning and design films <br/> specializing in artfully inspired event.</p>
        <h3> Sta. Rita, Guiguinto, Bulacan.</h3>
        <div className='header-btns'>
        <a href='/Inquire' className='header-btn'> INQUIRE</a>
        </div>
        <IconContext.Provider value={{ className: "icon", size:'40px'}}>
        <a href="https://www.instagram.com/instaxfilmprints"><CiInstagram/></a><a href="https://web.facebook.com/InstaxFilmPrints.PH"><RiFacebookBoxFill/></a>
        <h4> follow along </h4>
        <h5> © 2022 INSTAX FILM PRINTS PH | ALL RIGHT RESERVED</h5>
        <a className="scroll-to-top-button" onClick={scrollToTop}><IoIosArrowDropupCircle/></a>
        </IconContext.Provider>
    </div>
    </div>

  )
}

export default Footer