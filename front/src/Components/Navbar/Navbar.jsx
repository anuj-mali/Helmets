import React from 'react';
import Logo from '../../Assets/White_logo.png';
import Loggedin from './Navigation Toggles/Loggedin';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";


const Navbar = () => {


  return (
    <>
 
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class=" navbar-collapse d-flex justify-content-around" id="navbarSupportedContent">
      <a class="navbar-brand mt-2 mt-lg-0 ml-4">
        <img
          src={Logo}
          height="25"
          alt="Helmets Shop"
          loading="lazy"
        />
      </a>
      
      <ul class="navbar-nav me-4 mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={"/"} class="nav-link">Home</Link>
        </li>
        <li class="nav-item">
          <Link to={"/shop"} class="nav-link">Shop</Link>
        </li>
        <li class="nav-item">
          <Link to={"/about"} class="nav-link">About Us</Link>
        </li>
        <li class="nav-item">
          <Link to={"/contact"} class="nav-link">Contact Us</Link>
        </li>
      </ul>
      
      
      
    <div class="d-flex align-items-center">
      <a class="text-reset me-4">
        <i class="fa-solid fa-magnifying-glass"></i>
      </a>

        <Link to={"/shop"} className="text-reset me-4 cart-trolley--link navbar-link">
        <FiShoppingCart className='cart-trolley'/>
        <span className='cart-total--item'>0</span>
      </Link>
      <Link to={"/login"} class="text-reset me-4">
      
          <i class="fa-regular fa-user"></i>
        </Link>
        
      {/* If Logged in */}
      <Loggedin/>
    </div>
 </div>
  </div>

</nav>
    </>
  )
}

export default Navbar