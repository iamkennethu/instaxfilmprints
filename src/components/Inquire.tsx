import React, { useState } from 'react';

const Inquire = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // add your form submission logic here
  };

  return (
    <div className='iPage'>
    <form onSubmit={handleSubmit}>
         Name:
      <label>
        <input type="text" value={name} placeholder="Full name" onChange={(e) => setName(e.target.value)} required /></label>
      Email:
      <label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
      Phone Number:
      <label>
        <input type="contact" value={number} onChange={(e) => setNumber(e.target.value)} required /></label>
      Location:
      <label>
        <input type="location" value={location} onChange={(e) => setLocation(e.target.value)} required /></label>
        Estimated Budget:
      <label>
        <input type="budget" value={budget} onChange={(e) => setBudget(e.target.value)} required /></label>
      Message:
      <label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required /></label>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Inquire;
