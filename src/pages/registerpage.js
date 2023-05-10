import React,{useState} from 'react'
import { Link } from 'react-router-dom'
 import axios from 'axios'
import { useNavigate } from 'react-router-dom'


// import {BrowserRouter as Router,Routes,Route  } from "react-router-dom";
// import {BrowserRouter as Router,Routes,Route  } from "react-dom";

function Registerpage() {

    let navigate = useNavigate()

    const [errors, setErrors] = useState({})

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
        alert("Registration Successful")
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/login")
    }

    //VALIDATIONS//////////////////////////////////////////
    // const handleChange = (e) => {
    //
    //     const { name, value } = e.target;
    //     this.setState({ [name]: value });
    // }

    const validateForm = () => {
        let errors = {};
        let formIsValid = true;

        if (!name) {
            formIsValid = false;
            errors["name"] = "Please enter your name";
        }

        if (!email) {
            formIsValid = false;
            errors["email"] = "Please enter your email";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formIsValid = false;
            errors["email"] = "Please enter a valid email address";
        }

        if (!mobile) {
            formIsValid = false;
            errors["mobile"] = "Please enter your contact number";
        } else if (!/^[0-9]{10}$/.test(mobile)) {
            formIsValid = false;
            errors["mobile"] = "Please enter a valid contact number";
        }

        // if (!password) {
        //     formIsValid = false;
        //     errors["password"] = "Please enter your Password";
        // } else if (!/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(password)) {
        //     formIsValid = false;
        //     errors["password"] = "Please enter a valid password";
        // }


        // this.setState({ errors: errors });
        setErrors(errors);
        return formIsValid;
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            onSubmit(e);
            console.log('Form submitted successfully!');
            // You can submit the form here or call a function to submit the form.
        } else {
            console.log('Form validation failed!');
            // Display validation errors here.
        }
    }



    return (

         <div className="container">
           <div className="forms">
               
                <div className="form signup">
                    <span className="title"><br/>Registration</span>


                    <form onSubmit={(e)=>{
                        // onSubmit(e);
                        handleSubmit(e);
                    }}>
                       
                        <div className="input-field">
                            <input type="text" placeholder="Enter your name" required name='name' 
                            value={name}
                            onChange={(e)=>onInputChange(e)}/>
                            {errors["name"] && <span>{errors["name"]}</span>}
                            {/* <i class="uil uil-user"></i> */}
                        </div>
                        <div className="input-field">
                            <input type="text" placeholder="Enter your email" required name='email' 
                            value={email}


                            onChange={(e)=>onInputChange(e)} />
                            {errors["email"] && <span>{errors["email"]}</span>}
                            {/* <i class="uil uil-envelope icon"></i> */}

                        </div>
                        <div className="input-field">
                            <input type="text" placeholder="Enter your address" required name='address' 
                            value={address}
                            onChange={(e)=>onInputChange(e)}/>
                            {/* <i class="uil uil-location-point icon"></i> */}
                        </div>
                        <div className="input-field">
                            <input type="text" placeholder="Enter your mobile" required name='mobile' 
                            value={mobile}
                            onChange={(e)=>onInputChange(e)}/>
                            {/* <i class="uil uil-phone icon"></i> */}
                        </div>
                        <div className="input-field">
                            <input type="password" className="password" placeholder="Create a password" required  name='password'
                            value={password}
                            onChange={(e)=>onInputChange(e)}/>
                            {/* <i class="uil uil-lock icon"></i> */}
                        </div>
                        

                        <div className="checkbox-text">
                            <div className="checkbox-content">
                                <input type="checkbox" id="termCon" required/>
                                <label for="termCon" className="text">I accepted all terms and conditions</label>
                            </div>
                        </div>

                        <div className="input-field button">
                            {/* <input type="button" value="Signup" /> */}
                            <button type="submit">SignUp</button>
                        </div>

                        
                    </form>

                    <div className="login-signup">
                        <span className="text">Already a member?
                        <Link id="button-1" className="btn btn-dark btn-outline-primary" to="/"><br/>Sign in</Link>
                        </span>
                    </div>
                    
                </div>
            </div>
       </div>




    )
}

export default Registerpage
