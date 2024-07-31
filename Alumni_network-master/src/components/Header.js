import React from "react";
import km from './pictures/kmit-bar.png';
function Header(){
    return (
        <div>
        <div class="my container-fluid d-flex">
        <img src={km} alt="" height="100px" width="120px"/>
        <a class="navbar-brand navbar-dark" style={{color:"rgb(0, 0, 0)"}} href="#">Alumni Network</a>
         </div>
    
        <marquee behavior="scroll" direction="right" scrollamount="5" style={{backgroundColor:"black",color:"lightGrey",fontWeight:"15px",fontSize:"15px",border:"2px solid lightGrey"}}>Keshav Memorial Institute Of Technology Alumni Network ** Keshav Memorial Institute Of Technology Alumni Network ** Keshav Memorial Institute Of Technology Alumni Network ** Keshav Memorial Institute Of Technology Alumni Network ** Keshav Memorial Institute Of Technology Alumni Network ** Keshav Memorial Institute Of Technology Alumni Network</marquee>
        </div>
      );
}
export default Header;
