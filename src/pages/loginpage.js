import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Loginpage() {


    let navigate = useNavigate()

   
    const onSubmit=async (e)=>{
        e.preventDefault();
        // await axios.post("http://localhost:8080/user",user)
        navigate("/testpg")
    }

    return (

        <div class="container">
            <div class="forms">

                <div class="form login">
                    <span class="title">Login</span>
                    <hr></hr>

                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div class="input-field">
                            <input type="text" placeholder="Enter your email" required />
                            {/* <i class="uil uil-envelope icon"></i> */}
                        </div>
                        <div class="input-field">
                            <input type="password" class="password" placeholder="Enter your password" required />
                            {/* <i class="uil uil-lock icon"></i> */}
                            {/* <i class="uil uil-eye-slash showHidePw"></i> */}
                        </div>

                        <div class="checkbox-text">
                            <div class="checkbox-content">
                                <input type="checkbox" id="logCheck" />
                                <label for="logCheck" class="text">Remember me</label>
                            </div>
                            
                            <div className='FP'>
                            <a href="#" class="text">Forgot password?</a>
                            </div>
                            {/* <a href="#" class="text">Forgot password?</a> */}
                        </div>

                        <div class="input-field button">
                            {/* <input type="button" value="Login" /> */}
                            <button type="Submit" to="/testpg">Login</button>

                        </div>
                    </form>

                    <div class="login-signup">
                        <span class="text">Not a member?
                            {/* <a href="" class="text signup-link">Signup Now</a> */}
                            <Link id="button-1" className="btn btn-dark btn-outline-primary" to="/register">Sign Up</Link>
                        </span>
                    </div>
                </div>

            </div>
        </div >




    )
}

export default Loginpage
