import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthProvider';

const Login = () => {

    const { setAuth } = useAuth();
    const navigate = useNavigate();

const clickHandler = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.get(
        "http://localhost:5000/",
        {
        //   email: email.email,
        //   password: password.password
        email:"email",
        password:"pass"
        },
        {
            credentials: "include",
          mode:"cors"
        }
      );
  
      if (res.status === 200) {
        alert('!LOGGED');
        setAuth(true);
        navigate('/');
      }
    } catch(error) {
      //setHandleErrors(JSON.parse(error.request.response));
      console.log(" error" +error);
    } finally {
    //   setIsSubmitted(true);
    console.log("in finally");
    }
  }

    return (
        <div>
            <h1> Login here </h1>
            <div className="mb-3 row">
            <label htmlFor="exampleFormControlInput1" className="col-sm-2 col-form-label">email</label>
            <div className="col-sm-8">
    <input type="email" value="a@a.com" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
</div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-8">
      <input type="password" value="aaa" className="form-control" id="inputPassword"/>
    </div>
  </div>

  <div className="mb-3 row"> <div className="col-sm-8">
  <button  onClick={clickHandler}className="btn bg-warning" type="button" id="button-addon1">Login</button>
 </div>
 </div>
        </div>
    );
};

export default Login;