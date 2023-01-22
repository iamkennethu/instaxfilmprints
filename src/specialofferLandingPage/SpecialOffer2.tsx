import React from 'react'
import picSamp1 from '../images/picSamp1.png';
import picSamp2 from '../images/picSamp2.png';
import picSamp3 from '../images/picSamp3.png';

function SpecialOffer2() {
  return (
    <div className='sPage2'>
        <h1> Offered Films</h1>
        <hr/>
        <br/>
        <a href="/Guidelines"> <img src={picSamp1} alt='' className='pImage'/> </a>
          <a href="/Guidelines"> <img src={picSamp2} alt='' className='pImage'/></a>
          <a href="/Guidelines"> <img src={picSamp3} alt='' className='pImage'/></a>
          <br/>
          <a href="/Guidelines"> <img src={picSamp1} alt='' className='pImage'/> </a>
          <a href="/Guidelines"> <img src={picSamp2} alt='' className='pImage'/></a>
          <a href="/Guidelines"> <img src={picSamp3} alt='' className='pImage'/></a>
    </div>
  )
}

export default SpecialOffer2;