import React from 'react';


function About() {
  return (
    <div className='bg-video'>
      <video loop autoPlay muted id='bg-video'>
        <source src={require('../videos/videoBg1.mp4')} type='video/mp4' /></video>
        <div className='aPage'>
        <hr/>
          <h5> ABOUT </h5>
          <h1> We employ distinctive design and
            <br/> Indelible to yield unparalleled artistry
            <br/> and remarkable denouement </h1>
        </div>
    </div>
  )
}

export default About;