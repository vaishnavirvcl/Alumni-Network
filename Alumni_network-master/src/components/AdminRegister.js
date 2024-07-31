import React from "react";
import { useState ,useEffect}  from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function AdminRegister(props) {

  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showStatus, setRegisterStatus] = useState(false);
  const [RegisterMessage, setRegisterMessage] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRePasswordVisible, setIsRePasswordVisible] = useState(false);
  
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const data = { firstName, lastName, email, loginId, password };
  //   const response = await axios.post('http://localhost:8000/AdminRegister1', data);
  //   console.log(response.data);
  // };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/AdminRegister1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({firstName, lastName, email, loginId, password ,repassword})
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Registered successful!');
        setRegisterStatus(true);
        setRegisterMessage(data.message)
      } 
      else {
        // If the response is not successful, parse the error message and display it to the user
        setErrorMessage(data.message);
        setShowError(true);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
      setShowError(true);
    }
  }

  function handleClose() {
    setShowError(false);
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const toggleRePasswordVisibility = () => {
    setIsRePasswordVisible(!isRePasswordVisible);
  }

  function login() {
   navigate('/AdminLogin')
  }

  return (
    <div>
      <div class="register container"  style={{backgroundColor:"white"}}>
         <div class="text-center">
             <h2 class="display-2">ADMIN REGISTER</h2>
         </div>
         <div class="card mx-auto" style={{width:"65%"}}>
          <div class="card-body">
            <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
              <div className="form-group d-flex mb-3 " style={{textAlign:"left"}}>
                
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{width:"120%"}}
                />
              </div>
              <label htmlFor="lastName">Last Name</label>
              <div className="form-group d-flex mb-3 " style={{textAlign:"left"}}>
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={{width:"120%"}}
                />
              </div>
              <label htmlFor="email">Email</label>
              <div className="form-group d-flex mb-3" style={{textAlign:"left"}}>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{width:"120%"}}
                />
              </div>
              <label htmlFor="loginId">Login ID</label>
              <div className="form-group d-flex" style={{textAlign:"left"}}>
                <input
                  type="text"
                  id="loginId"
                  className="form-control"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                  style={{width:"120%"}}
                />
              </div>
              <label htmlFor="password">Password</label>
              <div className="form-group d-flex mb-3" style={{textAlign:"left"}}>
                
                <input
                  type={isPasswordVisible ? "text" : "password"} 
                  id="password"
                  className="form-control"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and
                  one uppercase and lowercase letter, 
                  and 8 characters"
                  value={props.value}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{width:"100%"}}
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
              <label htmlFor="repassword">Confirm Password</label>
              <div className="form-group d-flex mb-3" style={{textAlign:"left"}}>
                <input
                  type={isRePasswordVisible ? "text" : "password"} 
                  id="repassword"
                  className="form-control"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and
                  one uppercase and lowercase letter, 
                  and 8 characters"
                  value={props.value}
                  onChange={(e) => setRePassword(e.target.value)}
                  style={{width:"100%"}}
                />
                <button 
                  className="password-toggle" 
                  type="button" 
                  onClick={toggleRePasswordVisibility}
                >
                {
                isRePasswordVisible ? <i className="fa fa-eye-slash"></i> : <i className="fas fa-eye"></i>
                }
                </button>
              </div>
              <h4 style={{textAlign:"center"}}>Click here to register</h4>
              <div className="d-flex">
              <button type="submit" className="btn me-auto ms-auto" href="AdminLogin" id="registerbtn">
                Register
              </button>
              </div>
              
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

              <Modal show={showStatus} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{firstName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{RegisterMessage}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={login}>
                    Log In
                  </Button>
                </Modal.Footer>
              </Modal>
            </form>
            </div>
            </div>
         </div>
     </div>
  );
};

export default AdminRegister;




