/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import p5Sample1 from '../images/p5Sample1.png';
import p5Sample2 from '../images/p5Sample2.png';
import p5Sample3 from '../images/p5Sample3.png';



function NavFooter() {
  return (
    <div className='main'>
        <div className='fPage5'>
          <h1> WE CAN'T WAIT TO PRINT WITH YOU </h1>
          <ul>
          <li><a href="/Inquire" > INQUIRE WITH US <hr/></a></li>
          </ul>
          <a> <img src={p5Sample1} alt='image1' className='pImage'/> </a>
          <a> <img src={p5Sample2} alt='image2' className='pImage'/></a>
          <a> <img src={p5Sample3} alt='image3' className='pImage'/></a>
          <h4> Follow for more updates </h4>
          <ol><a href="/Inquire" > @INSTAXFILMPRINTS.PH </a></ol>
      </div>
    </div>

     



  )
}

export default NavFooter;