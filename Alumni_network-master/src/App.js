// import logo from './logo.svg';
// import './App.css';
// import { Routes, Route} from 'react-router-dom'
// import Footer from './components/Footer';
// import AlumniLogin from './components/AlumniLogin';
// import Events from './components/Events';
// import Home from './components/Home';
// import AlumniRegister from './components/AlumniRegister';
// import Profile from './components/Profile';
// import Admin_Home from './components/Admin_Home';
// import Alumni_Nav from './components/Alumni_Nav';
// import Common_Nav from './components/Common_Nav';
// import Admin_Nav from './components/Admin_Nav';
// import Header from './components/Header';
// import Types from './components/Types';
// import AboutUs from './components/AboutUs';
// import AdminLogin from './components/AdminLogin';
// import AdminRegister from './components/AdminRegister';
// import Search from './components/Search';
// import Verify from './components/Verify';
// import Directory from './components/Directory';
// import TestLogin from './components/TestLogin';


// // 

// // 

// function App() {
//   return (
//     <div className="App">

//       {/* <Header/> */}
//       {/* <Alumni_Nav/> */}
//       {/* <Common_Nav/> */}
//       {/* <Admin_Nav/> */}
//       {/* <AboutUs/> */}
//       {/* <Login/> */}
//       {/* <Home/> */}
//       {/* <Admin_Home/> */}
//       {/* <Register/> */}
//       {/* <Profile/> */}
//       {/* <Events/> */}
//       {/* <Types/> */}
//       {/* <Footer/> */}
//       {/* <TestLogin/> */}
//       <Header/>
//       <Routes>
//           <Route path="/" element={<><Common_Nav/><br/><br/><Home/></>}/>
//           <Route path="about" element={<><Common_Nav/><br/><br/><AboutUs/></>}/>
//           <Route path="home" element={<><Common_Nav/><br/><br/><Home/></>}/>
//           <Route path="events" element={<><Common_Nav/><br/><br/><Events/></>}/>
//           <Route path="types" element={<Types/>}/>
//           <Route path="AlumniLogin" element={<><AlumniLogin/></>}/>
//           <Route path="AlumniRegister" element={<><AlumniRegister/></>}/>
//           <Route path="AlumniHome" element={<><Alumni_Nav/><br/><Home/></>}/>
//           <Route path="AlumniAbout" element={<><Alumni_Nav/><br/><AboutUs/></>}/>
//           <Route path="AlumniEvents" element={<><Alumni_Nav/><br/><Events/></>}/>
//           <Route path="AlumniProfile" element={<><Alumni_Nav/><br/><Profile/></>}/>
//           <Route path="AdminLogin" element={<><AdminLogin/></>}/>
//           <Route path="AdminRegister" element={<><AdminRegister/></>}/>
//           <Route path="AdminHome" element={<><Admin_Nav/><br/><Home/></>}/>
//           <Route path="AdminAbout" element={<><Admin_Nav/><br/><AboutUs/></>}/>
//           <Route path="AdminEvents" element={<><Admin_Nav/><br/><Events/></>}/>
//           <Route path="AdminSearch" element={<><Admin_Nav/><br/><Directory/></>}/>
//           <Route path="AdminVerify" element={<><Admin_Nav/><br/><Verify/></>}/>
//       </Routes>
//       <br/>
//       <br/>
//       <Footer/>


//     </div>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import AlumniLogin from './components/AlumniLogin';
import Events from './components/Events';
import Home from './components/Home';
import AlumniRegister from './components/AlumniRegister';
import Profile from './components/Profile';
import Admin_Home from './components/Admin_Home';
import Alumni_Nav from './components/Alumni_Nav';
import Common_Nav from './components/Common_Nav';
import Admin_Nav from './components/Admin_Nav';
import Header from './components/Header';
import Types from './components/Types';
import AboutUs from './components/AboutUs';
import AdminLogin from './components/AdminLogin';
import AdminRegister from './components/AdminRegister';
import Search from './components/Search';
import Directory from './components/Directory';
import Verify from './components/Verify';
import TestLogin from './components/TestLogin';
import React, { useState, useEffect } from "react";
// import "./App.css";

function App() {  
  return (
    <div className="App">

      {/* <Header/> */}
      {/* <Alumni_Nav/> */}
      {/* <Common_Nav/> */}
      {/* <Admin_Nav/> */}
      {/* <AboutUs/> */}
      {/* <Login/> */}
      {/* <Home/> */}
      {/* <Admin_Home/> */}
      {/* <Register/> */}
      {/* <Profile/> */}
      {/* <Events/> */}
      {/* <Types/> */}
      {/* <Footer/> */}
      {/* <TestLogin/> */}
      <Header/>
      <Routes>
          <Route path="/" element={<><Common_Nav/><br/><br/><Home/></>}/>
          <Route path="about" element={<><Common_Nav/><br/><br/><AboutUs/></>}/>
          <Route path="home" element={<><Common_Nav/><br/><br/><Home/></>}/>
          <Route path="events" element={<><Common_Nav/><br/><br/><Events/></>}/>
          <Route path="types" element={<Types/>}/>
          <Route path="AlumniLogin" element={<><AlumniLogin/></>}/>
          <Route path="AlumniRegister" element={<><AlumniRegister/></>}/>
          <Route path="AlumniHome" element={<><Alumni_Nav/><br/><Home/></>}/>
          <Route path="AlumniAbout" element={<><Alumni_Nav/><br/><AboutUs/></>}/>
          <Route path="AlumniEvents" element={<><Alumni_Nav/><br/><Events/></>}/>
          <Route path="AlumniProfile" element={<><Alumni_Nav/><br/><Profile/></>}/>
          <Route path="AdminLogin" element={<><AdminLogin/></>}/>
          <Route path="AdminRegister" element={<><AdminRegister/></>}/>
          <Route path="AdminHome" element={<><Admin_Nav/><br/><Home/></>}/>
          <Route path="AdminAbout" element={<><Admin_Nav/><br/><AboutUs/></>}/>
          <Route path="AdminEvents" element={<><Admin_Nav/><br/><Events/></>}/>
          <Route path="AdminSearch" element={<><Admin_Nav/><br/><Directory/></>}/>
          <Route path="AdminVerify" element={<><Admin_Nav/><br/><Verify/></>}/>
      </Routes>
      <br/>
      <br/>
      <Footer/>


    </div>
  );
}


export default App;
