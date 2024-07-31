import React from "react";
function Profile(){
    return (
    <div className="profile container">
        <div className="text-center">
            <h2 className="display-2">CREATE PROFILE</h2>
        </div>
        <div className="card mx-auto" style={{width:" 65% "}}>
            <div className="card-body">
                <form action="/action_page.php" method="get">
                    <p>Full Name :</p>
                    <div className="d-flex">
                    <div className="mb-4 me-5">
                        <label for="firstname">First Name</label>
                        <input type="text" id="firstname" placeholder=""  required/>
                    </div>
                    <div className="mb-4">
                        <label for="last">Last Name</label>
                        <input type="text" id="last"  placeholder="" required/>
                    </div>
                </div>
                    <div className="mb-4">
                        <label for="roll">Roll No.</label>
                        <input type="text" id="roll"  placeholder="" required/>
                    </div>
                
                    <div className="mb-4">
                        <label className="form-label" for="contact">Contact Details</label>
                        <div className="input-group mb-4">
                            <span className="input-group-text" style={{border:" 1px rgb(111, 109, 109) solid"}}><i className="fa fa-phone"></i>
                            </span>
                            <input type="number" id="contact" className="form-control" style={{border:" 2px solid rgb(0, 0, 0)",margin:"2px 0",padding:"5px",
                            borderRadius: "2px"}}
                            placeholder="" required/>
                        </div>
                    </div>

                    <div className="mb-4 ms-0">
                        <label className="form-label" for="form2Example11">E-mail</label>
                        <div className="input-group mb-4">
                            <span className="input-group-text" style={{border:" 1px rgb(111, 109, 109) solid"}}><i className="fa fa-user"></i>
                            </span>
                            <input type="email" id="form2Example11" className="form-control" style={{border: "2px solid rgb(0, 0, 0)",margin:"2px 0",padding:"5px",
                            borderRadius: "2px"}}
                            placeholder="abc@gmail.com" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label for="user">Address</label>
                        <input type="text" id="user"  placeholder="" required/>
                    </div>
                    <div className="d-flex">
                        <div className="mb-4 me-5">
                            <label for="user">Branch</label>
                            <select id="user" name="Branch" style={{border:"2px solid black",padding:"5px"}}>
                                <option value=""></option>
                                <option value="CSE">CSE</option>
                                <option value="AIML">AIML</option>
                                <option value="IT">IT</option>
                                <option value="CSD">CSD</option>
                              </select>
                        </div>

                        <div className="mb-4 ms-2">
                            <label for="user">Course  </label>
                            <select id="user" name="Course" style={{border:"2px solid black",padding:"5px"}}>
                                <option value=""></option>
                                <option value="BTech">BTech</option>
                                <option value="Data Analyst">Data Analyst</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Animation">Animation</option>
                              </select>
                        </div>
                    </div>
                        <div className="mb-4">
                            <label for="yog">Year of Graduation</label>
                            <input type="number" min="1900" max="2099" step="1" value="2016" />
                        </div>

                        <div className="mb-4">
                            <label for="user">Qualifications</label>
                            <input type="text" id="user"  placeholder="" required/>
                        </div>
                        <div className="mb-4">
                            <label for="user">Trade</label>
                            <input type="text" id="user"  placeholder="" required/>
                        </div>
                    
                    <div className="mb-4">
                        <label for="user">Languages</label>
                        <input type="text" id="user"  placeholder="" required/>
                    </div>
                    <div className="mb-4">
                        <label for="exp">Experience</label>
                        <input type="number" id="exp" min="0" max="15" step="1" value="0" />
                    </div>
                    <div className="mb-4">
                        <label for="com">Company</label>
                        <input type="text" id="com" placeholder="" required/>
                    </div>
                    <div className="mb-4">
                        <label for="stat">Present Status</label>
                        <input type="text" id="stat" placeholder="" required/>
                    </div>
                    <div className="">
                        <label for="bio">About Yourself</label>
                        <br/>
                        <textarea id="bio" name="bio" rows="4" cols="50" placeholder="Write about yourself"></textarea>
                        <br/>
                    </div>
                    <br/>
                    <div className="">
                        <label for="myimg">Upload your profile:</label>
                    <input type="file" id="myimg" name="myimg"/>
                    </div>
                    <br/>
                    <div className="">
                        <label for="myfile">Upload your resume:</label>
                    <input type="file" id="myfile" name="myfile"/>
                    </div>
                    <br/>
                    


                    <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="click mb-0 me-2">Click here to create profile...</p>
                        <a href="home.html" className="btn">
                            Create
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    );
}
export default Profile;
