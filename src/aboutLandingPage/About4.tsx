import React from 'react';
import a2Sample2 from '../images/a2Sample2.png'
import { FiFeather } from 'react-icons/fi';

const About4 = () => {
    return (
      <div className='aPageBg4'>
      <div className='aPageBgTxt4'>
      <p>
      <h5> NO 2 </h5>
        <h1> We love <br/> photographing <br/> portraits on film.</h1>
        <hr/>
        <div>Did you know that Ashley is also a knitly done
        <br/> owner?, Her work has been published in 
        <br/> in instagram from philippines to canada. 
        <br/> want to get your own character done with knitly?</div>
         <br/><br/>
        <FiFeather size='1em'/></p>
      <div className='aPageBgStyle4'>
          <img src={a2Sample2} alt=''/>
      </div>
      </div>
      </div>
    );
}

export default About4;
