
import React from "react";
import { useState ,useEffect}  from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function AdminLogin(props) {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // const handleSubmit =async(e) => {
  //   e.preventDefault();
  //   const data = { email, password };
  //   const response = await axios.post('http://localhost:8000/AlumniLogin1', data);
  //   console.log(response.data);
  //   if (response.status === 200) {
  //       alert('!LOGGED');
  //       navigate('/AlumniHome');
  //       // console.log("Invalid username or password. Please try again.")
  //       // setErrorMessage('Invalid username or password. Please try again.');
  //     }
  //     if(response.body === "User not registered"){
  //       console.log("User not registered.")
  //       setErrorMessage('User not registered.');
  //     }
  //     else {
  //       console.log("Invalid username or password. Please try again.")
  //       setErrorMessage('Invalid username or password. Please try again.');
  //     }
  // };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/AdminLogin1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // If the response is successful, do something
        console.log('Login successful!');
        navigate('/AdminHome');
      } else {
        // If the response is not successful, parse the error message and display it to the user
        const data = await response.json();
        setErrorMessage(data.message);
        setShowError(true);
      }
    } catch (error) {
      // If there's a network error, display a generic error message
      setErrorMessage('An error occurred. Please try again later.');
      setShowError(true);
    }
  }

//   const [message, setMessage] = useState("");
//   useEffect(() => {
//     fetch("http://localhost:8000/rm")
//       .then((res) => res.json())
//       .then((data) => setMessage(data.message));
//   }, []);

// fetch('http://localhost:8000/rm')
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById('message').innerHTML = data;
//   });

function handleClose() {
  setShowError(false);
}

  

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <div>
      <div className="cen container-lg">
        <br/>
        <p className="h4 pb-3 text-center">Please login to your account as Admin</p>
        <div className="me">
          <div className="box container-lg">
            <form action="/AdminLogin1" method="post" onSubmit={handleSubmit}>
              <div className="lc">
                <div className="ms-0" style={{ textAlign: "left" }}>
                  <br />
                  <label className="form-label" htmlFor="email">
                    Username
                  </label>
                  <div className="input-group mb-4">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email address"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="" style={{ textAlign: "left" }}>
                  <label className="form-label" htmlFor="password">{props.label}
                    Password
                  </label>
                  <div className="input-group mb-4">
                    <span className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </span>
                    <input
                       type={isPasswordVisible ? "text" : "password"} 
                      id="password"
                      name="password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number and
                      one uppercase and lowercase letter, 
                      and 8 characters"
                      className="form-control"
                      value={props.value}
                      onChange={e => setPassword(e.target.value)}
                    />
                    <button 
                      className="password-toggle" 
                      type="button" 
                      onClick={togglePasswordVisibility}
                    >
                    {isPasswordVisible ? <i className="fa fa-eye-slash"></i> : <i className="fas fa-eye"></i>
                    }
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-center pt-1 mb-1 pb-1">
                
              <button type="submit" className="btn btn-primary" href="AdminLogin">
                Log In
                </button>
                <br />
                <Modal show={showError} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{errorMessage}</Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                      Close
                    </Button>
                </Modal.Footer>
                </Modal>
                <a className="text-muted" href="#!">
                  Forgot password?
                </a>
              </div>
              <br />
            </form>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center pb-4 pt-3">
          <p className="mb-0 me-2 ms-5">Don't have an account?</p>
          <a href="AdminRegister" className="btn">
            Register Now
          </a>
        </div>
      </div>
   </div>
  )}
  export default AdminLogin;

   
//import React from "react";
// import km from './pictures/kmit-bar.png';
// function AlumniLogin(){
//     return (
//     <div>
//         <div className="cen container-lg">
        
//         <p className="h4 pb-3 text-center">Please login to your account</p>
//         <div className="me">
//         <div className="box container-lg ">
//             <form action="/AlumniLogin" method="post">
//                 <div className="lc">
//                 <div className=" ms-0" style={{textAlign:"left"}}>
//                     <br/>
//                     <label className="form-label" for="form2Example11">Username</label>
//                     <div className="input-group mb-4">
//                         <span className="input-group-text"><i className="fa fa-user"></i>
//                         </span>
//                         <input type="email" id="form2Example11" name="email" className="form-control"
//                         placeholder="Email address" />
//                     </div>
//                 </div>
//                 <div className=""  style={{textAlign:"left"}}>
//                     <label className="form-label" for="form2Example22">Password</label>
//                     <div className="input-group mb-4">
//                         <span className="input-group-text"><i className="fa fa-lock"></i>
//                         </span>
//                         <input type="password" id="form2Example22" name="password" className="form-control" />
//                     </div>
//                 </div>
//                 </div>
//                 <div className="text-center pt-1 mb-1 pb-1">
                    
//                     <a className="btn btn-secondary btn-block mb-3" type="submit" href="AlumniHome">Log in</a>
//                     {/* <button type="submit" value="AlumniHome" className="btn btn-secondary btn-block mb-3" >LogIn</button> */}
//                     <br/>
//                     <a className="text-muted" href="#!">Forgot password?</a>
//                 </div>
        
//                 <br/>
                


//             </form>
//         </div>
//         </div>
//         <div className="d-flex align-items-center justify-content-center pb-4 pt-3">
//             <p className="mb-0 me-2 ms-5">Don't have an account?</p>
//             <a href="AlumniRegister" className="btn">Register Now</a>
//         </div>
//         </div>
//         </div>
//       );
// }
// export default AlumniLogin;






// import React from "react";
// import km from './pictures/kmit-bar.png';
// function AdminLogin(){
//     return (
//     <div>
//         <div className="cen container-lg">
        
//         <p className="h4 pb-3 text-center">Please login to your account</p>
//         <div className="me">
//         <div className="box container-lg ">
//             <form action="/contact" method="post">
//                 <div className="lc">
//                 <div className=" ms-0" style={{textAlign:"left"}}>
//                     <br/>
//                     <label className="form-label" for="form2Example11">Username</label>
//                     <div className="input-group mb-4">
//                         <span className="input-group-text"><i className="fa fa-user"></i>
//                         </span>
//                         <input type="email" id="form2Example11" name="email" className="form-control"
//                         placeholder="Email address"/>
//                     </div>
//                 </div>
//                 <div className=""  style={{textAlign:"left"}}>
//                     <label className="form-label" for="form2Example22">Password</label>
//                     <div className="input-group mb-4">
//                         <span className="input-group-text"><i className="fa fa-lock"></i>
//                         </span>
//                         <input type="password" id="form2Example22" name="password" className="form-control" />
//                     </div>
//                 </div>
//                 </div>
//                 <div className="text-center pt-1 mb-1 pb-1">
                    
//                     <a className="btn btn-secondary btn-block mb-3" type="submit" href="AdminHome">Log in</a>
//                     {/* <button type="submit" value="AlumniHome" className="btn btn-secondary btn-block mb-3" >LogIn</button> */}
//                     <br/>
//                     <a className="text-muted" href="#!">Forgot password?</a>
//                 </div>
        
//                 <br/>
                


//             </form>
//         </div>
//         </div>
//         <div className="d-flex align-items-center justify-content-center pb-4 pt-3">
//             <p className="mb-0 me-2 ms-5">Don't have an account?</p>
//             <a href="AlumniRegister" className="btn">Register Now</a>
//         </div>
//         </div>
//         </div>
//       );
// }
// export default AdminLogin;
