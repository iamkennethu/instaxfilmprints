import React from 'react';
// import webHome2 from '../images/webHome2.jpg';
import picSamp1 from '../images/picSamp1.png';
import picSamp2 from '../images/picSamp2.png';
import picSamp3 from '../images/picSamp3.png';
// import Home2 from './Home2';
import Home4 from './Home4';
import Home5 from './Home5';



function Home() {
  return (
    <><div className='main'>
      <div className='bg-video'>
        <video loop autoPlay muted id='bg-video'>
          <source src={require('../videos/videoBg.mp4')} type='video/mp4' /></video>
        <div className='fPage'>
          <hr/>
          <h5> WELCOME TO INSTAX FILM PRINTS PH. </h5>
          <h1> PRINT IN FILMS <br /> THEY NEVER FADE. </h1>
          <p> Keep your most cherished photos in polaroid films <br /> that nostalgia feels. </p>
          {/* <img className='fpage' src={webHome2} alt=""/>  */}
          <a href="/Guidelines"> <img src={picSamp1} alt='' className='pImage'/> </a>
          <a href="/Guidelines"> <img src={picSamp2} alt='' className='pImage'/></a>
          <a href="/Guidelines"> <img src={picSamp3} alt='' className='pImage'/></a>
      </div>
    </div>
    </div>
    {/* <Home2 /> */}
    <Home4 />
    <Home5 />
    </>
     



  )
}

export default Home;