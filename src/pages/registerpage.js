import React,{useState} from 'react'
import { Link } from 'react-router-dom'
 import axios from 'axios'
import { useNavigate } from 'react-router-dom'


// import {BrowserRouter as Router,Routes,Route  } from "react-router-dom";
// import {BrowserRouter as Router,Routes,Route  } from "react-dom";

function Registerpage() {

    let navigate = useNavigate()

    const [user,setUser]=useState ({
        name:"",
        email:"",
        password:"",
        address:"",
        mobile:""
    })

    const{name,email,password,address,mobile}=user

    const onInputChange=(e)=>{

        setUser({...user ,[e.target.name]:e.target.value});

    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/")
    }


    return (

         <div class="container">
           <div class="forms">
               
                <div class="form signup">
                    <span class="title">Registration</span>
                    <hr></hr>

                    <form onSubmit={(e)=>onSubmit(e)}>
                       
                        <div class="input-field">
                            <input type="text" placeholder="Enter your name" required name='name' 
                            value={name}
                            onChange={(e)=>onInputChange(e)}/>
                            {/* <i class="uil uil-user"></i> */}
                        </div>
                        <div class="input-field">
                            <input type="text" placeholder="Enter your email" required name='email' 
                            value={email}
                            
                            onChange={(e)=>onInputChange(e)} />
                            {/* <i class="uil uil-envelope icon"></i> */}
                        </div>
                        <div class="input-field">
                            <input type="text" placeholder="Enter your address" required name='address' 
                            value={address}
                            onChange={(e)=>onInputChange(e)}/>
                            {/* <i class="uil uil-location-point icon"></i> */}
                        </div>
                        <div class="input-field">
                            <input type="text" placeholder="Enter your mobile" required name='mobile' 
                            value={mobile}
                            onChange={(e)=>onInputChange(e)}/>
                            {/* <i class="uil uil-phone icon"></i> */}
                        </div>
                        <div class="input-field">
                            <input type="password" class="password" placeholder="Create a password" required  name='password' 
                            value={password}
                            onChange={(e)=>onInputChange(e)}/>
                            {/* <i class="uil uil-lock icon"></i> */}
                        </div>
                        

                        <div class="checkbox-text">
                            <div class="checkbox-content">
                                <input type="checkbox" id="termCon" />
                                <label for="termCon" class="text">I accepted all terms and conditions</label>
                            </div>
                        </div>

                        <div class="input-field button">
                            {/* <input type="button" value="Signup" /> */}
                            <button type="submit">SignUp</button>
                        </div>

                        
                    </form>

                    <div class="login-signup">
                        <span class="text">Already a member?
                        <Link id="button-1" className="btn btn-dark btn-outline-primary" to="/">Sign in</Link>
                        </span>
                    </div>
                    
                </div>
            </div>
       </div>




    )
}

export default Registerpage
