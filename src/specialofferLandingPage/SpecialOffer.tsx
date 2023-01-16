import React from 'react';
import { FiFeather } from 'react-icons/fi';

function SpecialOffers() {
  return (
    <div className='bg-video'>
    <video loop autoPlay muted id='bg-video'>
    <source src={require('../videos/videoBg3.mp4')} type='video/mp4' /></video>
    <div className="sPage">
          <hr/>
          <h5> OUR FAVORITE MOMENTS </h5>
          <h1> Experience the Magic </h1>
          <p> Keep your most cherished photos in polaroid films 
          <br /> that nostalgia feels.
          <br />
          <br />
          <FiFeather size='1em'/>
          </p>

    </div>
    </div>
  )
}

export default SpecialOffers;