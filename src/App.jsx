import { useState } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './styles/global.css';
import Services from './pages/Services/Services';
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
// import Test from './pages/Test/Test';
import {Route, BrowserRouter as Router, Routes, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isMouseActive, setIsMouseActive] = useState(false);
  // const location = useLocation();

  const handleMouseEnter = () => {
    console.log('Mouse In');
    setIsMouseActive(true);
  }
  const handleMouseLeave = () => {
    console.log('Mouse Out');
    setIsMouseActive(false);
  }
  return (
    <Router>
      {/* <AnimatePresence mode="wait"> */}
        <Header handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
        <Routes>
          <Route path="/" element={<Home isMouseActive={isMouseActive} setIsMouseActive={setIsMouseActive} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      {/* </AnimatePresence> */}
     
      {/* <Services />
      <Resume />
      <Portfolio />
      <Contact /> */}
      {/* <Test /> */}
    </Router>
  )
}

export default App
