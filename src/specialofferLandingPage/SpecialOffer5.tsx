import React from 'react';
import a2Sample2 from '../images/a2Sample2.png'
import { FiFeather } from 'react-icons/fi';

const About4 = () => {
    return (
      <div className='sPageBg5'>
      <div className='sPageBgTxt5'>
      <p>
      <h5> NO 2 </h5>
        <h1> Giving our <br/> customers memorable <br/> experience.</h1>
        <hr/>
        <div>Every new film is a unique memory.
        <br/> For being almost 3 years in the industry,
        <br/> we've printed over a thousand photos 
        <br/> that our customers delighted. Nothing beats seeing
        <br/> your favorite photos in display!
        </div>
         <br/>
        <FiFeather size='1em'/></p>
      <div className='sPageBgStyle5'>
          <img src={a2Sample2} alt=''/>
      </div>
      </div>
      </div>
    );
}

export default About4;
