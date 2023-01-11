import React from 'react';


function About() {
  return (
    <div className='bg-video'>
      <video loop autoPlay muted id='bg-video'>
        <source src={require('../videos/videoBg1.mp4')} type='video/mp4' /></video>
    </div>
  )
}

export default About;