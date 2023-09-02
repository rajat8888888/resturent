import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";

import { Navbar } from './component/Navbar';
import { Home } from './pages/Home';
import Footer from './component/Footer';
import { Menu } from './pages/Menu';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
   
     
      <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
       <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
