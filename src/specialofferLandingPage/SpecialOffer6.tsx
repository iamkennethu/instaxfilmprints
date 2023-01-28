import React from 'react';
import a2Sample3 from '../images/a2Sample3.png'
import { FiFeather } from 'react-icons/fi';

const About5 = () => {
    return (
      <div className='sPageBg4'>
      <div className='sPageBgStyle4'>
          <img src={a2Sample3} alt=''/>
      <div className='sPageBgTxt4'>
          <h5> NO 3 </h5>
          <h1> Customizing instax <br/> prints and details. <hr /></h1>
          <p> Here in Instax Film Prints, we believe that every print
              <br/> deserves their custom frames!
              <br/> No two acrylic frame designs are 
              <br/> the same to match your photos and personality!
              <br/>
              <br/> <FiFeather size='1em'/>
              </p>
      </div>
      </div>
      </div>
    );
}

export default About5;
