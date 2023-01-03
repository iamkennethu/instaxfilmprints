import React from 'react';


function Home() {
  return (
    <div className='bg-video'>
      <video loop autoPlay muted id='bg-video'>
      <source src={require('../videos/videoBg.mp4')} type='video/mp4'/></video>
        <div className="fpage">
        </div>
    </div>



  )
}

export default Home;