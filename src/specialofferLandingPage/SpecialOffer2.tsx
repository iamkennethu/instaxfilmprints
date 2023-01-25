import React from 'react'
import P1 from '../images/P1.png';
import P2 from '../images/P2.png';
import P3 from '../images/P3.png';
import P4 from '../images/P4.png';
import P5 from '../images/P5.png';
import P6 from '../images/P6.png';

function SpecialOffer2() {
  return (
    <div className='sPage2'>
        <h1> Offered Films</h1>
        <hr/>
        <br/>
          <a href="/SpecialOffer/Offer1"> <img id='image1Promo' src={P1} alt=''/> </a>
          <a href="/SpecialOffer/Offer2"> <img id='image2Promo'src={P2} alt=''/></a>
          <a href="/SpecialOffer/Offer3"> <img id='image3Promo' src={P3} alt=''/></a>
          <br/>
          <a href="/SpecialOffer/Offer4"> <img id='image4Promo' src={P4} alt=''/> </a>
          <a href="/SpecialOffer/Offer5"> <img id='image5Promo' src={P5} alt=''/></a>
          <a href="/SpecialOffer/Offer6"> <img id='image6Promo' src={P6} alt=''/></a>
    </div>
  )
}

export default SpecialOffer2;