<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=01">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="profile_index.css">
    <script src="Donor.js"></script>
    <title>Register</title>
  </head>
  <body>
    <div class="container">
        <div class="text-center">
            <!-- <img src="logo.png" alt="" ALIGN="left" height="100px" width="120px"> -->
            <h2 class="display-3">Enter Donor Details</h2>
        </div>
        <div class="card mx-auto" style="width: 65% ;">
            <div class="card-body">
                <form onsubmit="donor">
                    <p>Full Name :</p>
                    <div class="d-flex">
                    <div class="mb-4 me-5">
                        <label for="firstname">First Name</label>
                        <input type="text" id="firstname" placeholder=""  required/>
                    </div>
                    <div class="mb-4">
                        <label for="lastname">Last Name</label>
                        <input type="text" id="lastname"  placeholder="" required/>
                    </div>
                </div>
                    <div class="mb-4">
                        <label for="age">Age</label>
                        <input type="number" id="age"  placeholder="" required/>
                    </div>
                
                    <div class="mb-4">
                        <label class="form-label" for="contact">Contact Details</label>
                        <div class="input-group mb-4">
                            <span class="input-group-text" style="border: 1px rgb(111, 109, 109) solid;"><i class="fa fa-phone"></i>
                            </span>
                            <input type="text" id="contact" class="form-control" style="border: 2px solid rgb(0, 0, 0);margin:2px 0;padding:5px;
                            border-radius: 2px;"
                            placeholder="" required/>
                        </div>
                    </div>

                    <div class="mb-4 ms-0">
                        <label class="form-label" for="email">E-mail</label>
                        <div class="input-group mb-4">
                            <span class="input-group-text" style="border: 1px rgb(111, 109, 109) solid;"><i class="fa fa-user"></i>
                            </span>
                            <input type="email" id="email" class="form-control" style="border: 2px solid rgb(0, 0, 0);margin:2px 0;padding:5px;
                            border-radius: 2px;"
                            placeholder="abc@gmail.com" />
                        </div>
                    </div>

                    <div class="mb-4">
                        <label for="location">Location</label>
                        <input type="text" id="location"  placeholder="" required/>
                    </div>
                    <div class="d-flex">
                        <div class="mb-4 me-5">
                            <label for="gender">Gender</label>
                            <select id="gender" name="Gender" style="border:2px solid black;padding:5px;">
                                <option value=""></option>
                                <option value="F">F</option>
                                <option value="M">M</option>
                              </select>
                        </div>

                        <div class="mb-4 ms-2">
                            <label for="bt">BloodType</label>
                            <select id="bt" name="BloodType" style="border:2px solid black;padding:5px;">
                                <option default value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                              </select>
                        </div>
                    </div>
                        
                    <div class="d-flex align-items-center justify-content-center pb-4">
                        <p class="click mb-0 me-2">Click here to donate...</p>
                        <input type="submit" value="Submit">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script>

        function donor(){
            const mongoose = require("mongoose")
  
// Database Address
const url = "mongodb+srv://user1:kmit1@cluster0.l7gcslq.mongodb.net/AlumniNetwork?retryWrites=true&w=majority"
  
// Connecting to database
mongoose.connect(url).then((ans) => {
  console.log("ConnectedSuccessful")
}).catch((err) => {
  console.log("Error in the Connection")
})
  
// Calling Schema class
const Schema = mongoose.Schema;
  
// Creating Structure of the collection
const cs = new Schema({
  firstname: {
    type: String,
  }
  ,
  lastname: {
    type: String,
  }
  ,
  location: {
    type: String,
  }
  ,
  bt: {
    type: String,
  }
},{collection:"blood"})
  
// Creating collection
const collections = mongoose.model("blood", cs)
  
// Inserting one document
collections.create(
    {firstname:"abc",lastname:"abc",location:"maggi@gmail.com",bt:"maggi123"}
  )
  .then((ans) => {
  console.log("Document inserted")
  
}).catch((err) => {
  console.log(err.Message);
})

        }

    </script>
    <style>
        .card-body{
            background-color: rgb(239, 188, 188);
        }
        #a{
            outline:2px solid;
        }
        #b{
            outline:2px solid;
        }
        #c{
            outline:2px solid;
        }
        input {
            border: 2px solid rgb(0, 0, 0);
            width: 100%;
            padding: 5px;
            margin: 2px 0;
            /* box-sizing: border-box; */
            border-radius: 2px;
          }
          input:hover{
            color:gray;
          }
        .s{
            width: 100px;
            background-color:rgb(239, 188, 188);
            text-align: center;
            /* padding: 5px; */
            margin-left: 48%;
            margin-right: 50%;
            margin-top: 20px;
            
        }
        .btn{
            border: none;
        outline: none;
        height: 40px;
        background-color: black;
        color: white; border-radius: 4px;
        font-weight: bold;
        
          }
          .btn:hover{
            background-color: rgb(210, 213, 215);
            border: 1px solid;
            color: black;
          }
        .container{
            background-color: rgb(255, 255, 255);
        }
        .click{
            margin-bottom: 10px;
            text-shadow: 2px;
            font-size: large;
            font-weight: 500;
            text-align: center;
        }
        
    </style>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
  </body>
</html>
