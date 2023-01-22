import React from 'react';
import p2Sample1 from '../images/p2Sample1.png'
import { FiFeather } from 'react-icons/fi';

const About5 = () => {
    return (
      <div className='aPageBg3'>
      <div className='aPageBgStyle3'>
          <img src={p2Sample1} alt=''/>
      <div className='aPageBgTxt3'>
          <h5> NO 3 </h5>
          <h1> Of all the instax <br/> prints, this one was our <br/> favorite. <hr /></h1>
          <p> Designer fashion has always played a key role in our
              <br/> editorial styling and we've been fortunate to style
              <br/> dozens of polaroids - the highest number of 
              <br/> made in our roster. This one polaroid films
              <br/> memories was a standout.
              <br/>
              <br/> <FiFeather size='1em'/>
              </p>
      </div>
      </div>
      </div>
    );
}

export default About5;
