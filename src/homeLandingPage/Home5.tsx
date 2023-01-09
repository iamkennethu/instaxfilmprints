/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import picSamp1 from '../images/picSamp1.png';
import picSamp2 from '../images/picSamp2.png';
import picSamp3 from '../images/picSamp3.png';



function Home5() {
  return (
    <div className='main'>
        <div className='fPage5'>
          <h1> WE CAN'T WAIT TO PRINT WITH YOU </h1>
          <ul>
          <li><a href="/Inquire" > INQUIRE WITH US <hr/></a></li>
          </ul>
          <a> <img src={picSamp1} alt='image1' className='pImage'/> </a>
          <a> <img src={picSamp2} alt='image2' className='pImage'/></a>
          <a> <img src={picSamp3} alt='image3' className='pImage'/></a>
          <h4> Follow for more updates </h4>
          <ol><a href="/Inquire" > @INSTAXFILMPRINTS.PH </a></ol>
      </div>
    </div>

     



  )
}

export default Home5;