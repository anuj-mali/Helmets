import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Assets/login.jpg';

const Login = () => {
  return (
    <>
    <section class="vh-100">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">

   
        <div class="w-75 m-auto p-auto mt-5 pt-3">

          <form >
            <h3 class="fw-normal mb-3 mt-5 pb-3">Log in</h3>

            <div class="form-outline mb-4">
              <input type="email" id="email" class="form-control form-control-lg" />
              <label class="form-label" for="email">Email address</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="password" class="form-control form-control-lg" />
              <label class="form-label" for="password">Password</label>
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-info btn-lg btn-block" type="button">Login</button>
            </div>

            <p>Don't have an account? <Link to={"/register"} class="link-info">Register here</Link></p>

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

export default Login