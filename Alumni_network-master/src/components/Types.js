import React from "react";
import km from './pictures/kmit-bar.png';
import admin1 from './pictures/admin1.png';
import a111 from './pictures/111.png';
import industry_logo from './pictures/industry_logo.jpg';

function Types(){
    return (
        
<div className="container" style={{backgroundColor:"white"}}>
        
        <br/><br/>
        <div style={{backgroundColor:"white"}}>
            <div className="row">
                <div className="col pb-5 ms-5 ">
                    <div className="card" style={{border:"3px solid gray" , width:" 18rem",height:"30rem"}}>
                        
                        <div className="card-body">
                        <img src={admin1} className="card-img-top" alt="..." />
                          <h5 className="card-title">Admin Login</h5>
                          <br/>
                          <div className="text-center">
                          <a href="AdminLogin" className="btn btn-secondary btn-lg my-2" >LOGIN</a>
                        </div>
                    </div>
                </div>
            </div>
                <div className="col pb-5 ms-5">
                    <div className="card" style={{border:"3px solid gray" , width:" 18rem",height:"30rem"}}>
                        
                        <div className="card-body">
                        <img src={a111} className="card-img-top" alt="..." />
                            <h5 className="card-title">Alumni Login</h5>
                            <br/>
                            <div className="text-center">
                            <a href="AlumniLogin" className="btn btn-secondary btn-lg my-2" >LOGIN</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col pb-5 ms-5">
                    <div className="card" style={{border:"3px solid gray" , width:" 18rem",height:"30rem"}}>
                        
                        <div className="card-body">
                        <img src={industry_logo} className="card-img-top" alt="..." height="290px" />
                            <h5 className="card-title">Company Login</h5>
                            <br/>
                            <div className="text-center">
                            <a href="CompanyLogin" className="btn btn-secondary btn-lg  my-2" >LOGIN</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    </div>
      );
}
export default Types;


