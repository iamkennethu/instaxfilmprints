/* eslint-disable react/style-prop-object */
import React from 'react'
import p2Sample1 from '../images/p2Sample1.png';

function Inquire() {
  return (
    <div className='iPage'>
      <div className='iPageBgStyle'>
          <img src={p2Sample1} alt=''/>
          <div className='iPageInquire'>
        <form className='form' action="https://formsubmit.co/a116386e18fe6ceb8dbdace91dfd5807" method="POST">
        <h1> Inquire</h1>
        <p> We'd love to hear from you! Please fill out the form
        <br/> below or send a note directly to @instaxfilmprints
        </p>
        <br/>
          <input type="text" name="Name" placeholder='YOUR NAME' required></input>
          <br/>
          <input type="email" name="Email" placeholder='EMAIL ADDRESS' required></input>
          <br/>
          <input type="Contact" name="Contact" placeholder='PHONE NUMBER' required></input>
          <br/>
          <input type="Budget" name="Budget" placeholder='ESTIMATED OVERALL BUDGET' required></input>
          <br/>
          <textarea name='Message' placeholder='Enter your message here.' required></textarea>
          <br/>
          <button type='submit'> SUBMIT FORM </button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Inquire;