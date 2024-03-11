import React,{useEffect} from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Services from './components/Services'
import Tracking from './components/Tracking'
import Contact from './components/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
    <Header/>
    <Router>
      <Routes>
      <Route exact path='/' element={<Homepage/>} />
      <Route exact path='/services' element={<Services/>} />
      <Route exact path='/tracking' element={<Tracking/>} />
      <Route exact path='/contact' element={<Contact/>} />

      
      
      </Routes>
    </Router>
    <Footer/>

    </>
  )
}

export default App