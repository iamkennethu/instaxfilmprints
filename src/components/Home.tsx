import React from 'react';


function Home() {
  return (
    <div className='bg-video'>
      <video loop autoPlay muted id='bg-video'>
      <source src={require('../videos/videoBg.mp4')} type='video/mp4'/></video>
        <div className="background-image"
          style={{ backgroundImage:"url(https://www.linkpicture.com/q/Website-Home-V.jpg)"}}>
        </div>
    </div>



  )
}

export default Home;