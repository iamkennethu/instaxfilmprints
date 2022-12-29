import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import About from './components/About';
import SpecialOffers from './components/SpecialOffers';
import Location from './components/Location';
import Guidelines from './components/Guidelines';
import FAQs from './components/FAQs';


function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path='/Home' element={<Home />}/>
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