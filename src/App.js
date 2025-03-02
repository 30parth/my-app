import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
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
