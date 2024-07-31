import React from "react";
function Alumni_Nav(){
    return (
        <div className="container-fluid">
        <nav className="navbar navbar-expand-lg position:fixed sticky-sm-top  justify-content-end" >
        <a class="navbar-brand" href="#">KMIT Alumni</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="mynav">
                <ul className="navbar-nav ms-auto"> 
                    <li className="nav-item">
                    <a className="nav-link" href="AlumniHome">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="AlumniAbout">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="AlumniEvents">Events</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="AlumniProfile">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="AlumniUpdate">Update</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-5" href="#Contact">Contact</a>
                    </li>
                    <a href="Home" className="btn" id="logout">LogOut</a>
                </ul>
            </div>
        </nav>
    </div>
 
      );
}
export default Alumni_Nav;