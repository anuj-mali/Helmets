import './App.css';


import{
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
    );
}

export default App;
