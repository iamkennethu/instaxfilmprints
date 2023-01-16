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
          <h1> We value <br/> curated designs. <hr /></h1>
          <p> With over a years of experience in the instax printing 
              <br/> industry, Ashley Gwen Martin has become 
              <br/> world-renowned for her impeccable taste and 
              <br/> trend-setting creative direction. Her remarkable guest 
              <br/> experience and conceptual printing works have 
              <br/> transformed countless event spaces for an incredibly 
              <br/> discerning clientele.
              <br/>
              <br/> <FiFeather size='1em'/>
              </p>
      </div>
      </div>
      </div>
    );
}

export default About3;
