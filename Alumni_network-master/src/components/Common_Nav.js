import React from "react";
import km from './pictures/kmit-bar.png';
function Common_Nav(){
    return (
    <div class="my1 container-fluid">
        <nav class="navbar navbar-expand-lg position:fixed sticky-sm-top justify-content-end" >
        {/* <a class="navbar-brand" href="#">
            <img src={km} width="90" height="50" alt=""/>
            {/* KMIT
        </a> */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="mynav">
                <ul class="navbar-nav ms-auto"> 
                    <li class="nav-item">
                    <a class="nav-link" href="home">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="about">About</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="events">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-5" href="#Contact">Contact</a>
                    </li>
                    <div class="nav-item">
                        <a href="types" class="btn btn-secondary" style={{backgroundColor:"lightGrey",color:"black",borderRadius:"10px"}}>LogIn/Register</a>
                    </div>
                    <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                    aria-label="Search"/>
                </form>
                </ul>
            </div>
        </nav>
    </div>

    );
}
export default Common_Nav;