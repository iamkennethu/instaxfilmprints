import React from 'react';


function About() {
  return (
    <><div className='bg-video'>
      <video loop autoPlay muted id='bg-video'>
        <source src={require('../videos/videoBg1.mp4')} type='video/mp4' /></video>
    </div>
    <div>
      <h1> Hello World</h1>
      </div></>
  )
}

export default About;