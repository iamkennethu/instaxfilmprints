import React from 'react';
import p2Sample1 from '../images/p2Sample1.png'
import { FiFeather } from 'react-icons/fi';

const About3 = () => {
    return (
      <div className='aPageBg3'>
        <h5> A FEW THINGS YOU SHOULD KNOW. </h5>
      <div className='aPageBgStyle3'>
          <img src={p2Sample1} alt=''/>
      <div className='aPageBgTxt3'>
          <h5> NO 1 </h5>
          <h1> We value <br/> curated designs.</h1>
          <hr />
          <p> We've perfected consistent and eye-catching
              <br/> detail styling techniques and have taught the
              <br/> Instax Films method to polaroid industry
              <br/> professionals at workshops from Philippines.
              <br/> Tangible details preserve your memories.
              <br/>
              <br/> <FiFeather size='1em'/>
              </p>
      </div>
      </div>
      </div>
    );
}

export default About3;
