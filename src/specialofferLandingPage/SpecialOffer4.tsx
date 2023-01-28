import React from 'react';
import a2Sample1 from '../images/a2Sample1.png'
import { FiFeather } from 'react-icons/fi';

const About3 = () => {
    return (
      <div className='sPageBg4'>
        <h5> OUR FAVORITE REAL INSTAX PRINTS MOMENTS: </h5>
      <div className='sPageBgStyle4'>
          <img src={a2Sample1} alt=''/>
      <div className='sPageBgTxt4'>
          <h5> NO 1 </h5>
          <h1> Giving vintage <br/> details.</h1>
          <hr />
          <p> We print in films because it doesn't fade!
              <br/> Instax films are the perfect medium to preserve
              <br/> your most beloved photos for
              <br/> that nostalgia and old school feels.
              <br/>
              <br/> <FiFeather size='1em'/>
              </p>
      </div>
      </div>
      </div>
    );
}

export default About3;
