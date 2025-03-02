import './App.css';
import Body from './component/Body';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Body />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
