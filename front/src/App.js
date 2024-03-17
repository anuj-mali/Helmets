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
import Product from './Pages/Product/Product';
import {GlobalStyle} from './GlobalStyle';
import { ThemeProvider } from 'styled-components';


function App() {
const theme={
  colors:{
    bg:"#fff"
  },
}

  return (
    <>
    <ThemeProvider theme={theme}>
      <Router>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Product/:id" element={<Product/>}/>
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>

    </>
    );
}

export default App;
