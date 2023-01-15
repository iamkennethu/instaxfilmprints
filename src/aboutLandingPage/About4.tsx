import React from 'react';
import p2Sample1 from '../images/p2Sample1.png'

const Home2 = () => {
    return (
      <div className='fPageBg'>
      <div className='fPageBgStyle'>
          <img src={p2Sample1} alt=''/>
      <div className='fPage2Txt'>
          <h1> Meet Ashley Gwen Martin </h1>
          <h3> CREATIVE DIRECTOR & OWNER </h3><hr />
          <p> With over a years of experience in the instax printing 
              <br/> industry, Ashley Gwen Martin has become 
              <br/> world-renowned for her impeccable taste and 
              <br/> trend-setting creative direction. Her remarkable guest 
              <br/> experience and conceptual printing works have 
              <br/> transformed countless event spaces for an incredibly 
              <br/> discerning clientele.</p>
          <p>Ashley Gwen’s touch make every prints incompatable 
              <br/> experience, transcending the expected to reflect the 
              <br/> unique beauty of her client’s memories.
              <ol><a href="/About" > LEARN MORE </a></ol>
          </p>
      </div>
      </div>
      </div>
    );
}

export default Home2;
