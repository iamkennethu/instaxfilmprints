import React from 'react';
import './App.css';
import Navbar from './Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  { HomePage }  from './components/Home';
import About from './components/About';
import SpecialOffers from './components/SpecialOffers';
import Location from './components/Location';
import Guidelines from './components/Guidelines';
import FAQs from './components/FAQs';


function App() {
  return (
    <div className='App'>
      <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/Home' element={<HomePage />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/SpecialOffers' element={<SpecialOffers />}/>
      <Route path='/Location' element={<Location />}/>
      <Route path='/Guidelines' element={<Guidelines />}/>
      <Route path='/FAQs' element={<FAQs />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;