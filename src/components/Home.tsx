import React from 'react';
import adv from '../videos/adv.mp4';

function Home() {
  return (
    <div className='main'>
    <video src={adv} autoPlay loop muted/>
    </div>
  );
}

export default Home;