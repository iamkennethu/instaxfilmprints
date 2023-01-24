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
          <a href="/SpecialOffer/Offer1"> <img src={picSamp1} alt='' className='sOffer1'/> </a>
          <a href="/SpecialOffer/Offer2"> <img src={picSamp2} alt='' className='sOffer2'/></a>
          <a href="/SpecialOffer/Offer3"> <img src={picSamp3} alt='' className='sOffer3'/></a>
          <br/>
          <a href="/SpecialOffer/Offer4"> <img src={picSamp1} alt='' className='sOffer4'/> </a>
          <a href="/SpecialOffer/Offer5"> <img src={picSamp2} alt='' className='sOffer5'/></a>
          <a href="/SpecialOffer/Offer6"> <img src={picSamp3} alt='' className='sOffer6'/></a>
    </div>
  )
}

export default SpecialOffer2;