import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './homeLandingPage/Home';
import About from './aboutLandingPage/About';
import SpecialOffer from './specialofferLandingPage/SpecialOffer';
import Location from './components/Location';
import Guidelines from './components/Guidelines';
import FAQs from './components/FAQs';
import Inquire from './components/Inquire';
import Footer1 from './footer/NavFooter';
import Footer2 from './footer/NavFooter2';

function App() {
  return (
    <div className='App'>
      <Navbar/>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/SpecialOffer' element={<SpecialOffer />}/>
      <Route path='/Location' element={<Location />}/>
      <Route path='/Guidelines' element={<Guidelines />}/>
      <Route path='/FAQs' element={<FAQs />}/>
      <Route path='/Inquire' element={<Inquire />}/>
    </Routes>
    </BrowserRouter>
      <Footer1/>
      <Footer2/>
    </div>
  );
}

export default App;