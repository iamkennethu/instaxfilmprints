import React from 'react';
import adv from "./videos/adv.mp4';

const Main = () => {
  return (
    <div className='Main'>
      <video src={adv} autoPlay loop muted></video>
    </div>
  )
}

export default Main;