// import React from "react";
// function AdminRegister(){
//     return (
// <div class="register container"  style={{backgroundColor:"white"}}>
//         <div class="text-center">
//             <h2 class="display-2">REGISTER</h2>
//         </div>
//         <div class="card mx-auto" style={{width:"65%"}}>
//             <div class="card-body">
//                 <form action="http://localhost:8000/AdminRegister1" method="post">
//                     <div className="d-flex">
//                     <div class="mb-3" style={{textAlign:"left"}}>
//                         <label for="firstName">First Name</label>
//                         <input type="text" id="firstName" placeholder=""  required/>
//                     </div>
//                     <div class="mb-3"  style={{textAlign:"left"}}>
//                         <label for="lastName">Last Name</label>
//                         <input type="text" id="lastName"  placeholder="" required/>
//                     </div>
//                     </div>
//                     <div className="d-flex">
//                     <div class="mb-3 me-4"  style={{textAlign:"left"}}>
//                         <label for="email">Email</label>
//                         <input type="text" id="email"  placeholder=""/>
//                     </div>
//                     <div class="mb-3 ms-2"  style={{textAlign:"left"}}>
//                         <label for="loginId">Login Id</label>
//                         <input type="text" id="loginId"  placeholder="" required/>
//                     </div>
//                     </div>
//                     <div className="d-flex">
//                     <div class="mb-3 me-3"  style={{textAlign:"left"}}>
//                         <label for="password">Password</label>
//                         <input type="password" id="password" maxlength="8" placeholder="" required/>
//                     </div>
//                     {/* <div class="mb-3 ms-3" style={{textAlign:"left"}}>
//                         <label for="repassword">Confirm password</label>
//                         <input type="password" id="repassword" maxlength="8" placeholder="" required/>
//                     </div> */}
//                     </div>
//                     <div class="d-flex align-items-center justify-content-center pb-4">
//                         <p class="click mb-0 me-2">Click here to register...</p>
//                         {/* <a href="AdminLogin" type="submit" class="btn">
//                             Submit
//                         </a> */}
//                         <button type="submit">Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
//     );
// }
// export default AdminRegister;










// import React from "react";
// function AdminRegister(){
//     return (

// <div class="register container"  style={{backgroundColor:"white"}}>
//         <div class="text-center">
//             <h2 class="display-2">REGISTER</h2>
//         </div>
//         <div class="card mx-auto" style={{width:"65%"}}>
//             <div class="card-body">
//                 <form action="/action_page" method="post">
//                     <div className="d-flex">
//                     <div class="mb-3" style={{textAlign:"left"}}>
//                         <label for="firstname">First Name</label>
//                         <input type="text" id="firstname" placeholder=""  required/>
//                     </div>
//                     <div class="mb-3"  style={{textAlign:"left"}}>
//                         <label for="last">Last Name</label>
//                         <input type="text" id="last"  placeholder="" required/>
//                     </div>
//                     </div>
//                     <div className="d-flex">
//                     <div class="mb-3 me-4"  style={{textAlign:"left"}}>
//                         <label for="dob">Date of Birth</label>
//                         <input type="date" id="dob"  placeholder=""/>
//                     </div>
//                     <div class="mb-3 ms-2"  style={{textAlign:"left"}}>
//                         <label for="user">Login Id</label>
//                         <input type="text" id="user"  placeholder="" required/>
//                     </div>
//                     </div>
//                     <div className="d-flex">
//                     <div class="mb-3 me-3"  style={{textAlign:"left"}}>
//                         <label for="password">Password</label>
//                         <input type="password" id="password" maxlength="8" placeholder="" required/>
//                     </div>
//                     <div class="mb-3 ms-3" style={{textAlign:"left"}}>
//                         <label for="repassword">Confirm password</label>
//                         <input type="password" id="repassword" maxlength="8" placeholder="" required/>
//                     </div>
//                     </div>
//                     <div class="d-flex align-items-center justify-content-center pb-4">
//                         <p class="click mb-0 me-2">Click here to register...</p>
//                         <a href="AdminLogin" type="submit" class="btn">
//                             Submit
//                         </a>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
//     );
// }
// export default AdminRegister;


