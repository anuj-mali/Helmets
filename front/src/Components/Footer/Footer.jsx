import React from 'react';
import Logo from '../../Assets/logo.png';

const Footer = () => {
  return (
    <>
<footer class="text-center text-lg-start bg-dark text-muted">
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </section>
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           <h6 class="text-uppercase fw-bold mb-4">
            <img src={Logo} height="25"/>   Helmets Shop
          </h6>
          <p>
            Helmets at an affortable price
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">AGV</a>
          </p>
          <p>
            <a href="#!" class="text-reset">AXOR</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Studds</a>
          </p>
          <p>
            <a href="#!" class="text-reset">LS2</a>
          </p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Offers</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Location</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> Bakhundol, Lalitpur</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            sales@helmetsshop.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 977 9810102030</p>
          
        </div>
      </div>
    </div>
  </section>

 
  <div class="text-center p-4" >
       © 2023 Copyright: Potato.inc
 
  </div>
 
</footer>
    </>
  )
}

export default Footer