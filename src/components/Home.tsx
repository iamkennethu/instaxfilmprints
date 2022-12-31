import React from 'react';
import videoBg from '../assets/videoBg.mp4';

function Home() {
  return (
    <div className='videoBg'>
      <video src={videoBg} autoPlay loop muted></video>
    </div>
  )
}

export default Home;