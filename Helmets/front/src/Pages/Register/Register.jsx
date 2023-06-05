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
            
            <div className="form-group  mb-4">
            <input htmlFor="text" id="name" name="name"  className="form-control" placeholder="Name" />
          
            
            </div>
            <div className="form-group  mb-4">
            <input htmlFor="text" id="name" name="email"  className="form-control" placeholder="Email" />
            </div>
            <div class="d-flex justify-content-between">
            <div className="form-group  mb-4">
            <input htmlFor="password" id="name" name="password" className="form-control" placeholder="Password" type='password'/>
            </div>
            <div className="form-group  mb-4">
            <input htmlFor="password" id="name" name="cpassword" className="form-control" placeholder="Confirm Password" type='password'/>
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