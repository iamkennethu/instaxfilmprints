import React from 'react';
// import webHome2 from '../images/webHome2.jpg';
import Sample1 from '../images/picsamp.png';


function Home() {
  return (
    <div className='main'>
    <div className='bg-video'>
      <video loop autoPlay muted id='bg-video'>
      <source src={require('../videos/videoBg.mp4')} type='video/mp4'/></video>
        <div className='fPage'>
          <h5> WELCOME TO INSTAX FILM PRINTS PH. </h5>
          <h1> PRINT IN FILMS <br/> THEY NEVER FADE. </h1>
          <p> Keep your most cherished photos in polaroid films <br/> that nostalgia feels. </p>
          {/* <img className='fpage' src={webHome2} alt=""/>  */}
        <a href="/Guidelines"> <img className='fPagePhoto' src={Sample1} alt=''/> </a>
        <a href="/Guidelines"> <img src={Sample1} alt=''/></a>
        <a href="/Guidelines"> <img src={Sample1} alt=''/></a>
        </div>
        </div>
     </div>
     



  )
}

export default Home;