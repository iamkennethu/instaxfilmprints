import React from 'react';
import About2 from './About2';
import About3 from './About3';
import About4 from './About4';
import About5 from './About5';
import About6 from './About6';
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
          <br/> Indelible to yield <em>unparalleled artistry</em>
          <br/> and <em>remarkable denouement</em> </h1>
    <div className='aPageBg'>
    <div className='aPageBgStyle'>
          <p> <img src={aPage1Sample1} alt=''/>
              <h1> We believe that <em>detail-driven <br/> styling</em> establishes the <br/> foundation for <  em>magical moments.</em> </h1>
              <br/> At East Made Co, we believe in the inviting, elegant warmth 
              <br/> of a wedding so personally tailored to you that your 
              <br/> wedding day memories will be recounted for generations.
              <br/> Our favorite gatherings are replete with laughter,
              <br/> effusive tears, memorable music, and delectable cuisine, 
              <br/> surrounded by your dearest family and friends.
          </p>
    <div className='aPageStyle2'>
              <p> Owner and Creative Director Ashley Gwen Martin
              <br/> founded InstaxFilmPrints in 2020 with the goal of 
              <br/> infusing memories with refined styling and purposeful,
              <br/> story-driven design, rooted in connection and vintage.
              <br/> 
              <br/> Drawing from her classical music background and 
              <br/> professional experience performing in major symphony orchestras,
              <br/> Elizabeth is naturally detail-oriented, perceptive, and organized.
              <br/> She infuses inspiration from fashion, fine art, and interior design
              <br/>  into her work, and has a natural eye for elegant style. 
          </p>
          <img src={aPage1Sample2} alt=''/>
    </div>
    </div>
    </div>
    <About2/>
    <About3/>
    <About4/>
    <About5/>
    <About6/>
    </div>
    
  )
}

export default About;