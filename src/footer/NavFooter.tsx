import React from 'react'
import { IconContext } from 'react-icons/lib'
import { CiInstagram } from 'react-icons/ci'
import { RiFacebookBoxFill } from 'react-icons/ri'


function Footer() {
  return (
    <div id='Footer'>
    <div className='Footer'>
        <h1> INSTAX FILM PRINTS PH.</h1>
        <h4> Instax Film Prints PH. is a full-service of printing, event planning and design films specializing in artfully inspired event.</h4>
        <h3> Sta. Rita, Guiguinto, Bulacan.</h3>
        <div className='header-btns'>
        <a href='/Inquire' className='header-btn'> INQUIRE</a>
        </div>
        <IconContext.Provider value={{color: "white", size: "40px", }}>
        <a href="https://www.instagram.com/instaxfilmprints"><CiInstagram/></a><a href="https://web.facebook.com/InstaxFilmPrints.PH"><RiFacebookBoxFill/></a>
        <h5> © 2022 INSTAX FILM PRINTS PH | ALL RIGHT RESERVED</h5>
        </IconContext.Provider>
    </div>
    </div>

  )
}

export default Footer