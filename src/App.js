import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Header from './Components/Header';
import Navbar from './Components/Navbar';

import Section from './Components/Section';
import Web from './Components/Web';
import Accordion from './Components/accordion/Accordion';
import Seondlast from './Components/Seondlast';
import Section4 from './Components/Section4';
import Tab from './Components/Tabs/Tab';

import Footer from './Components/Footer/Footer';
import Best from './Components/Slider/Best';
import Hire from './Components/HireMe/Hire';










function App() {
  
  return (
<>

    <Navbar/>
    <Header/>
    <Section/>
   
    <Web/>
    <Section4/>
    
    <Accordion/>
    <Seondlast/>
   
    <Tab/>
 
    <Best/>
    <Hire/>
    <Footer/>



</>
  )
}

export default App