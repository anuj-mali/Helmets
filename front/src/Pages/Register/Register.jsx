import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Assets/login.jpg';

const Register = () => {
  return (
    <>
    <section class="vh-100">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">

   
        <div class="w-75 m-auto p-auto mt-5 pt-3">

          <form >
            <h3 class="fw-normal mb-3 mt-5 pb-3">Register</h3>
            <div class="d-flex">
            <div class="form-outline mb-4">
              <input type="text" id="fname" class="form-control form-control-lg" />
              <label class="form-label" for="fname">First Name</label>
            </div>
            <div class="form-outline mb-4">
              <input type="text" id="lname" class="form-control form-control-lg" />
              <label class="form-label" for="lname">Last Name</label>
            </div>
            </div>
            <div class="form-outline mb-4">
              <input type="email" id="email" class="form-control form-control-lg" />
              <label class="form-label" for="email">Email address</label>
            </div>
            <div class="d-flex">
            <div class="form-outline mb-4">
              <input type="password" id="password" class="form-control form-control-lg" />
              <label class="form-label" for="password">Password</label>
            </div>
            <div class="form-outline mb-4">
              <input type="password" id="cpassword" class="form-control form-control-lg" />
              <label class="form-label" for="cpassword">Confirm Password</label>
            </div>
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-info btn-lg btn-block" type="button">Register</button>
            </div>

            <p>Have an account? <Link to={"/login"} class="link-info">Login</Link></p>

          </form>

        </div>

      </div>
      <div class="col-sm-6 px-0 d-none d-sm-block">
        <img src={image} alt="Login" class="w-100 vh-100"/>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Register