import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React, { useState } from 'react';

function App() {
  const [dark, setDark] = useState(true);

  const toggleDark = ()=>{
    if (dark===true) {
      console.log(dark);
      setDark(false);
    }
    else{
      console.log(dark);
      setDark(true);
    }
  }

  return (
    <>
      <Router>
        <Navbar dark={dark} toggleDark={toggleDark}/>
        <Routes>
          <Route path="/" element={<Home dark={dark}/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
