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
      // console.log(dark);
      setDark(false);
    }
    else{
      // console.log(dark);
      setDark(true);
    }
  }

  return (
    <>
      <Router>
        <Navbar dark={dark} toggleDark={toggleDark}/>
        <Routes>
          <Route path="/" element={<Home dark={dark} toggleDark={toggleDark}/>} />
          <Route path="/Home" element={<Home dark={dark} toggleDark={toggleDark}/>} />
          <Route path="/about" element={<About dark={dark} toggleDark={toggleDark} />} />
          <Route path="/projects" element={<Projects dark={dark} toggleDark={toggleDark}/>} />
          <Route path="/contact" element={<Contact dark={dark} toggleDark={toggleDark}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
