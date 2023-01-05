import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SpecialOffers from './components/SpecialOffers';
import Location from './components/Location';
import Guidelines from './components/Guidelines';
import FAQs from './components/FAQs';
import Inquire from './components/Inquire';
import Footer from './footer/NavFooter';

function App() {
  return (
    <div className='App'>
      <Navbar/>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/SpecialOffers' element={<SpecialOffers />}/>
      <Route path='/Location' element={<Location />}/>
      <Route path='/Guidelines' element={<Guidelines />}/>
      <Route path='/FAQs' element={<FAQs />}/>
      <Route path='/Inquire' element={<Inquire />}/>
    </Routes>
    </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;