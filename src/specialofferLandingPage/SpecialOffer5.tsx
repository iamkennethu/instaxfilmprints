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
        <div>Did you know that Ashley is also a knitly done
        <br/> owner?, Her work has been published in 
        <br/> in instagram from philippines to canada. 
        <br/> want to get your own character done with knitly?</div>
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
