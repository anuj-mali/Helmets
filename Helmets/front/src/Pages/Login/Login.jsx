import React, {useState} from 'react';
import { useUserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';
import image from '../../Assets/login.jpg';


const Login = () => {
  const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, access ,logout} = useUserContext();
    const handelEmail = (e) => {
      setEmail(e.target.value);
  };
  const handlePassword = (e) => {
      setPassword(e.target.value);
  };
    const handelSubmit = (e) => {
      e.preventDefault();
      login("/create/", {username:username, password:password}).then((res) => {
      
        
      }
      ).catch((err) => {  
        console.log(err);
      }
      );

    }
    console.log("Access Toke is ",access);
  return (
    <>
    <section class="vh-100">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">

   
        <div class="w-75 m-auto p-auto mt-5 pt-3">

          <form action='#' method='post'>
            <h3 class="fw-normal mb-3 mt-5 pb-3">Log in</h3>

            <div className="form-group  mb-4">
            <input htmlFor="text" name="name"  className="form-control" placeholder="Email" onChange={handelEmail} />
            </div>

            <div className="form-group  mb-4">
            <input htmlFor="password" name="name" className="form-control" placeholder="Password" type='password'onChange={handlePassword}/>
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-info btn-lg btn-block" type="button" onClick={handelSubmit}>Login</button>
            </div>

            <p>Don't have an account? <Link to={"/register"} class="link-info">Register here</Link></p>
            <button onClick={logout}>Logout</button>
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