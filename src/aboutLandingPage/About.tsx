import React from 'react';
import About2 from './About2';
import About3 from './About3';
import About4 from './About4';
import About5 from './About5';
import aPage1Sample1 from '../images/aPage1Sample1.png';
import aPage1Sample2 from '../images/aPage1Sample2.png';

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
          <p> <img src={aPage1Sample1} alt=''/>
              <h1> We believe that detail-driven <br/> styling establishes the <br/> foundation for magical moments. </h1>
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
              <br/> industry, Ashley Gwen Martin has become 
              <br/> world-renowned for her impeccable taste and 
              <br/> trend-setting creative direction. Her remarkable guest 
              <br/> experience and conceptual printing works have 
              <br/> transformed countless event spaces for an incredibly 
              <br/> discerning clientele.
          </p>
          <img src={aPage1Sample2} alt=''/>
    </div>
    </div>
    </div>
    <About2/>
    <About3/>
    <About4/>
    <About5/>
    </div>
    
  )
}

export default About;