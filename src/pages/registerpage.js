import React from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
// import {Link, useNavigate } from 'react-router-dom'
// // import {BrowserRouter as Router,Routes,Route  } from "react-dom";
// import {BrowserRouter as Router,Routes,Route  } from "react-dom";

function Registerpage() {
    return (

        <div class="container">
            <div class="forms">
               

                {/* <!-- Registration Form --> */}
                <div class="form signup">
                    <span class="title">Registration</span>

                    <form action="#">
                        <div class="input-field">
                            <input type="text" placeholder="Enter your name" required />
                            <i class="uil uil-user"></i>
                        </div>
                        <div class="input-field">
                            <input type="text" placeholder="Enter your email" required />
                            <i class="uil uil-envelope icon"></i>
                        </div>
                        <div class="input-field">
                            <input type="password" class="password" placeholder="Create a password" required />
                            <i class="uil uil-lock icon"></i>
                        </div>
                        <div class="input-field">
                            <input type="password" class="password" placeholder="Confirm a password" required />
                            <i class="uil uil-lock icon"></i>
                            <i class="uil uil-eye-slash showHidePw"></i>
                        </div>

                        <div class="checkbox-text">
                            <div class="checkbox-content">
                                <input type="checkbox" id="termCon" />
                                <label for="termCon" class="text">I accepted all terms and conditions</label>
                            </div>
                        </div>

                        <div class="input-field button">
                            <input type="button" value="Signup" />
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
