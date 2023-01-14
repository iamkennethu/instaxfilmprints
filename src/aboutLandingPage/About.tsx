import React from 'react';
import About2 from './About2';
import p2Sample1 from '../images/p2Sample1.png';

function About() {
  return (
    <div className='aPage'>
      <video loop autoPlay muted id='bg-video'>
        <source src={require('../videos/videoBg1.mp4')} type='video/mp4' /></video>
        <hr/>
        <h5> ABOUT </h5>
        <h1> We employ distinctive design and
          <br/> Indelible to yield unparalleled artistry
          <br/> and remarkable denouement </h1>
    <div className='aPageBg'>
    <div className='aPageBgStyle'>
          <p> <img src={p2Sample1} alt=''/>
              <br/> With over a years of experience in the instax printing 
              <br/> industry, Ashley Gwen Martin has become 
              <br/> world-renowned for her impeccable taste and 
              <br/> trend-setting creative direction. Her remarkable guest 
              <br/> experience and conceptual printing works have 
              <br/> transformed countless event spaces for an incredibly 
              <br/> discerning clientele.
          </p>
    <div className='aPageStyle2'>
          <p> With over a years of experience in the instax printing 
              <br/> industry, Ashley Gwen Martin has become 
              <br/> world-renowned for her impeccable taste and 
              <br/> trend-setting creative direction. Her remarkable guest 
              <br/> experience and conceptual printing works have 
              <br/> transformed countless event spaces for an incredibly 
              <br/> discerning clientele.
          </p>
          <img src={p2Sample1} alt=''/>
    </div>
    </div>
    </div>
    <About2/>
    </div>
    
  )
}

export default About;