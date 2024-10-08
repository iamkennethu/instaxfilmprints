import React from 'react';
import { FiFeather } from 'react-icons/fi';
import SpecialOffer2 from './SpecialOffer2';
import SpecialOffer3 from './SpecialOffer3';
import SpecialOffer4 from './SpecialOffer4';
import SpecialOffer5 from './SpecialOffer5';
import SpecialOffer6 from './SpecialOffer6';

function SpecialOffers() {
  return (
    <div className='bg-video'>
    <video loop autoPlay muted id='bg-video'>
    <source src={require('../videos/videoBg3.mp4')} type='video/mp4' /></video>
    <div className="sPage">
          <hr/>
          <h5> OUR FAVORITE MOMENTS </h5>
          <h1><em>Experience the Magic </em></h1>
          <p> We've designed and directed noteworthy memories from All over the Philippines to Canada,
          <br /> and beyond. Whether you're envisioning a Party-stle ancienne setting or a moderne
          <br />
          <br />
          <FiFeather size='1em'/>
          </p>

    </div>
    <SpecialOffer2/>
    <SpecialOffer3/>
    <SpecialOffer4/>
    <SpecialOffer5/>
    <SpecialOffer6/>
    </div>
  )
}

export default SpecialOffers;