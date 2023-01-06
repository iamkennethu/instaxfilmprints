import React from 'react';
import Sample1 from '../images/picsamp.png';


function Home() {
  return (
    <div className='main'>
    <div className='bg-video'>
      <video loop autoPlay muted id='bg-video'>
      <source src={require('../videos/videoBg.mp4')} type='video/mp4'/></video>
        <div className="fpage">
        <a href="/Guidelines"> <img src={Sample1} alt=''/></a>
        </div>
        </div>
    </div>



  )
}

export default Home;